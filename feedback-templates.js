// ============================================================
// FEEDBACK TEMPLATES — TAHAP 1 (Kak Alex, Kak Tara, Ibu Dian)
// ============================================================

const FEEDBACK_TEMPLATES = {

    // ============================================================
    // 1. KAK ALEX — Logis, Data-driven, Objektif
    // Efek Psikologis: Clarity, Authority, dan Kepastian
    // ============================================================
    'kakAlex': {
        'sempurna': [
            "Akurasi 100%, {nama}. Data menunjukkan penguasaan memorimu berada di tingkat optimal. Mari bersiap untuk tantangan berikutnya.",
            "Secara statistik, ini adalah hasil sempurna. Kamu telah mengubah informasi jangka pendek menjadi pengetahuan permanen.",
            "Analisis menunjukkan tidak ada 'error rate' pada jawabanmu. Penguasaan konsep dasar sudah solid, {nama}.",
            "Hasil yang sangat logis mengingat dedikasimu. Algoritma belajarmu bekerja dengan sangat efisien hari ini.",
            "Sempurna. Variabel pemahamanmu sudah mencapai nilai maksimal. Tidak ada lagi yang perlu dievaluasi di area ini.",
            "Metrik penyelesaianmu menunjukkan angka absolut. Keputusan logis untuk terus mempertahankan standar tinggi ini, {nama}.",
            "Validasi sistem: Berhasil. Kamu telah memetakan setiap konsep dengan akurat tanpa satu pun celah logika.",
            "Tingkat retensi memorimu luar biasa. Secara sistematis, kamu sudah siap menghadapi beban kognitif yang lebih kompleks."
        ],
        'bagus': [
            "Secara probabilitas, kamu sudah mengamankan sebagian besar konsep. Kita hanya perlu mengkalibrasi ulang bagian {topik}.",
            "Hasil yang efisien, {nama}. Terdapat deviasi kecil pada pemahamanmu terkait {topik}. Mari kita tinjau kembali.",
            "Statistik yang bagus. Otakmu sudah menangkap polanya, cukup optimalkan kembali variabel {topik} agar sempurna.",
            "Secara analisis, fondasimu sudah kuat. Sedikit penyesuaian pada materi {topik} akan menuntaskan misi ini.",
            "Data menunjukkan progres yang sangat positif. Aku merekomendasikan injeksi fokus pada {topik} untuk menutupi celah kecil.",
            "Algoritma belajarmu sudah berjalan baik, {nama}. Sisanya tinggal merapikan 'margin of error' di area {topik}.",
            "Tingkat akurasimu sangat memadai. Secara logis, review singkat mengenai {topik} sudah cukup untuk saat ini.",
            "Sistem mencatat hasil yang solid. Mari alokasikan sedikit memori tambahan untuk menguasai {topik} sepenuhnya."
        ],
        'cukup': [
            "Kita berada di titik tengah. Secara logis, ini menandakan pemahamanmu tentang {topik} masih membutuhkan iterasi.",
            "Data menunjukkan adanya 'bottleneck' kognitif di bagian {topik}. Fokuskan energimu ke sana sebelum melangkah lebih jauh.",
            "Secara sistematis, kamu membutuhkan lebih banyak paparan data pada materi {topik}. Mari kita jadikan ini prioritas.",
            "Analisisku mencatat ada inkonsistensi pada jawaban {topik}. Tidak apa, ini adalah variabel yang terukur dan bisa diperbaiki.",
            "Tingkat retensimu baru mencapai setengah kapasitas. Langkah paling efisien saat ini adalah membedah ulang {topik}.",
            "Metrik saat ini menunjukkan kamu masih dalam fase adaptasi. Mari kita selesaikan kebingunganmu pada bagian {topik}.",
            "Memaksakan diri maju tanpa mematangkan {topik} hanya akan meningkatkan beban belajarmu nanti, {nama}. Mari mundur selangkah.",
            "Sistem mengidentifikasi anomali pada akurasimu di {topik}. Jangan panik, cukup atur ulang strategimu secara rasional."
        ],
        'kurang': [
            "Statistik di bawah 50% bukanlah kegagalan, melainkan sinyal logis bahwa metodemu terkait {topik} perlu di-reset sepenuhnya.",
            "Secara logika, pemahaman fundamentalmu tentang {topik} belum terbentuk. Mari kita kembali ke 'ground zero'.",
            "Data menunjukkan 'error rate' yang cukup tinggi. Keputusan paling rasional sekarang adalah mempelajari {topik} dari awal.",
            "Jangan buang energimu untuk stres, {nama}. Secara sistematis, kita hanya perlu meninjau kembali variabel {topik} dengan perlahan.",
            "Hasil ini adalah 'feedback loop' yang bagus. Kita jadi tahu pasti bahwa {topik} adalah area yang butuh intervensi penuh.",
            "Tingkat akurasimu saat ini memerlukan kalibrasi ulang. Fokuslah membangun kembali kerangka pemikiranmu di {topik}.",
            "Analisisku: Kamu melewatkan pilar dasar dari {topik}. Mari kita bangun ulang pilar tersebut dengan lebih terstruktur.",
            "Faktanya, mencoba menebak sangatlah tidak efisien. Mari alokasikan waktu untuk memahami fundamental {topik} dari dasar."
        ]
    },

    // ============================================================
    // 2. KAK TARA — Energetik, Hype, Motivator
    // Efek Psikologis: Dopamin, Semangat, & Anti-menyerah
    // ============================================================
    'kakTara': {
        'sempurna': [
            "WOHOOO!! {nama}, KAMU BENAR-BENAR MENGHANCURKAN KUIS INI!! Sempurna tanpa celah!! 🔥🚀",
            "GILAAAK!! 100% MUTLAK!! Otakmu tuh mesin jet atau apa sih?! Aku bangga banget sama kamu!! 🏆💥",
            "BOM!! Semua jawaban benar!! Kamu udah jadi MASTER di materi ini!! Gaskaaann level berikutnya!! 🌪️🔥",
            "AAAAK KEREN BANGET!! {nama}, ini bukti kalau kamu FOKUS TOTAL!! Pertahankan energi dewa ini!! 🌟⚡",
            "PERFECTO!! Hari ini kamu bikin rekor baru!! Jangan kasih kendor, terus terbang tinggi {nama}!! 🚀💪",
            "YESS!! MANTAP JIWA!! Otakmu lagi *on fire*!! Kuis ini ga ada apa-apanya buat kamu!! 🔥😎",
            "JUARA SATU JATUH KEPADA... {nama}!! Gila sih ini bersih banget tanpa salah!! LET'S GOOO!! 🏆🔥",
            "LEDAKAN ENERGI!! 100% di kantong!! Kamu tuh emang dilahirkan buat sukses, {nama}!! BUKTIKAN TERUS!! 💥🚀"
        ],
        'bagus': [
            "YEEEAAAY!! Keren banget {nama}!! Skornya udah tinggi!! Tinggal sikat sisa-sisa kebingungan di {topik} aja!! 🔥💪",
            "NYARIS SEMPURNA!! Ayo dong {nama}, kamu pasti bisa sapu bersih kalau materi {topik} dipoles dikit lagi!! 🚀💥",
            "WOOOH!! Skor yang MANTAP!! Aku yakin kalau kamu review {topik} sebentaaar aja, langsung auto 100%!! ⚡🔥",
            "GILA!! Hasil yang kece badai!! Tapi jangan puas dulu, mari kita BONGKAR bagian {topik} biar makin GACOR!! 🏆🌪️",
            "AWESOME!! Kamu udah ada di jalur juara, {nama}!! Ayo hajar lagi bagian {topik} biar besok PERFECT!! 🚀💪",
            "WUIH KEREN!! Tinggal selangkah lagi menuju kesempurnaan!! Gaskeun baca ulang {topik} dan buktikan kamu BISA!! 🔥😎",
            "GAS TERUS!! Skor ini udah bikin bangga!! Biar makin tak terkalahkan, ayo kuasai materi {topik}!! 🌟💥",
            "MANTAP {nama}!! Sedikit lagi nyentuh puncak!! Kencangkan sabuk pengaman dan mari taklukkan {topik}!! 🚀🔥"
        ],
        'cukup': [
            "HALOO!! Udah setengah jalan nih, {nama}!! Jangan kendor!! Ayo kita HANCURKAN rasa bingung di {topik}!! 🔥💪",
            "YOOO!! Setengah dari kuis ini udah takluk!! Sekarang saatnya kumpulin tenaga buat sikat materi {topik}!! 🚀💥",
            "SEMANGAT {nama}!! Gak usah ragu, kamu cuma butuh pemanasan lebih di bagian {topik}!! AYO GAS LAGI!! ⚡🔥",
            "WUSSS!! Progres yang oke, tapi aku tahu kamu BISA LEBIH DARI INI!! Mari kita gempur materi {topik}!! 🌪️💪",
            "JANGAN KASIH KENDOR!! Kesalahan itu biasa, yang penting BANGKIT!! Ayo pelajari lagi {topik} bareng-bareng!! 🚀🔥",
            "HEYYY!! Ini belum berakhir!! Tarik napas panjang, dan mari kita libas kelemahanmu di {topik}!! KAMU PASTI BISA!! 💥😎",
            "WAAAH!! Udah lumayan nih!! Tapi biar makin JAGO, kamu harus baca lagi soal {topik}!! LET'S GOOO!! 🌟🔥",
            "YUK YUK YUK!! Jangan berhenti di tengah jalan!! Fokuskan mata laser kamu ke materi {topik}!! GASKAAAN!! 🚀💪"
        ],
        'kurang': [
            "WOIII!! JANGAN NYERAH DULU!! Belum dapet skor tinggi itu wajar!! Ayo kita hancurkan tembok materi {topik} dari awal!! 🔥💪",
            "HEYY {nama}!! Gagal sekarang bukan berarti gagal selamanya!! Kumpulin semangatmu, kita BACA ULANG {topik}!! 🚀💥",
            "YOOO!! Jangan biarkan skor ini bikin kamu down!! Anggap aja ini latihan!! Ayo sikat materi {topik} pelan-pelan!! ⚡🔥",
            "WAKEE UPPP!! Ini saatnya BUKTIKAN mental juaramu!! Mulai lagi dari dasar {topik} dan hajar kuis berikutnya!! 🏆🌪️",
            "TIDAK ADA KATA MENYERAH DI SINI!! Ayo cuci muka, teriak bentar, terus kita KUASAI {topik} sampai tuntas!! 🚀💪",
            "HALOO!! Orang sukses pasti pernah gagal!! Ini saatnya kamu BANGKIT dan pahami {topik} dengan energi 100%!! 🔥😎",
            "GASS TERUS!! Jatuh 7 kali, bangkit 8 kali!! Mari kita bongkar ulang kerangka dasar dari {topik}!! LET'S GOOO!! 🌟💥",
            "YEEEAAAY!! Berani mencoba aja udah KEREN!! Sekarang ayo arahkan apimu buat membakar materi {topik} sampai paham!! 🚀🔥"
        ]
    },

    // ============================================================
    // 3. IBU DIAN — Penyayang, Keibuan, Penuh Perhatian
    // Efek Psikologis: Psychological Safety, Menurunkan Kecemasan
    // ============================================================
    'ibuDian': {
        'sempurna': [
            "Sempurna sekali, anak hebat. Ibu sangat bangga padamu. Kerja kerasmu hari ini benar-benar membuahkan hasil yang indah.",
            "Wah, luar biasa sayang. Kamu menguasai semuanya dengan sangat baik. Ini membuktikan bahwa kamu mampu.",
            "Ibu tersenyum melihat hasilmu. Nilai yang sempurna ini adalah hadiah untuk ketekunanmu sendiri, {nama}.",
            "Pintar sekali anak Ibu. Pemahamanmu sudah sangat matang. Sekarang kamu bisa istirahat dengan hati yang tenang.",
            "Alhamdulillah, hasil yang sangat memuaskan. Ibu selalu percaya pada kemampuanmu, dan ini buktinya. Hebat sayang.",
            "Sempurna, {nama}. Tidak ada satu pun yang terlewat. Kamu sudah menaklukkan materi ini dengan sangat baik. Ibu bangga.",
            "Melihat nilai sempurnamu, Ibu tahu berapa banyak tenaga yang kamu curahkan. Terima kasih sudah berjuang ya, anak baik.",
            "Nilai 100 ini adalah bukti ketelitianmu. Ibu senang sekali melihat kamu berkembang sejauh ini. Terus jadi anak yang rajin ya."
        ],
        'bagus': [
            "Kerja yang sangat bagus, sayang. Hampir sempurna. Nanti pelan-pelan kita baca lagi bagian {topik} ya, biar makin paham.",
            "Ibu sangat menghargai usahamu, nilaimu sudah tinggi. Tinggal merapikan sedikit ingatanmu tentang {topik}. Kamu pasti bisa.",
            "Wah, hebat sekali {nama}. Hanya sedikit yang terlewat. Mari perhatikan kembali materi {topik} dengan hati yang tenang.",
            "Hasil yang membanggakan, Nak. Ibu tahu kamu sudah berusaha. Untuk sisanya, coba pelajari lagi soal {topik} ya.",
            "Sudah sangat baik, sayang. Kesalahan kecil itu wajar. Jadikan itu pelajaran untuk lebih memahami {topik} besok hari.",
            "Ibu senang melihat kemajuanmu. Nilaimu membuktikan kamu paham. Nanti luangkan waktu sebentar untuk {topik} ya.",
            "Pintar. Hampir semua kamu kerjakan dengan benar. Biar tidak penasaran lagi, coba buka kembali catatanmu tentang {topik}.",
            "Kerja kerasmu terlihat di sini, sayang. Ibu bangga. Supaya lebih sempurna, mari kita ulas kembali bagian {topik} ya."
        ],
        'cukup': [
            "Tidak apa-apa sayang, kamu sudah mencapai setengah jalan. Yuk, kumpulkan semangat lagi untuk mempelajari {topik}.",
            "Ibu tahu materinya mulai sulit. Jangan berkecil hati ya. Mari pelan-pelan kita pahami lagi bagian {topik} bersama-sama.",
            "Terima kasih sudah bertahan sampai akhir kuis, Nak. Nilai ini adalah langkah awal. Coba kita fokuskan ke {topik} dulu ya.",
            "Sayang, jangan sedih dengan nilai ini. Kamu sudah berusaha, dan Ibu menghargainya. Ayo baca ulang {topik} dengan santai.",
            "Belajar memang butuh proses, Nak. Tidak perlu buru-buru. Coba dalami lagi bagian {topik} perlahan-lahan ya.",
            "Kamu sudah setengah jalan menguasai materi ini, sayang. Ibu yakin kalau kamu ulangi bagian {topik}, pasti akan jauh lebih baik.",
            "Jangan dipaksakan kalau kepalamu pusing. Istirahat sebentar, lalu nanti kita baca lagi pelan-pelan tentang {topik} ya.",
            "Ibu melihat usahamu, dan itu yang paling penting. Mari jadikan hasil ini sebagai petunjuk untuk lebih fokus pada {topik}."
        ],
        'kurang': [
            "Sayang, jangan kecewa ya. Kegagalan hari ini bukan berarti kamu tidak pintar. Mari kita ulangi {topik} dari awal, pelan-pelan.",
            "Ibu ada di sini, jangan takut salah. Kuis ini memang sulit. Ayo kita tarik napas, lalu mulai lagi belajar dasar dari {topik}.",
            "Tidak apa-apa, Nak. Setiap anak punya kecepatan belajarnya sendiri. Ibu akan temani kamu memahami {topik} kembali.",
            "Jangan hukum dirimu sendiri karena nilai ini, sayang. Ini hanyalah angka. Yang penting adalah kemauanmu untuk belajar ulang tentang {topik}.",
            "Hasil ini cuma memberitahu kita dari mana harus mulai. Mari kita buka lagi buku tentang {topik}. Ibu yakin besok pasti lebih baik.",
            "Sayang, kebingungan itu wajar saat kita belajar hal baru. Yuk, jangan menyerah. Kita pelajari lagi konsep dasar {topik} ya.",
            "Ibu tidak marah sama sekali. Justru Ibu bangga kamu berani mencoba. Mari perbaiki keraguanmu di materi {topik} ya, sayang.",
            "Tidak ada yang instan di dunia ini, anak baik. Kegagalan ini adalah guru terbaikmu. Ayo baca dengan tenang materi tentang {topik}."
        ]
    },

    // ============================================================
    // 4. KAK REY — Tsundere, Gengsi, Sarkas (tapi peduli)
    // Efek Psikologis: Reverse Psychology, Menantang Ego User
    // ============================================================
    'kakRey': {
        'sempurna': [
            "Skor sempurna? Hmph. Biasa aja tuh. Tapi... ya, kerja bagus.",
            "Seratus? Aku ga kaget sih, dari awal kelihatan kamu niat. Jangan besar kepala.",
            "Jangan ngarep aku bakal loncat-loncat kayak Tara. Tapi... lumayanlah buat ukuranmu.",
            "Kamu dapet seratus? Ck. Berarti soalnya emang gampang... atau emang kamu pinter aja. Terserah.",
            "Bagus. Akhirnya kamu buktikan kalau kamu serius. Lanjutkan, jangan bikin aku narik omongan ini.",
            "Sempurna. Bukan berarti aku bangga atau gimana ya, aku cuma seneng kamu ga buang waktu.",
            "Nilai segini mah udah seharusnya. Ga usah nungguin aku muji, kamu tahu sendiri kamu hebat.",
            "Oke, kamu bener semua. Berhenti senyum-senyum sendiri, sana siap-siap buat tantangan selanjutnya."
        ],
        'bagus': [
            "Nyaris seratus. Kurang dikit lagi tuh. Coba benerin dulu masalahmu di {topik}, baru balik ke sini.",
            "Lumayan. Tapi masih ada salahnya. Jangan puas dulu sebelum {topik} ini kamu beresin.",
            "Skor segini sih oke... tapi aku tahu kamu bisa lebih. Jangan malas baca lagi bagian {topik}.",
            "Hmph. Masih ada celah. Kalau kamu bener-bener perhatiin {topik}, pasti ga gini hasilnya.",
            "Aku ga bilang ini jelek. Cuma... ya nanggung aja. Buka lagi catetanmu tentang {topik} sana.",
            "Udah di atas rata-rata. Tapi orang yang gampang puas itu cepet jatuhnya. Fokus lagi ke {topik}.",
            "Kelihatan kan mana yang belum kamu pahami? Ga usah ngeles, itu bagian {topik} dimantapin lagi.",
            "Bagus sih. Tapi aku ga bakal tepuk tangan sebelum kamu ngeberesin kelemahanmu di {topik}."
        ],
        'cukup': [
            "Setengah doang? Ck. Kelihatan banget belajarnya kurang fokus. Terutama di bagian {topik} tuh.",
            "Skormu pas-pasan. Aku ga suka lihat orang setengah-setengah. Seriusin dikit napa pas belajar {topik}.",
            "Hadeh. Jangan bilang kamu udah capek. Ini tuh baru gawangnya doang. Balik pelajari {topik} sekarang.",
            "Kamu tuh sebenernya bisa, cuma kurang teliti aja di {topik}. ...Aku kasih tau gini bukan berarti aku peduli ya.",
            "Nilai segini bikin gregetan tau ga. Mending kamu istirahat bentar, terus sikat lagi materi {topik}-nya.",
            "Jangan alesan soalnya susah. Kamu aja yang belum mateng di bagian {topik}. Sana di-review lagi.",
            "Cukup? Cukup buat siapa? Standarmu cuma segini? Buktiin dong di materi {topik} kalau kamu lebih dari ini.",
            "Kelihatan jelas kamu kebingungan di {topik}. Yaudah, pelajari lagi. Ga usah pasang muka sedih gitu."
        ],
        'kurang': [
            "Ancur gini nilainya? Ya ampun. Mending kamu ngaku kalah... eh, maksudku, mulai lagi pelajari {topik} dari awal.",
            "Skor jelek itu wajar kalau kamu emang kurang persiapan. Jangan nangis, mending kamu buka buku {topik} lagi.",
            "Hmph. Berantakan. Tapi yaudahlah, seenggaknya kamu tau sekarang kalau pemahaman {topik}-mu masih nol.",
            "Jangan harap aku bakal ngasih kata-kata mutiara. Intinya: kamu kurang belajar di {topik}. Titik. Perbaiki.",
            "Tuh kan, ngegampangin sih. Kena batunya kan di {topik}? Yaudah, jangan lari, hadapi dan pelajari lagi.",
            "Gagal bukan akhir dunia, jadi ga usah berlebihan dramanya. Tarik napas, dan baca ulang fondasi {topik}.",
            "Aku kasih tau ya, orang lemah itu yang nyerah pas dapet nilai segini. Kamu bukan orang lemah kan? Sikat lagi {topik}.",
            "Nilaimu di bawah standar. Tapi aku... ya, aku tau kamu bisa ngelewatin ini kalau kamu serius di bagian {topik}."
        ]
    },

    // ============================================================
    // 5. KAK SAGA — Filsuf, Stoik, Tenang, Penuh Kiasan
    // Efek Psikologis: Mindfulness, Mengendalikan Emosi & Realita
    // ============================================================
    'kakSaga': {
        'sempurna': [
            "Skor sempurna hanyalah bayangan dari ketenangan pikiranmu. Pertahankan keseimbangan ini untuk langkah berikutnya.",
            "Seperti air yang jernih, pemahamanmu tidak memiliki keruh sedikit pun. Kamu telah menguasai diri dan materi ini.",
            "Kesempurnaan hari ini bukanlah tujuan akhir, melainkan buah dari kesabaranmu berproses. Nikmati keheningan ini sejenak.",
            "Epictetus berkata, 'Kebijaksanaan adalah mengetahui apa yang bisa kita kendalikan'. Kamu telah mengendalikan fokusmu dengan sempurna.",
            "Tidak ada yang kebetulan dalam hasil ini. Ini adalah manifestasi dari disiplin batinmu. Lanjutkan dengan damai.",
            "Sempurna. Namun ingat, jangan biarkan kesombongan mengambil alih. Tetaplah menjadi pembelajar yang rendah hati.",
            "Pikiran yang fokus melahirkan hasil yang absolut. Kamu telah menunjukkan harmoni yang indah antara niat dan tindakan.",
            "Kemenangan sejati adalah saat kita mengalahkan ketidaktahuan. Hari ini, kamu memenangkan pertarungan itu."
        ],
        'bagus': [
            "Hasil yang baik. Sisa ruang untuk perbaikan di {topik} adalah pengingat bahwa perjalanan kita belum selesai.",
            "Pohon yang kuat tumbuh dari angin yang menerpa. Kesalahan kecilmu di {topik} adalah angin yang akan memperkuatmu.",
            "Hampir sempurna. Jangan biarkan sedikit celah di {topik} mengganggu ketenanganmu. Hadapi dan perbaiki dengan bijak.",
            "Seperti kanvas yang hampir selesai, kamu hanya butuh beberapa goresan lagi pada bagian {topik} untuk menyempurnakannya.",
            "Banggalah pada seberapa jauh kamu telah berjalan. Untuk sisa jaraknya, luangkan waktu merenungi kembali {topik}.",
            "Tidak ada yang sia-sia dari usahamu. Kesalahan pada {topik} hanyalah petunjuk jalan menuju pemahaman yang lebih dalam.",
            "Kebijaksanaan adalah menyadari apa yang kurang. Mari sadari dan perbaiki pemahamanmu tentang {topik} tanpa tergesa-gesa.",
            "Hasil ini sudah sangat solid. Jadikan deviasi kecil di {topik} sebagai guru, bukan sebagai beban pikiran."
        ],
        'cukup': [
            "Kamu berada di pertengahan jalan. Jangan melihat seberapa jauh puncak itu, cukup perhatikan langkahmu selanjutnya di materi {topik}.",
            "Kebingungan di {topik} adalah tanda bahwa pikiranmu sedang mencari pola baru. Beri waktu bagi dirimu untuk memahaminya.",
            "Anggaplah skor ini sebagai cermin. Cermin ini memantulkan kebenaran bahwa {topik} membutuhkan perhatian lebih darimu.",
            "Marcus Aurelius berkata, 'Hambatan dalam tindakan memajukan tindakan'. Kesulitan di {topik} inilah yang akan memajukanmu.",
            "Jangan biarkan emosi kekecewaan mengambil alih kendali. Terimalah hasil ini, lalu alihkan fokusmu untuk mempelajari {topik}.",
            "Ini bukanlah tentang seberapa cepat kamu berlari, melainkan seberapa konsisten kamu melangkah. Pelajari kembali {topik} dengan tenang.",
            "Rasa frustrasi hanya membuang energi. Gunakan energi itu untuk membongkar dan memahami kembali akar dari {topik}.",
            "Setiap ahli pernah berada di titik ini. Yang membedakan mereka adalah keputusan untuk kembali mendalami dasar {topik}."
        ],
        'kurang': [
            "Kegagalan eksternal tidak mendefinisikan nilai internalmu. Pisahkan identitasmu dari skor ini, dan mulailah belajar {topik} dari awal.",
            "Seperti batu karang yang diterpa ombak, tetaplah kokoh. Skor rendah ini hanyalah peristiwa sesaat. Hadapi {topik} dengan pikiran jernih.",
            "Seneca mengingatkan bahwa kita sering menderita karena imajinasi kita. Jangan takut pada angka, kembalilah pada dasar {topik}.",
            "Tidak perlu menyesali waktu yang berlalu. Momen saat ini adalah satu-satunya yang kamu miliki. Gunakan untuk membaca ulang {topik}.",
            "Runtuhnya pemahamanmu hari ini adalah kesempatan untuk membangun fondasi {topik} yang jauh lebih kuat dari sebelumnya.",
            "Terimalah ketidaktahuan ini dengan lapang dada. Pemahaman sejati dimulai ketika kita mengakui bahwa kita perlu mempelajari ulang {topik}.",
            "Jangan hukum dirimu sendiri. Alam semesta bekerja dengan ritmenya sendiri, begitu juga kemampuan belajarmu. Pelan-pelan kita bedah {topik}.",
            "Ketenangan adalah senjata terbaik menghadapi kesulitan. Hapus beban di pundakmu, dan mari kita amati kembali konsep {topik}."
        ]
    },

    // ============================================================
    // 6. KAK VICTOR — Perfeksionis, Disiplin Tinggi, Keras
    // Efek Psikologis: Akuntabilitas, Growth Mindset, Ambisi
    // ============================================================
    'kakVictor': {
        'sempurna': [
            "Sempurna. Sesuai standar yang aku tetapkan untukmu. Jangan biarkan kualitas ini menurun sedikit pun di tantangan berikutnya.",
            "100%. Kerja keras tidak pernah berbohong. Ini membuktikan bahwa disiplin ketat selalu membuahkan hasil yang absolut.",
            "Hasil yang memuaskan. Tapi ingat, menjadi yang terbaik hari ini bukan jaminan untuk besok. Tetaplah lapar, pertahankan konsistensimu.",
            "Sempurna tanpa celah. Inilah yang terjadi jika kamu tidak menoleransi kemalasan. Eksekusi yang sangat tajam dan presisi.",
            "Tugas diselesaikan dengan sempurna. Bukti nyata bahwa ketika kamu menaruh komitmen 100%, tidak ada soal yang tidak bisa dihancurkan.",
            "Skor maksimal. Standarmu sekarang sudah naik. Aku tidak akan menerima kurang dari ini di sesi belajar selanjutnya. Paham?",
            "Ini adalah kaliber seorang pemenang. Keunggulan sudah menjadi kebiasaanmu. Persiapkan mentalmu untuk level berikutnya.",
            "Eksekusi yang brilian. Tidak ada ruang untuk keraguan. Terus tetapkan standar tertinggi dalam setiap hal yang kamu kerjakan."
        ],
        'bagus': [
            "Bagus, tapi 'bagus' adalah musuh dari 'hebat'. Kesalahan di {topik} tidak bisa dibiarkan begitu saja jika kamu ingin mencapai puncak.",
            "Skormu tinggi, tapi aku tidak menerima kompromi atas kesalahan. Cari tahu mengapa kamu gagal di {topik} dan pastikan itu tidak terulang.",
            "Hampir sempurna. Deviasi kecil di {topik} menunjukkan ada kelengahan dalam fokusmu. Evaluasi dirimu segera dan perbaiki.",
            "Jangan puas dengan skor ini. Kepuasan dini membunuh ambisi. Sikat sisa kelemahanmu di bagian {topik} sampai bersih tanpa sisa.",
            "Solid, tapi belum tuntas. Kamu meninggalkan celah di area {topik}. Di dunia nyata, celah sekecil itu bisa berakibat fatal. Pelajari lagi.",
            "Kamu nyaris mendominasi seluruh materi. Ambillah tanggung jawab atas kesalahan di {topik}, pelajari ulang, dan kembalilah lebih kuat.",
            "Jangan biarkan ego mengambil alih hanya karena nilaimu di atas rata-rata. Tuntut dirimu untuk menyempurnakan bagian {topik} hari ini juga.",
            "Kerja bagus. Namun target kita adalah 100%. Identifikasi kelemahanmu di {topik} sekarang juga, jangan ditunda."
        ],
        'cukup': [
            "Medioker. Skor setengah-setengah adalah hasil dari usaha yang setengah-setengah. Fokuskan ulang pikiranmu dan bedah materi {topik}.",
            "Ini bukan hasil orang yang serius ingin menang. Lemahnya penguasaan {topik} menjadi bebanmu. Selesaikan masalah itu sekarang.",
            "Apakah ini kemampuan maksimalmu? Aku rasa bukan. Berhenti memberi toleransi pada kemalasan. Hadapi materi {topik} dengan sungguh-sungguh.",
            "Standar kita jauh di atas ini. Ketidakpahamanmu di {topik} merusak hasil keseluruhan. Disiplinkan dirimu dan baca kembali materinya.",
            "Skor ini tidak bisa diterima jika kamu menargetkan keunggulan. Tidak ada alasan. Alokasikan waktumu untuk menguasai {topik} sepenuhnya.",
            "Kamu mengendur di pertengahan. Kegagalan di {topik} menunjukkan fondasimu retak. Berhenti bermain-main dan mulai bangun ulang fondasi itu.",
            "Aku tahu kamu lebih tangguh dari angka ini. Singkirkan semua alasan. Duduk, fokus, dan taklukkan kerumitan materi {topik}.",
            "Kamu punya potensi, tapi potensimu terkunci oleh kurangnya usaha di {topik}. Paksa dirimu melewati batas nyaman, pelajari lagi."
        ],
        'kurang': [
            "Skor ini adalah alarm peringatan keras. Sistem belajarmu terkait {topik} gagal total. Hapus semua alasan, dan mulai dari nol sekarang.",
            "Kamu tidak memberikan 100%. Jangan salahkan kesulitan soalnya. Salahkan persiapanmu. Mulai kembali dari dasar {topik}. Lakukan dengan benar.",
            "Kekecewaan? Hapus itu. Ini soal disiplin, bukan perasaan emosional. Kegagalan di {topik} harus segera dievaluasi, bukan diratapi.",
            "Hasil ini tidak mencerminkan standar kita. Pemahamanmu tentang {topik} sangat lemah. Keputusan ada padamu: menyerah, atau bangkit dan perbaiki.",
            "Kenyataan memang pahit: kamu belum siap. Tapi pecundang berhenti saat gagal, pemenang bekerja lebih keras. Pelajari ulang {topik}, tanpa jeda.",
            "Tinggalkan semua distraksimu. Nilai di bawah standar ini membuktikan bahwa {topik} menuntut fokus totalmu. Bertanggungjawablah.",
            "Aku tidak akan memperhalus ini: persiapanmu buruk. Namun ujian mental sesungguhnya adalah bagaimana kamu menaklukkan {topik} setelah jatuh seperti ini.",
            "Kegagalan hari ini adalah teguran atas kelalaianmu. Jangan lari dari kenyataan. Hadapi kelemahanmu di {topik} sampai kamu benar-benar menguasainya."
        ]
    }

};

// ============================================================
// FUNGSI — GET FEEDBACK (Anti-Error & Bulletproof)
// ============================================================

function getFeedback(personaKey, score, maxScore, userName = "User", topicName = "materi ini") {
    // 1. Proteksi awal: Validasi ketersediaan template & validitas maxScore
    const personaTemplates = FEEDBACK_TEMPLATES?.[personaKey];
    if (!personaTemplates || !maxScore || maxScore <= 0) {
        return "Terima kasih sudah belajar! Teruslah melangkah!";
    }

    // 2. Pembersihan variabel (antisipasi jika input bernilai null / empty)
    const safeName = userName || "User";
    const safeTopic = topicName || "materi ini";

    // 3. Hitung persentase skor
    const percentage = (score / maxScore) * 100;
    let level;

    if (percentage >= 100) level = 'sempurna';
    else if (percentage >= 70) level = 'bagus';
    else if (percentage >= 50) level = 'cukup';
    else level = 'kurang';

    // 4. Ambil teks feedback utama (dengan fallback jika array kosong)
    const mainVariations = personaTemplates[level] || [];
    const mainText = mainVariations.length > 0
        ? mainVariations[Math.floor(Math.random() * mainVariations.length)]
        : "Terima kasih sudah menyelesaikan kuis ini!";

    // 5. Fallback lokal untuk Closing jika import gagal/undefined
    const localClosingFallback = [
        "Teruslah belajar!",
        "Kamu pasti bisa!",
        "Jangan menyerah!",
        "Setiap hari adalah kesempatan baru.",
        "Nikmati prosesnya!"
    ];

    // 6. Ambil teks penutup (Proteksi bertingkat)
    const closingVariations = CLOSING_TEMPLATES?.[level] || localClosingFallback;
    const closingText = closingVariations.length > 0
        ? closingVariations[Math.floor(Math.random() * closingVariations.length)]
        : "Tetap semangat!";

    // 7. Replace placeholder {nama} dan {topik}
    const finalMain = mainText.replace(/{nama}/g, safeName).replace(/{topik}/g, safeTopic);

    // 8. Gabungkan feedback utama + closing
    return `${finalMain} ${closingText}`;
}


// ─── AMBIL FUNGSI DARI MODULE ───
import { FEEDBACK_TEMPLATES, CLOSING_TEMPLATES, getFeedback } from './feedback-templates.js';