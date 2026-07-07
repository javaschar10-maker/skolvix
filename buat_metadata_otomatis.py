import os
import json
import re

# ============================================
# KONFIGURASI
# ============================================
BASE_PATH = "rag-data/teks/smp/"
OUTPUT_FILE = "rag-data/metadata-buku.json"

# Mapping folder → mapel (untuk SMP)
MAPEL_MAPPING = {
    "bindo": "B. Indonesia",
    "binggris": "B. Inggris",
    "ipa": "IPA",
    "ips": "IPS",
    "matematika": "Matematika",
    "ppkn": "PPKn"
}

# Mapping untuk SMA (nanti)
# MAPEL_MAPPING_SMA = {
#     "biologi": "Biologi",
#     "fisika": "Fisika",
#     "kimia": "Kimia",
#     "ekonomi": "Ekonomi",
#     "sejarah": "Sejarah",
#     "sosiologi": "Sosiologi",
#     "geografi": "Geografi"
# }

# ============================================
# EKSTRAK JUDUL BAB (SMART)
# ============================================


def extract_bab_info(file_path):
    """Cari judul bab dengan pola 'Bab X : Judul' atau 'Bab X. Judul'"""
    with open(file_path, "r", encoding="utf-8") as f:
        # Baca 20 baris pertama (cukup untuk dapat judul)
        lines = [f.readline().strip() for _ in range(20)]
        full_text = " ".join(lines)

        # Cari pola: Bab 1, Bab I, Bab 2, dst.
        # Contoh: "Bab 1 : Jelajah Nusantara"
        #         "Bab I. Jelajah Nusantara"
        #         "Bab 2 | Berkreasi dengan Teks Deskripsi"
        patterns = [
            r"Bab\s+[IVXLCDM\d]+\s*[:.]\s*(.+?)(?:\s*[|—-]|$)",
            r"Bab\s+[IVXLCDM\d]+\s*(.+?)(?:\s*[|—-]|$)",
        ]

        for pattern in patterns:
            match = re.search(pattern, full_text)
            if match:
                judul = match.group(1).strip()
                # Bersihkan dari header/kotoran
                judul = re.sub(r"KEMENTERIAN.*|ISBN.*|Penulis.*",
                               "", judul, flags=re.IGNORECASE)
                judul = judul.strip()
                if judul:
                    # Ambil nomor bab dari nama file
                    basename = os.path.basename(file_path)
                    bab_match = re.search(r"BAB(\d+)", basename, re.IGNORECASE)
                    nomor = f"Bab {bab_match.group(1)}" if bab_match else "Bab ?"
                    return nomor, judul

        # Fallback: ambil baris pertama yang tidak kosong
        for line in lines:
            if line and not re.search(r"KEMENTERIAN|ISBN|Penulis", line, re.IGNORECASE):
                return "Bab ?", line.strip()

        return "Bab ?", "Tidak diketahui"

# ============================================
# PROSES SATU FOLDER (1 MAPEL)
# ============================================


def process_folder(folder_path, mapel_name, kelas):
    """Proses semua file .txt di folder"""
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
        "bab": f"METADATA_{mapel_name.upper()}",
        "teks": f"Buku {mapel_name} Kelas {kelas} Kurikulum Merdeka. Jumlah bab: {jumlah_bab}. Daftar bab: {daftar_bab}."
    }


# ============================================
# PROSES SEMUA KELAS & MAPEL SMP
# ============================================
all_metadata = []

for kelas in ["7", "8", "9"]:
    kelas_path = os.path.join(BASE_PATH, f"kelas-{kelas}")
    if not os.path.exists(kelas_path):
        print(f"⚠️ Folder kelas-{kelas} tidak ditemukan, skip...")
        continue

    print(f"\n📚 === KELAS {kelas} ===")

    for folder_name, mapel_name in MAPEL_MAPPING.items():
        folder_path = os.path.join(kelas_path, folder_name)
        if not os.path.exists(folder_path):
            print(f"⚠️ Mapel {mapel_name} tidak ditemukan, skip...")
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

print(f"\n✅ Metadata selesai! File: {OUTPUT_FILE}")
print(f"📊 Total metadata: {len(all_metadata)}")

# Tampilkan ringkasan
print("\n📋 RINGKASAN METADATA:")
for item in all_metadata:
    print(f"  - Kelas {item['kelas']} - {item['mapel']} - {item['bab']}")
