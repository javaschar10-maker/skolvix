import os
import json
from pathlib import Path

# ============================================================
# KONFIGURASI
# ============================================================
BASE = Path(__file__).parent
FOLDER_PDF = BASE / "rag-data" / "pdf-bab"
FOLDER_TEKS = BASE / "rag-data" / "teks"
FOLDER_GAMBAR = BASE / "rag-data" / "gambar"
OUTPUT_FILE = BASE / "rag-data" / "metadata.json"

# ============================================================
# BUAT METADATA
# ============================================================
metadata = []

for root, dirs, files in os.walk(FOLDER_PDF):
    for file in files:
        if not file.endswith(".pdf"):
            continue

        pdf_path = Path(root) / file
        rel_path = str(pdf_path.relative_to(FOLDER_PDF))

        # Parse metadata dari path
        parts = rel_path.split(os.sep)
        kelas = parts[0] if len(parts) > 0 else "unknown"
        mapel = parts[1] if len(parts) > 1 else "unknown"
        bab = file.replace(".pdf", "")

        # Path teks & gambar
        teks_path = FOLDER_TEKS / rel_path.replace(".pdf", ".txt")
        gambar_folder = FOLDER_GAMBAR / rel_path.replace(".pdf", "")

        # Kumpulkan data
        entry = {
            "kelas": kelas,
            "mapel": mapel,
            "bab": bab,
            "file_pdf": str(pdf_path),
            "file_teks": str(teks_path) if teks_path.exists() else "",
            "folder_gambar": str(gambar_folder) if gambar_folder.exists() else "",
            "ukuran_kb": round(pdf_path.stat().st_size / 1024, 2)
        }
        metadata.append(entry)

# ============================================================
# SIMPAN METADATA
# ============================================================
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(metadata, f, indent=2, ensure_ascii=False)

print(f"✅ Metadata selesai! Total: {len(metadata)} bab")
print(f"📁 Disimpan di: {OUTPUT_FILE}")
