import fitz
import os
from pathlib import Path

# ============================================================
# KONFIGURASI
# ============================================================
BASE = Path(__file__).parent
FOLDER_PDF = BASE / "rag-data" / "pdf-bab"
FOLDER_TEKS = BASE / "rag-data" / "teks"
FOLDER_GAMBAR = BASE / "rag-data" / "gambar"

# Buat folder output
FOLDER_TEKS.mkdir(parents=True, exist_ok=True)
FOLDER_GAMBAR.mkdir(parents=True, exist_ok=True)

# ============================================================
# PROSES SEMUA PDF
# ============================================================
total = 0
total_gambar = 0

for root, dirs, files in os.walk(FOLDER_PDF):
    for file in files:
        if not file.endswith(".pdf"):
            continue

        pdf_path = Path(root) / file
        print(f"🔍 Memproses: {pdf_path}")

        # Buka PDF
        doc = fitz.open(pdf_path)

        # --- EKSTRAK TEKS ---
        teks = ""
        for page in doc:
            teks += page.get_text()

        # Simpan teks
        rel_path = str(pdf_path.relative_to(FOLDER_PDF))
        teks_path = FOLDER_TEKS / rel_path.replace(".pdf", ".txt")
        teks_path.parent.mkdir(parents=True, exist_ok=True)
        with open(teks_path, "w", encoding="utf-8") as f:
            f.write(teks)

        # --- EKSTRAK GAMBAR ---
        gambar_count = 0
        for page_num, page in enumerate(doc, start=1):
            images = page.get_images(full=True)
            for img_index, img in enumerate(images, start=1):
                xref = img[0]
                base_image = doc.extract_image(xref)
                img_bytes = base_image["image"]
                img_ext = base_image["ext"]

                img_name = f"{Path(file).stem}_page{page_num}_img{img_index}.{img_ext}"
                img_path = FOLDER_GAMBAR / \
                    rel_path.replace(".pdf", "") / img_name
                img_path.parent.mkdir(parents=True, exist_ok=True)
                with open(img_path, "wb") as f:
                    f.write(img_bytes)
                gambar_count += 1
                total_gambar += 1

        doc.close()
        total += 1
        print(f"   ✅ Teks: {teks_path}")
        print(f"   🖼️ Gambar: {gambar_count} file")

print(f"\n🎉 Selesai! Total {total} PDF diproses.")
print(f"🖼️ Total gambar: {total_gambar}")
