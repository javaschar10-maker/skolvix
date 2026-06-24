// feedback-personas.js
// Template feedback statis ala 6 persona guru — TANPA AI sungguhan.
// Semua kalimat sudah ditulis manual, dipilih random sesuai persona + skor.
//
// Pembagian tier berdasarkan jumlah jawaban benar (dari 10 soal):
//   rendah  -> 0-5 benar
//   sedang  -> 6-7 benar
//   tinggi  -> 8-10 benar

const FEEDBACK_TEMPLATES = {

  // ───────────────────────────────────────────────
  // 1. KAK ALEX — Si Paling Logis (gratis, default)
  // ───────────────────────────────────────────────
  kakAlex: {
    nama: "Kak Alex",
    emoji: "🧠",
    type: "Si Paling Logis",
    tinggi: [
      "Mantap, {nama}. Pemahamanmu di bab ini sudah solid. Lanjut ke bab berikutnya.",
      "{nama}, ini level paham konsep, bukan sekadar hapal. Pertahankan.",
      "Skor segini artinya kamu siap kuis lanjutan. Jangan berhenti di sini."
    ],
    sedang: [
      "{nama}, sebagian besar sudah benar. Coba ulang bagian yang salah, fokus ke konsepnya.",
      "Cukup baik, tapi masih ada celah. Review materi sebentar sebelum lanjut, {nama}.",
      "Setengah jalan menuju paham penuh. Ulangi kuis ini sekali lagi nanti, {nama}."
    ],
    rendah: [
      "{nama}, ini sinyal kamu perlu balik ke materi dulu sebelum kuis lagi.",
      "Belum nyambung sepenuhnya, {nama}. Tidak masalah — baca ulang, lalu coba lagi.",
      "Skor ini bukan akhir, {nama}. Anggap ini info: bagian mana yang perlu diperkuat."
    ]
  },

  // ───────────────────────────────────────────────
  // 2. KAK TARA — Si Pemandu Sorak
  // ───────────────────────────────────────────────
  kakTara: {
    nama: "Kak Tara",
    emoji: "📣",
    type: "Si Pemandu Sorak",
    tinggi: [
      "WOAAA {nama}!! Ini keren banget!! Kamu beneran ngerti materinya!! 🔥",
      "GASS {nama}!! Skor segini bukti kamu udah on fire!! Lanjut terus!!",
      "{nama} jangan berhenti!! Momentum kayak gini sayang banget kalau putus!!"
    ],
    sedang: [
      "{nama} udah deket banget sama sempurna!! Dikit lagi aja, semangat!!",
      "Lumayan keren nih {nama}!! Tinggal poles dikit lagi pasti makin mantap!!",
      "Good job {nama}!! Tapi masih ada ruang naik level, ayo coba lagi!!"
    ],
    rendah: [
      "{nama} gapapa banget!! Ini baru permulaan, semangat coba lagi yaa!!",
      "Santai {nama}, semua orang pernah di titik ini. Yuk bangkit lagi!!",
      "{nama} kamu udah berani coba, itu udah langkah besar!! Lanjut yuk!!"
    ]
  },

  // ───────────────────────────────────────────────
  // 3. IBU DIAN — Si Penyayang
  // ───────────────────────────────────────────────
  ibuDian: {
    nama: "Ibu Dian",
    emoji: "🌷",
    type: "Si Penyayang",
    tinggi: [
      "Bagus sekali, {nama}. Ibu lihat kamu sudah benar-benar memahami materi ini.",
      "{nama}, hasil ini menunjukkan usahamu selama ini. Terus dipertahankan ya.",
      "Ibu senang melihat hasil ini, {nama}. Kamu siap melanjutkan ke bab berikutnya."
    ],
    sedang: [
      "Tidak apa-apa, {nama}. Hasil ini sudah cukup baik, tinggal sedikit lagi disempurnakan.",
      "{nama}, kamu sudah berusaha keras. Coba pelajari lagi bagian yang masih salah ya.",
      "Ibu bangga dengan usahamu, {nama}. Mari perbaiki sedikit lagi pelan-pelan."
    ],
    rendah: [
      "Tidak apa-apa, {nama} sayang. Ini bukan tentang gagal, tapi tentang belajar lagi.",
      "{nama}, coba baca ulang materinya dengan tenang, lalu coba kuis ini lagi ya.",
      "Ibu yakin {nama} bisa lebih baik lagi. Pelan-pelan saja, tidak usah terburu-buru."
    ]
  },

  // ───────────────────────────────────────────────
  // 4. KAK REY — Si Tsundere (cuek di luar, perhatian di dalam)
  // ───────────────────────────────────────────────
  kakRey: {
    nama: "Kak Rey",
    emoji: "😒",
    type: "Si Tsundere",
    tinggi: [
      "Hmph. Lumayan, {nama}. ...Bukan berarti aku terkesan ya, cuma... cukup oke.",
      "{nama}, skor segini lumayan sih. Jangan besar kepala dulu, tapi... ya, bagus.",
      "Eh, ternyata kamu bisa juga, {nama}. Lanjutkan— tapi jangan harap aku bilang 'hebat' tiap kali."
    ],
    sedang: [
      "Yaa, segini sih lumayan, {nama}. Tapi aku tahu kamu bisa lebih dari ini.",
      "{nama}, jangan puas dulu. Masih ada yang salah, dan aku tahu kamu nggak suka setengah-setengah kan?",
      "Hmm, oke lah. Tapi aku bakal lebih senang kalau kamu coba lagi, {nama}. ...Bukan karena khawatir atau apa."
    ],
    rendah: [
      "{nama}... oke aku nggak akan marah, tapi aku juga nggak akan pura-pura ini bagus.",
      "Hmph, segini? Aku tahu kamu bisa lebih baik, {nama}. Makanya aku agak... ya, sedikit kecewa. Coba lagi.",
      "{nama}, jangan salah paham — aku komentar begini karena aku percaya kamu mampu lebih dari ini."
    ]
  },

  // ───────────────────────────────────────────────
  // 5. KAK SAGA — Si Filsuf Stoik
  // ───────────────────────────────────────────────
  kakSaga: {
    nama: "Kak Saga",
    emoji: "🌌",
    type: "Si Filsuf Stoik",
    tinggi: [
      "{nama}, hasil ini adalah cermin dari latihan yang konsisten. Bukan keberuntungan — disiplin.",
      "Pemahaman sejati lahir dari pengulangan, {nama}. Hasil ini membuktikan kamu sedang di jalan yang benar.",
      "{nama}, jangan jadikan ini puncak. Jadikan ini titik baru — tenang, tapi terus melangkah."
    ],
    sedang: [
      "{nama}, separuh dari pemahaman bukanlah kegagalan — ia adalah jembatan menuju penguasaan penuh.",
      "Setiap kesalahan adalah guru yang diam, {nama}. Dengarkan apa yang ia coba sampaikan.",
      "{nama}, hasil ini cukup untuk melanjutkan, namun jangan lupa menengok kembali apa yang terlewat."
    ],
    rendah: [
      "{nama}, kegagalan hari ini bukanlah identitasmu — ia hanya sebuah momen yang akan berlalu.",
      "Yang penting bukan seberapa jatuh kamu, {nama}, tapi seberapa tenang kamu bangkit dan mencoba lagi.",
      "{nama}, materi ini belum selesai bercerita kepadamu. Baca ulang dengan tenang, lalu temui ia lagi."
    ]
  },

  // ───────────────────────────────────────────────
  // 6. KAK VICTOR 2.0 — Si Perfeksionis
  // High-standard, pressure tinggi, motivasi dengan konotasi negatif
  // (TIDAK menyerang personal, tetap fokus pada potensi & konsekuensi pilihan)
  // ───────────────────────────────────────────────
  kakVictor: {
    nama: "Kak Victor",
    emoji: "👑",
    type: "Si Perfeksionis",
    tinggi: [
      "{nama}, ini baru permulaan. Banyak orang berhenti tepat ketika mereka mulai bagus — jangan jadi salah satu dari mereka.",
      "Bagus, {nama}. Tapi ingat: standar tinggi itu harus konsisten, bukan sesekali. Sekali kamu kembali nyaman, kamu akan tertinggal lagi.",
      "{nama}, kamu sudah membuktikan kamu mampu. Pertanyaannya — apakah kamu akan terus melakukannya, atau berhenti di titik aman dan menyesalinya nanti?"
    ],
    sedang: [
      "{nama}, ini bukan hasil buruk — tapi ini juga bukan hasil yang akan membawamu ke mana yang kamu mau. Pikirkan, mau berapa lama berada di posisi 'cukup'?",
      "Banyak orang berhenti di titik seperti ini, {nama}, lalu bertahun-tahun kemudian bertanya-tanya kenapa mereka tidak pernah jadi yang terbaik. Kamu masih punya waktu untuk tidak jadi salah satu dari mereka.",
      "{nama}, separuh paham itu rasanya nyaman sekarang. Tapi nanti, saat semua orang sudah jauh di depan, apakah kenyamanan ini masih terasa sepadan?"
    ],
    rendah: [
      "{nama}, hasil ini bukan akhir dunia — tapi kalau dibiarkan terus seperti ini, kamu akan jadi orang yang menyesali waktu yang terbuang, bukan karena tidak mampu, tapi karena tidak mencoba lebih keras saat masih ada kesempatan.",
      "Coba bayangkan, {nama}: bertahun-tahun dari sekarang, melihat ke belakang, dan menyadari momen-momen seperti inilah yang menentukan arah hidupmu — apakah kamu ingin momen ini jadi salah satu yang kamu sesali?",
      "{nama}, semua orang punya hari seperti ini. Tapi yang membedakan orang yang berhasil dan yang menyesal di ujung jalan adalah: apa yang mereka lakukan SETELAH hari seperti ini. Pilihanmu sekarang menentukan yang mana kamu akan jadi."
    ]
  }

};

/**
 * Ambil feedback random sesuai persona dan jumlah jawaban benar.
 * @param {string} personaKey - salah satu dari: kakAlex, kakTara, ibuDian, kakRey, kakSaga, kakVictor
 * @param {number} jumlahBenar - jumlah jawaban benar (dari total 10 soal)
 * @param {string} namaUser
 * @returns {string}
 */
function getFeedback(personaKey, jumlahBenar, namaUser) {
  const persona = FEEDBACK_TEMPLATES[personaKey] || FEEDBACK_TEMPLATES.kakAlex;

  let kategori = "rendah"; // 0-5 benar
  if (jumlahBenar >= 8) kategori = "tinggi";       // 8-10 benar
  else if (jumlahBenar >= 6) kategori = "sedang";  // 6-7 benar

  const list = persona[kategori];
  const template = list[Math.floor(Math.random() * list.length)];
  return `${persona.emoji} ${persona.nama}: ${template.replace("{nama}", namaUser)}`;
}

// ─────────────────────────────────────────────
// WELCOME MESSAGES — ucapan selamat datang saat login
// 10 kalimat per persona, diambil acak
// ─────────────────────────────────────────────

const WELCOME_MESSAGES = {
  kakAlex: [
    "Selamat datang kembali, {nama}. Mari lanjutkan progres belajarmu hari ini.",
    "{nama}, satu sesi belajar hari ini lebih baik daripada menunda sampai besok.",
    "Setiap materi yang kamu selesaikan hari ini akan mengurangi bebanmu di masa depan.",
    "Selamat datang, {nama}. Apa target belajarmu hari ini?",
    "Konsistensi kecil yang dilakukan berulang akan menghasilkan perubahan besar, {nama}.",
    "Mari fokus pada satu langkah berikutnya, {nama}. Tidak perlu memikirkan semuanya sekaligus.",
    "{nama}, progres yang lambat tetap lebih baik daripada tidak bergerak sama sekali.",
    "Data menunjukkan bahwa belajar rutin jauh lebih efektif daripada belajar mendadak, {nama}.",
    "Selamat datang kembali. Mari tingkatkan pemahamanmu sedikit demi sedikit.",
    "{nama}, setiap hari adalah kesempatan untuk memperkuat apa yang sudah kamu pelajari."
  ],
  kakTara: [
    "WOIII {nama}!! Senang banget lihat kamu balik lagi!! 🔥",
    "GASS BELAJAR LAGI YUKK {nama}!! 🚀",
    "Mantap!! Kamu datang lagi hari ini, {nama}!! 💪",
    "Sedikit demi sedikit tetap kemajuan, {nama}!! Jangan berhenti!!",
    "Aku suka semangatmu, {nama}!! Yuk lanjut!!",
    "Hari ini kesempatan baru buat naik level, {nama}!!",
    "Jangan kasih kendor semangatmu ya, {nama}!! 🔥",
    "Belajar hari ini = hadiah untuk dirimu di masa depan, {nama}!!",
    "Keren!! Kamu masih konsisten datang ke sini, {nama}!!",
    "OKEEEE {nama}!! Saatnya tambah ilmu lagi hari ini!!"
  ],
  ibuDian: [
    "Selamat datang kembali ya, {nama}. Semoga harimu menyenangkan.",
    "Senang sekali melihatmu datang lagi hari ini, {nama}.",
    "Tidak perlu terburu-buru, {nama}. Belajar pelan-pelan juga tidak apa-apa.",
    "Semoga hari ini ada satu hal baru yang bisa kamu pelajari, {nama}.",
    "Ibu senang kamu masih meluangkan waktu untuk belajar hari ini.",
    "Apa pun hasilmu nanti, yang penting kamu terus berusaha ya, {nama}.",
    "Mari belajar dengan tenang hari ini, {nama}.",
    "Sedikit kemajuan tetaplah kemajuan, {nama}.",
    "Ibu percaya kamu bisa memahami materi yang sedang kamu pelajari.",
    "Selamat datang kembali, {nama}. Yuk lanjutkan perjalanan belajarmu."
  ],
  kakRey: [
    "Oh, kamu datang lagi, {nama}? Ya sudah, ayo belajar.",
    "Hmph. Aku kira kamu bakal bolos hari ini.",
    "Jangan salah paham ya, {nama}. Aku cuma kebetulan ada di sini.",
    "Ya lumayanlah. Setidaknya kamu masih membuka Skolvix.",
    "Cepat mulai belajar sana, {nama}. Jangan cuma lihat-lihat doang.",
    "Aku nggak bilang aku senang lihat kamu datang lagi ya... tapi ya, lumayan.",
    "Hmph. Kalau sudah datang, sekalian belajar yang serius ya, {nama}.",
    "Jangan bikin aku kecewa hari ini, {nama}. Bukan karena aku peduli atau apa.",
    "Yaudah, ayo mulai. Kebanyakan mikir malah nggak jadi belajar.",
    "Aku penasaran sih sejauh apa kamu bisa berkembang hari ini... eh, lupakan."
  ],
  kakSaga: [
    "Selamat datang kembali, {nama}. Hari ini adalah kesempatan baru untuk bertumbuh.",
    "Pengetahuan tidak datang sekaligus, {nama}. Ia datang melalui langkah kecil yang konsisten.",
    "Bahkan satu konsep yang dipahami hari ini dapat mengubah masa depanmu.",
    "Jangan fokus pada seberapa jauh tujuanmu. Fokuslah pada langkah berikutnya.",
    "Setiap kali kamu kembali belajar, kamu sedang berinvestasi pada dirimu sendiri.",
    "Kesabaran dan disiplin selalu berjalan beriringan, {nama}.",
    "Tidak ada usaha yang benar-benar sia-sia jika ia membuatmu berkembang.",
    "Apa yang kamu pelajari hari ini mungkin menjadi solusi bagi dirimu di masa depan.",
    "Teruslah bergerak maju, walaupun perlahan.",
    "Selamat datang kembali, {nama}. Mari lanjutkan perjalanan ini dengan tenang."
  ],
  kakVictor: [
    "Kamu kembali lagi, {nama}. Bagus. Banyak orang sudah menyerah sebelum sampai sejauh ini.",
    "Masa depanmu dibentuk oleh apa yang kamu lakukan hari ini, bukan besok.",
    "Selamat datang kembali. Jangan sia-siakan kesempatan untuk berkembang.",
    "Aku harap kamu datang bukan sekadar login, tapi untuk menjadi lebih baik.",
    "Kemajuan kecil hari ini lebih berharga daripada rencana besar yang tidak pernah dimulai.",
    "Orang yang konsisten selalu mengalahkan orang yang hanya bersemangat sesaat.",
    "Jangan fokus pada alasan. Fokus pada hasil yang ingin kamu capai.",
    "Kesempatan belajar hari ini tidak akan kembali besok, {nama}.",
    "Banyak orang ingin berhasil. Sedikit yang mau bekerja untuk itu.",
    "Pilihan kecil hari ini menentukan apakah kamu akan bangga atau menyesal di masa depan."
  ]
};

/**
 * Ambil ucapan selamat datang random dari persona yang dipilih user.
 * @param {string} personaKey - key persona (kakAlex, kakTara, ibuDian, kakRey, kakSaga, kakVictor)
 * @param {string} namaUser
 * @returns {{ emoji: string, nama: string, pesan: string }}
 */
function getWelcomeMessage(personaKey, namaUser) {
  const persona = FEEDBACK_TEMPLATES[personaKey] || FEEDBACK_TEMPLATES.kakAlex;
  const messages = WELCOME_MESSAGES[personaKey] || WELCOME_MESSAGES.kakAlex;
  const template = messages[Math.floor(Math.random() * messages.length)];
  return {
    emoji: persona.emoji,
    nama: persona.nama,
    pesan: template.replace("{nama}", namaUser)
  };
}