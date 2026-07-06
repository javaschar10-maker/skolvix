import requests
import json

NVIDIA_API_KEY = "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"


def test_nvidia():
    url = "https://integrate.api.nvidia.com/v1/embeddings"
    headers = {
        "Authorization": f"Bearer {NVIDIA_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": "nvidia/nv-embedqa-e5-v5",
        "input": "apa itu teks deskripsi?",
        "input_type": "query"
    }
    try:
        resp = requests.post(url, json=payload, headers=headers, timeout=10)
        print(f"Status Code: {resp.status_code}")
        if resp.status_code == 200:
            data = resp.json()
            embedding = data['data'][0]['embedding']
            print(f"✅ Embedding berhasil, dimensi: {len(embedding)}")
            print(f"Sample: {embedding[:5]}")
        else:
            print(f"❌ Gagal: {resp.text}")
    except Exception as e:
        print(f"❌ Exception: {e}")


if __name__ == "__main__":
    test_nvidia()
