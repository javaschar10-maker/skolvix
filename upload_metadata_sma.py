import json
import requests
from supabase import create_client
import time

SUPABASE_URL = "https://yqbkkxibgsfaueaaezey.supabase.co"
SUPABASE_KEY = "sb_secret_6kO9Z_7vvqHHDmGzWfU85w_kxhb3dDk"  # pakai key baru kamu
NVIDIA_API_KEY = "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"

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)


def get_embedding(text):
    url = "https://integrate.api.nvidia.com/v1/embeddings"
    headers = {
        "Authorization": f"Bearer {NVIDIA_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": "nvidia/nv-embedqa-e5-v5",
        "input": text[:400],
        "input_type": "query"
    }
    response = requests.post(url, json=payload, headers=headers)
    if response.status_code != 200:
        raise Exception(
            f"NVIDIA error: {response.status_code} - {response.text}")
    return response.json()["data"][0]["embedding"]


def upload_metadata():
    # Baca file metadata SMA
    with open("rag-data/metadata-buku-sma.json", "r", encoding="utf-8") as f:
        metadata_list = json.load(f)

    print(f"📚 Total metadata SMA: {len(metadata_list)}")

    for item in metadata_list:
        try:
            print(
                f"📤 Uploading: {item['kelas']} - {item['mapel']} - {item['bab']}")
            embedding = get_embedding(item["teks"])
            data = {
                "kelas": item["kelas"],
                "mapel": item["mapel"],
                "bab": item["bab"],
                "teks": item["teks"],
                "embedding": embedding
            }
            supabase.table("materi_vektor").insert(data).execute()
            print(f"✅ Berhasil: {item['bab']}")
            time.sleep(0.5)
        except Exception as e:
            print(f"❌ Error: {e}")

    print("🎉 Upload metadata SMA selesai!")


if __name__ == "__main__":
    upload_metadata()
