// tebakistilah.js - Tebak Istilah Minigame Logic
// Read definition → guess the correct term

const TEBAK_TOTAL = 10;
const TEBAK_ENERGY_COST = 1;
const TEBAK_POINTS_PER_CORRECT = 15;
const TEBAK_KOIN_MULTIPLIER = 1;

// ─── SOAL BANK ───

const SOAL_BANK = [
    // ── IPA ──
    { kategori: "ipa", istilah: "Fotosintesis", definisi: "Proses tumbuhan mengubah cahaya matahari, air, dan CO₂ menjadi glukosa dan oksigen." },
    { kategori: "ipa", istilah: "Mitokondria", definisi: "Organel sel yang berfungsi sebagai 'pembangkit tenaga' untuk menghasilkan energi (ATP)." },
    { kategori: "ipa", istilah: "Evaporasi", definisi: "Proses perubahan air menjadi uap air karena pemanasan." },
    { kategori: "ipa", istilah: "Gravitasi", definisi: "Gaya tarik-menarik antara dua benda yang memiliki massa." },
    { kategori: "ipa", istilah: "Klorofil", definisi: "Zat hijau daun yang berperan menyerap cahaya matahari untuk fotosintesis." },
    { kategori: "ipa", istilah: "Ekosistem", definisi: "Kesatuan interaksi antara makhluk hidup dengan lingkungan tak hidupnya." },
    { kategori: "ipa", istilah: "Konduksi", definisi: "Perpindahan panas melalui zat perantara tanpa disertai perpindahan partikel zat tersebut." },
    { kategori: "ipa", istilah: "Kondensasi", definisi: "Proses perubahan uap air menjadi cair karena pendinginan." },
    { kategori: "ipa", istilah: "Simbiosis", definisi: "Hubungan erat antara dua makhluk hidup yang berbeda jenis." },
    { kategori: "ipa", istilah: "Herbivora", definisi: "Hewan yang makanannya hanya berupa tumbuhan." },
    { kategori: "ipa", istilah: "Karnivora", definisi: "Hewan yang makanannya berupa daging atau hewan lain." },
    { kategori: "ipa", istilah: "Omnivora", definisi: "Hewan yang memakan tumbuhan dan juga daging/hewan lain." },
    { kategori: "ipa", istilah: "Oksidasi", definisi: "Reaksi kimia dimana suatu zat kehilangan elektron, sering disebut pengkaratan pada logam." },
    { kategori: "ipa", istilah: "Respirasi", definisi: "Proses pernapasan makhluk hidup untuk mengambil oksigen dan melepaskan karbon dioksida." },
    { kategori: "ipa", istilah: "Metamorfosis", definisi: "Perubahan bentuk tubuh hewan secara bertahap dari telur hingga dewasa, misalnya pada kupu-kupu." },

    // ── IPS ──
    { kategori: "ips", istilah: "Demokrasi", definisi: "Sistem pemerintahan dimana kekuasaan tertinggi berada di tangan rakyat." },
    { kategori: "ips", istilah: "Inflasi", definisi: "Kenaikan harga barang dan jasa secara umum dan terus-menerus dalam jangka waktu tertentu." },
    { kategori: "ips", istilah: "Ekspor", definisi: "Kegiatan menjual barang atau jasa ke luar negeri." },
    { kategori: "ips", istilah: "Impor", definisi: "Kegiatan membeli barang atau jasa dari luar negeri." },
    { kategori: "ips", istilah: "Monopoli", definisi: "Penguasaan pasar oleh satu penjual sehingga tidak ada persaingan." },
    { kategori: "ips", istilah: "Gotong Royong", definisi: "Kegiatan bekerja bersama-sama untuk mencapai tujuan bersama, khas budaya Indonesia." },
    { kategori: "ips", istilah: "Konstitusi", definisi: "Hukum dasar tertulis tertinggi suatu negara, di Indonesia disebut UUD 1945." },
    { kategori: "ips", istilah: "Arkipelago", definisi: "Kepulauan atau gugusan pulau-pulau, julukan untuk Indonesia." },
    { kategori: "ips", istilah: "Urbanisasi", definisi: "Perpindahan penduduk dari desa ke kota." },
    { kategori: "ips", istilah: "Koloni", definisi: "Wilayah yang dikuasai dan dikelola oleh negara lain (negara induk)." },
    { kategori: "ips", istilah: "Revolusi", definisi: "Perubahan besar dan cepat dalam sistem pemerintahan atau sosial masyarakat." },
    { kategori: "ips", istilah: "Barter", definisi: "Sistem pertukaran barang dengan barang tanpa menggunakan uang." },
    { kategori: "ips", istilah: "Transmigrasi", definisi: "Program perpindahan penduduk dari pulau padat ke pulau yang kurang padat di Indonesia." },
    { kategori: "ips", istilah: "Pancasila", definisi: "Dasar negara dan falsafah hidup bangsa Indonesia yang terdiri dari lima sila." },
    { kategori: "ips", istilah: "Globalisasi", definisi: "Proses integrasi internasional yang terjadi karena pertukaran pandangan, produk, dan budaya." },

    // ── BAHASA ──
    { kategori: "bahasa", istilah: "Sinonim", definisi: "Kata yang memiliki arti sama atau mirip dengan kata lain." },
    { kategori: "bahasa", istilah: "Antonim", definisi: "Kata yang memiliki arti berlawanan dengan kata lain." },
    { kategori: "bahasa", istilah: "Metafora", definisi: "Majas yang membandingkan dua hal secara langsung tanpa kata penghubung (contoh: 'raja siang' = matahari)." },
    { kategori: "bahasa", istilah: "Personifikasi", definisi: "Majas yang memberikan sifat manusia kepada benda mati." },
    { kategori: "bahasa", istilah: "Hiperbola", definisi: "Majas yang melebih-lebihkan sesuatu dari kenyataannya." },
    { kategori: "bahasa", istilah: "Kalimat Efektif", definisi: "Kalimat yang dapat menyampaikan gagasan penulis secara tepat dan tidak bertele-tele." },
    { kategori: "bahasa", istilah: "Paragraf Deduktif", definisi: "Paragraf yang kalimat utamanya terletak di awal." },
    { kategori: "bahasa", istilah: "Puisi", definisi: "Karya sastra yang menggunakan kata-kata indah, berirama, dan padat makna." },
    { kategori: "bahasa", istilah: "Prosa", definisi: "Karya sastra yang berbentuk cerita bebas, tidak terikat irama (contoh: novel, cerpen)." },
    { kategori: "bahasa", istilah: "Imbuhan", definisi: "Bagian kata yang ditambahkan di awal, akhir, atau tengah kata untuk mengubah makna." },

    // ── UMUM ──
    { kategori: "umum", istilah: "Algoritma", definisi: "Langkah-langkah logis dan sistematis untuk menyelesaikan suatu masalah." },
    { kategori: "umum", istilah: "Database", definisi: "Kumpulan data yang tersimpan secara terstruktur dan dapat diakses dengan mudah." },
    { kategori: "umum", istilah: "Ensklopedia", definisi: "Buku atau sumber yang berisi rangkuman pengetahuan dari berbagai bidang." },
    { kategori: "umum", istilah: "Demografi", definisi: "Ilmu yang mempelajari tentang jumlah, struktur, dan distribusi penduduk." },
    { kategori: "umum", istilah: "Ekonomi", definisi: "Ilmu tentang cara manusia memenuhi kebutuhan hidupnya yang terbatas dengan sumber daya terbatas." },
    { kategori: "umum", istilah: "Filosofi", definisi: "Ilmu yang mempelajari hakikat keberadaan, pengetahuan, dan nilai secara mendalam." },
    { kategori: "umum", istilah: "Hipotesis", definisi: "Dugaan atau anggapan sementara yang harus dibuktikan kebenarannya." },
    { kategori: "umum", istilah: "Inovasi", definisi: "Penemuan atau penerapan ide baru yang membawa perbaikan." },
    { kategori: "umum", istilah: "Literasi", definisi: "Kemampuan membaca, menulis, dan memahami informasi secara kritis." },
    { kategori: "umum", istilah: "Renewable Energy", definisi: "Sumber energi yang dapat diperbarui dan tidak akan habis, seperti tenaga surya dan angin." },
];

// ─── GAME STATE ───

let currentUser = null;
let currentSoal = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let totalPoints = 0;
let soalSet = [];
let streakResults = [];

// ─── INIT ───

document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "app.html";
});

window.addEventListener("load", async () => {
    const username = localStorage.getItem("skolvix_username");
    if (!username) {
        alert("Kamu harus login dulu!");
        window.location.href = "app.html";
        return;
    }

    const { data: user } = await supabaseClient
        .from("user_progress")
        .select("*")
        .eq("username", username)
        .maybeSingle();

    if (!user) {
        alert("Akun tidak ditemukan. Login ulang.");
        window.location.href = "app.html";
        return;
    }

    currentUser = user;
    document.getElementById("koinDisplay").textContent = user.koin_iq;
    document.getElementById("energiDisplay").textContent = user.energi;

    if (user.energi < TEBAK_ENERGY_COST) {
        document.getElementById("noEnergyMsg").textContent = `Energi tidak cukup (butuh ${TEBAK_ENERGY_COST}, kamu punya ${user.energi}).`;
        document.getElementById("startBtn").disabled = true;
        document.getElementById("startBtn").style.opacity = "0.5";
    }
});

// ─── START GAME ───

async function startGame() {
    // Kurangi energi
    const newEnergi = currentUser.energi - TEBAK_ENERGY_COST;
    const { error } = await supabaseClient
        .from("user_progress")
        .update({ energi: newEnergi })
        .eq("username", currentUser.username);

    if (error) {
        alert("Gagal memulai game. Coba lagi.");
        return;
    }

    currentUser.energi = newEnergi;
    document.getElementById("energiDisplay").textContent = newEnergi;

    // Reset state
    currentSoal = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    totalPoints = 0;
    streakResults = [];

    // Pick random 10 from bank
    soalSet = shuffle([...SOAL_BANK]).slice(0, TEBAK_TOTAL);

    // Build streak dots
    const streakBar = document.getElementById("streakBar");
    streakBar.innerHTML = "";
    for (let i = 0; i < TEBAK_TOTAL; i++) {
        const dot = document.createElement("div");
        dot.className = "streak-dot";
        dot.id = `dot-${i}`;
        streakBar.appendChild(dot);
    }

    document.getElementById("startCard").classList.add("hidden");
    document.getElementById("gameCard").classList.remove("hidden");
    document.getElementById("totalSoal").textContent = TEBAK_TOTAL;
    document.getElementById("pointsDisplay").textContent = 0;

    nextQuestion();
}

// ─── NEXT QUESTION ───

function nextQuestion() {
    currentSoal++;
    if (currentSoal > TEBAK_TOTAL) {
        endGame();
        return;
    }

    document.getElementById("soalNum").textContent = currentSoal;
    document.getElementById("feedbackText").classList.add("hidden");

    const soal = soalSet[currentSoal - 1];

    // Category badge
    const badge = document.getElementById("categoryBadge");
    badge.textContent = soal.kategori.toUpperCase();
    badge.className = "category-badge " + soal.kategori;

    // Definition
    document.getElementById("defText").textContent = `"${soal.definisi}"`;

    // Generate wrong options (pick 3 other terms)
    const others = SOAL_BANK.filter(s => s.istilah !== soal.istilah);
    const wrongOptions = shuffle(others).slice(0, 3).map(s => s.istilah);
    const allOptions = shuffle([soal.istilah, ...wrongOptions]);

    // Render options
    const optContainer = document.getElementById("options");
    optContainer.innerHTML = "";
    allOptions.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "tebak-option";
        btn.textContent = opt;
        btn.addEventListener("click", () => selectAnswer(opt, soal.istilah, btn));
        optContainer.appendChild(btn);
    });
}

// ─── ANSWER ───

function selectAnswer(selected, correct, btnEl) {
    const isCorrect = selected === correct;
    const allBtns = document.querySelectorAll(".tebak-option");
    const feedbackEl = document.getElementById("feedbackText");

    allBtns.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.classList.add("correct");
        }
    });

    if (isCorrect) {
        correctAnswers++;
        totalPoints += TEBAK_POINTS_PER_CORRECT;
        document.getElementById("pointsDisplay").textContent = totalPoints;
        document.getElementById(`dot-${currentSoal - 1}`).classList.add("correct");
        feedbackEl.textContent = "✓ Benar!";
        feedbackEl.style.color = "var(--green)";
    } else {
        btnEl.classList.add("wrong");
        wrongAnswers++;
        document.getElementById(`dot-${currentSoal - 1}`).classList.add("wrong");
        feedbackEl.innerHTML = `✗ Jawaban yang benar: <strong>${correct}</strong>`;
        feedbackEl.style.color = "var(--red)";
    }

    feedbackEl.classList.remove("hidden");
    streakResults.push(isCorrect);

    setTimeout(nextQuestion, 1500);
}

// ─── END GAME ───

async function endGame() {
    document.getElementById("gameCard").classList.add("hidden");
    document.getElementById("resultCard").classList.remove("hidden");

    const koinEarned = totalPoints * TEBAK_KOIN_MULTIPLIER;
    const pct = Math.round((correctAnswers / TEBAK_TOTAL) * 100);

    document.getElementById("finalScore").textContent = `${correctAnswers}/${TEBAK_TOTAL}`;
    document.getElementById("correctCount").textContent = correctAnswers;
    document.getElementById("wrongCount").textContent = wrongAnswers;
    document.getElementById("koinEarned").textContent = koinEarned;

    let trophy, message;
    if (pct >= 90) {
        trophy = "🧠";
        message = "Jenius! Pengetahuanmu sangat luas!";
    } else if (pct >= 70) {
        trophy = "🌟";
        message = "Hebat! Wawasanmu cukup luas.";
    } else if (pct >= 50) {
        trophy = "📚";
        message = "Lumayan! Coba baca materi untuk menambah wawasan.";
    } else {
        trophy = "💪";
        message = "Jangan menyerah! Baca materi dan coba lagi.";
    }

    document.getElementById("trophyEmoji").textContent = trophy;
    document.getElementById("resultMessage").textContent = message;

    // Save koin
    const { error } = await supabaseClient
        .from("user_progress")
        .update({ koin_iq: currentUser.koin_iq + koinEarned })
        .eq("username", currentUser.username);

    if (!error) {
        currentUser.koin_iq += koinEarned;
    }

    // Save to quiz_results
    await supabaseClient
        .from("quiz_results")
        .insert([{
            username: currentUser.username,
            bab: "Tebak Istilah",
            skor_persen: pct,
            koin_didapat: koinEarned
        }]);

    document.getElementById("koinDisplay").textContent = currentUser.koin_iq;
}

// ─── UTILS ───

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
