// analytics.js — Analisis Performa untuk Skolvix
// Query data dari Supabase (quiz_results) dan tampilkan grafik + rekomendasi

const username = localStorage.getItem("skolvix_username");

// Label mapel yang ramah ditampilkan
const SUBJECT_LABELS = {
    "matematika": "Matematika",
    "ipa": "IPA",
    "ips": "IPS",
    "bahasa-indonesia": "B. Indonesia",
    "bahasa-inggris": "B. Inggris"
};

// Normalisasi nama bab dari database ke key standar
function normalizeSubject(bab) {
    if (!bab) return "unknown";
    const lower = bab.toLowerCase();
    if (lower.includes("matematika") || lower.includes("bilangan")) return "matematika";
    if (lower.includes("ipa") || lower.includes("sains")) return "ipa";
    if (lower.includes("ips") || lower.includes("sosial")) return "ips";
    if (lower.includes("bahasa indonesia") || lower.includes("b. indonesia")) return "bahasa-indonesia";
    if (lower.includes("bahasa inggris") || lower.includes("b. inggris") || lower.includes("english")) return "bahasa-inggris";
    return bab;
}

// Class CSS untuk subject bar
const SUBJECT_CLASSES = {
    "matematika": "matematika",
    "ipa": "ipa",
    "ips": "ips",
    "bahasa-indonesia": "bahasa-indonesia",
    "bahasa-inggris": "bahasa-inggris"
};

window.addEventListener("load", async () => {
    if (!username) {
        window.location.href = "app.html";
        return;
    }
    await loadAnalytics();
});

async function loadAnalytics() {
    const { data: results, error } = await supabaseClient
        .from("quiz_results")
        .select("*")
        .eq("username", username)
        .order("created_at", { ascending: true });

    const loadingEl = document.getElementById("loadingState");
    const emptyEl = document.getElementById("emptyState");
    const contentEl = document.getElementById("analyticsContent");

    if (error) {
        console.error("Error loading quiz_results:", error);
        loadingEl.innerHTML = `<div class="empty-icon">⚠️</div><p>Gagal memuat data. Coba refresh halaman.</p>`;
        return;
    }

    if (!results || results.length === 0) {
        loadingEl.classList.add("hidden");
        emptyEl.classList.remove("hidden");
        return;
    }

    loadingEl.classList.add("hidden");
    contentEl.classList.remove("hidden");

    // === STATS SUMMARY ===
    const totalKuis = results.length;
    const avgScore = Math.round(results.reduce((sum, r) => sum + r.skor_persen, 0) / totalKuis);
    const totalKoin = results.reduce((sum, r) => sum + r.koin_didapat, 0);
    const bestScore = Math.max(...results.map(r => r.skor_persen));

    document.getElementById("totalKuis").textContent = totalKuis;
    document.getElementById("avgScore").textContent = avgScore + "%";
    document.getElementById("totalKoin").textContent = totalKoin;
    document.getElementById("bestScore").textContent = bestScore + "%";

    // === AVERAGE SCORE PER SUBJECT (Bar Chart) ===
    const subjectAverages = calcSubjectAverages(results);
    renderSubjectBars(subjectAverages);

    // === TREND LINE CHART ===
    renderTrendChart(results);

    // === RECOMMENDATIONS ===
    renderRecommendations(subjectAverages, results);

    // === HISTORY TABLE ===
    renderHistory(results);
}

function calcSubjectAverages(results) {
    const map = {};
    results.forEach(r => {
        const subject = normalizeSubject(r.bab);
        if (!map[subject]) map[subject] = { total: 0, count: 0 };
        map[subject].total += r.skor_persen;
        map[subject].count += 1;
    });

    const averages = {};
    for (const [subject, data] of Object.entries(map)) {
        averages[subject] = Math.round(data.total / data.count);
    }
    return averages;
}

function renderSubjectBars(averages) {
    const container = document.getElementById("subjectBars");
    container.innerHTML = "";

    // Urutkan mapel agar konsisten
    const allSubjects = ["matematika", "ipa", "ips", "bahasa-indonesia", "bahasa-inggris"];

    allSubjects.forEach(subject => {
        const avg = averages[subject];
        if (avg === undefined) return;

        const label = SUBJECT_LABELS[subject] || subject;
        const cls = SUBJECT_CLASSES[subject] || "matematika";

        const row = document.createElement("div");
        row.className = "subject-bar-row";
        row.innerHTML = `
      <div class="subject-bar-label">${label}</div>
      <div class="subject-bar-track">
        <div class="subject-bar-fill ${cls}" style="width: ${avg}%;">${avg}%</div>
      </div>
    `;
        container.appendChild(row);
    });

    // Jika tidak ada data sama sekali
    if (container.children.length === 0) {
        container.innerHTML = `<p style="font-size:13px;color:var(--text-dim);text-align:center;">Belum ada data skor.</p>`;
    }
}

function renderTrendChart(results) {
    const ctx = document.getElementById("trendChart");
    if (!ctx) return;

    // Ambil 20 hasil terakhir
    const recent = results.slice(-20);

    const labels = recent.map((r, i) => `#${results.indexOf(r) + 1}`);
    const scores = recent.map(r => r.skor_persen);

    // Warna titik berdasarkan skor
    const pointColors = scores.map(s => {
        if (s >= 80) return "#00e5a0";
        if (s >= 60) return "#f5c842";
        return "#ff4d6d";
    });

    new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Skor (%)",
                data: scores,
                borderColor: "#3b8bff",
                backgroundColor: "rgba(59, 139, 255, 0.1)",
                borderWidth: 2,
                pointBackgroundColor: pointColors,
                pointBorderColor: pointColors,
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: "#0a1628",
                    titleColor: "#fff",
                    bodyColor: "rgba(255,255,255,0.8)",
                    borderColor: "rgba(255,255,255,0.1)",
                    borderWidth: 1,
                    cornerRadius: 8,
                    callbacks: {
                        afterBody: function (context) {
                            const idx = context[0].dataIndex;
                            const r = recent[idx];
                            const label = SUBJECT_LABELS[normalizeSubject(r.bab)] || r.bab || "Unknown";
                            return `Mapel: ${label}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: { color: "rgba(255,255,255,0.05)" },
                    ticks: {
                        color: "rgba(255,255,255,0.4)",
                        font: { size: 11 },
                        callback: v => v + "%"
                    }
                },
                x: {
                    grid: { display: false },
                    ticks: {
                        color: "rgba(255,255,255,0.4)",
                        font: { size: 11 }
                    }
                }
            }
        }
    });
}

function renderRecommendations(averages, results) {
    const container = document.getElementById("recommendations");
    container.innerHTML = "";

    const allSubjects = ["matematika", "ipa", "ips", "bahasa-indonesia", "bahasa-inggris"];
    const recommendations = [];

    // Cek mapel yang lemah
    allSubjects.forEach(subject => {
        const avg = averages[subject];
        const label = SUBJECT_LABELS[subject] || subject;

        if (avg !== undefined && avg < 60) {
            recommendations.push({
                type: "warning",
                icon: "📉",
                text: `<strong>${label}</strong> — Rata-rata skor kamu ${avg}%. Coba baca ulang materinya dan kerjakan kuis lagi. Fokus ke bagian yang sering salah!`
            });
        } else if (avg !== undefined && avg >= 80) {
            recommendations.push({
                type: "good",
                icon: "🌟",
                text: `<strong>${label}</strong> — Keren! Rata-rata ${avg}%. Pertahankan dan coba tantangan level selanjutnya.`
            });
        }
    });

    // Cek mapel yang belum pernah dicoba
    allSubjects.forEach(subject => {
        if (!averages[subject]) {
            const label = SUBJECT_LABELS[subject] || subject;
            recommendations.push({
                type: "info",
                icon: "🆕",
                text: `<strong>${label}</strong> — Kamu belum pernah mencoba kuis ini. Yuk coba sekarang!`
            });
        }
    });

    // Cek konsistensi (apakah ada peningkatan)
    if (results.length >= 5) {
        const recent5 = results.slice(-5);
        const avg5 = Math.round(recent5.reduce((s, r) => s + r.skor_persen, 0) / 5);
        const older = results.slice(0, -5);
        const avgOlder = Math.round(older.reduce((s, r) => s + r.skor_persen, 0) / older.length);

        if (avg5 > avgOlder + 5) {
            recommendations.push({
                type: "good",
                icon: "📈",
                text: `Performa 5 kuis terakhir rata-rata <strong>${avg5}%</strong>, naik dari sebelumnya (${avgOlder}%). Terus semangat!`
            });
        } else if (avg5 < avgOlder - 5) {
            recommendations.push({
                type: "warning",
                icon: "⚠️",
                text: `Performa 5 kuis terakhir rata-rata <strong>${avg5}%</strong>, turun dari sebelumnya (${avgOlder}%). Mungkin perlu review materi lagi.`
            });
        }
    }

    // Cek streak kuis
    if (results.length >= 10) {
        recommendations.push({
            type: "info",
            icon: "🔥",
            text: `Kamu sudah menyelesaikan <strong>${results.length} kuis</strong>! Konsistensi adalah kunci. Pertahankan semangat belajar!`
        });
    }

    if (recommendations.length === 0) {
        recommendations.push({
            type: "info",
            icon: "💪",
            text: `Kerjakan lebih banyak kuis di berbagai mapel untuk mendapat rekomendasi belajar yang lebih personal.`
        });
    }

    recommendations.forEach(rec => {
        const li = document.createElement("li");
        li.className = `recommendation-item ${rec.type}`;
        li.innerHTML = `<div class="rec-icon">${rec.icon}</div><div class="rec-text">${rec.text}</div>`;
        container.appendChild(li);
    });
}

function renderHistory(results) {
    const tbody = document.getElementById("historyBody");
    tbody.innerHTML = "";

    // Tampilkan 15 kuis terakhir (terbaru di atas)
    const recent = [...results].reverse().slice(0, 15);

    recent.forEach(r => {
        const tr = document.createElement("tr");
        const label = SUBJECT_LABELS[normalizeSubject(r.bab)] || r.bab || "Unknown";
        const scoreClass = r.skor_persen >= 80 ? "high" : (r.skor_persen >= 60 ? "mid" : "low");
        const dateStr = r.created_at
            ? (() => {
                const d = new Date(r.created_at);
                const datePart = d.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
                const h = String(d.getHours()).padStart(2, "0");
                const m = String(d.getMinutes()).padStart(2, "0");
                return `${datePart}, ${h}:${m}`;
            })()
            : "-";

        tr.innerHTML = `
      <td>${label}</td>
      <td><span class="score-badge ${scoreClass}">${r.skor_persen}%</span></td>
      <td>+${r.koin_didapat}</td>
      <td>${dateStr}</td>
    `;
        tbody.appendChild(tr);
    });
}
