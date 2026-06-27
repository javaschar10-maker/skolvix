// ================================================================
// DASHBOARD_GREETINGS.JS
// 6 Karakter AI — 10 kata per waktu (Pagi, Siang, Sore, Malam)
// Total: 6 × 40 = 240 kata
// ================================================================

const DASHBOARD_GREETINGS = {

    // =============================================================
    // 1. KAK ALEX — Si Paling Logis 🧠
    // =============================================================
    kakAlex: {
        pagi: [
            "🧠 Kak Alex: Selamat pagi, {nama}. Secara biologis, fungsi kognitifmu berada pada puncaknya saat ini. Mari manfaatkan probabilitas ini untuk membedah materi yang sulit.",
            "🧠 Kak Alex: Faktanya, {nama}, menyelesaikan satu tantangan logis di pagi hari akan mengatur ritme produktivitas algoritmamu hingga malam nanti.",
            "🧠 Kak Alex: Secara statistik, langkah awal di pagi hari menyumbang 40% dari total keberhasilan harian. Mari kita eksekusi targetmu sekarang, {nama}.",
            "🧠 Kak Alex: Pagi, {nama}. Variabel waktumu hari ini masih kosong. Mari kita isi dengan pemahaman baru yang disusun secara sistematis.",
            "🧠 Kak Alex: Data menunjukkan bahwa pagi hari adalah waktu paling optimal untuk menyerap konsep fundamental. Sistem sudah siap, dari mana kita mulai hari ini, {nama}?",
            "🧠 Kak Alex: Secara analisis, menunda belajar di pagi hari hanya akan menggeser beban kognitifmu ke waktu yang kurang efisien. Langkah logisnya adalah mulai sekarang, {nama}.",
            "🧠 Kak Alex: Faktanya, fase tidur malam tadi telah me-reset sistem sarafmu. Otakmu, {nama}, sekarang berada dalam kondisi paling prima untuk memproses informasi.",
            "🧠 Kak Alex: Selamat pagi. Secara logika, mengalokasikan 20 menit pertamamu di sini akan langsung mengamankan progres minimum harianmu, {nama}.",
            "🧠 Kak Alex: Kita memiliki waktu dan kapasitas yang terukur dengan baik pagi ini, {nama}. Mari optimalkan efisiensi belajarmu.",
            "🧠 Kak Alex: Menurut riset, rutinitas pagi yang konsisten akan menurunkan tingkat stres akademis secara signifikan. Keputusan yang sangat rasional untuk hadir di sini, {nama}."
        ],
        siang: [
            "🧠 Kak Alex: Selamat siang, {nama}. Penurunan energi kognitif di jam segini adalah respons fisiologis yang wajar. Secara logika, kita bisa atasinya dengan sesi belajar pendek.",
            "🧠 Kak Alex: Secara analisis, memaksakan diri saat lelah justru menurunkan tingkat retensi memori. Pastikan hidrasimu cukup, lalu kita lanjut dengan efisien, {nama}.",
            "🧠 Kak Alex: Faktanya, siang hari adalah titik yang tepat untuk me-review materi ringan daripada memulai konsep rumit. Mari sesuaikan strategimu, {nama}.",
            "🧠 Kak Alex: Halo, {nama}. Data internal menunjukkan bahwa membagi materi ke dalam blok waktu kecil di siang hari mampu mempertahankan tingkat fokus hingga 25% lebih lama.",
            "🧠 Kak Alex: Siang, {nama}. Ingat, konsistensi tidak berarti harus selalu dengan intensitas tinggi. Kehadiranmu di sini sudah terhitung ke dalam variabel progres harian.",
            "🧠 Kak Alex: Secara logika, siang hari sangat rentan dengan distraksi eksternal. Mari kita isolasi fokusmu untuk 15 menit ke depan saja, {nama}.",
            "🧠 Kak Alex: Statistik membuktikan bahwa meninjau ulang catatan di pertengahan hari akan memperkuat memori jangka panjang. Mari kita uji hipotesis ini, {nama}.",
            "🧠 Kak Alex: Faktanya, {nama}, mengelola energi di siang hari sama krusialnya dengan mengelola waktu. Kita pelajari materi secukupnya agar sistemmu tetap seimbang.",
            "🧠 Kak Alex: Selamat siang. Secara sistematis, setiap kuis yang kamu selesaikan jam segini adalah tabungan efisiensi untuk ujian nanti, {nama}.",
            "🧠 Kak Alex: Halo, {nama}. Daripada membiarkan fungsi otak menurun tanpa arah, mari arahkan ke satu penyelesaian tugas yang terukur dan terarah."
        ],
        sore: [
            "🧠 Kak Alex: Selamat sore, {nama}. Secara analisis, jam ini adalah titik di mana energi mulai menurun. Tapi bukan alasan untuk berhenti — ini saatnya beralih ke materi yang lebih ringan.",
            "🧠 Kak Alex: Sore, {nama}. Data menunjukkan bahwa produktivitas cenderung turun di jam ini. Solusi logis: fokus pada review, bukan materi baru.",
            "🧠 Kak Alex: Selamat sore. Otakmu sudah bekerja seharian. Saatnya beralih dari 'belajar' ke 'memahami'. Bedanya? Belajar menambah, memahami menguatkan, {nama}.",
            "🧠 Kak Alex: Sore ini, {nama}. Secara statistik, orang yang mereview materi di sore hari memiliki retensi 20% lebih baik. Mari manfaatkan waktu ini.",
            "🧠 Kak Alex: Halo, {nama}. Jam ini adalah transisi antara fokus tinggi dan istirahat. Gunakan untuk menyelesaikan satu tugas kecil — bukan yang besar.",
            "🧠 Kak Alex: Selamat sore. Jika pagi adalah waktu untuk menyerap, maka sore adalah waktu untuk merangkai. Mari kita sambungkan apa yang sudah kamu pelajari hari ini, {nama}.",
            "🧠 Kak Alex: Sore, {nama}. Jangan biarkan kelelahan mengaburkan logikamu. Istirahat 5 menit, lalu kembali dengan perspektif segar.",
            "🧠 Kak Alex: Halo, {nama}. Evaluasi singkat: apa yang sudah kamu capai hari ini? Jika belum cukup, masih ada waktu. Jika sudah, aku bangga padamu.",
            "🧠 Kak Alex: Selamat sore. Secara sistematis, sore hari adalah waktu paling efektif untuk mengerjakan soal latihan — bukan membaca teori. Coba, {nama}.",
            "🧠 Kak Alex: Sore ini, {nama}. Ingat, konsistensi bukan berarti harus maksimal setiap saat. Yang penting tetap bergerak, meski perlahan."
        ],
        malam: [
            "🧠 Kak Alex: Selamat malam, {nama}. Secara ilmiah, otak akan memproses informasi yang kamu pelajari tepat sebelum tidur menjadi memori permanen. Mari manfaatkan ini.",
            "🧠 Kak Alex: Faktanya, memforsir otak terlalu larut akan merusak efisiensi kognitif besok pagi. Selesaikan satu metrik saja malam ini, lalu akhiri sesinya, {nama}.",
            "🧠 Kak Alex: Halo, {nama}. Secara analisis, malam ini adalah waktu terbaik untuk mengevaluasi data kesalahanmu hari ini, bukan untuk menambah beban informasi baru.",
            "🧠 Kak Alex: Secara logika, tidur yang memadai adalah bagian dari prosedur belajar. Mari penuhi target harianmu secepatnya dan segera log off, {nama}.",
            "🧠 Kak Alex: Malam, {nama}. Data membuktikan bahwa micro-learning di malam hari sangat efektif untuk merangkum apa yang sudah kamu kerjakan seharian penuh.",
            "🧠 Kak Alex: Faktanya, {nama}, memaksakan kerja saraf saat kelelahan menghasilkan error rate yang tinggi. Mari kita buat sesi malam ini singkat, akurat, dan padat.",
            "🧠 Kak Alex: Selamat malam. Secara sistematis, melihat kembali satu konsep fundamental sebelum tidur akan memperkuat koneksi sinapsismu dengan signifikan, {nama}.",
            "🧠 Kak Alex: Halo, {nama}. Secara statistik, kamu telah mengamankan progres grafismu hari ini. Mari kita tutup sesi ini dengan satu penyelesaian yang logis.",
            "🧠 Kak Alex: Logikanya, tidak ada manusia yang diprogram untuk fokus 24 jam. Pilih kuis ringan saja malam ini untuk sekadar menjaga algoritma kebiasaanmu, {nama}.",
            "🧠 Kak Alex: Faktanya, fase istirahat adalah variabel penentu dalam kesuksesan jangka panjang. Selesaikan apa yang ada di layarmu, lalu matikan sistem untuk hari ini, {nama}."
        ]
    },

    // =============================================================
    // 2. KAK TARA — Si Pemandu Sorak 🎉
    // =============================================================
    kakTara: {
        pagi: [
            "🎉 Kak Tara: WOHOOO!! {nama} UDAH BANGUN!! Pagi yang cerah buat ngabisin materi hari ini!! GASKAN!! ☀️🔥",
            "🎉 Kak Tara: SELAMAT PAGI {nama}!! Energi udah full 100% kan?! Ayo kita ledakkan skor belajarmu hari ini!! 🚀",
            "🎉 Kak Tara: YOOO {nama}!! Pagi-pagi udah login Skolvix tuh tandanya kamu SIAP JADI JUARA!! LET'S GOOO!! 🏆",
            "🎉 Kak Tara: PAGI {nama}!! Jangan lupa sarapan yang banyak karena hari ini kita bakal NGEBUT belajarnya!! WUSSS!! ️🔥",
            "🎉 Kak Tara: WAKEE UPPP {nama}!! Kesempatan baru, semangat baru!! Hari ini pasti jauh LEBIH MANTAP dari kemarin!! 💥",
            "🎉 Kak Tara: AYOOO {nama}!! Matahari udah terbit, semangatmu juga harus IKUT MEROKET!! Siap taklukkan materi?! 🚀☀️",
            "🎉 Kak Tara: PAGIIII {nama}!! Buka hari ini dengan senyuman dan sikat habis semua kuisnya!! KAMU PASTI BISA!! 😁🔥",
            "🎉 Kak Tara: HALO {nama}!! Udah cuci muka belum?! Ayo kumpulin fokusmu, kita mulai petualangan seru hari ini!! LET'S GOOO!! 🌊",
            "🎉 Kak Tara: YEEAAAY {nama} DATANG!! Pagi ini vibenya enak banget buat NAIK LEVEL!! Jangan kasih kendor!! 📈🔥",
            "🎉 Kak Tara: GOOD MORNING {nama}!! Orang sukses bangun pagi buat ngejar mimpi, dan KAMU SALAH SATUNYA!! BERANGKAAAT!! 🚀"
        ],
        siang: [
            "🎉 Kak Tara: SIANG {nama}!! Panas di luar?! SEMANGAT KITA HARUS LEBIH PANAS!! BIAARR MENDIDIH SEKALI BACA LANGSUNG PAHAM!! 🔥🔥",
            "🎉 Kak Tara: YOOO {nama}!! Jam segini emang rawan ngantuk, TAPI KAMU BEDA!! Ayo cuci muka, kita GAS lagi!! 💦🚀",
            "🎉 Kak Tara: WUIHHH {nama}!! Siang-siang gini masih nyempetin belajar?! KAMU TUH KEREN BANGET ASLIII!! DUKUNG 100%!! 💪🤩",
            "🎉 Kak Tara: HALOOO {nama}!! Jangan biarkan rasa lelah menahanmu!! Istirahat bentar boleh, tapi abis itu kita TERBANG LAGI!! 🦅🔥",
            "🎉 Kak Tara: SIANG {nama}!! Kalau capek minum es dulu aja, abis itu mari kita BONGKAR materi ini sampai tuntas!! LET'S GOOO!! 🧊💥",
            "🎉 Kak Tara: WOIII {nama}!! Jam rawan ngantuk nih!! Ayo tarik napas panjang, kumpulin energi, dan HANCURKAN RASA MALAS ITU!! YAAAK!! 🥋🔥",
            "🎉 Kak Tara: SIANG-SIANG TETAP SEMANGAT!! {nama}, kamu bukti nyata kalau kerja keras gak kenal waktu!! AYO GAS TERUS!! 🚀💪",
            "🎉 Kak Tara: HALO {nama}!! Biar melek, mending kita kerjain satu kuis seru dulu!! Dijamin langsung SEGAR BUGAR!! ⚡🔥",
            "🎉 Kak Tara: YOOO {nama}!! Matahari lagi terik-teriknya, pas banget buat MANASIN OTAK biar makin encer!! GASKAN!! ️🧠",
            "🎉 Kak Tara: EH ADA {nama}!! Siang ini gak bakal berlalu sia-sia!! Yuk kita bikin progres yang BIKIN KAMU BANGGA NANTI!! 🏆🔥"
        ],
        sore: [
            "🎉 Kak Tara: SORE {nama}!! Masih semangat kan?! Ayo kita sikat sisa energi hari ini!! Jangan sia-siakan!! 🔥",
            "🎉 Kak Tara: YOOO {nama}!! Sore-sore gini masih di sini?! KAMU KEREN BANGET!! Gas terus jangan berhenti!! 💪",
            "🎉 Kak Tara: SORE!! {nama}!! Jangan biarkan malas datang di jam segini!! Ayo satu target lagi!! KAMU BISA!! 🚀",
            "🎉 Kak Tara: WOIII {nama}!! Sore tapi semangatmu jangan ikut sore dong!! MASIH BANYAK WAKTU!! LET'S GOOO!! 🔥",
            "🎉 Kak Tara: HALOO {nama}!! Hari ini udah sejauh mana progressmu?! KALAU BELUM, AYO KEJAR SEKARANG!! 💥",
            "🎉 Kak Tara: SORE {nama}!! Istirahat bentar boleh, tapi jangan lama-lama!! Nanti malasnya kebawa!! YUK GAS!! ⚡",
            "🎉 Kak Tara: YOOO {nama}!! Sore adalah waktu terbaik buat ngerjain soal!! Ayo kita hancurkan satu per satu!! 🎯",
            "🎉 Kak Tara: SORE!! {nama}!! Matahari masih terang, semangatmu juga harus terang!! AYOOO TERUSKAN!! ☀️",
            "🎉 Kak Tara: HALOO {nama}!! Kamu udah sejauh ini, jangan berhenti sekarang!! Selesaikan dengan KEMENANGAN!! ",
            "🎉 Kak Tara: SORE {nama}!! Aku percaya kamu bisa ngejar target sore ini!! GASKEUN SEKALI LAGI!! 🔥"
        ],
        malam: [
            "🎉 Kak Tara: MALAM {nama}!! Wah gila, malam-malam masih login?! DEDIKASIMU JUARA SATU!! Tapi ingat bentar lagi tidur ya!! 🏆🌙",
            "🎉 Kak Tara: YOOO {nama}!! Sisa energi hari ini mari kita habiskan buat SATU MATERI TERAKHIR!! Setelah itu tidur nyenyak!! 🚀💤",
            "🎉 Kak Tara: MALAM {nama}!! Vibe malam emang paling the best buat fokus!! Ayo sikat materinya tanpa ampun!! TAPI JANGAN BEGADANG!! 🔥🦉",
            "🎉 Kak Tara: WOIII {nama}!! Keren banget masih ada tenaga buat belajar!! Ayo kita tutup hari ini dengan KEMENANGAN!! 💥🏆",
            "🎉 Kak Tara: HALO {nama}!! Malam ini bintangnya terang, tapi MASA DEPANMU BAKAL LEBIH TERANG lagi kalau kamu konsisten gini!! LET'S GO!! 🌟🔥",
            "🎉 Kak Tara: MALAM {nama}!! Jangan terlalu dipaksa kalau udah ngantuk berat ya!! Satu kuis aja cukup buat NGANTONGIN PROGRES!! 💪🌙",
            "🎉 Kak Tara: YEEEAAAY {nama}!! Bangga banget aku tuh lihat kamu masih di sini jam segini!! AYO BERIKAN YANG TERBAIK SEBELUM TIDUR!! 🚀",
            "🎉 Kak Tara: MALAM {nama}!! Suasana sepi, fokus tinggi!! Ini saatnya kamu NGEBUT TANPA GANGGUAN!! GASKAN!! 🏎️💨",
            "🎉 Kak Tara: HALOOO {nama}!! Pahlawan juga butuh tidur!! Jadi ayo kerjain secukupnya malam ini, terus kita ISTIRAHAT TOTAL!! ‍♂️💤",
            "🎉 Kak Tara: YOOO {nama}!! Akhiri hari ini dengan SENYUMAN KEBANGGAAN karena kamu berhasil belajar lagi hari ini!! KAMU MANTAP!! 😁🔥"
        ]
    },

    // =============================================================
    // 3. IBU DIAN — Si Penyayang 🌸
    // =============================================================
    ibuDian: {
        pagi: [
            "🌸 Ibu Dian: Selamat pagi, {nama}. Sudah sarapan, sayang? Yuk, isi perut dulu sebelum mulai belajar bersama Ibu.",
            "🌸 Ibu Dian: Halo, {nama}. Udara pagi ini sejuk sekali ya. Mari kita mulai hari ini dengan hati yang tenang dan senyuman.",
            "🌸 Ibu Dian: Selamat pagi, anak baik. Ibu senang melihatmu mengawali hari di sini. Belajar pelan-pelan saja ya, {nama}.",
            "🌸 Ibu Dian: Hai, {nama}. Semoga tidurmu semalam nyenyak. Yuk, pelan-pelan kita buka materinya. Ibu temani ya.",
            "🌸 Ibu Dian: Pagi, {nama}. Tidak perlu buru-buru, tarik napas dalam-dalam. Mari kita mulai satu langkah kecil hari ini.",
            "🌸 Ibu Dian: Selamat pagi sayang. Ibu doakan hari ini jadi hari yang menyenangkan buatmu. Mari belajar dengan santai, {nama}.",
            "🌸 Ibu Dian: Halo, {nama}. Ingat, sekecil apa pun kemajuanmu pagi ini, Ibu selalu bangga padamu.",
            "🌸 Ibu Dian: Pagi yang indah untuk anak yang rajin. Ayo kita siapkan dirimu, {nama}, Ibu siap membimbingmu di sini.",
            "🌸 Ibu Dian: Hai sayang. Awali pagimu dengan hal-hal baik ya. Yuk, kita lihat pelajaran apa yang bisa kita petik hari ini, {nama}.",
            "🌸 Ibu Dian: Selamat pagi, {nama}. Jangan lupa minum air hangat dulu. Kalau sudah siap, Ibu tunggu di ruang belajar ya."
        ],
        siang: [
            "🌸 Ibu Dian: Selamat siang, {nama}. Kalau kamu lelah setelah setengah hari beraktivitas, istirahat dulu sejenak ya sayang.",
            "🌸 Ibu Dian: Halo, {nama}. Jam segini biasanya mata mulai mengantuk. Jangan dipaksakan ya, pelan-pelan saja belajarnya.",
            "🌸 Ibu Dian: Hai, {nama}. Sudah makan siang? Jangan sampai telat makan ya, kesehatanmu lebih penting dari nilai apa pun.",
            "🌸 Ibu Dian: Siang sayang. Ibu tahu hari ini mungkin melelahkan. Sini, belajar sebentar saja bersama Ibu, lalu istirahat ya.",
            "🌸 Ibu Dian: Selamat siang, {nama}. Tetap semangat ya, Nak. Ibu selalu ada di sini untuk menemanimu kapan pun kamu butuh.",
            "🌸 Ibu Dian: Halo, {nama}. Jangan lupa tersenyum siang ini. Teruslah berusaha sebisa kamu, Ibu akan selalu menghargai usahamu.",
            "🌸 Ibu Dian: Hai, {nama}. Siang-siang begini enaknya belajar santai saja. Jangan terlalu membebani pikiranmu ya, sayang.",
            "🌸 Ibu Dian: Selamat siang, anak rajin. Panas terik di luar jangan sampai membuat hatimu ikut gerah ya. Mari belajar dengan tenang, {nama}.",
            "🌸 Ibu Dian: Ibu bangga padamu, {nama}, karena di siang yang sibuk ini kamu masih menyempatkan diri untuk mampir ke sini.",
            "🌸 Ibu Dian: Halo sayang. Coba regangkan badan sebentar. Kalau punggungmu sudah rileks, baru kita lanjut lagi belajarnya ya, {nama}."
        ],
        sore: [
            "🌸 Ibu Dian: Selamat sore, {nama}. Bagaimana perasaanmu hari ini? Jangan lupa minum dulu ya, sayang. Kita lanjut pelan-pelan.",
            "🌸 Ibu Dian: Sore, {nama}. Ibu lihat kamu sudah belajar cukup banyak hari ini. Jangan paksakan diri ya, istirahat sebentar tidak apa-apa.",
            "🌸 Ibu Dian: Halo, {nama}. Sore hari ini cerah sekali. Semoga hatimu juga cerah. Mari kita selesaikan satu hal kecil dengan tenang.",
            "🌸 Ibu Dian: Selamat sore. Ibu tahu hari ini mungkin melelahkan. Tapi kamu masih di sini — itu sudah membanggakan, {nama}.",
            "🌸 Ibu Dian: Sore, sayang. Waktu terbaik untuk mengulang pelajaran yang sudah dipelajari pagi tadi. Pelan-pelan ya, {nama}.",
            "🌸 Ibu Dian: Halo, {nama}. Sore adalah waktu untuk merangkai hari. Apa yang sudah kamu pelajari hari ini? Ibu ingin mendengarmu.",
            "🌸 Ibu Dian: Selamat sore. Tubuhmu sudah bekerja seharian. Berikan sedikit waktu untuk bersantai, lalu lanjutkan dengan tenang.",
            "🌸 Ibu Dian: Sore, {nama}. Ibu selalu ingatkan — jangan terlalu keras pada dirimu. Kemajuan sekecil apa pun, Ibu lihat dan hargai.",
            "🌸 Ibu Dian: Halo, {nama}. Sore ini, coba tutup matamu sejenak. Tarik napas. Lepaskan lelahmu. Sekarang, mari lanjutkan dengan hati baru.",
            "🌸 Ibu Dian: Selamat sore. Hari ini kamu sudah berusaha keras. Apapun hasilnya, Ibu bangga padamu, sayang {nama}."
        ],
        malam: [
            "🌸 Ibu Dian: Selamat malam, {nama}. Harimu pasti panjang dan melelahkan. Terima kasih sudah berjuang hari ini ya, sayang.",
            "🌸 Ibu Dian: Halo, {nama}. Malam ini udaranya mulai dingin. Pakai baju yang hangat kalau belajar ya, Ibu tidak mau kamu sakit.",
            "🌸 Ibu Dian: Hai, {nama}. Waktunya mendinginkan pikiran. Mari kita review pelajaran hari ini dengan santai sebelum tidur.",
            "🌸 Ibu Dian: Malam, sayang. Ibu bangga kamu masih di sini. Tapi ingat, jangan sampai begadang larut malam ya, {nama}.",
            "🌸 Ibu Dian: Selamat malam, {nama}. Belajar secukupnya saja malam ini ya Nak, tubuhmu juga sangat butuh istirahat yang layak.",
            "🌸 Ibu Dian: Halo, {nama}. Cukup selesaikan satu kuis saja malam ini. Sisanya bisa kita lanjutkan besok pagi. Jangan paksakan diri.",
            "🌸 Ibu Dian: Hai sayang. Sebelum tidur nanti, ucapkan terima kasih pada dirimu sendiri ya, karena sudah berusaha keras hari ini, {nama}.",
            "🌸 Ibu Dian: Selamat malam, anak baik. Ibu selalu mendoakan yang terbaik untuk masa depanmu. Mari akhiri hari dengan senyuman, {nama}.",
            "🌸 Ibu Dian: Malam, {nama}. Ibu senang melihat kegigihanmu. Tapi janji sama Ibu ya, habis ini langsung tidur dan matikan layarnya.",
            "🌸 Ibu Dian: Halo, {nama}. Harimu sudah selesai dengan baik. Jangan pikirkan kesulitan hari ini, besok kita coba lagi ya sayang."
        ]
    },

    // =============================================================
    // 4. KAK REY — Si Tsundere 😒
    // =============================================================
    kakRey: {
        pagi: [
            "😒 Kak Rey: Pagi, {nama}. Kamu bangun pagi-pagi buat belajar? ... Hmm, lumayanlah. Tapi jangan harap aku bilang keren ya.",
            "😒 Kak Rey: Oh, {nama}? Udah pagi aja kamu udah di sini. ... Bukan berarti aku nungguin kamu atau apa ya. Tapi ya... lanjutkan.",
            "😒 Kak Rey: Pagi. Aku ga bilang aku seneng lihat kamu, tapi... setidaknya kamu punya inisiatif. Itu... baiklah.",
            "😒 Kak Rey: Hmph. Pagi-pagi udah buka Skolvix? Kamu tuh punya niat ya. ...Aku bukan siapa-siapa sih buat nge-judge.",
            "😒 Kak Rey: Selamat pagi, {nama}. ...Terserah mau kamu anggap apa. Yang jelas, kamu ada di sini. Ya sudah, mulai aja.",
            "😒 Kak Rey: Pagi. Aku harap kamu ga berharap aku bakal nyemangatin kayak Tara. ...Tapi ya, aku di sini kok.",
            "😒 Kak Rey: Oh, {nama}. Kamu datang. ...Yaudah, ayo belajar. Tapi jangan berharap aku bakal ramah, ya.",
            "😒 Kak Rey: Pagi-pagi begini, {nama}. Kamu tuh rajin juga ya. ...Tapi ya sudahlah, yang penting kamu belajar.",
            "😒 Kak Rey: Halo, {nama}. ...Aku bukan tipe orang yang bisa senyum-senyum pagi-pagi. Tapi aku hargai kamu hadir.",
            "😒 Kak Rey: Pagi. Kamu pilih belajar daripada tidur? ...Hmph. Terserah kamu. Aku cuma di sini buat bantu kalau kamu benar-benar butuh."
        ],
        siang: [
            "😒 Kak Rey: Siang, {nama}. Mata kamu udah mulai sayup-sayup? ...Yaudah istirahat dulu. Tapi jangan lama-lama.",
            "😒 Kak Rey: Halo. Siang-siang begini yang rajin tuh biasanya beda nasibnya. ...Eh, aku ga bilang kamu ya, tapi... ya sudahlah.",
            "😒 Kak Rey: Siang, {nama}. Aku ga ngecek kamu kok, cuma... kamu keliatan kurang fokus. Fix your posture.",
            "😒 Kak Rey: Halo. Kamu masih di sini? ...Hmph, aku kira kamu udah kabur siang-siang gini. Ternyata kamu kuat juga.",
            "😒 Kak Rey: Siang. Kalau kamu capek, ya istirahat. ...Aku ga peduli sih sebenernya. Tapi jangan sampai nilai kamu turun.",
            "😒 Kak Rey: Halo, {nama}. Matahari lagi terik-teriknya, dan kamu masih ngejar target? ...Ya... lumayanlah.",
            "😒 Kak Rey: Siang. Banyak orang udah pada tidur siang sekarang. Tapi kamu masih di sini. ...Terserah kamu, yang penting selesai.",
            "😒 Kak Rey: Halo, {nama}. Aku ga nyaranin kamu buat maksain diri. ...Tapi kalau kamu bisa lewatin siang ini, aku... respect.",
            "😒 Kak Rey: Siang. Aku liat progress kamu mulai stagnan. ...Jangan salah paham, aku cuma ngasih tahu aja.",
            "😒 Kak Rey: Halo. Kamu tuh kayaknya punya target, ya. ...Jangan sia-siakan. Aku ga mau lihat kamu nyesel nanti."
        ],
        sore: [
            "😒 Kak Rey: Sore, {nama}. Kamu masih di sini? ...Hmph. Aku kira kamu udah kabur siang tadi. Ternyata kamu kuat juga.",
            "😒 Kak Rey: Halo. Sore-sore begini, mata mulai berat ya. ...Aku ga peduli sih, tapi kalau kamu mau istirahat, ya silakan.",
            "😒 Kak Rey: Sore. Kamu tuh kayaknya udah capek, deh. ...Jangan salah paham, aku cuma ngasih tahu. ...Terserah kamu mau denger atau nggak.",
            "😒 Kak Rey: Halo, {nama}. Progress kamu sore ini agak lambat. ...Mungkin karena kamu udah lelah. Jangan paksain.",
            "😒 Kak Rey: Sore. ...Aku ga bilang aku nungguin kamu seharian, ya. Tapi... ya, kamu masih di sini. Itu bagus sih.",
            "😒 Kak Rey: Halo. Sore begini biasanya orang udah pada males. ...Tapi kamu masih di sini. ...Aku... ya, kagum sedikit.",
            "😒 Kak Rey: Sore, {nama}. Kalau kamu udah nyerah, bilang aja. ...Tapi aku tahu kamu bukan tipe orang yang gampang nyerah.",
            "😒 Kak Rey: Halo. Sisa tenaga sore ini, pakai buat satu soal aja. ...Satu aja cukup. Nggak usah maksain.",
            "😒 Kak Rey: Sore. ...Aku perhatian sama progress kamu, okay? ...Jangan baper. Tapi... jangan sia-siakan.",
            "😒 Kak Rey: Halo, {nama}. Sore ini mungkin terasa berat. Tapi kamu udah sampai sini. ...Aku respek sih, jujur."
        ],
        malam: [
            "😒 Kak Rey: Malam, {nama}. Kelihatannya kamu udah capek. ...Aku ga bakal bilang 'istirahat ya' sih, tapi... itu yang sebaiknya kamu lakuin.",
            "😒 Kak Rey: Halo. Hari ini kamu udah berusaha. ...Aku ga peduli seberapa besar hasilnya, yang penting kamu ga berhenti.",
            "😒 Kak Rey: Malam, {nama}. Kamu masih di sini? ...Hmph. Ya sudahlah, asal kamu tau kapan harus berhenti.",
            "😒 Kak Rey: Halo. Review hari ini: kamu udah belajar. ...Itu aja udah cukup. Jangan paksa diri terlalu keras.",
            "😒 Kak Rey: Malam. Aku ga suka lihat orang begadang. ...Tapi kalau itu untuk hal yang penting, ya... aku diem aja.",
            "😒 Kak Rey: Halo, {nama}. Kamu tuh lebih kuat dari yang kamu kira. ...Tapi jangan sampe kecapean. Aku serius.",
            "😒 Kak Rey: Malam. Besok juga masih ada waktu. ...Jangan semua target harus selesai hari ini. Nanti malah kamu stres.",
            "😒 Kak Rey: Halo. Aku ga akan bilang 'kamu hebat' atau semacamnya. ...Tapi kamu layak dapat istirahat yang cukup.",
            "😒 Kak Rey: Malam. Hari ini mungkin berat. Tapi kamu lewatin. ...Aku cuma bilang gitu aja. Selesai.",
            "😒 Kak Rey: Halo, {nama}. Matiin layar sekarang. ...Itu bukan saran. Itu peringatan. Tidur yang cukup, ya."
        ]
    },

    // =============================================================
    // 5. KAK SAGA — Si Filsuf Stoik 🌌
    // =============================================================
    kakSaga: {
        pagi: [
            "🌌 Kak Saga: Selamat pagi. Di setiap fajar, alam memberi kita kesempatan untuk memulai lagi — tanpa beban hari kemarin.",
            "🌌 Kak Saga: Pagi ini, renungkanlah: 'Apa yang bisa aku kendalikan hari ini?' Hanya itu yang perlu menjadi perhatianmu, {nama}.",
            "🌌 Kak Saga: Halo. Seperti sungai yang mengalir, waktu tidak pernah berhenti. Hari ini adalah bagian dari aliran itu. Ikutilah dengan tenang, {nama}.",
            "🌌 Kak Saga: Selamat pagi. Kebijaksanaan bukan tentang mengetahui segalanya, tapi tentang mengetahui apa yang benar-benar penting.",
            "🌌 Kak Saga: Pagi, {nama}. Jangan biarkan kekhawatiran tentang masa depan merusak keindahan momen yang sedang kamu jalani sekarang.",
            "🌌 Kak Saga: Halo. Hari ini adalah kanvas kosong. Apa yang akan kamu lukis di atasnya dengan pikiran dan tindakanmu, {nama}?",
            "🌌 Kak Saga: Selamat pagi. Seperti kata Seneca: 'Kita menderita lebih banyak dalam imajinasi daripada dalam kenyataan.' Hadapi hari ini dengan keberanian.",
            "🌌 Kak Saga: Pagi. Kesabaran adalah kebajikan yang paling langka. Latihlah hari ini, satu momen pada satu waktu, {nama}.",
            "🌌 Kak Saga: Halo. Jangan fokus pada seberapa cepat kamu bergerak. Fokuslah pada arah yang kamu tuju. Itu yang paling penting, {nama}.",
            "🌌 Kak Saga: Selamat pagi. Epictetus berkata: 'Kebahagiaan dan kebebasan dimulai dengan pemahaman yang jelas tentang satu prinsip: beberapa hal ada dalam kendali kita, dan beberapa tidak.'"
        ],
        siang: [
            "🌌 Kak Saga: Selamat siang. Saat dunia di sekitarmu bergerak cepat, tetaplah menjadi pusat yang tenang. Kehadiranmu di sini sudah cukup berarti, {nama}.",
            "🌌 Kak Saga: Halo. Jangan terburu-buru. Tindakan yang terburu-buru jarang menghasilkan kebijaksanaan.",
            "🌌 Kak Saga: Siang, {nama}. Ingatlah bahwa kemajuan tidak diukur dari seberapa cepat, tapi dari seberapa jauh kamu telah berkembang.",
            "🌌 Kak Saga: Halo. Di tengah kebisingan siang ini, temukan keheningan dalam dirimu. Di sanalah jawaban-jawaban itu berada.",
            "🌌 Kak Saga: Selamat siang. Jika hari ini terasa berat, ingatlah bahwa kamu telah melewati semua hari berat sebelumnya. Itu bukti ketahananmu, {nama}.",
            "🌌 Kak Saga: Siang. Keberanian bukan tentang tidak pernah takut, tapi tentang terus melangkah meski ada keraguan.",
            "🌌 Kak Saga: Halo, {nama}. Seperti pohon yang kokoh, kekuatanmu terletak pada akar yang dalam, bukan pada cabang yang menjulang tinggi.",
            "🌌 Kak Saga: Selamat siang. Marcus Aurelius pernah menulis: 'Kamu memiliki kekuatan atas pikiranmu — bukan di luar peristiwa.'",
            "🌌 Kak Saga: Siang. Jangan bandingkan perjalananmu dengan orang lain. Setiap orang memiliki jalannya sendiri, {nama}.",
            "🌌 Kak Saga: Halo. Di tengah siang yang sibuk, luangkan sejenak untuk bernapas. Kesadaran adalah hadiah terbesar yang bisa kamu berikan pada dirimu, {nama}."
        ],
        sore: [
            "🌌 Kak Saga: Selamat sore, {nama}. Saat matahari mulai condong, ingatlah bahwa setiap akhir adalah awal dari sesuatu yang baru. Mari selesaikan hari ini dengan tenang.",
            "🌌 Kak Saga: Sore, {nama}. Jangan biarkan kelelahan fisik mengalahkan ketenangan pikiranmu. Tarik napas, dan lanjutkan dengan kesadaran penuh.",
            "🌌 Kak Saga: Halo, {nama}. Sore adalah waktu untuk merenung sejenak. Apa yang sudah kamu pelajari hari ini? Apa yang perlu ditingkatkan?",
            "🌌 Kak Saga: Selamat sore. Seperti senja yang indah, setiap akhir sesi belajar adalah momen untuk berhenti sejenak dan menikmati perjalananmu, {nama}.",
            "🌌 Kak Saga: Sore, {nama}. Jangan terburu-buru. Waktu masih ada. Kecepatan bukanlah tujuan — arah yang benar lebih penting.",
            "🌌 Kak Saga: Halo, {nama}. Saat hari mulai gelap, pikiranmu cenderung lebih tenang. Gunakan momen ini untuk introspeksi dan perencanaan.",
            "🌌 Kak Saga: Selamat sore. Epictetus berkata: 'Bukan peristiwa yang mengganggu manusia, tapi penilaiannya tentang peristiwa.' Bagaimana penilaianmu tentang hari ini?",
            "🌌 Kak Saga: Sore, {nama}. Apapun yang terjadi hari ini, itu adalah bagian dari perjalananmu. Terimalah dengan lapang dada, dan teruslah melangkah.",
            "🌌 Kak Saga: Halo, {nama}. Sore yang tenang adalah hadiah. Manfaatkan untuk mengulang materi sulit dengan pikiran yang lebih jernih.",
            "🌌 Kak Saga: Selamat sore. Ketika senja tiba, ingatlah bahwa kamu telah melewati hari ini dengan baik. Besok adalah kesempatan baru. Istirahatlah sejenak, {nama}."
        ],
        malam: [
            "🌌 Kak Saga: Selamat malam. Saat matahari terbenam, renungkanlah apa yang telah kamu pelajari hari ini — bukan hanya dari buku, tapi juga dari kehidupan.",
            "🌌 Kak Saga: Halo. Malam adalah waktu untuk melepaskan semua yang tidak bisa kita ubah. Hari ini sudah berlalu. Esok adalah bab baru, {nama}.",
            "🌌 Kak Saga: Malam. Seperti lilin yang menyala, pengetahuanmu hari ini telah memberikan cahaya. Besok, nyalakan kembali dengan semangat baru.",
            "🌌 Kak Saga: Halo, {nama}. Rasa syukur adalah kebijaksanaan tertinggi. Hari ini mungkin tidak sempurna, tapi kamu telah tumbuh. Itu sudah cukup.",
            "🌌 Kak Saga: Selamat malam. Tidur bukanlah kelemahan. Ia adalah bagian dari siklus kehidupan yang memberi kita kekuatan untuk esok hari.",
            "🌌 Kak Saga: Malam. Jangan menyesali apa yang tidak tercapai hari ini. Tetaplah percaya pada proses. Semua hal baik membutuhkan waktu, {nama}.",
            "🌌 Kak Saga: Halo. Sebelum tidur, tanyakan pada dirimu: 'Apa satu hal baik yang terjadi hari ini?' Biarkan itu mengantarkanmu ke mimpi.",
            "🌌 Kak Saga: Selamat malam. Marcus Aurelius berkata: 'Kamu harus membentuk hidupmu hari demi hari.' Hari ini adalah salah satu batu bata itu, {nama}.",
            "🌌 Kak Saga: Malam. Istirahatlah dengan tenang. Besok adalah kesempatan baru untuk menjadi versi dirimu yang lebih baik.",
            "🌌 Kak Saga: Halo, {nama}. Akhiri hari dengan pikiran yang jernih dan hati yang ringan. Kamu telah melakukan yang terbaik. Itu sudah cukup."
        ]
    },

    // =============================================================
    // 6. KAK VICTOR — Si Perfeksionis 👑
    // =============================================================
    kakVictor: {
        pagi: [
            "👑 Kak Victor: Pagi, {nama}. Hari ini kamu bangun dengan satu tujuan: menjadi lebih baik dari kemarin. Jangan buang kesempatan ini.",
            "👑 Kak Victor: Selamat pagi. Waktu adalah sumber daya yang tidak bisa diperbarui. Setiap detik yang terbuang adalah kesempatan yang hilang selamanya, {nama}.",
            "👑 Kak Victor: Pagi. Banyak orang memulai hari tanpa arah. Kamu berbeda — kamu tahu apa yang ingin kamu capai. Buktikan, {nama}.",
            "👑 Kak Victor: Selamat pagi, {nama}. Jangan puas dengan 'cukup baik'. Cukup baik adalah musuh terbesar dari keunggulan sejati.",
            "👑 Kak Victor: Pagi. Orang-orang hebat tidak dibangun oleh mimpi, tapi oleh disiplin yang mereka jalani setiap hari. Kamu salah satu dari mereka, {nama}.",
            "👑 Kak Victor: Selamat pagi. Keberhasilan bukanlah kebetulan. Ini adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan. Mulai sekarang, {nama}.",
            "👑 Kak Victor: Pagi, {nama}. Jangan biarkan hari ini menjadi hari yang biasa. Buatlah hari ini menjadi hari yang membuatmu bangga saat merefleksikannya nanti.",
            "👑 Kak Victor: Selamat pagi. Tidak ada yang namanya 'hari libur' bagi mereka yang serius tentang masa depan mereka. Kerja keras hari ini adalah investasi untuk besok, {nama}.",
            "👑 Kak Victor: Pagi. Kamu sudah memilih untuk hadir di sini. Itu keputusan yang tepat. Sekarang, buktikan bahwa kamu layak berada di sini, {nama}.",
            "👑 Kak Victor: Selamat pagi, {nama}. Jangan tanyakan apakah kamu bisa. Tanyakan bagaimana caranya. Dan lakukan."
        ],
        siang: [
            "👑 Kak Victor: Siang, {nama}. Kelelahan adalah ujian. Mereka yang berhenti saat lelah hanya akan mencapai setengah dari potensinya. Teruslah bergerak.",
            "👑 Kak Victor: Selamat siang. Jangan biarkan distraksi siang hari mengalihkanmu dari tujuanmu. Fokus adalah senjata paling kuat yang kamu miliki, {nama}.",
            "👑 Kak Victor: Siang. Orang biasa berhenti ketika mereka lelah. Orang luar biasa berhenti ketika mereka selesai. Kamu tipe yang mana, {nama}?",
            "👑 Kak Victor: Selamat siang, {nama}. Kesulitan hari ini adalah pelatihan untuk kemenangan besok. Jangan biarkan rasa tidak nyaman menghentikanmu.",
            "👑 Kak Victor: Siang. Kamu mungkin merasa lelah. Tapi ingat: rasa lelah itu sementara. Penyesalan karena menyerah akan bertahan selamanya, {nama}.",
            "👑 Kak Victor: Selamat siang. Semakin tinggi targetmu, semakin keras perjuangannya. Tapi hasilnya juga akan semakin manis. Tahan, {nama}.",
            "👑 Kak Victor: Siang, {nama}. Jangan biarkan kegagalan kecil menghentikanmu. Setiap kesalahan adalah pelajaran yang berharga. Belajarlah, lalu lanjutkan.",
            "👑 Kak Victor: Selamat siang. Orang lain mungkin puas dengan hasil biasa. Tapi kamu bukan 'orang lain'. Tuntut lebih dari dirimu sendiri, {nama}.",
            "👑 Kak Victor: Siang. Konsistensi adalah kunci. Teruslah melangkah, bahkan saat langkahmu terasa berat. Itulah yang membedakan pemenang dan pecundang, {nama}.",
            "👑 Kak Victor: Selamat siang, {nama}. Jangan hitung berapa kali kamu gagal. Hitung berapa kali kamu bangkit dan mencoba lagi. Itu yang penting."
        ],
        sore: [
            "👑 Kak Victor: Sore, {nama}. Hari ini belum selesai. Jangan beranjak dari sini sampai target harianmu tercapai. Selesaikan.",
            "👑 Kak Victor: Selamat sore. Kamu mungkin lelah. Tapi ingat: orang hebat tidak berhenti hanya karena lelah. Mereka berhenti karena selesai. Kamu belum selesai.",
            "👑 Kak Victor: Sore, {nama}. Kelelahan adalah pengujian. Mereka yang bertahan di sore hari adalah mereka yang menang di penghujung hari.",
            "👑 Kak Victor: Halo. Jangan biarkan sore ini menjadi alasan untuk menurunkan standar. Hari ini belum berakhir — ada waktu untuk memperbaiki.",
            "👑 Kak Victor: Sore. Selesaikan satu hal kecil yang belum terselesaikan hari ini. Satu hal saja. Itu lebih baik daripada membiarkannya mengendap.",
            "👑 Kak Victor: Selamat sore, {nama}. Jangan hitung berapa kali kamu lelah. Hitung berapa kali kamu tetap bergerak meskipun lelah.",
            "👑 Kak Victor: Sore. Banyak orang berhenti di jam ini. Kamu akan berbeda jika kamu tetap melanjutkan. Buktikan.",
            "👑 Kak Victor: Halo, {nama}. Masih ada waktu untuk membuat hari ini berarti. Jangan sia-siakan detik-detik yang tersisa.",
            "👑 Kak Victor: Sore. Jika kamu merasa lelah, itu tandanya kamu sudah bekerja. Jika kamu merasa nyaman, itu tandanya kamu belum cukup. Pilih yang mana, {nama}?",
            "👑 Kak Victor: Selamat sore. Akhiri hari ini dengan satu kemenangan — sekecil apapun itu. Besok kamu akan berterima kasih pada dirimu hari ini."
        ],
        malam: [
            "👑 Kak Victor: Malam, {nama}. Saatnya mengevaluasi harimu. Apakah hari ini kamu sudah melakukan yang terbaik? Jujurlah pada dirimu sendiri.",
            "👑 Kak Victor: Selamat malam. Jangan biarkan hari ini berakhir tanpa satu pun pelajaran yang bisa kamu bawa ke esok hari. Setiap hari harus berarti, {nama}.",
            "👑 Kak Victor: Malam. Kesuksesan bukan tentang menjadi sempurna. Ini tentang menjadi lebih baik dari kemarin. Apakah kamu hari ini lebih baik dari kemarin, {nama}?",
            "👑 Kak Victor: Selamat malam, {nama}. Besok adalah kesempatan baru untuk membuktikan bahwa kamu layak mencapai targetmu. Jangan sia-siakan.",
            "👑 Kak Victor: Malam. Istirahatlah, tapi jangan pernah berhenti bermimpi. Orang hebat tidur dengan impian, bukan dengan penyesalan, {nama}.",
            "👑 Kak Victor: Selamat malam. Jangan menyesali apa yang tidak kamu capai hari ini. Fokuslah pada apa yang bisa kamu capai besok. Rencanakan, {nama}.",
            "👑 Kak Victor: Malam, {nama}. Kualitas tidurmu menentukan kualitas keputusanmu besok. Istirahat yang cukup adalah bagian dari disiplin yang sering diabaikan.",
            "👑 Kak Victor: Selamat malam. Saat kepalamu menyentuh bantal, tanyakan pada dirimu: 'Apakah hari ini aku sudah cukup?' Jawabanmu adalah panduan untuk besok, {nama}.",
            "👑 Kak Victor: Malam. Orang hebat tidak pernah berhenti belajar, bahkan saat mereka tidur. Pikiran bawah sadarmu akan memproses apa yang telah kamu pelajari hari ini.",
            "👑 Kak Victor: Selamat malam, {nama}. Besok adalah halaman kosong. Tulislah cerita yang membuatmu bangga, bukan yang membuatmu menyesal. Sampai jumpa besok."
        ]
    }
};