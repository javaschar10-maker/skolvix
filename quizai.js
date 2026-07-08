// quizai.js - Logika kuis AI untuk Skolvix
// Ini adalah file terpisah dari quiz.js untuk menghindari konflik.

let soalData = null;
let currentIndex = 0;
let userAnswers = [];
let username = localStorage.getItem("skolvix_username");
let timerInterval = null;
let timeLeft = 0;
let isTimeout = false;

const PERSONA_AKTIF = localStorage.getItem("skolvix_persona") || "kakAlex";

// ─── DETEKSI MODE ───
// Mode AI selalu true di file ini
const mode = 'ai';

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ============================================================
// ⏱️ TIMER (Sama seperti sebelumnya)
// ============================================================
function startTimer(duration) {
    const timerDisplay = document.getElementById('timerDisplay');
    if (!timerDisplay) return;

    timerDisplay.style.display = 'block';
    timeLeft = duration;
    timerDisplay.textContent = timeLeft + 's';
    timerDisplay.style.color = 'var(--gold)';
    timerDisplay.classList.remove('warning');

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft + 's';

        if (timeLeft <= 10) {
            timerDisplay.style.color = '#ff4d6d';
            timerDisplay.classList.add('warning');
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = '⏰';
            timerDisplay.style.color = '#ff4d6d';
            isTimeout = true;
            alert('⏰ Waktu habis! Kuis selesai.');
            finishQuiz(true);
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    const timerDisplay = document.getElementById('timerDisplay');
    if (timerDisplay) {
        timerDisplay.style.display = 'none';
    }
}

// ============================================================
// 🧠 RENDER & LOGIKA SOAL (Sama seperti sebelumnya)
// ============================================================
function renderSoal() {
    const soal = soalData.soal[currentIndex];
    document.getElementById("soalKe").textContent = currentIndex + 1;
    document.getElementById("pertanyaan").textContent = soal.pertanyaan;
    document.getElementById("answerFeedback").classList.add("hidden");

    if (!soal._opsiAcak) {
        const opsiAsli = soal.opsi.map((text, idx) => ({ text, isBenar: idx === soal.jawaban, idxAsli: idx }));
        soal._opsiAcak = shuffleArray(opsiAsli);
    }

    const opsiContainer = document.getElementById("opsiContainer");
    opsiContainer.innerHTML = "";

    soal._opsiAcak.forEach((opsi, idx) => {
        const btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = opsi.text;
        btn.addEventListener("click", () => pilihJawaban(idx, opsi.isBenar, opsi.text, soal));
        opsiContainer.appendChild(btn);
    });
}

function pilihJawaban(idx, isBenar, chosenText, soal) {
    userAnswers[currentIndex] = { chosen: idx, chosenText: chosenText, isBenar: isBenar, soal: soal };

    const options = document.querySelectorAll(".option");
    options.forEach((opt, i) => {
        opt.disabled = true;
        if (i === idx) opt.classList.add(isBenar ? "correct" : "wrong");
        if (!isBenar && soal._opsiAcak[i].isBenar) opt.classList.add("correct");
    });

    const feedbackEl = document.getElementById("answerFeedback");
    const iconEl = document.getElementById("feedbackIcon");
    const textEl = document.getElementById("feedbackText");

    if (!isBenar && soal.penjelasan) {
        const correctOption = soal._opsiAcak.find(o => o.isBenar);
        iconEl.textContent = "❌";
        textEl.innerHTML = "<strong>Jawaban yang benar:</strong> " + correctOption.text + "<br><br>" + soal.penjelasan;
        feedbackEl.classList.remove("hidden");
    } else if (isBenar) {
        iconEl.textContent = "✅";
        textEl.innerHTML = "<strong>Benar!</strong> Hebat, kamu menjawab dengan tepat.";
        feedbackEl.classList.remove("hidden");
    }

    const delay = isBenar ? 800 : 3000;
    setTimeout(() => {
        if (currentIndex < soalData.soal.length - 1) {
            currentIndex++;
            renderSoal();
        } else {
            finishQuiz();
        }
    }, delay);
}

async function finishQuiz(timeout = false) {
    stopTimer();

    let benar = 0;
    if (!timeout) {
        userAnswers.forEach((ans) => { if (ans && ans.isBenar) benar++; });
    }

    const totalSoal = soalData.soal.length;
    const skorPersen = timeout ? 0 : Math.round((benar / totalSoal) * 100);
    const koinDidapat = timeout ? 0 : benar * 10;
    const dapatBadgePerfect = !timeout && skorPersen === 100;
    const durasi = parseInt(sessionStorage.getItem('quizTimer')) || 0;
    const quizMode = 'ai';

    const { data: user, error } = await supabaseClient
        .from("user_progress").select("*").eq("username", username).single();

    if (error || !user) {
        console.error(error);
        alert("Gagal mengambil data user.");
        return;
    }

    const energiBaru = Math.max(0, user.energi - 1);
    const koinBaru = user.koin_iq + koinDidapat;

    await supabaseClient.from("user_progress")
        .update({ koin_iq: koinBaru, energi: energiBaru }).eq("username", username);

    await supabaseClient.from("quiz_results").insert([{
        username,
        bab: soalData.bab || 'AI Generated',
        skor_persen: skorPersen,
        koin_didapat: koinDidapat,
        mode: "ai",
        durasi: durasi
    }]);

    await checkAndUnlockBadges(user, benar, koinBaru, dapatBadgePerfect);

    document.getElementById("quizCard").classList.add("hidden");
    document.getElementById("resultCard").classList.remove("hidden");

    document.getElementById("resultScore").innerHTML = skorPersen + "<span>/100</span>";
    document.getElementById("koinGain").textContent = "+" + koinDidapat + " Koin IQ";
    document.getElementById("koinDisplay").textContent = koinBaru;

    // 🔥 Feedback pakai persentase (totalSoal)
    const feedbackText = getFeedback(PERSONA_AKTIF, benar, totalSoal, user.username);
    document.getElementById("feedbackBox").textContent = feedbackText;

    buildReviewSection();

    document.getElementById("toggleReviewBtn").addEventListener("click", () => {
        const reviewEl = document.getElementById("reviewSection");
        const btn = document.getElementById("toggleReviewBtn");
        if (reviewEl.classList.contains("hidden")) {
            reviewEl.classList.remove("hidden");
            btn.textContent = "Sembunyikan Pembahasan";
        } else {
            reviewEl.classList.add("hidden");
            btn.textContent = "Lihat Pembahasan Soal";
        }
    });

    document.getElementById("backToHomeBtn").addEventListener("click", () => {
        window.location.href = "app.html?tab=arena";
    });
}

// ============================================================
// 🏆 BADGE, REVIEW, FEEDBACK (Sama seperti sebelumnya)
// ============================================================
function buildReviewSection() {
    const container = document.getElementById("reviewSection");
    container.innerHTML = "<h3 style='margin-bottom:12px;font-family:var(--font-display);'>Pembahasan Soal</h3>";

    userAnswers.forEach((ans, i) => {
        if (!ans) return;
        const soal = ans.soal;
        const isCorrect = ans.isBenar;
        const correctOption = soal._opsiAcak ? soal._opsiAcak.find(o => o.isBenar) : null;
        const correctText = correctOption ? correctOption.text : soal.opsi[soal.jawaban];

        const div = document.createElement("div");
        div.className = "review-item " + (isCorrect ? "review-correct" : "review-wrong");

        let html = "<div class='review-item-header'>";
        html += "<span class='review-number'>Soal " + (i + 1) + "</span>";
        html += "<span class='review-status " + (isCorrect ? "status-correct" : "status-wrong") + "'>";
        html += (isCorrect ? "✅ Benar" : "❌ Salah") + "</span></div>";
        html += "<div class='review-question'>" + soal.pertanyaan + "</div>";

        if (!isCorrect) {
            html += "<div class='review-your-answer'>Jawaban kamu: <span class='wrong-text'>" + ans.chosenText + "</span></div>";
            html += "<div class='review-correct-answer'>Jawaban benar: <span class='correct-text'>" + correctText + "</span></div>";
        }
        if (soal.penjelasan) {
            html += "<div class='review-explanation'>💡 " + soal.penjelasan + "</div>";
        }

        div.innerHTML = html;
        container.appendChild(div);
    });
}

async function checkAndUnlockBadges(user, benar, koinBaru, dapatPerfect) {
    const badges = user.badges || [];
    let updated = false;

    if (!badges.includes("starter")) { badges.push("starter"); updated = true; }
    if (dapatPerfect && !badges.includes("perfect")) { badges.push("perfect"); updated = true; }
    if (koinBaru >= 100 && !badges.includes("koin100")) { badges.push("koin100"); updated = true; }

    if (updated) {
        await supabaseClient.from("user_progress")
            .update({ badges }).eq("username", username);
    }
}

// ============================================================
// 🚀 LOADER (Load Soal AI & Mulai Timer)
// ============================================================
window.addEventListener("load", async () => {
    if (!username) {
        window.location.href = "app.html";
        return;
    }

    const soalJson = sessionStorage.getItem('quizSoalAI');
    const durasi = parseInt(sessionStorage.getItem('quizTimer')) || 120;
    const jumlah = parseInt(sessionStorage.getItem('quizJumlah')) || 10;

    if (!soalJson) {
        alert('Soal AI tidak ditemukan. Kembali ke dashboard.');
        window.location.href = 'app.html';
        return;
    }

    try {
        const rawSoal = JSON.parse(soalJson);
        const formattedSoal = rawSoal.map(q => {
            let opsi = q.pilihan;
            if (typeof opsi === 'string') {
                try { opsi = JSON.parse(opsi); } catch (e) { opsi = []; }
            }
            if (!Array.isArray(opsi)) opsi = [];
            let jawabanIndex = -1;
            if (q.jawaban) {
                const map = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
                jawabanIndex = map[q.jawaban.toUpperCase()];
                if (jawabanIndex === undefined) jawabanIndex = -1;
            }
            return {
                pertanyaan: q.soal,
                opsi: opsi,
                jawaban: jawabanIndex,
                penjelasan: q.penjelasan || '',
                _opsiAcak: null
            };
        });

        soalData = {
            bab: 'AI Generated - ' + (sessionStorage.getItem('quizMapel') || ''),
            soal: shuffleArray(formattedSoal).slice(0, jumlah)
        };
        userAnswers = new Array(soalData.soal.length).fill(null);
        document.getElementById("totalSoal").textContent = soalData.soal.length;
        document.getElementById("subjectTag").textContent = '🤖 Kuis AI • ' + (sessionStorage.getItem('quizMapel') || '');

        // 🔥 Mulai timer
        startTimer(durasi);
        renderSoal();
    } catch (e) {
        console.error(e);
        alert('Soal AI rusak, coba lagi.');
        window.location.href = 'app.html';
    }
});