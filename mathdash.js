// mathdash.js - Math Dash Minigame Logic
// Speed mental math: 15 questions, 10s timer, faster = more points

const DASH_TIMER = 5;          // seconds per question
const DASH_TOTAL = 15;          // total questions
const DASH_ENERGY_COST = 2;    // energy cost to play
const DASH_BASE_POINTS = 10;   // base points per correct
const DASH_TIME_BONUS_MAX = 20; // max bonus points (if answered instantly)
const DASH_KOIN_MULTIPLIER = 1; // 1 poin = 1 koin

// ─── SOAL GENERATOR ───
// Generate mental math questions at varying difficulty

function generateQuestion(level) {
    // level 1-3: mudah (penjumlahan/pengurangan 1-50)
    // level 4-6: sedang (perkalian sederhana, + bilangan lebih besar)
    // level 7+: susah (perkalian 2 digit, pengurangan negatif, kuadrat sederhana)

    const types = [];

    if (level <= 3) {
        // Mudah: penjumlahan & pengurangan
        types.push("add", "sub");
    } else if (level <= 6) {
        types.push("add", "sub", "mul");
    } else {
        types.push("add", "sub", "mul", "square");
    }

    const type = types[Math.floor(Math.random() * types.length)];
    let a, b, answer, display;

    switch (type) {
        case "add":
            if (level <= 3) {
                a = randInt(2, 30);
                b = randInt(2, 30);
            } else if (level <= 6) {
                a = randInt(10, 100);
                b = randInt(10, 100);
            } else {
                a = randInt(50, 500);
                b = randInt(50, 500);
            }
            display = `${a} + ${b}`;
            answer = a + b;
            break;

        case "sub":
            if (level <= 3) {
                a = randInt(5, 30);
                b = randInt(1, a);
            } else if (level <= 6) {
                a = randInt(20, 100);
                b = randInt(5, a);
            } else {
                a = randInt(100, 999);
                b = randInt(10, a);
            }
            display = `${a} − ${b}`;
            answer = a - b;
            break;

        case "mul":
            if (level <= 6) {
                a = randInt(2, 9);
                b = randInt(2, 12);
            } else {
                a = randInt(3, 15);
                b = randInt(3, 15);
            }
            display = `${a} × ${b}`;
            answer = a * b;
            break;

        case "square":
            a = randInt(2, 12);
            display = `${a}²`;
            answer = a * a;
            break;
    }

    // Generate wrong options
    const wrongs = new Set();
    while (wrongs.size < 3) {
        let wrong;
        const offset = randInt(1, Math.max(5, Math.ceil(Math.abs(answer) * 0.3)));
        wrong = Math.random() > 0.5 ? answer + offset : answer - offset;
        if (wrong !== answer && wrong >= 0) wrongs.add(wrong);
    }

    const options = [answer, ...wrongs];
    // Shuffle
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    return {
        display,
        answer,
        options
    };
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ─── GAME STATE ───

let currentUser = null;
let currentSoal = 0;
let totalPoints = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let combo = 0;
let maxCombo = 0;
let timerInterval = null;
let timerSeconds = DASH_TIMER;
let currentQuestion = null;
let isAnswered = false;

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

    if (user.energi < DASH_ENERGY_COST) {
        document.getElementById("noEnergyMsg").textContent = `Energi tidak cukup (butuh ${DASH_ENERGY_COST}, kamu punya ${user.energi}).`;
        document.getElementById("startBtn").disabled = true;
        document.getElementById("startBtn").style.opacity = "0.5";
    }
});

// ─── START GAME ───

async function startGame() {
    // Kurangi energi
    const newEnergi = currentUser.energi - DASH_ENERGY_COST;
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
    totalPoints = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    combo = 0;
    maxCombo = 0;

    document.getElementById("startCard").classList.add("hidden");
    document.getElementById("gameCard").classList.remove("hidden");
    document.getElementById("totalSoal").textContent = DASH_TOTAL;
    document.getElementById("pointsDisplay").textContent = 0;

    nextQuestion();
}

// ─── NEXT QUESTION ───

function nextQuestion() {
    currentSoal++;
    if (currentSoal > DASH_TOTAL) {
        endGame();
        return;
    }

    isAnswered = false;
    document.getElementById("soalNum").textContent = currentSoal;
    document.getElementById("comboDisplay").textContent = combo > 1 ? `🔥 Combo x${combo}` : "";

    // Difficulty scales with progress
    const level = Math.min(10, Math.ceil(currentSoal / 2));
    currentQuestion = generateQuestion(level);

    document.getElementById("question").textContent = currentQuestion.display + " = ?";

    // Render options
    const optContainer = document.getElementById("options");
    optContainer.innerHTML = "";
    currentQuestion.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "dash-option";
        btn.textContent = opt;
        btn.addEventListener("click", () => selectAnswer(opt, btn));
        optContainer.appendChild(btn);
    });

    // Start timer
    startTimer();
}

// ─── TIMER ───

function startTimer() {
    timerSeconds = DASH_TIMER;
    const timerBar = document.getElementById("timerBar");
    timerBar.style.width = "100%";
    timerBar.className = "timer-bar-fill";

    if (timerInterval) clearInterval(timerInterval);

    const startTime = Date.now();

    timerInterval = setInterval(() => {
        if (isAnswered) return;

        const elapsed = (Date.now() - startTime) / 1000;
        const remaining = DASH_TIMER - elapsed;

        if (remaining <= 0) {
            clearInterval(timerInterval);
            timerBar.style.width = "0%";
            timeOut();
            return;
        }

        const pct = (remaining / DASH_TIMER) * 100;
        timerBar.style.width = pct + "%";

        if (pct < 20) {
            timerBar.className = "timer-bar-fill danger";
        } else if (pct < 50) {
            timerBar.className = "timer-bar-fill warning";
        } else {
            timerBar.className = "timer-bar-fill";
        }
    }, 50);
}

function timeOut() {
    isAnswered = true;
    wrongAnswers++;
    combo = 0;

    // Highlight correct answer
    document.querySelectorAll(".dash-option").forEach(btn => {
        btn.disabled = true;
        if (parseInt(btn.textContent) === currentQuestion.answer) {
            btn.classList.add("correct");
        } else {
            btn.classList.add("timeout");
        }
    });

    showPointsPopup("⏰", false);

    setTimeout(nextQuestion, 1200);
}

// ─── ANSWER ───

function selectAnswer(value, btnEl) {
    if (isAnswered) return;
    isAnswered = true;
    clearInterval(timerInterval);

    const isCorrect = value === currentQuestion.answer;
    const allBtns = document.querySelectorAll(".dash-option");

    allBtns.forEach(btn => {
        btn.disabled = true;
        if (parseInt(btn.textContent) === currentQuestion.answer) {
            btn.classList.add("correct");
        }
    });

    if (isCorrect) {
        btnEl.classList.add("correct");
        correctAnswers++;
        combo++;
        if (combo > maxCombo) maxCombo = combo;

        // Calculate points
        const elapsed = (Date.now() - Date.now()) / 1000; // approximate
        const timeLeft = Math.max(0, parseFloat(document.getElementById("timerBar").style.width) / 100 * DASH_TIMER);
        const timeBonus = Math.round((timeLeft / DASH_TIMER) * DASH_TIME_BONUS_MAX);
        const comboBonus = Math.min(combo - 1, 5) * 3; // max +15 bonus for combo
        const points = DASH_BASE_POINTS + timeBonus + comboBonus;

        totalPoints += points;
        document.getElementById("pointsDisplay").textContent = totalPoints;
        document.getElementById("comboDisplay").textContent = combo > 1 ? `🔥 Combo x${combo}` : "";

        showPointsPopup(`+${points}`, true);
    } else {
        btnEl.classList.add("wrong");
        wrongAnswers++;
        combo = 0;
        document.getElementById("comboDisplay").textContent = "";

        showPointsPopup("✗", false);
    }

    setTimeout(nextQuestion, 1000);
}

// ─── POINTS POPUP ───

function showPointsPopup(text, positive) {
    const popup = document.createElement("div");
    popup.className = "points-popup " + (positive ? "positive" : "negative");
    popup.textContent = text;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 900);
}

// ─── END GAME ───

async function endGame() {
    clearInterval(timerInterval);
    document.getElementById("gameCard").classList.add("hidden");
    document.getElementById("resultCard").classList.remove("hidden");

    // Calculate koin earned
    const koinEarned = totalPoints * DASH_KOIN_MULTIPLIER;

    document.getElementById("finalScore").textContent = totalPoints;
    document.getElementById("correctCount").textContent = correctAnswers;
    document.getElementById("wrongCount").textContent = wrongAnswers;
    document.getElementById("koinEarned").textContent = koinEarned;

    // Trophy & message based on performance
    const pct = correctAnswers / DASH_TOTAL;
    let trophy, message;

    if (pct >= 0.9) {
        trophy = "🏆";
        message = "LUAR BIASA! Otakmu super cepat! ⚡";
    } else if (pct >= 0.7) {
        trophy = "🥇";
        message = "Bagus banget! Latih terus kecepatanmu!";
    } else if (pct >= 0.5) {
        trophy = "🥈";
        message = "Lumayan! Masih bisa ditingkatkan.";
    } else {
        trophy = "🥉";
        message = "Jangan menyerah, terus berlatih!";
    }

    document.getElementById("trophyEmoji").textContent = trophy;
    document.getElementById("resultMessage").textContent = message;

    if (maxCombo >= 3) {
        document.getElementById("resultMessage").textContent += ` (Max Combo: x${maxCombo} 🔥)`;
    }

    // Save koin & quiz result to Supabase
    const { error } = await supabaseClient
        .from("user_progress")
        .update({ koin_iq: currentUser.koin_iq + koinEarned })
        .eq("username", currentUser.username);

    if (!error) {
        currentUser.koin_iq += koinEarned;
    }

    // Save to quiz_results for analytics
    await supabaseClient
        .from("quiz_results")
        .insert([{
            username: currentUser.username,
            bab: "Math Dash",
            skor_persen: Math.round(pct * 100),
            koin_didapat: koinEarned
        }]);

    document.getElementById("koinDisplay").textContent = currentUser.koin_iq;
}
