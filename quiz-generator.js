// ============================================================
// QUIZ GENERATOR — Skolvix
// Versi: 1.0
// ============================================================

// ─── ELEMEN ───
const sourceBtns = document.querySelectorAll('.source-btn');
const sourceAreas = {
    upload: document.getElementById('area-upload'),
    teks: document.getElementById('area-teks'),
    ai: document.getElementById('area-ai')
};
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const filePreview = document.getElementById('filePreview');
const textInput = document.getElementById('textInput');
const teksPreview = document.getElementById('teksPreview');
const aiTopic = document.getElementById('aiTopic');
const aiPreview = document.getElementById('aiPreview');
const generateBtn = document.getElementById('generateBtn');
const loading = document.getElementById('loading');
const soalContainer = document.getElementById('soalContainer');
const soalContent = document.getElementById('soalContent');
const timerDisplay = document.getElementById('timerDisplay');
const nextBtn = document.getElementById('nextBtn');
const resultContainer = document.getElementById('resultContainer');
const resultContent = document.getElementById('resultContent');
const jumlahGroup = document.getElementById('jumlahGroup');
const jenisGroup = document.getElementById('jenisGroup');
const durasiInput = document.getElementById('durasiInput');

let extractedText = '';
let soalData = [];
let currentIndex = 0;
let timer = null;
let timerValue = 60;
let score = 0;
let userAnswers = [];

// ─── SOURCE SELECTOR ───
sourceBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        sourceBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const source = this.dataset.source;
        Object.keys(sourceAreas).forEach(key => {
            sourceAreas[key].classList.toggle('active', key === source);
        });
    });
});

// ─── UPLOAD ───
uploadArea.addEventListener('click', () => fileInput.click());
uploadArea.addEventListener('dragover', (e) => { e.preventDefault(); uploadArea.classList.add('dragover'); });
uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
});
fileInput.addEventListener('change', () => {
    if (fileInput.files.length) handleFile(fileInput.files[0]);
});

async function handleFile(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    let text = '';
    try {
        if (ext === 'txt') {
            text = await file.text();
        } else if (ext === 'pdf') {
            const arrayBuffer = await file.arrayBuffer();
            // Gunakan Supabase Edge Function untuk ekstrak PDF
            const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
            const { data, error } = await supabaseClient.functions.invoke('extract-pdf', {
                body: { file: base64, filename: file.name }
            });
            if (error) throw new Error(error.message);
            text = data.text || 'Gagal ekstrak teks dari PDF.';
        } else if (ext === 'docx') {
            alert('DOCX belum didukung. Pakai PDF atau TXT dulu ya.');
            return;
        } else {
            alert('Format file tidak didukung.');
            return;
        }
        extractedText = text;
        filePreview.textContent = `✅ ${file.name} (${text.length} karakter)`;
        textInput.value = text;
        teksPreview.textContent = '📋 Teks berhasil diekstrak!';
    } catch (err) {
        alert('❌ Gagal baca file: ' + err.message);
    }
}

// ─── TEKS PREVIEW ───
textInput.addEventListener('input', function () {
    const text = this.value.trim();
    teksPreview.textContent = text.length > 0 ? `📋 ${text.length} karakter` : '';
    extractedText = text;
});

aiTopic.addEventListener('input', function () {
    const topic = this.value.trim();
    aiPreview.textContent = topic.length > 0 ? `🔍 Mencari materi tentang "${topic}"...` : '';
});

// ─── FORMAT ───
document.querySelectorAll('#jumlahGroup .btn-option').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('#jumlahGroup .btn-option').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

document.querySelectorAll('#jenisGroup .btn-option').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('#jenisGroup .btn-option').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// ─── GET VALUE ───
function getJumlah() {
    const active = document.querySelector('#jumlahGroup .btn-option.active');
    return parseInt(active.dataset.value);
}

function getJenis() {
    const active = document.querySelector('#jenisGroup .btn-option.active');
    return active.dataset.value;
}

function getDurasi() {
    return Math.min(Math.max(parseInt(durasiInput.value) || 60, 30), 1000);
}

// ─── GENERATE ───
generateBtn.addEventListener('click', async function () {
    // 1. Dapatkan teks
    const source = document.querySelector('.source-btn.active').dataset.source;
    let text = '';

    if (source === 'upload') {
        text = extractedText || textInput.value.trim();
    } else if (source === 'teks') {
        text = textInput.value.trim();
    } else if (source === 'ai') {
        const topic = aiTopic.value.trim();
        if (!topic) { alert('Masukkan topik yang ingin dicari!'); return; }
        text = await cariMateriAI(topic);
    }

    if (!text || text.length < 10) {
        alert('Masukkan materi yang cukup (minimal 10 karakter).');
        return;
    }

    // 2. Ambil format
    const jumlah = getJumlah();
    const jenis = getJenis();
    const durasi = getDurasi();

    // 3. Generate
    loading.classList.add('active');
    generateBtn.disabled = true;
    soalContainer.classList.remove('active');
    resultContainer.classList.remove('active');

    try {
        const response = await fetch(
            'https://yqbkkxibgsfaueaaezey.supabase.co/functions/v1/generate-soal-ai',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text, jumlah, jenis })
            }
        );

        const data = await response.json();

        if (!data.success) {
            throw new Error(data.error || 'Gagal generate soal');
        }

        soalData = data.soal;
        if (!soalData || soalData.length === 0) {
            throw new Error('Tidak ada soal yang dihasilkan.');
        }

        // 4. Mulai kuis
        currentIndex = 0;
        score = 0;
        userAnswers = [];
        timerValue = durasi;

        showSoal(currentIndex);

    } catch (err) {
        alert('❌ ' + err.message);
    } finally {
        loading.classList.remove('active');
        generateBtn.disabled = false;
    }
});

// ─── SHOW SOAL ───
function showSoal(index) {
    if (index >= soalData.length) {
        finishQuiz();
        return;
    }

    const soal = soalData[index];
    const isEsai = getJenis() === 'esai';
    const total = soalData.length;

    let html = `
        <div class="soal-card">
            <div class="soal-number">Soal ${index + 1} / ${total}</div>
            <div class="soal-text">${soal.soal}</div>
    `;

    if (isEsai) {
        html += `
            <textarea id="esaiInput" style="width:100%; padding:12px; border-radius:8px; border:1px solid #0077B6; background:rgba(0,0,0,0.2); color:#CAF0F8; font-family:inherit; min-height:80px;" placeholder="Tulis jawaban esai di sini..."></textarea>
            <button class="btn btn-primary" id="submitEsaiBtn" style="margin-top:8px;">Submit Jawaban</button>
        `;
    } else {
        soal.opsi.forEach((o, i) => {
            const label = String.fromCharCode(65 + i);
            html += `
                <div class="opsi-item" data-index="${i}">
                    ${label}. ${o.replace(/^[A-D]\.\s*/, '')}
                </div>
            `;
        });
    }

    html += `</div>`;
    soalContent.innerHTML = html;
    soalContainer.classList.add('active');
    resultContainer.classList.remove('active');

    // Timer
    startTimer();

    // Event listener untuk PG
    if (!isEsai) {
        document.querySelectorAll('.opsi-item').forEach(el => {
            el.addEventListener('click', function () {
                if (this.classList.contains('selected')) return;
                const parent = this.closest('.soal-card');
                parent.querySelectorAll('.opsi-item').forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');

                // Simpan jawaban
                const jawabanHuruf = String.fromCharCode(65 + parseInt(this.dataset.index));
                userAnswers[index] = jawabanHuruf;

                // Feedback langsung
                const soal = soalData[index];
                const isBenar = jawabanHuruf === soal.jawaban;
                if (isBenar) score++;
                this.classList.add(isBenar ? 'correct' : 'wrong');
                this.style.cursor = 'default';

                // Tampilkan penjelasan
                const expl = parent.querySelector('.explanation') || document.createElement('div');
                expl.className = 'explanation show';
                expl.innerHTML = `
                    <strong>${isBenar ? '✅ Benar!' : '❌ Salah.'}</strong> ${soal.penjelasan}
                    <br><em style="color:rgba(202,240,248,0.5); font-size:13px;">Jawaban benar: ${soal.jawaban}</em>
                `;
                parent.appendChild(expl);

                // Disable semua opsi
                parent.querySelectorAll('.opsi-item').forEach(o => {
                    o.style.pointerEvents = 'none';
                });

                // Tampilkan tombol next
                nextBtn.style.display = 'block';
            });
        });
    }

    // Event listener untuk Esai
    if (isEsai) {
        document.getElementById('submitEsaiBtn')?.addEventListener('click', function () {
            const jawaban = document.getElementById('esaiInput').value.trim();
            if (!jawaban) { alert('Tulis jawaban dulu!'); return; }
            userAnswers[index] = jawaban;
            // Esai dianggap "selesai" tanpa skor otomatis
            nextBtn.style.display = 'block';
            document.getElementById('esaiInput').disabled = true;
            this.disabled = true;
            // Simpan jawaban user untuk review di hasil
            soalData[index].userJawaban = jawaban;
        });
    }

    // Next button
    nextBtn.style.display = 'none';
    nextBtn.textContent = index + 1 < total ? 'Soal Berikutnya →' : 'Lihat Hasil 🎉';
    nextBtn.onclick = function () {
        if (index + 1 < total) {
            showSoal(index + 1);
        } else {
            finishQuiz();
        }
    };

    // Reset timer
    timerValue = getDurasi();
    updateTimerDisplay();
}

// ─── TIMER ───
function startTimer() {
    clearInterval(timer);
    timerValue = getDurasi();
    updateTimerDisplay();
    timer = setInterval(() => {
        timerValue--;
        updateTimerDisplay();
        if (timerValue <= 0) {
            clearInterval(timer);
            // Timer habis → otomatis ke soal berikutnya
            // Jika belum menjawab, lewati
            if (currentIndex < soalData.length) {
                // Tandai jawaban kosong sebagai "Tidak Dijawab"
                if (!userAnswers[currentIndex]) {
                    userAnswers[currentIndex] = null;
                }
                currentIndex++;
                if (currentIndex < soalData.length) {
                    showSoal(currentIndex);
                } else {
                    finishQuiz();
                }
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerDisplay.textContent = `⏱️ ${timerValue}`;
    timerDisplay.classList.toggle('warning', timerValue <= 10);
}

// ─── FINISH ───
function finishQuiz() {
    clearInterval(timer);
    soalContainer.classList.remove('active');
    resultContainer.classList.add('active');

    const total = soalData.length;
    const percentage = Math.round((score / total) * 100);

    // Ambil persona dari localStorage
    const personaKey = localStorage.getItem('skolvix_persona') || 'kakAlex';
    const feedback = getFeedback(personaKey, score, total);

    let html = `
        <h2>🎉 Kuis Selesai!</h2>
        <div class="result-score">${score} / ${total}</div>
        <p style="text-align:center; font-size:18px; font-weight:600;">${percentage}%</p>
        <div class="result-feedback">
            <strong>🤖 ${feedback}</strong>
        </div>
        <hr style="border-color:#0077B6; margin:16px 0;">
        <h3>📊 Review Jawaban</h3>
    `;

    soalData.forEach((soal, i) => {
        const userAns = userAnswers[i] || 'Tidak dijawab';
        const isBenar = userAns === soal.jawaban;
        html += `
            <div style="background:rgba(0,0,0,0.15); padding:12px; border-radius:8px; margin-bottom:8px; border-left:4px solid ${isBenar ? '#90EF90' : '#FF4D6D'};">
                <p><strong>Soal ${i + 1}:</strong> ${soal.soal}</p>
                <p style="font-size:13px; color:rgba(202,240,248,0.6);">
                    Jawaban kamu: <strong>${userAns}</strong>
                    ${isBenar ? '✅' : ` ❌ (Benar: ${soal.jawaban})`}
                </p>
                ${soal.penjelasan ? `<p style="font-size:13px; color:rgba(202,240,248,0.5);">💡 ${soal.penjelasan}</p>` : ''}
            </div>
        `;
    });

    html += `
        <div class="result-actions">
            <button class="btn btn-primary" onclick="location.reload()">🔄 Ulangi</button>
            <a href="app.html?tab=arena" class="btn btn-secondary">🏠 Kembali</a>
        </div>
    `;

    resultContent.innerHTML = html;
}

// ─── AI CARI MATERI ───
async function cariMateriAI(topic) {
    // Panggil Gemini untuk cari materi
    const prompt = `Cari dan rangkum materi tentang "${topic}" untuk siswa SMA dalam bahasa Indonesia. Fokus pada konsep penting yang bisa dijadikan soal pilihan ganda. Maksimal 300 kata.`;

    try {
        const response = await fetch(
            'https://yqbkkxibgsfaueaaezey.supabase.co/functions/v1/generate-soal-ai',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: prompt, jumlah: 0, jenis: 'materi' })
            }
        );
        const data = await response.json();
        if (data.success && data.soal && data.soal.length > 0) {
            // Gabungkan semua teks dari soal (sebagai materi)
            return data.soal.map(s => s.soal).join('\n');
        }
        return `Materi tentang "${topic}" tidak ditemukan. Coba topik lain.`;
    } catch (err) {
        console.error('Error cari materi:', err);
        return `Gagal mencari materi tentang "${topic}". Coba lagi.`;
    }
}

// ─── FEEDBACK ───
function getFeedback(personaKey, score, maxScore) {
    // Fungsi ini akan diambil dari feedback-templates.js
    if (typeof FEEDBACK_TEMPLATES === 'undefined') {
        return "Terima kasih sudah belajar!";
    }
    const templates = FEEDBACK_TEMPLATES[personaKey];
    if (!templates) return "Terima kasih sudah belajar!";

    const percentage = (score / maxScore) * 100;
    let level;
    if (percentage === 100) level = 'sempurna';
    else if (percentage >= 70) level = 'bagus';
    else if (percentage >= 50) level = 'cukup';
    else level = 'kurang';

    const variations = templates[level] || [];
    if (variations.length === 0) return "Terima kasih sudah belajar!";
    const randomIndex = Math.floor(Math.random() * variations.length);
    return variations[randomIndex] || "Terima kasih sudah belajar!";
}