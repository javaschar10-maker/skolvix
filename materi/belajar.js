// belajar.js - Ruang Belajar Mandiri Skolvix
// AUTO-GENERATED from rag-data/pdf-bab/ folder structure.
// TANPA AI. Pilihan kelas/pelajaran/bab murni data statis (JS object),
// PDF materi ditampilkan via <iframe> dari file lokal.

// ─── DATA KONTEN ───
const DAFTAR_KELAS = [
  { id: "kelas7", label: "Kelas 7" },
  { id: "kelas8", label: "Kelas 8" },
  { id: "kelas9", label: "Kelas 9" },
  { id: "kelas10", label: "Kelas 10" },
  { id: "kelas11", label: "Kelas 11" },
  { id: "kelas12", label: "Kelas 12" }
];

const DAFTAR_PELAJARAN = [
  {
    "id": "bindo",
    "label": "B. Indonesia"
  },
  {
    "id": "binggris",
    "label": "B. Inggris"
  },
  {
    "id": "ipa",
    "label": "IPA"
  },
  {
    "id": "ips",
    "label": "IPS"
  },
  {
    "id": "matematika",
    "label": "Matematika"
  },
  {
    "id": "ppkn",
    "label": "PPKn"
  },
  {
    "id": "biologi",
    "label": "Biologi"
  },
  {
    "id": "ekonomi",
    "label": "Ekonomi"
  },
  {
    "id": "fisika",
    "label": "Fisika"
  },
  {
    "id": "geografi",
    "label": "Geografi"
  },
  {
    "id": "kimia",
    "label": "Kimia"
  },
  {
    "id": "sejarah",
    "label": "Sejarah"
  },
  {
    "id": "sosiologi",
    "label": "Sosiologi"
  }
];

const DAFTAR_BAB = {
  "kelas10|bindo": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "B. Indonesia Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/bindo/Bahasa_Indonesia_BS_KLS_X_Rev-017-054bab1.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "B. Indonesia Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/bindo/Bahasa_Indonesia_BS_KLS_X_Rev-055-096bab2.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "B. Indonesia Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/bindo/Bahasa_Indonesia_BS_KLS_X_Rev-097-138bab3.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "B. Indonesia Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/bindo/Bahasa_Indonesia_BS_KLS_X_Rev-139-182bab4.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "B. Indonesia Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/bindo/Bahasa_Indonesia_BS_KLS_X_Rev-183-236bab5.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "B. Indonesia Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/bindo/Bahasa_Indonesia_BS_KLS_X_Rev-237-302bab6.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 10 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas10|binggris": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "B. Inggris Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/binggris/Bahasa-Inggris-BS-KLS-X-021-046bab1.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "B. Inggris Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/binggris/Bahasa-Inggris-BS-KLS-X-047-070bab2.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "B. Inggris Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/binggris/Bahasa-Inggris-BS-KLS-X-071-096bab3.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "B. Inggris Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/binggris/Bahasa-Inggris-BS-KLS-X-097-120bab4.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "B. Inggris Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/binggris/Bahasa-Inggris-BS-KLS-X-121-146bab5.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "B. Inggris Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/binggris/Bahasa-Inggris-BS-KLS-X-147-178bab6.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 10 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas10|ipa": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "IPA Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/ipa/IPA_BS_KLS_X_Rev-017-056bab1.pdf",
      "sumber": "Buku IPA Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "IPA Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/ipa/IPA_BS_KLS_X_Rev-057-082bab2.pdf",
      "sumber": "Buku IPA Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "IPA Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/ipa/IPA_BS_KLS_X_Rev-083-130bab3.pdf",
      "sumber": "Buku IPA Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "IPA Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/ipa/IPA_BS_KLS_X_Rev-131-164bab4.pdf",
      "sumber": "Buku IPA Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "IPA Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/ipa/IPA_BS_KLS_X_Rev-165-188bab5.pdf",
      "sumber": "Buku IPA Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "IPA Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/ipa/IPA_BS_KLS_X_Rev-189-222bab6.pdf",
      "sumber": "Buku IPA Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab7",
      "label": "Bab 7",
      "judul": "IPA Bab 7",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/ipa/IPA_BS_KLS_X_Rev-223-246bab7.pdf",
      "sumber": "Buku IPA Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab8",
      "label": "Bab 8",
      "judul": "IPA Bab 8",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/ipa/IPA_BS_KLS_X_Rev-247-297bab8.pdf",
      "sumber": "Buku IPA Kelas 10 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas10|ips": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "IPS Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/ips/IPS_BS_KLS_X_Rev-015-088bab1.pdf",
      "sumber": "Buku IPS Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "IPS Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/ips/IPS_BS_KLS_X_Rev-089-130bab2.pdf",
      "sumber": "Buku IPS Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "IPS Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/ips/IPS_BS_KLS_X_Rev-131-222bab3.pdf",
      "sumber": "Buku IPS Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "IPS Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/ips/IPS_BS_KLS_X_Rev-223-302bab4.pdf",
      "sumber": "Buku IPS Kelas 10 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas10|matematika": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Matematika Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/matematika/Matematika_BS_KLS_X_Rev-017-050bab1.pdf",
      "sumber": "Buku Matematika Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Matematika Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/matematika/Matematika_BS_KLS_X_Rev-051-086bab2.pdf",
      "sumber": "Buku Matematika Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Matematika Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/matematika/Matematika_BS_KLS_X_Rev-087-122bab3.pdf",
      "sumber": "Buku Matematika Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Matematika Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/matematika/Matematika_BS_KLS_X_Rev-123-144bab4.pdf",
      "sumber": "Buku Matematika Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "Matematika Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/matematika/Matematika_BS_KLS_X_Rev-145-192bab5.pdf",
      "sumber": "Buku Matematika Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "Matematika Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/matematika/Matematika_BS_KLS_X_Rev-193-254bab6.pdf",
      "sumber": "Buku Matematika Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab7",
      "label": "Bab 7",
      "judul": "Matematika Bab 7",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/matematika/Matematika_BS_KLS_X_Rev-255-289bab7.pdf",
      "sumber": "Buku Matematika Kelas 10 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas10|ppkn": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "PPKn Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/ppkn/Pendidikan-Pancasila-BS-KLS-X-017-074bab1.pdf",
      "sumber": "Buku PPKn Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "PPKn Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/ppkn/Pendidikan-Pancasila-BS-KLS-X-075-142bab2.pdf",
      "sumber": "Buku PPKn Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "PPKn Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/ppkn/Pendidikan-Pancasila-BS-KLS-X-143-176bab3.pdf",
      "sumber": "Buku PPKn Kelas 10 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "PPKn Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-10/ppkn/Pendidikan-Pancasila-BS-KLS-X-177-236bab4.pdf",
      "sumber": "Buku PPKn Kelas 10 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas11|bindo": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "B. Indonesia Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/bindo/Indonesia_BS_KLS_XI_Rev-017-054bab1.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "B. Indonesia Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/bindo/Indonesia_BS_KLS_XI_Rev-055-090bab2.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "B. Indonesia Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/bindo/Indonesia_BS_KLS_XI_Rev-091-136bab3.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "B. Indonesia Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/bindo/Indonesia_BS_KLS_XI_Rev-137-180bab4.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "B. Indonesia Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/bindo/Indonesia_BS_KLS_XI_Rev-181-224bab5.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "B. Indonesia Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/bindo/Indonesia_BS_KLS_XI_Rev-225-298bab6.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 11 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas11|binggris": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "B. Inggris Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/binggris/Bahasa-Inggris-BS-KLS-XI-efc-023-066bab1.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "B. Inggris Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/binggris/Bahasa-Inggris-BS-KLS-XI-efc-067-118bab2.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "B. Inggris Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/binggris/Bahasa-Inggris-BS-KLS-XI-efc-119-158bab3.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "B. Inggris Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/binggris/Bahasa-Inggris-BS-KLS-XI-efc-159-202bab4.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "B. Inggris Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/binggris/Bahasa-Inggris-BS-KLS-XI-efc-203-261bab5.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 11 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas11|biologi": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Biologi Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/biologi/Biologi-BS-KLS-XI-017-044babs1.pdf",
      "sumber": "Buku Biologi Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Biologi Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/biologi/Biologi-BS-KLS-XI-045-072bab2.pdf",
      "sumber": "Buku Biologi Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Biologi Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/biologi/Biologi-BS-KLS-XI-073-104bab3.pdf",
      "sumber": "Buku Biologi Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Biologi Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/biologi/Biologi-BS-KLS-XI-105-142bab4.pdf",
      "sumber": "Buku Biologi Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "Biologi Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/biologi/Biologi-BS-KLS-XI-143-182bab5.pdf",
      "sumber": "Buku Biologi Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "Biologi Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/biologi/Biologi-BS-KLS-XI-183-222bab6.pdf",
      "sumber": "Buku Biologi Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab7",
      "label": "Bab 7",
      "judul": "Biologi Bab 7",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/biologi/Biologi-BS-KLS-XI-223-256bab7.pdf",
      "sumber": "Buku Biologi Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab8",
      "label": "Bab 8",
      "judul": "Biologi Bab 8",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/biologi/Biologi-BS-KLS-XI-257-295bab8.pdf",
      "sumber": "Buku Biologi Kelas 11 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas11|ekonomi": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Ekonomi Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/ekonomi/Ekonomi_BS_KLS_XI_Rev_2-011-064bab1.pdf",
      "sumber": "Buku Ekonomi Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Ekonomi Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/ekonomi/Ekonomi_BS_KLS_XI_Rev_2-065-100bab2.pdf",
      "sumber": "Buku Ekonomi Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Ekonomi Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/ekonomi/Ekonomi_BS_KLS_XI_Rev_2-101-148bab3.pdf",
      "sumber": "Buku Ekonomi Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Ekonomi Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/ekonomi/Ekonomi_BS_KLS_XI_Rev_2-149-199bab4.pdf",
      "sumber": "Buku Ekonomi Kelas 11 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas11|fisika": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Fisika Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/fisika/Fisika-BS-KLS-XI-023-048bab1.pdf",
      "sumber": "Buku Fisika Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Fisika Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/fisika/Fisika-BS-KLS-XI-049-084bab2.pdf",
      "sumber": "Buku Fisika Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Fisika Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/fisika/Fisika-BS-KLS-XI-085-110bab3.pdf",
      "sumber": "Buku Fisika Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Fisika Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/fisika/Fisika-BS-KLS-XI-111-136bab4.pdf",
      "sumber": "Buku Fisika Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "Fisika Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/fisika/Fisika-BS-KLS-XI-137-170bab5.pdf",
      "sumber": "Buku Fisika Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "Fisika Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/fisika/Fisika-BS-KLS-XI-171-194bab6.pdf",
      "sumber": "Buku Fisika Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab7",
      "label": "Bab 7",
      "judul": "Fisika Bab 7",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/fisika/Fisika-BS-KLS-XI-195-233bab7.pdf",
      "sumber": "Buku Fisika Kelas 11 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas11|geografi": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Geografi Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/geografi/Geografi_BS_KLS_XI_Rev-017-082bab1.pdf",
      "sumber": "Buku Geografi Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Geografi Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/geografi/Geografi_BS_KLS_XI_Rev-083-152bab2.pdf",
      "sumber": "Buku Geografi Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Geografi Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/geografi/Geografi_BS_KLS_XI_Rev-153-210bab3.pdf",
      "sumber": "Buku Geografi Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Geografi Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/geografi/Geografi_BS_KLS_XI_Rev-211-271bab4.pdf",
      "sumber": "Buku Geografi Kelas 11 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas11|kimia": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Kimia Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/kimia/Kimia-BS-KLS-XI-015-044bab1.pdf",
      "sumber": "Buku Kimia Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Kimia Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/kimia/Kimia-BS-KLS-XI-045-076bab2.pdf",
      "sumber": "Buku Kimia Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Kimia Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/kimia/Kimia-BS-KLS-XI-077-102bab3.pdf",
      "sumber": "Buku Kimia Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Kimia Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/kimia/Kimia-BS-KLS-XI-103-132bab4.pdf",
      "sumber": "Buku Kimia Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "Kimia Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/kimia/Kimia-BS-KLS-XI-133-168bab5.pdf",
      "sumber": "Buku Kimia Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "Kimia Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/kimia/Kimia-BS-KLS-XI-169-198bab6.pdf",
      "sumber": "Buku Kimia Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab7",
      "label": "Bab 7",
      "judul": "Kimia Bab 7",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/kimia/Kimia-BS-KLS-XI-199-228bab7.pdf",
      "sumber": "Buku Kimia Kelas 11 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas11|matematika": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Matematika Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/matematika/Matematika-BS-KLS-XI-017-060bab1.pdf",
      "sumber": "Buku Matematika Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Matematika Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/matematika/Matematika-BS-KLS-XI-061-094bab2.pdf",
      "sumber": "Buku Matematika Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Matematika Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/matematika/Matematika-BS-KLS-XI-095-148bab3.pdf",
      "sumber": "Buku Matematika Kelas 11 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas11|ppkn": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "PPKn Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/ppkn/Pendidikan-Pancasila-BS-KLS-XI-Rev-019-048bab1.pdf",
      "sumber": "Buku PPKn Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "PPKn Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/ppkn/Pendidikan-Pancasila-BS-KLS-XI-Rev-049-086bab2.pdf",
      "sumber": "Buku PPKn Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "PPKn Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/ppkn/Pendidikan-Pancasila-BS-KLS-XI-Rev-087-126bab3.pdf",
      "sumber": "Buku PPKn Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "PPKn Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/ppkn/Pendidikan-Pancasila-BS-KLS-XI-Rev-127-182bab4.pdf",
      "sumber": "Buku PPKn Kelas 11 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas11|sejarah": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Sejarah Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/sejarah/Sejarah-BS-KLS-XI-017-064bab1.pdf",
      "sumber": "Buku Sejarah Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Sejarah Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/sejarah/Sejarah-BS-KLS-XI-065-102bab2.pdf",
      "sumber": "Buku Sejarah Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Sejarah Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/sejarah/Sejarah-BS-KLS-XI-103-146bab3.pdf",
      "sumber": "Buku Sejarah Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Sejarah Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/sejarah/Sejarah-BS-KLS-XI-147-186bab4.pdf",
      "sumber": "Buku Sejarah Kelas 11 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas11|sosiologi": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Sosiologi Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/sosiologi/Sosiologi_BS_KLS_XI_Rev-015-086bab1.pdf",
      "sumber": "Buku Sosiologi Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Sosiologi Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/sosiologi/Sosiologi_BS_KLS_XI_Rev-087-146bab2.pdf",
      "sumber": "Buku Sosiologi Kelas 11 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Sosiologi Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-11/sosiologi/Sosiologi_BS_KLS_XI_Rev-147-200bab3.pdf",
      "sumber": "Buku Sosiologi Kelas 11 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas12|bindo": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "B. Indonesia Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/bindo/Kelas XII Bahasa Indonesia BS press-007-036bab1.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "B. Indonesia Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/bindo/Kelas XII Bahasa Indonesia BS press-037-089bab2.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "B. Indonesia Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/bindo/Kelas XII Bahasa Indonesia BS press-090-114bab3.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "B. Indonesia Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/bindo/Kelas XII Bahasa Indonesia BS press-115-136bab4.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "B. Indonesia Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/bindo/Kelas XII Bahasa Indonesia BS press-137-188bab5.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "B. Indonesia Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/bindo/Kelas XII Bahasa Indonesia BS press-189-251bab5.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 12 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas12|binggris": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "B. Inggris Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/binggris/Inggris_BS_KLS_XII-021-074bab1.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "B. Inggris Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/binggris/Inggris_BS_KLS_XII-075-116bab2.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "B. Inggris Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/binggris/Inggris_BS_KLS_XII-117-166bab3.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "B. Inggris Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/binggris/Inggris_BS_KLS_XII-167-240bab4.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 12 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas12|biologi": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Biologi Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/biologi/Biologi_BS_KLS_XII_Rev-011-068bab1.pdf",
      "sumber": "Buku Biologi Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Biologi Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/biologi/Biologi_BS_KLS_XII_Rev-069-138bab2.pdf",
      "sumber": "Buku Biologi Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Biologi Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/biologi/Biologi_BS_KLS_XII_Rev-139-200bab3.pdf",
      "sumber": "Buku Biologi Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Biologi Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/biologi/Biologi_BS_KLS_XII_Rev-201-268bab4.pdf",
      "sumber": "Buku Biologi Kelas 12 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas12|ekonomi": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Ekonomi Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/ekonomi/Ekonomi_BS_KLS_XII-013-050bab1.pdf",
      "sumber": "Buku Ekonomi Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Ekonomi Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/ekonomi/Ekonomi_BS_KLS_XII-051-102bab2.pdf",
      "sumber": "Buku Ekonomi Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Ekonomi Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/ekonomi/Ekonomi_BS_KLS_XII-103-144bab3.pdf",
      "sumber": "Buku Ekonomi Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Ekonomi Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/ekonomi/Ekonomi_BS_KLS_XII-145-219bab4.pdf",
      "sumber": "Buku Ekonomi Kelas 12 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas12|fisika": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Fisika Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/fisika/Fisika_BS_KLS_XII-021-042bab1.pdf",
      "sumber": "Buku Fisika Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Fisika Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/fisika/Fisika_BS_KLS_XII-043-064bab2.pdf",
      "sumber": "Buku Fisika Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Fisika Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/fisika/Fisika_BS_KLS_XII-065-094bab3.pdf",
      "sumber": "Buku Fisika Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Fisika Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/fisika/Fisika_BS_KLS_XII-095-114bab4.pdf",
      "sumber": "Buku Fisika Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "Fisika Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/fisika/Fisika_BS_KLS_XII-115-134bab5.pdf",
      "sumber": "Buku Fisika Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "Fisika Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/fisika/Fisika_BS_KLS_XII-135-154bab6.pdf",
      "sumber": "Buku Fisika Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab7",
      "label": "Bab 7",
      "judul": "Fisika Bab 7",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/fisika/Fisika_BS_KLS_XII-155-172bab7.pdf",
      "sumber": "Buku Fisika Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab8",
      "label": "Bab 8",
      "judul": "Fisika Bab 8",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/fisika/Fisika_BS_KLS_XII-173-194bab8.pdf",
      "sumber": "Buku Fisika Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab9",
      "label": "Bab 9",
      "judul": "Fisika Bab 9",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/fisika/Fisika_BS_KLS_XII-195-234bab9.pdf",
      "sumber": "Buku Fisika Kelas 12 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas12|geografi": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Geografi Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/geografi/Geografi_BS_KLS_XII-013-104bab1.pdf",
      "sumber": "Buku Geografi Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Geografi Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/geografi/Geografi_BS_KLS_XII-105-170bab2.pdf",
      "sumber": "Buku Geografi Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Geografi Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/geografi/Geografi_BS_KLS_XII-171-262bab3.pdf",
      "sumber": "Buku Geografi Kelas 12 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas12|kimia": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Kimia Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/kimia/Kimia_BS_KLS_XII-015-078bab1.pdf",
      "sumber": "Buku Kimia Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Kimia Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/kimia/Kimia_BS_KLS_XII-079-122bab2.pdf",
      "sumber": "Buku Kimia Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Kimia Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/kimia/Kimia_BS_KLS_XII-123-158bab3.pdf",
      "sumber": "Buku Kimia Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Kimia Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/kimia/Kimia_BS_KLS_XII-159-206bab4.pdf",
      "sumber": "Buku Kimia Kelas 12 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas12|matematika": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Matematika Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/matematika/Matematika_BS_KLS_XII_Rev-019-052bab1.pdf",
      "sumber": "Buku Matematika Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Matematika Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/matematika/Matematika_BS_KLS_XII_Rev-053-098bab2.pdf",
      "sumber": "Buku Matematika Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Matematika Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/matematika/Matematika_BS_KLS_XII_Rev-099-140bab3.pdf",
      "sumber": "Buku Matematika Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Matematika Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/matematika/Matematika_BS_KLS_XII_Rev-141-195bab4.pdf",
      "sumber": "Buku Matematika Kelas 12 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas12|ppkn": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "PPKn Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/ppkn/Pendidikan-Pancasila-BS-KLS-XII-019-052bab1.pdf",
      "sumber": "Buku PPKn Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "PPKn Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/ppkn/Pendidikan-Pancasila-BS-KLS-XII-053-086bab2.pdf",
      "sumber": "Buku PPKn Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "PPKn Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/ppkn/Pendidikan-Pancasila-BS-KLS-XII-087-126bab3.pdf",
      "sumber": "Buku PPKn Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "PPKn Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/ppkn/Pendidikan-Pancasila-BS-KLS-XII-127-156bab4.pdf",
      "sumber": "Buku PPKn Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "PPKn Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/ppkn/Pendidikan-Pancasila-BS-KLS-XII-157-180bab5.pdf",
      "sumber": "Buku PPKn Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "PPKn Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/ppkn/Pendidikan-Pancasila-BS-KLS-XII-181-208bab6.pdf",
      "sumber": "Buku PPKn Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab7",
      "label": "Bab 7",
      "judul": "PPKn Bab 7",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/ppkn/Pendidikan-Pancasila-BS-KLS-XII-209-237bab7.pdf",
      "sumber": "Buku PPKn Kelas 12 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas12|sejarah": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Sejarah Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/sejarah/Sejarah_BS_KLS_XII-029-096bab1.pdf",
      "sumber": "Buku Sejarah Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Sejarah Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/sejarah/Sejarah_BS_KLS_XII-097-132bab2.pdf",
      "sumber": "Buku Sejarah Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Sejarah Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/sejarah/Sejarah_BS_KLS_XII-133-170bab3.pdf",
      "sumber": "Buku Sejarah Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Sejarah Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/sejarah/Sejarah_BS_KLS_XII-171-215bab4.pdf",
      "sumber": "Buku Sejarah Kelas 12 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas12|sosiologi": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Sosiologi Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/sosiologi/Sosiologi_BS_KLS_XII-015-056bab1.pdf",
      "sumber": "Buku Sosiologi Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Sosiologi Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/sosiologi/Sosiologi_BS_KLS_XII-057-106bab2.pdf",
      "sumber": "Buku Sosiologi Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Sosiologi Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/sosiologi/Sosiologi_BS_KLS_XII-107-156bab3.pdf",
      "sumber": "Buku Sosiologi Kelas 12 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Sosiologi Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/sma/kelas-12/sosiologi/Sosiologi_BS_KLS_XII-157-219bab4.pdf",
      "sumber": "Buku Sosiologi Kelas 12 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas7|bindo": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "B. Indonesia Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/bindo/Bahasa_Indonesia_BS_KLS_VII_Rev-015-056BAB1.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "B. Indonesia Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/bindo/Bahasa_Indonesia_BS_KLS_VII_Rev-057-090BAB2.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "B. Indonesia Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/bindo/Bahasa_Indonesia_BS_KLS_VII_Rev-091-128BAB3.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "B. Indonesia Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/bindo/Bahasa_Indonesia_BS_KLS_VII_Rev-129-168BAB4.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "B. Indonesia Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/bindo/Bahasa_Indonesia_BS_KLS_VII_Rev-169-212BAB5.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "B. Indonesia Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/bindo/Bahasa_Indonesia_BS_KLS_VII_Rev-213-255BAB6.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 7 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas7|binggris": [
    {
      "id": "bab0",
      "label": "Bab 0",
      "judul": "B. Inggris Bab 0",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/binggris/Bahasa-Inggris-BS-KLS-VII-033-044bab0.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "B. Inggris Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/binggris/Bahasa-Inggris-BS-KLS-VII-045-088bab1.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "B. Inggris Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/binggris/Bahasa-Inggris-BS-KLS-VII-089-132bab2.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "B. Inggris Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/binggris/Bahasa-Inggris-BS-KLS-VII-133-184bab3.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "B. Inggris Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/binggris/Bahasa-Inggris-BS-KLS-VII-185-234bab4.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "B. Inggris Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/binggris/Bahasa-Inggris-BS-KLS-VII-235-282bab5.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 7 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas7|ipa": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "IPA Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ipa/IPA_BS_KLS_VII_Rev-017-060bab1.pdf",
      "sumber": "Buku IPA Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "IPA Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ipa/IPA_BS_KLS_VII_Rev-061-096bab2.pdf",
      "sumber": "Buku IPA Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "IPA Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ipa/IPA_BS_KLS_VII_Rev-097-126bab3.pdf",
      "sumber": "Buku IPA Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "IPA Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ipa/IPA_BS_KLS_VII_Rev-127-150bab4.pdf",
      "sumber": "Buku IPA Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "IPA Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ipa/IPA_BS_KLS_VII_Rev-151-174bab5.pdf",
      "sumber": "Buku IPA Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "IPA Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ipa/IPA_BS_KLS_VII_Rev-175-198bab6.pdf",
      "sumber": "Buku IPA Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab7",
      "label": "Bab 7",
      "judul": "IPA Bab 7",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ipa/IPA_BS_KLS_VII_Rev-199-253bab7.pdf",
      "sumber": "Buku IPA Kelas 7 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas7|ips": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "IPS Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ips/IPS_BS_KLS_VII_Rev-017-076BAB1.pdf",
      "sumber": "Buku IPS Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "IPS Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ips/IPS_BS_KLS_VII_Rev-077-118BAB2.pdf",
      "sumber": "Buku IPS Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "IPS Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ips/IPS_BS_KLS_VII_Rev-119-176BAB3.pdf",
      "sumber": "Buku IPS Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "IPS Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ips/IPS_BS_KLS_VII_Rev-177-255BAB4.pdf",
      "sumber": "Buku IPS Kelas 7 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas7|matematika": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Matematika Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/matematika/Matematika-BS-KLS-VII-23-56.pdf",
      "sumber": "Buku Matematika Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Matematika Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/matematika/Matematika-BS-KLS-VII-57-104.pdf",
      "sumber": "Buku Matematika Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Matematika Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/matematika/Matematika-BS-KLS-VII-105-144.pdf",
      "sumber": "Buku Matematika Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Matematika Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/matematika/Matematika-BS-KLS-VII-145-180.pdf",
      "sumber": "Buku Matematika Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "Matematika Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/matematika/Matematika-BS-KLS-VII-181-206.pdf",
      "sumber": "Buku Matematika Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "Matematika Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/matematika/Matematika-BS-KLS-VII-207-249.pdf",
      "sumber": "Buku Matematika Kelas 7 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas7|ppkn": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "PPKn Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ppkn/Pendidikan-Pancasila-BS-KLS-VII-bab1.pdf",
      "sumber": "Buku PPKn Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "PPKn Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ppkn/Pendidikan-Pancasila-BS-KLS-VII-bab2.pdf",
      "sumber": "Buku PPKn Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "PPKn Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ppkn/Pendidikan-Pancasila-BS-KLS-VII-bab3.pdf",
      "sumber": "Buku PPKn Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "PPKn Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ppkn/Pendidikan-Pancasila-BS-KLS-VII-bab4.pdf",
      "sumber": "Buku PPKn Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "PPKn Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ppkn/Pendidikan-Pancasila-BS-KLS-VII-bab5.pdf",
      "sumber": "Buku PPKn Kelas 7 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "PPKn Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-7/ppkn/Pendidikan-Pancasila-BS-KLS-VII-bab6.pdf",
      "sumber": "Buku PPKn Kelas 7 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas8|bindo": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "B. Indonesia Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/bindo/Indonesia_BS_KLS_VIII_Rev-017-058bab1.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "B. Indonesia Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/bindo/Indonesia_BS_KLS_VIII_Rev-059-104bab2.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "B. Indonesia Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/bindo/Indonesia_BS_KLS_VIII_Rev-105-138bab3.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "B. Indonesia Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/bindo/Indonesia_BS_KLS_VIII_Rev-139-174bab4.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "B. Indonesia Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/bindo/Indonesia_BS_KLS_VIII_Rev-175-210bab5.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "B. Indonesia Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/bindo/Indonesia_BS_KLS_VIII_Rev-211-242bab6.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 8 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas8|binggris": [
    {
      "id": "bab0",
      "label": "Bab 0",
      "judul": "B. Inggris Bab 0",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/binggris/Bahasa-Inggris-BS-KLS-VIII-nsn-025-042bab0.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "B. Inggris Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/binggris/Bahasa-Inggris-BS-KLS-VIII-nsn-043-090bab1.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "B. Inggris Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/binggris/Bahasa-Inggris-BS-KLS-VIII-nsn-091-150bab2.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "B. Inggris Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/binggris/Bahasa-Inggris-BS-KLS-VIII-nsn-151-202bab3.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "B. Inggris Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/binggris/Bahasa-Inggris-BS-KLS-VIII-nsn-203-318bab4.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 8 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas8|ipa": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "IPA Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/ipa/IPA_BS_KLS_VIII_Rev-019-066bab1.pdf",
      "sumber": "Buku IPA Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "IPA Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/ipa/IPA_BS_KLS_VIII_Rev-067-092bab2.pdf",
      "sumber": "Buku IPA Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "IPA Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/ipa/IPA_BS_KLS_VIII_Rev-093-122bab3.pdf",
      "sumber": "Buku IPA Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "IPA Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/ipa/IPA_BS_KLS_VIII_Rev-123-152bab4.pdf",
      "sumber": "Buku IPA Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "IPA Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/ipa/IPA_BS_KLS_VIII_Rev-153-208bab5.pdf",
      "sumber": "Buku IPA Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "IPA Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/ipa/IPA_BS_KLS_VIII_Rev-209-253bab6.pdf",
      "sumber": "Buku IPA Kelas 8 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas8|ips": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "IPS Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/ips/IPS_BS_KLS_VIII_Rev-015-098bab1.pdf",
      "sumber": "Buku IPS Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "IPS Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/ips/IPS_BS_KLS_VIII_Rev-099-150bab2.pdf",
      "sumber": "Buku IPS Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "IPS Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/ips/IPS_BS_KLS_VIII_Rev-151-202bab3.pdf",
      "sumber": "Buku IPS Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "IPS Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/ips/IPS_BS_KLS_VIII_Rev-203-249bab4.pdf",
      "sumber": "Buku IPS Kelas 8 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas8|matematika": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Matematika Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/matematika/Matematika-BS-KLS-VIII-Baru-021-064bab1.pdf",
      "sumber": "Buku Matematika Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Matematika Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/matematika/Matematika-BS-KLS-VIII-Baru-065-116bab2.pdf",
      "sumber": "Buku Matematika Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Matematika Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/matematika/Matematika-BS-KLS-VIII-Baru-117-156bab3.pdf",
      "sumber": "Buku Matematika Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Matematika Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/matematika/Matematika-BS-KLS-VIII-Baru-157-226bab4.pdf",
      "sumber": "Buku Matematika Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "Matematika Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/matematika/Matematika-BS-KLS-VIII-Baru-227-274bab5.pdf",
      "sumber": "Buku Matematika Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "Matematika Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/matematika/Matematika-BS-KLS-VIII-Baru-275-315bab6.pdf",
      "sumber": "Buku Matematika Kelas 8 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas8|ppkn": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "PPKn Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/ppkn/Pendidikan-Pancasila-BS-KLS-VIII-021-052bab1.pdf",
      "sumber": "Buku PPKn Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "PPKn Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/ppkn/Pendidikan-Pancasila-BS-KLS-VIII-053-084bab2.pdf",
      "sumber": "Buku PPKn Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "PPKn Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/ppkn/Pendidikan-Pancasila-BS-KLS-VIII-085-122bab3.pdf",
      "sumber": "Buku PPKn Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "PPKn Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/ppkn/Pendidikan-Pancasila-BS-KLS-VIII-123-150bab4.pdf",
      "sumber": "Buku PPKn Kelas 8 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "PPKn Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-8/ppkn/Pendidikan-Pancasila-BS-KLS-VIII-151-190bab5.pdf",
      "sumber": "Buku PPKn Kelas 8 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas9|bindo": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "B. Indonesia Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/bindo/Indonesia_BS_KLS_IX_Rev-013-060bab1.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "B. Indonesia Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/bindo/Indonesia_BS_KLS_IX_Rev-061-102bab2.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "B. Indonesia Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/bindo/Indonesia_BS_KLS_IX_Rev-103-142bab3.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "B. Indonesia Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/bindo/Indonesia_BS_KLS_IX_Rev-143-212bab4.pdf",
      "sumber": "Buku Bahasa Indonesia Kelas 9 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas9|binggris": [
    {
      "id": "bab0",
      "label": "Bab 0",
      "judul": "B. Inggris Bab 0",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/binggris/Inggris_BS_KLS_IX-025-042bab0.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "B. Inggris Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/binggris/Inggris_BS_KLS_IX-043-098bab1.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "B. Inggris Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/binggris/Inggris_BS_KLS_IX-099-172bab2.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "B. Inggris Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/binggris/Inggris_BS_KLS_IX-173-228bab3.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "B. Inggris Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/binggris/Inggris_BS_KLS_IX-229-288bab4.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "B. Inggris Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/binggris/Inggris_BS_KLS_IX-289-375bab5.pdf",
      "sumber": "Buku Bahasa Inggris Kelas 9 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas9|ipa": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "IPA Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/ipa/IPA_BS_KLS_IX_Rev-020-055bab1.pdf",
      "sumber": "Buku IPA Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "IPA Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/ipa/IPA_BS_KLS_IX_Rev-056-089bab2.pdf",
      "sumber": "Buku IPA Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "IPA Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/ipa/IPA_BS_KLS_IX_Rev-090-111bab3.pdf",
      "sumber": "Buku IPA Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "IPA Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/ipa/IPA_BS_KLS_IX_Rev-112-135bab4.pdf",
      "sumber": "Buku IPA Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab5",
      "label": "Bab 5",
      "judul": "IPA Bab 5",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/ipa/IPA_BS_KLS_IX_Rev-136-193bab5.pdf",
      "sumber": "Buku IPA Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab6",
      "label": "Bab 6",
      "judul": "IPA Bab 6",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/ipa/IPA_BS_KLS_IX_Rev-194-238bab6.pdf",
      "sumber": "Buku IPA Kelas 9 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas9|ips": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "IPS Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/ips/IPS_BS_KLS_IX_Rev-017-104bab1.pdf",
      "sumber": "Buku IPS Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "IPS Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/ips/IPS_BS_KLS_IX_Rev-105-164bab2.pdf",
      "sumber": "Buku IPS Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "IPS Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/ips/IPS_BS_KLS_IX_Rev-165-202bab3.pdf",
      "sumber": "Buku IPS Kelas 9 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas9|matematika": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "Matematika Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/matematika/Matematika_BS_KLS_IX-021-060bab1.pdf",
      "sumber": "Buku Matematika Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "Matematika Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/matematika/Matematika_BS_KLS_IX-061-154bab2.pdf",
      "sumber": "Buku Matematika Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "Matematika Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/matematika/Matematika_BS_KLS_IX-155-234bab3.pdf",
      "sumber": "Buku Matematika Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "Matematika Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/matematika/Matematika_BS_KLS_IX-235-306bab4.pdf",
      "sumber": "Buku Matematika Kelas 9 (Kurikulum Merdeka - SIBI)"
    }
  ],
  "kelas9|ppkn": [
    {
      "id": "bab1",
      "label": "Bab 1",
      "judul": "PPKn Bab 1",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/ppkn/Pendidikan-Pancasila-BS-KLS-IX-015-044bab1.pdf",
      "sumber": "Buku PPKn Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab2",
      "label": "Bab 2",
      "judul": "PPKn Bab 2",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/ppkn/Pendidikan-Pancasila-BS-KLS-IX-045-084bab2.pdf",
      "sumber": "Buku PPKn Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab3",
      "label": "Bab 3",
      "judul": "PPKn Bab 3",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/ppkn/Pendidikan-Pancasila-BS-KLS-IX-085-120bab3.pdf",
      "sumber": "Buku PPKn Kelas 9 (Kurikulum Merdeka - SIBI)"
    },
    {
      "id": "bab4",
      "label": "Bab 4",
      "judul": "PPKn Bab 4",
      "tersedia": true,
      "file": "../rag-data/pdf-bab/smp/kelas-9/ppkn/Pendidikan-Pancasila-BS-KLS-IX-121-197bab4.pdf",
      "sumber": "Buku PPKn Kelas 9 (Kurikulum Merdeka - SIBI)"
    }
  ]
};

// ─── STATE ───
let selectedKelas = "kelas7";
let selectedPelajaran = "matematika";
let selectedBab = "bab1";

// ─── INIT ───
window.addEventListener("load", () => {
  renderKelasOptions();
  renderPelajaranOptions();
  renderBabOptions();
  renderMateri();
});

function renderKelasOptions() {
  const container = document.getElementById("kelasOptions");
  container.innerHTML = "";

  DAFTAR_KELAS.forEach(kelas => {
    const hasBab = Object.keys(DAFTAR_BAB).some(key => key.startsWith(kelas.id + "|"));
    const chip = document.createElement("div");
    chip.className = "selector-chip" + (kelas.id === selectedKelas ? " active" : "") + (!hasBab ? " disabled" : "");
    chip.textContent = kelas.label + (!hasBab ? " (Segera Hadir)" : "");

    if (hasBab) {
      chip.addEventListener("click", () => {
        selectedKelas = kelas.id;
        selectedPelajaran = null;
        selectedBab = null;
        renderKelasOptions();
        renderPelajaranOptions();
        renderBabOptions();
        renderMateri();
      });
    }
    container.appendChild(chip);
  });
}

function renderPelajaranOptions() {
  const container = document.getElementById("pelajaranOptions");
  container.innerHTML = "";

  const kelasNum = selectedKelas ? parseInt(selectedKelas.replace('kelas', '')) : 0;
  const isSMPorKelas10 = kelasNum >= 7 && kelasNum <= 10;
  const spesifikIds = ['biologi', 'fisika', 'kimia', 'ekonomi', 'sejarah', 'sosiologi', 'geografi'];
  const umumIds = ['matematika', 'bindo', 'binggris', 'ppkn'];

  DAFTAR_PELAJARAN.forEach(pelajaran => {
    // Filtering logic for jurusan
    if (isSMPorKelas10) {
      // Kelas 7-10: hide spesifik, show IPA/IPS
      if (spesifikIds.includes(pelajaran.id)) return;
    } else {
      // Kelas 11-12: show spesifik, hide IPA/IPS
      if (pelajaran.id === 'ipa' || pelajaran.id === 'ips') return;
    }

    const key = selectedKelas + "|" + pelajaran.id;
    const hasBab = DAFTAR_BAB[key] && DAFTAR_BAB[key].length > 0;
    const chip = document.createElement("div");
    chip.className = "selector-chip" + (pelajaran.id === selectedPelajaran ? " active" : "") + (!hasBab ? " disabled" : "");
    chip.textContent = pelajaran.label + (!hasBab ? " (Segera Hadir)" : "");

    if (hasBab) {
      chip.addEventListener("click", () => {
        selectedPelajaran = pelajaran.id;
        const firstBab = DAFTAR_BAB[key][0];
        if (firstBab) selectedBab = firstBab.id;
        renderPelajaranOptions();
        renderBabOptions();
        renderMateri();
      });
    }
    container.appendChild(chip);
  });
}

function renderBabOptions() {
  const container = document.getElementById("babOptions");
  container.innerHTML = "";

  const key = selectedKelas + "|" + selectedPelajaran;
  const babList = DAFTAR_BAB[key] || [];

  if (babList.length === 0) {
    container.innerHTML = '<p class="subtitle" style="margin:0;">Pilih kelas dan pelajaran terlebih dahulu.</p>';
    return;
  }

  babList.forEach(bab => {
    const chip = document.createElement("div");
    chip.className = "selector-chip" + (bab.id === selectedBab ? " active" : "") + (!bab.tersedia ? " disabled" : "");
    chip.textContent = bab.label + ': ' + bab.judul + (!bab.tersedia ? " (Segera Hadir)" : "");

    if (bab.tersedia) {
      chip.addEventListener("click", () => {
        selectedBab = bab.id;
        renderBabOptions();
        renderMateri();
      });
    }
    container.appendChild(chip);
  });
}

function renderMateri() {
  const key = selectedKelas + "|" + selectedPelajaran;
  const babList = DAFTAR_BAB[key] || [];
  const bab = babList.find(b => b.id === selectedBab);

  const titleEl = document.getElementById("materiTitle");
  const subtitleEl = document.getElementById("materiSubtitle");
  const contentEl = document.getElementById("materiContent");

  if (!bab || !bab.tersedia) {
    titleEl.textContent = "📘 Pilih Materi";
    subtitleEl.textContent = "Pilih kelas, pelajaran, dan bab untuk mulai belajar.";
    contentEl.innerHTML = '<div class="belum-tersedia">📚 Pilih kombinasi kelas, pelajaran, dan bab di atas untuk menampilkan materi PDF.</div>';
    return;
  }

  const kelasLabel = DAFTAR_KELAS.find(k => k.id === selectedKelas).label;
  const pl = DAFTAR_PELAJARAN.find(p => p.id === selectedPelajaran);
  const pelajaranLabel = pl ? pl.label : selectedPelajaran;

  titleEl.textContent = '📘 ' + pelajaranLabel + ' ' + kelasLabel + ' — ' + bab.label + ': ' + bab.judul;
  subtitleEl.textContent = 'Sumber: ' + bab.sumber;

  contentEl.innerHTML = [
    '<div class="pdf-frame-wrapper">',
    '  <iframe src="' + bab.file + '" title="Materi ' + bab.judul + '"></iframe>',
    '</div>',
    '<p class="pdf-fallback">',
    '  PDF tidak tampil di perangkatmu?',
    '  <a href="' + bab.file + '" target="_blank">Buka materi di tab baru</a>',
    '</p>'
  ].join('\n');
}
