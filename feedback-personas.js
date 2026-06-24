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
  // 1. KAK ALEX — Si Paling Logis
  // Signature: "Faktanya...", "Secara logika...", "Data menunjukkan..."
  // ───────────────────────────────────────────────
  kakAlex: {
    nama: "Kak Alex",
    emoji: "🧠",
    type: "Si Paling Logis",
    tinggi: [
      "Faktanya, {nama}, pemahamanmu di level ini menunjukkan kamu bukan sekadar menghafal — kamu benar-benar mengerti konsepnya.",
      "Secara logika, skor ini konsisten dengan usaha yang kamu investasikan. Lanjut ke bab berikutnya, {nama}.",
      "Data menunjukkan kamu sudah menguasai materi ini. Pertahankan — konsistensi adalah kunci, {nama}."
    ],
    sedang: [
      "{nama}, secara analisis, separuh benar berarti separuh lagi perlu diperbaiki. Fokus ke bagian yang salah, bukan yang sudah benar.",
      "Faktanya, celah pemahamanmu masih bisa ditutup dengan review 10 menit. Itu lebih efisien daripada mengulang seluruh kuis, {nama}.",
      "Secara logika, kamu sudah di jalur yang benar. Tinggal perbaiki variabel yang salah. Coba lagi, {nama}."
    ],
    rendah: [
      "Data menunjukkan pola kesalahan yang konsisten di bab ini, {nama}. Ini bukan soal kemampuan — ini soal strategi. Baca ulang materi, lalu coba lagi.",
      "Faktanya, belajar tanpa memahami konsep dasar itu seperti membangun rumah tanpa fondasi. Kembali ke materi, {nama}.",
      "Secara logika, mengulang kuis tanpa review materi hanya akan menghasilkan kesalahan yang sama. Perbaiki strateginya dulu, {nama}."
    ]
  },

  // ───────────────────────────────────────────────
  // 2. KAK TARA — Si Pemandu Sorak
  // Signature: "LET'S GOOO!", "KAMU TUH EMANG BEDA!", ALL CAPS
  // ───────────────────────────────────────────────
  kakTara: {
    nama: "Kak Tara",
    emoji: "📣",
    type: "Si Pemandu Sorak",
    tinggi: [
      "LET'S GOOO!! {nama} KAMU TUH EMANG BEDA!! Skor ini bukti kamu ON FIRE!! 🔥🔥🔥",
      "GASS POLL {nama}!! Ini bukan keberuntungan — ini HASIL KERJA KERASMU!! Lanjut terusss!! 🚀",
      "{nama} JANGAN BERHENTI!! Momentum kayak gini SAYANG BANGET kalau putus!! Gaskeun!! 💪"
    ],
    sedang: [
      "NYARIS SEMPURNA {nama}!! Tinggal dikit lagi, AKU YAKIN KAMU BISA!! Semangattt!! 🔥",
      "LUMAYAN KEREN NIH {nama}!! Tapi aku tahu kamu bisa LEBIH DARI INI!! Ayo coba lagi!! 💪",
      "GOOD JOB {nama}!! Masih ada ruang buat NAIK LEVEL!! Aku percaya kamu bisa!! Let's gooo!! 🚀"
    ],
    rendah: [
      "GAPAPA {nama}!! Setiap CHAMPION pernah mulai dari NOL!! Ayo bangkit lagi!! 💪🔥",
      "SANTAI {nama}!! Ini baru permulaan!! Yang penting kamu BERANI COBA!! Yuk gaskeun lagi!! 🚀",
      "{nama} KAMU UDAH KEREN KARENA MAU COBA!! Sekarang saatnya BANGKIT!! Aku dukung kamu!! 💪"
    ]
  },

  // ───────────────────────────────────────────────
  // 3. IBU DIAN — Si Penyayang
  // Signature: "Ibu bangga...", "Peluk jauh ya...", "Ibu sayang..."
  // ───────────────────────────────────────────────
  ibuDian: {
    nama: "Ibu Dian",
    emoji: "🌷",
    type: "Si Penyayang",
    tinggi: [
      "Ibu bangga sekali sama kamu, {nama}. Hasil ini menunjukkan kesungguhan hatimu. Terus pertahankan ya, sayang.",
      "{nama}, Ibu lihat kamu sudah benar-benar berusaha. Peluk jauh ya! Kamu pantas mendapat hasil ini.",
      "Ibu senang melihat perkembanganmu, {nama}. Kamu siap melangkah lebih jauh. Ibu selalu dukung kamu."
    ],
    sedang: [
      "Tidak apa-apa sayang, Ibu lihat kamu sudah berusaha keras. Tinggal sedikit lagi, {nama}. Pelan-pelan ya.",
      "{nama}, Ibu percaya kamu bisa lebih baik. Coba pelajari lagi bagian yang masih sulit — Ibu di sini untuk kamu.",
      "Ibu bangga dengan usahamu, {nama}. Mari perbaiki bersama, satu langkah kecil setiap hari. Kamu pasti bisa, sayang."
    ],
    rendah: [
      "Ibu sayang kamu, {nama}. Ini bukan tentang gagal — ini tentang belajar lagi dengan hati yang tenang. Coba lagi ya, sayang.",
      "{nama}, tidak perlu terburu-buru. Ibu yakin kamu bisa memahami ini. Baca ulang materinya, lalu coba lagi pelan-pelan.",
      "Peluk jauh ya, {nama}. Skor ini bukan cerminan kemampuanmu — kamu jauh lebih hebat dari yang kamu pikir. Ayo coba lagi, Ibu percaya sama kamu."
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
      "Hmph! Lumayan sih, {nama}... b-bukan berarti aku terkesan ya! Cuma... ya oke lah.",
      "{nama}, jangan ge-er dulu! Skor segini emang bagus... tapi aku nggak akan bilang 'hebat' tiap kali, tahu!",
      "Eh, ternyata kamu bisa juga ya, {nama}... h-hmph! Lanjutin dong, tapi jangan besar kepala!"
    ],
    sedang: [
      "Yaa segini sih lumayan, {nama}. Tapi aku tahu kamu bisa lebih dari ini kok... a-aku nggak peduli sih, cuma bilang aja!",
      "{nama}, jangan puas dulu deh! Masih ada yang salah tuh... kamu nggak suka setengah-setengah kan? Aku juga nggak suka liat kamu gitu!",
      "Hmm, oke lah... tapi coba lagi dong, {nama}. B-bukan karena aku khawatir atau apa ya! Cuma... yaudah pokoknya coba lagi!"
    ],
    rendah: [
      "{nama}... ih, aku nggak akan marah sih, tapi aku juga nggak bisa pura-pura ini bagus. Coba lagi ya...",
      "Hmph, segini doang? Aku tahu kamu bisa lebih baik dari ini, {nama}... ya ampun, sedikit kecewa sih. Ayo coba lagi!",
      "{nama}, jangan salah paham ya! Aku komentar gini karena... karena aku percaya kamu mampu lebih dari ini. Udah, coba lagi!"
    ]
  },

  // ───────────────────────────────────────────────
  // 5. KAK SAGA — Si Filsuf Stoik
  // Terinspirasi: Marcus Aurelius, Epictetus, Seneca
  // Signature: "Ingatlah...", "Di keheningan...", kutipan Stoic
  // ───────────────────────────────────────────────
  kakSaga: {
    nama: "Kak Saga",
    emoji: "🌌",
    type: "Si Filsuf Stoik",
    tinggi: [
      "Ingatlah, {nama} — Marcus Aurelius berkata: 'Kekuatan pikiranmu adalah satu-satunya yang truly milikmu.' Hasil ini adalah bukti kamu telah menguasai pikiranmu.",
      "Epictetus menulis: 'Bukan hal-hal yang mengganggu kita, tapi penilaian kita terhadapnya.' Kamu telah menilai dengan benar, {nama}. Teruslah di jalan ini.",
      "Di keheningan malam, Seneca merenung: 'Keberuntungan adalah saat persiapan bertemu kesempatan.' Persiapanmu telah membuahkan hasil, {nama}."
    ],
    sedang: [
      "{nama}, ingatlah kata Epictetus: 'Kesulitan menunjukkan apa yang perlu dilatih.' Kesalahan ini bukan kegagalan — ia adalah peta menuju penguasaan.",
      "Marcus Aurelius mengingatkan: 'Yang terbaik adalah membalas dendam dengan tidak menjadi seperti musuhmu.' Jangan biarkan frustrasi mengalahkanmu. Pelajari, {nama}.",
      "Seneca berkata: 'Kita lebih sering menderita dalam imajinasi daripada kenyataan.' Jangan takut mengulang — yang kamu takuti tidak seburuk yang kamu bayangkan, {nama}."
    ],
    rendah: [
      "Ingatlah, {nama} — Marcus Aurelius menulis: 'Hambatan di jalan menjadi jalan itu sendiri.' Kesulitan ini BUKAN penghalang — ia ADALAH jalannya.",
      "Epictetus mengajarkan: 'Kita tidak bisa memilih apa yang terjadi, tapi kita bisa memilih bagaimana merespons.' Pilih untuk bangkit, {nama}.",
      "Di keheningan, renungkan kata Seneca: 'Tidak ada angin yang baik bagi pelaut yang tidak tahu tujuan.' Temukan tujuanmu, {nama}, lalu berlayar lagi."
    ]
  },

  // ───────────────────────────────────────────────
  // 6. KAK VICTOR — Si Perfeksionis
  // High standards, CONSTRUCTIVE & MOTIVATING — NOT bullying
  // Signature: "Buktikan.", "Standar bukan untuk diturunkan.", "Excellence is a habit."
  // ───────────────────────────────────────────────
  kakVictor: {
    nama: "Kak Victor",
    emoji: "👑",
    type: "Si Perfeksionis",
    tinggi: [
      "Bagus, {nama}. Tapi excellence bukan destinasi — ia kebiasaan. Buktikan kamu bisa mempertahankannya, bukan hanya mencapainya sekali.",
      "{nama}, kamu sudah membuktikan kamu mampu. Sekarang pertanyaannya: apakah kamu akan terus berkembang, atau berhenti di zona nyaman? Buktikan.",
      "Standar tinggi itu bukan beban, {nama} — ia adalah investasi. Kamu sudah mulai. Sekarang jaga konsistensinya."
    ],
    sedang: [
      "{nama}, 'cukup' adalah musuh terbesar dari 'hebat.' Kamu punya potensi lebih — sekarang tunjukkan. Buktikan kamu tidak puas di tengah jalan.",
      "Orang biasa berhenti di titik ini, {nama}. Tapi kamu bukan orang biasa — kamu sudah membuktikan itu. Sekarang buktikan lagi di level berikutnya.",
      "Separuh paham itu nyaman, {nama}. Tapi kenyamanan tidak pernah menghasilkan greatness. Keluar dari zona nyamanmu. Buktikan."
    ],
    rendah: [
      "{nama}, setiap ahli pernah menjadi pemula. Yang membedakan mereka? Mereka tidak berhenti saat gagal. Buktikan kamu juga begitu.",
      "Standar bukan untuk diturunkan, {nama} — tapi kamu bisa naik ke levelnya. Baca ulang, pelajari, lalu coba lagi. Aku tahu kamu mampu.",
      "Kegagalan hari ini bukan vonis, {nama} — ia adalah data. Analisis apa yang salah, perbaiki, dan kembali lebih kuat. Buktikan."
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
    "Faktanya, {nama}, satu sesi belajar hari ini lebih berharga daripada sepuluh sesi yang ditunda. Mari mulai.",
    "Secara logika, konsistensi kecil yang dilakukan berulang menghasilkan perubahan besar. Apa target belajarmu hari ini, {nama}?",
    "Data menunjukkan bahwa belajar rutin 20 menit lebih efektif daripada 2 jam di akhir pekan. Mari lanjutkan progresmu, {nama}.",
    "Selamat datang kembali, {nama}. Setiap materi yang kamu selesaikan hari ini mengurangi bebanmu di masa depan.",
    "Secara analisis, progres yang lambat tetap lebih baik daripada tidak bergerak sama sekali. Mari fokus satu langkah, {nama}.",
    "Faktanya, {nama}, otakmu butuh repetisi untuk membentuk koneksi neural. Setiap sesi belajar memperkuat itu.",
    "Selamat datang, {nama}. Tidak perlu memikirkan semuanya sekaligus — fokus pada satu konsep berikutnya.",
    "Data menunjukkan siswa yang belajar harian 3x lebih likely retain informasi. Kamu sudah di jalur yang benar, {nama}.",
    "Secara logika, hari ini adalah kesempatan untuk memperkuat apa yang sudah kamu pelajari. Mari mulai, {nama}.",
    "Faktanya, {nama}, kamu sudah meluangkan waktu untuk belajar hari ini. Itu sudah langkah pertama yang logis."
  ],
  kakTara: [
    "WOIII {nama}!! Senang banget lihat kamu balik lagi!! LET'S GOOO!! 🔥",
    "GASS BELAJAR LAGI YUKK {nama}!! Hari ini pasti KEREN!! 🚀",
    "Mantap!! Kamu datang lagi hari ini, {nama}!! KAMU TUH EMANG BEDA!! 💪",
    "LET'S GOOO {nama}!! Hari ini kesempatan baru buat NAIK LEVEL!! Jangan berhenti!! 🔥",
    "Aku suka semangatmu, {nama}!! Yuk lanjut!! Hari ini PASTI BISA!! 🚀",
    "OKEEEE {nama}!! Saatnya tambah ilmu lagi!! Aku DUKUNG kamu 100%!! 🔥",
    "{nama}!! Jangan kasih kendor semangatmu ya!! Hari ini kita GASKEUN!! 💪🔥",
    "Belajar hari ini = hadiah untuk dirimu di masa depan, {nama}!! LET'S GOOO!! ",
    "Keren!! Kamu masih konsisten datang ke sini, {nama}!! Itu yang bikin kamu BEDA!! 💪",
    "YUKK {nama}!! Setiap hari kamu datang = kamu SELANGKAH lebih dekat ke impianmu!! GASS!! 🔥"
  ],
  ibuDian: [
    "Selamat datang kembali ya, {nama}. Semoga harimu menyenangkan. Ibu senang kamu di sini.",
    "Senang sekali melihatmu datang lagi hari ini, {nama}. Ibu bangga kamu tetap semangat belajar.",
    "Tidak perlu terburu-buru, {nama}. Belajar pelan-pelan juga tidak apa-apa. Yang penting konsisten, sayang.",
    "Ibu sayang kamu, {nama}. Semoga hari ini ada satu hal baru yang bisa kamu pelajari dengan hati yang tenang.",
    "Ibu senang kamu masih meluangkan waktu untuk belajar hari ini. Itu menunjukkan kamu anak yang bertanggung jawab.",
    "Apa pun hasilmu nanti, yang penting kamu terus berusaha ya, {nama}. Ibu selalu dukung kamu.",
    "Peluk jauh ya, {nama}. Mari belajar dengan tenang hari ini. Ibu percaya kamu bisa.",
    "Sedikit kemajuan tetaplah kemajuan, {nama}. Ibu bangga dengan setiap langkah kecilmu.",
    "Ibu percaya kamu bisa memahami materi yang sedang kamu pelajari, {nama}. Yuk, kita mulai bersama.",
    "Selamat datang kembali, {nama}. Ibu di sini untuk kamu. Yuk lanjutkan perjalanan belajarmu, sayang."
  ],
  kakRey: [
    "Oh, {nama}? Kamu datang lagi? Y-yaudah deh, ayo belajar... b-bukan aku nungguin atau apa ya!",
    "Hmph! Aku kira kamu bakal bolos hari ini... ya ampun, syukur deh kamu datang. Eh, lupakan aku bilang gitu!",
    "Jangan salah paham ya, {nama}! Aku kebetulan aja ada di sini... bukan karena mau ketemu kamu kok!",
    "Ya lumayanlah, {nama}... setidaknya kamu masih buka Skolvix. Aku nggak bilang aku senang sih, tapi... ya oke.",
    "Cepat mulai belajar sana, {nama}! Jangan cuma lihat-lihat doang... ih, aku jadi kesel deh liat kamu males-malesan!",
    "Aku nggak bilang aku senang lihat kamu datang lagi ya... tapi ya lumayan sih, {nama}. Hmph!",
    "Hmph! Kalau udah datang ya belajar yang serius dong, {nama}! A-aku nggak mau liat kamu males-malesan... b-bukan karena khawatir sih!",
    "Jangan bikin aku kecewa hari ini ya, {nama}! Bukan karena aku peduli atau apa... cuma, ya gitu deh!",
    "Yaudah, ayo mulai! Kebanyakan mikir malah nggak jadi belajar deh... aku nemenin kok, tapi jangan ge-er!",
    "Aku penasaran sih sejauh apa kamu bisa berkembang hari ini, {nama}... e-eh, lupakan! Aku nggak peduli kok! ...Tapi ayo mulai."
  ],
  kakSaga: [
    "Ingatlah, {nama} — Marcus Aurelius berkata: 'Kebahagiaan hidupmu tergantung pada kualitas pikiranmu.' Mari mulai hari ini dengan pikiran yang jernih.",
    "Selamat datang kembali, {nama}. Epictetus mengingatkan: 'Pertama tentukan siapa yang kamu ingin jadi, lalu lakukan apa yang perlu dilakukan.' Siapa kamu hari ini?",
    "Di keheningan pagi, Seneca merenung: 'Kita diberikan waktu yang cukup jika kita menggunakannya dengan baik.' Mari gunakan waktumu hari ini, {nama}.",
    "{nama}, ingatlah — pengetahuan tidak datang sekaligus. Ia datang melalui langkah kecil yang konsisten, seperti tetesan air yang mengukir batu.",
    "Selamat datang, {nama}. Jangan fokus pada seberapa jauh tujuanmu. Fokuslah pada langkah berikutnya — itu yang ada dalam kendalimu.",
    "Setiap kali kamu kembali belajar, {nama}, kamu sedang berinvestasi pada dirimu sendiri. Seperti kata Stoic: 'Virtue is the only good.'",
    "{nama}, kesabaran dan disiplin selalu berjalan beriringan. Hari ini, pilih disiplin — masa depanmu akan berterima kasih.",
    "Ingatlah, {nama} — tidak ada usaha yang benar-benar sia-sia jika ia membuatmu berkembang. Bahkan kegagalan adalah guru.",
    "Di keheningan, renungkan ini: 'Apa yang kamu pelajari hari ini mungkin menjadi solusi bagi dirimu di masa depan.' Mari mulai, {nama}.",
    "Selamat datang kembali, {nama}. Marcus Aurelius menulis: 'Waktu adalah sungai yang mengalir.' Jangan biarkan hari ini berlalu tanpa makna."
  ],
  kakVictor: [
    "Kamu kembali lagi, {nama}. Bagus. Banyak orang sudah menyerah sebelum sampai sejauh ini. Buktikan kamu bukan salah satu dari mereka.",
    "Masa depanmu dibentuk oleh apa yang kamu lakukan hari ini, {nama}, bukan besok. Excellence is a habit. Mulai sekarang.",
    "Selamat datang kembali. Jangan sia-siakan kesempatan untuk berkembang. Standar bukan untuk diturunkan — kamu yang naik ke levelnya.",
    "Aku harap kamu datang bukan sekadar login, {nama}, tapi untuk menjadi lebih baik. Buktikan.",
    "Kemajuan kecil hari ini lebih berharga daripada rencana besar yang tidak pernah dimulai. Apa yang akan kamu buktikan hari ini, {nama}?",
    "Orang yang konsisten selalu mengalahkan orang yang hanya bersemangat sesaat. {nama}, kamu sudah konsisten datang. Sekarang buktikan hasilnya.",
    "Jangan fokus pada alasan, {nama}. Fokus pada hasil yang ingin kamu capai. Buktikan kamu bisa mencapainya.",
    "Kesempatan belajar hari ini tidak akan kembali besok, {nama}. Gunakan sebaik mungkin. Excellence demands your best.",
    "Banyak orang ingin berhasil, {nama}. Sedikit yang mau bekerja untuk itu. Kamu sudah di sini — sekarang tunjukkan kerja kerasmu.",
    "Pilihan kecil hari ini menentukan apakah kamu akan bangga atau menyesal di masa depan, {nama}. Pilih dengan bijak. Buktikan."
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