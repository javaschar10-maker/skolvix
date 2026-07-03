import os
import json
import time
from pathlib import Path
import requests
from supabase import create_client, Client

# ============================================================
# 🔐 KREDENSIAL — GANTI DENGAN MILIKMU
# ============================================================
SUPABASE_URL = "https://yqbkkxibgsfaueaaezey.supabase.co"
SUPABASE_KEY = "sb_publishable_gjIUFgFeK8V5LanmGCwb4A_fNxIilfN"
NVIDIA_API_KEY = "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"

# ============================================================
# 📂 KONFIGURASI
# ============================================================
BASE = Path(__file__).parent
METADATA_FILE = BASE / "rag-data" / "metadata.json"
PROGRESS_FILE = BASE / "rag-data" / "upload_progress.txt"

# Inisialisasi Supabase
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# ============================================================
# 🧠 FUNGSI: Generate Embedding (NVIDIA NIM)
# ============================================================


def generate_embedding(text):
    url = "https://integrate.api.nvidia.com/v1/embeddings"
    headers = {
        "Authorization": f"Bearer {NVIDIA_API_KEY}",
        "Content-Type": "application/json"
    }

    # Potong teks maksimal 400 karakter (≈512 token, aman untuk model)
    max_chars = 400
    if len(text) > max_chars:
        text = text[:max_chars]
        print(f"   ✂️ Teks dipotong menjadi {max_chars} karakter")

    payload = {
        "model": "nvidia/nv-embedqa-e5-v5",
        "input": text,
        "input_type": "passage"   # WAJIB untuk asymmetric models
    }

    try:
        response = requests.post(
            url, json=payload, headers=headers, timeout=60)
        if response.status_code == 200:
            data = response.json()
            return data["data"][0]["embedding"]
        else:
            print(f"   ❌ HTTP {response.status_code}: {response.text[:200]}")
            return None
    except Exception as e:
        print(f"   ❌ Error: {e}")
        return None


# ============================================================
# 🔄 BACA PROGRESS (lanjut dari yang sudah terupload)
# ============================================================
completed = set()
if PROGRESS_FILE.exists():
    with open(PROGRESS_FILE, "r") as f:
        completed = set(line.strip() for line in f.readlines())

# ============================================================
# 🚀 PROSES SEMUA DATA
# ============================================================
print("📂 Membaca metadata...")
with open(METADATA_FILE, "r", encoding="utf-8") as f:
    metadata = json.load(f)

print(f"✅ Ditemukan {len(metadata)} bab")
print(f"📌 Sudah terupload: {len(completed)} bab")

total_success = len(completed)
total_fail = 0

for idx, item in enumerate(metadata, start=1):
    bab_id = item["bab"]

    if bab_id in completed:
        print(f"\n[{idx}/{len(metadata)}] ⏭️ Skip {bab_id} (sudah terupload)")
        continue

    print(
        f"\n[{idx}/{len(metadata)}] 📖 {item['kelas']} - {item['mapel']} - {bab_id}")

    # Cek file teks
    teks_path = Path(item.get("file_teks", ""))
    if not teks_path.exists():
        print(f"   ⚠️ File teks tidak ditemukan: {teks_path}")
        total_fail += 1
        continue

    # Baca teks
    with open(teks_path, "r", encoding="utf-8") as f:
        teks = f.read()

    if len(teks.strip()) == 0:
        print(f"   ⚠️ Teks kosong")
        total_fail += 1
        continue

    # Generate embedding (potong otomatis di dalam fungsi)
    print(f"   🔄 Generating embedding (NVIDIA)...")
    embedding = generate_embedding(teks)

    if embedding is None:
        print(f"   ❌ Gagal generate embedding")
        total_fail += 1
        continue

    # Data yang akan di-upload ke Supabase
    data = {
        "kelas": item.get("kelas", ""),
        "mapel": item.get("mapel", ""),
        "bab": bab_id,
        "teks": teks,
        "embedding": embedding,
        "metadata": {
            "file_pdf": item.get("file_pdf", ""),
            "file_teks": str(teks_path),
            "folder_gambar": item.get("folder_gambar", ""),
            "ukuran_kb": item.get("ukuran_kb", 0)
        }
    }

    # Upload ke Supabase
    try:
        result = supabase.table("materi_vektor").insert(data).execute()
        print(f"   ✅ Berhasil diupload ke Supabase")
        total_success += 1
        # Simpan progress
        with open(PROGRESS_FILE, "a") as f:
            f.write(bab_id + "\n")
    except Exception as e:
        print(f"   ❌ Gagal upload: {e}")
        total_fail += 1

    # Jeda agar tidak kena rate limit (40 RPM → 0.3 detik cukup)
    time.sleep(0.3)

print(f"\n🎉 SELESAI!")
print(f"✅ Berhasil: {total_success}")
print(f"❌ Gagal: {total_fail}")
