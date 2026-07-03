import json
import requests
from pathlib import Path
from supabase import create_client, Client

SUPABASE_URL = "https://yqbkkxibgsfaueaaezey.supabase.co"
SUPABASE_KEY = "sb_publishable_gjIUFgFeK8V5LanmGCwb4A_fNxIilfN"
NVIDIA_API_KEY = "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"

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)


def clean_text(text):
    """Hapus karakter aneh (null byte, kontrol) dari teks"""
    # Hapus semua karakter yang nilainya < 32 (kecuali newline, tab, carriage return)
    return ''.join(char for char in text if ord(char) >= 32 or char in '\n\r\t')


def generate_embedding(text):
    url = "https://integrate.api.nvidia.com/v1/embeddings"
    headers = {
        "Authorization": f"Bearer {NVIDIA_API_KEY}",
        "Content-Type": "application/json"
    }

    # Bersihkan teks
    text = clean_text(text)

    if len(text) > 400:
        text = text[:400]

    payload = {
        "model": "nvidia/nv-embedqa-e5-v5",
        "input": text,
        "input_type": "passage"
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


# Cari file yang gagal
target_bab = "Matematika-BS-KLS-VII-105-144"

with open("rag-data/metadata.json", "r") as f:
    metadata = json.load(f)

for item in metadata:
    if item["bab"] == target_bab:
        teks_path = Path(item["file_teks"])
        if not teks_path.exists():
            print("File teks tidak ditemukan")
            break

        with open(teks_path, "r", encoding="utf-8") as f:
            teks = f.read()

        # Bersihkan teks SEKALI
        teks_bersih = clean_text(teks)

        print(
            f"📖 Upload ulang: {item['kelas']} - {item['mapel']} - {item['bab']}")

        # Generate embedding dari teks yang sudah bersih
        embedding = generate_embedding(teks_bersih)
        if embedding:
            # Gunakan teks_bersih untuk insert, BUKAN teks asli
            data = {
                "kelas": item["kelas"],
                "mapel": item["mapel"],
                "bab": item["bab"],
                "teks": teks_bersih,   # <-- PAKAI YANG SUDAH BERSIH
                "embedding": embedding,
                "metadata": {
                    "file_pdf": item.get("file_pdf", ""),
                    "file_teks": str(teks_path),
                    "folder_gambar": item.get("folder_gambar", ""),
                    "ukuran_kb": item.get("ukuran_kb", 0)
                }
            }
            try:
                result = supabase.table("materi_vektor").insert(data).execute()
                print("   ✅ Berhasil upload ulang!")
            except Exception as e:
                print(f"   ❌ Gagal: {e}")
        else:
            print("   ❌ Gagal generate embedding")
        break
