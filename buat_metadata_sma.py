import os
import json
import re
from pathlib import Path

# ============================================
# KONFIGURASI
# ============================================
BASE_PATH = "rag-data/teks/sma/"
OUTPUT_FILE = "rag-data/metadata-buku-sma.json"

# Mapping folder → nama mapel (untuk semua kemungkinan)
MAPEL_MAPPING = {
    "bindo": "B. Indonesia",
    "binggris": "B. Inggris",
    "matematika": "Matematika",
    "ppkn": "PPKn",
    "biologi": "Biologi",
    "fisika": "Fisika",
    "kimia": "Kimia",
    "ekonomi": "Ekonomi",
    "sejarah": "Sejarah",
    "sosiologi": "Sosiologi",
    "geografi": "Geografi",
    "ipa": "IPA",      # untuk kelas 10
    "ips": "IPS"       # untuk kelas 10
}

# ============================================
# EKSTRAK JUDUL BAB (SMART)
# ============================================


def extract_bab_info(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = [f.readline().strip() for _ in range(20)]
        full_text = " ".join(lines)

        # Pola: Bab 1 : Judul, Bab I. Judul, Bab 2 | Judul
        patterns = [
            r"Bab\s+[IVXLCDM\d]+\s*[:.]\s*(.+?)(?:\s*[|—-]|$)",
            r"Bab\s+[IVXLCDM\d]+\s*(.+?)(?:\s*[|—-]|$)",
        ]

        for pattern in patterns:
            match = re.search(pattern, full_text)
            if match:
                judul = match.group(1).strip()
                judul = re.sub(r"KEMENTERIAN.*|ISBN.*|Penulis.*",
                               "", judul, flags=re.IGNORECASE)
                judul = judul.strip()
                if judul:
                    basename = os.path.basename(file_path)
                    bab_match = re.search(r"BAB(\d+)", basename, re.IGNORECASE)
                    nomor = f"Bab {bab_match.group(1)}" if bab_match else "Bab ?"
                    return nomor, judul

        for line in lines:
            if line and not re.search(r"KEMENTERIAN|ISBN|Penulis", line, re.IGNORECASE):
                return "Bab ?", line.strip()

        return "Bab ?", "Tidak diketahui"

# ============================================
# PROSES SATU FOLDER (1 MAPEL)
# ============================================


def process_folder(folder_path, mapel_name, kelas):
    if not os.path.exists(folder_path):
        return None

    files = sorted([f for f in os.listdir(folder_path) if f.endswith(".txt")])
    if not files:
        return None

    bab_list = []
    for file in files:
        file_path = os.path.join(folder_path, file)
        nomor, judul = extract_bab_info(file_path)
        bab_list.append(f"{nomor} {judul}")
        print(f"  ✅ {nomor}: {judul}")

    jumlah_bab = len(bab_list)
    daftar_bab = ", ".join(bab_list)

    return {
        "kelas": kelas,
        "mapel": f"kelas-{kelas}",
        "bab": f"METADATA_{mapel_name.upper().replace(' ', '_')}",
        "teks": f"Buku {mapel_name} Kelas {kelas} Kurikulum Merdeka. Jumlah bab: {jumlah_bab}. Daftar bab: {daftar_bab}."
    }


# ============================================
# PROSES SEMUA KELAS SMA
# ============================================
all_metadata = []

for kelas in ["10", "11", "12"]:
    kelas_path = os.path.join(BASE_PATH, f"kelas-{kelas}")
    if not os.path.exists(kelas_path):
        print(f"⚠️ Folder kelas-{kelas} tidak ditemukan, skip...")
        continue

    print(f"\n📚 === KELAS {kelas} ===")

    # Daftar semua folder di dalam kelas
    for folder_name in os.listdir(kelas_path):
        folder_path = os.path.join(kelas_path, folder_name)
        if not os.path.isdir(folder_path):
            continue

        # Cek apakah folder ada di mapping
        mapel_name = MAPEL_MAPPING.get(folder_name)
        if not mapel_name:
            print(f"⚠️ Mapel '{folder_name}' tidak dikenali, skip...")
            continue

        print(f"\n📖 {mapel_name}:")
        result = process_folder(folder_path, mapel_name, kelas)
        if result:
            all_metadata.append(result)

# ============================================
# SIMPAN KE FILE
# ============================================
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(all_metadata, f, indent=2, ensure_ascii=False)

print(f"\n✅ Metadata SMA selesai! File: {OUTPUT_FILE}")
print(f"📊 Total metadata SMA: {len(all_metadata)}")

# Tampilkan ringkasan
print("\n📋 RINGKASAN METADATA SMA:")
for item in all_metadata:
    print(f"  - Kelas {item['kelas']} - {item['mapel']} - {item['bab']}")
