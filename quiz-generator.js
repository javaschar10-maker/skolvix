// ============================================================
// QUIZ GENERATOR — Skolvix (FIX CSS VISIBILITY)
// ============================================================

import { getFeedback } from './feedback-templates.js';

// ─── ELEMEN ───
const formCard = document.getElementById('formCard');
const soalCard = document.getElementById('soalCard');
const resultCard = document.getElementById('resultCard');
const generateBtn = document.getElementById('generateBtn');
const loading = document.getElementById('loading');
const textInput = document.getElementById('textInput');
const aiTopic = document.getElementById('aiTopic');
const durasiInput = document.getElementById('durasiInput');
const timerDisplay = document.getElementById('timerDisplay');
const nextBtn = document.getElementById('nextBtn');
const soalContent = document.getElementById('soalContent');
const resultContent = document.getElementById('resultContent');

let soalData = [];
let currentIndex = 0;
let score = 0;
let userAnswers = [];
let timer = null;
let isGenerating = false;

// ─── GET VALUE ───
function getJumlah() {
    const el = document.querySelector('#jumlahGroup .btn-option.active');
    return parseInt(el?.dataset?.value || 5);
}
function getJenis() {
    const el = document.querySelector('#jenisGroup .btn-option.active');
    return el?.dataset?.value || 'pilihan ganda';
}
function getDurasi() {
    const val = parseInt(durasiInput.value) || 60;
    return Math.min(Math.max(val, 30), 1000);
}

// ─── SOURCE SELECTOR ───
document.getElementById('btnTeks').onclick = function () {
    document.querySelectorAll('.source-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    document.getElementById('areaTeks').classList.add('active');
    document.getElementById('areaAI').classList.remove('active');
};
document.getElementById('btnAI').onclick = function () {
    document.querySelectorAll('.source-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    document.getElementById('areaAI').classList.add('active');
    document.getElementById('areaTeks').classList.remove('active');
};

// ─── FORMAT ───
document.querySelectorAll('#jumlahGroup .btn-option').forEach(b => {
    b.onclick = function () {
        document.querySelectorAll('#jumlahGroup .btn-option').forEach(x => x.classList.remove('active'));
        this.classList.add('active');
    };
});
document.querySelectorAll('#jenisGroup .btn-option').forEach(b => {
    b.onclick = function () {
        document.querySelectorAll('#jenisGroup .btn-option').forEach(x => x.classList.remove('active'));
        this.classList.add('active');
    };
});

// ─── PREVIEW ───
textInput.oninput = function () {
    const t = this.value.trim();
    document.getElementById('teksPreview').textContent = t ? `📋 ${t.length} karakter` : '';
};
aiTopic.oninput = function () {
    const t = this.value.trim();
    document.getElementById('aiPreview').textContent = t ? `🔍 Mencari materi tentang "${t}"...` : '';
};

// ─── DISABLE TOMBOL FORMAT SAAT PROSES ───
function disableFormatButtons(disabled) {
    // Semua tombol pilihan
    document.querySelectorAll('.btn-option, .source-btn, #durasiInput, .btn-generate').forEach(el => {
        el.disabled = disabled;
        if (disabled) {
            el.style.opacity = '0.5';
            el.style.cursor = 'not-allowed';
            if (el.tagName === 'BUTTON') el.style.pointerEvents = 'none';
        } else {
            el.style.opacity = '1';
            el.style.cursor = 'pointer';
            if (el.tagName === 'BUTTON') el.style.pointerEvents = 'auto';
        }
    });
}

// ─── GENERATE ───
generateBtn.onclick = async function () {
    if (isGenerating) return;

    disableFormatButtons(true); // Disable semua tombol

    isGenerating = true;
    generateBtn.disabled = true;
    generateBtn.textContent = '⏳ Memproses...';
    loading.classList.add('active');
    formCard.querySelector('h1').textContent = '⏳ Menghasilkan Soal...';

    let text = '';
    const source = document.querySelector('.source-btn.active')?.dataset?.source || 'teks';

    try {
        if (source === 'teks') {
            text = textInput.value.trim();
        } else {
            const topic = aiTopic.value.trim();
            if (!topic) { alert('Masukkan topik!'); resetUI(); return; }
            text = await cariMateriAI(topic);
        }

        if (!text || text.length < 10) {
            alert('Masukkan materi minimal 10 karakter.');
            resetUI();
            return;
        }

        const jumlah = getJumlah();
        const jenis = getJenis();

        const response = await fetch(
            'https://yqbkkxibgsfaueaaezey.supabase.co/functions/v1/generate-soal-ai',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text, jumlah, jenis })
            }
        );
        const data = await response.json();

        if (!response.ok || !data.success) {
            throw new Error(data.error || data.detail || 'Gagal generate soal');
        }
        if (!data.soal || data.soal.length === 0) {
            throw new Error('Tidak ada soal yang dihasilkan.');
        }

        soalData = data.soal;
        currentIndex = 0;
        score = 0;
        userAnswers = [];

        // 🔥 MULAI KUIS — Pakai `active` class
        loading.classList.remove('active');
        formCard.classList.add('hidden');
        soalCard.classList.add('active');
        resultCard.classList.remove('active');
        generateBtn.disabled = false;
        generateBtn.textContent = '🚀 Generate Kuis';
        isGenerating = false;

        showSoal();

    } catch (err) {
        alert('❌ ' + err.message);
        resetUI();
    }
};

// ─── RESET UI ───
function resetUI() {
    loading.classList.remove('active');
    formCard.classList.remove('hidden');
    soalCard.classList.remove('active');
    resultCard.classList.remove('active');
    formCard.querySelector('h1').textContent = '📝 Kuis Generator';
    disableFormatButtons(false);
    generateBtn.disabled = false;
    generateBtn.textContent = '🚀 Generate Kuis';
    isGenerating = false;
    disableFormatButtons(false);
}

// ─── SHOW SOAL ───
function showSoal() {
    if (currentIndex >= soalData.length) {
        finishQuiz();
        return;
    }

    const soal = soalData[currentIndex];
    const isEsai = getJenis() === 'esai';
    const total = soalData.length;

    let html = `<div class="soal-card">
        <div class="soal-number">Soal ${currentIndex + 1} / ${total}</div>
        <div class="soal-text">${soal.soal}</div>`;

    if (!isEsai) {
        // 🔥 CEK APAKAH OPSI ADA
        if (!soal.opsi || !Array.isArray(soal.opsi) || soal.opsi.length === 0) {
            console.error('❌ Opsi tidak ditemukan untuk soal PG:', soal);
            html += `<div style="color:#FF4D6D; padding:12px; background:rgba(255,77,109,0.1); border-radius:8px;">
        ⚠️ Terjadi kesalahan pada soal ini. Coba generate ulang dengan format PG.
    </div>`;
            setTimeout(() => {
                nextBtn.style.display = 'block';
            }, 500);
        } else {
            soal.opsi.forEach((o, i) => {
                const label = String.fromCharCode(65 + i);
                html += `<div class="opsi-item" data-idx="${i}">${label}. ${o.replace(/^[A-D]\.\s*/, '')}</div>`;
            });
        }
    } else {
        // 🔥 TAMBAHKAN INI UNTUK ESAI
        html += `<textarea id="esaiInput" style="width:100%; padding:10px; border-radius:8px; border:1px solid #0077B6; background:rgba(0,0,0,0.2); color:#CAF0F8; font-family:inherit; min-height:80px;" placeholder="Tulis jawaban esai di sini..."></textarea>
    <button class="btn" id="submitEsai" style="margin-top:8px;">Submit Jawaban</button>`;
    }

    html += `</div>`;
    soalContent.innerHTML = html;

    startTimer();

    document.querySelectorAll('.opsi-item').forEach(el => {
        el.onclick = function () {
            if (this.classList.contains('disabled')) return;

            const parent = this.closest('.soal-card');
            if (!parent) return;

            parent.querySelectorAll('.opsi-item').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');

            const idx = parseInt(this.dataset.idx) || 0;
            const jawabanHuruf = String.fromCharCode(65 + idx); // A, B, C, D

            if (typeof userAnswers !== 'undefined' && typeof currentIndex !== 'undefined') {
                userAnswers[currentIndex] = jawabanHuruf;
            }

            const soalItem = (typeof soalData !== 'undefined' && typeof currentIndex !== 'undefined')
                ? soalData[currentIndex]
                : { jawaban: '', penjelasan: '' };

            const isBenar = jawabanHuruf === soalItem.jawaban;
            if (isBenar && typeof score !== 'undefined') score++;

            this.classList.add(isBenar ? 'correct' : 'wrong');

            // ─── AMBIL IDENTITY ───
            const personaKey = localStorage.getItem('skolvix_persona') || 'kakAlex';
            const userName = localStorage.getItem('skolvix_username') || 'Teman';

            // ─── KAMUS FEEDBACK RINGKAS + AWALAN & AKHIRAN DINAMIS ───
            const pgFeedback = {
                // 1. KAK ALEX — Analitis & Logis
                'kakAlex': {
                    prefixBenar: ["Rasional,", "Valid,", "Akurat,", "Tepat,", "Sesuai data,", ""],
                    prefixSalah: ["Deviasi,", "Evaluasi:", "Koreksi:", "Kurang tepat,", "Meleset,", ""],
                    suffixBenar: ["— Analisis bagus.", "— Logis.", "— Tepat sasaran.", "— Presisi.", ""],
                    suffixSalah: ["— Cek logika kembali.", "— Perhatikan data.", "— Perlu rekalibrasi.", ""],
                    benar: [
                        "Opsi {jawaban} tepat, {nama}.",
                        "Pilihan {jawaban} sangat akurat.",
                        "Analisismu di opsi {jawaban} benar, {nama}.",
                        "Opsi {jawaban} memenuhi variabel jawaban."
                    ],
                    salah: [
                        "Opsi {jawaban} meleset, {nama}.",
                        "Pilihan {jawaban} kurang pas secara logika.",
                        "Ada variabel terlewat di opsi {jawaban}.",
                        "Opsi {jawaban} belum sesuai indikator."
                    ]
                },

                // 2. KAK TARA — Energetik & Youthful
                'kakTara': {
                    prefixBenar: ["OMG!", "WOW!", "GOKIL!", "BOOM!", "YESS!", "ANJAY!", ""],
                    prefixSalah: ["ALAMAK!", "OOPS!", "UH-OH!", "SANTAI!", "GAK APA-APA!", "AURA KREDIT!", ""],
                    suffixBenar: ["🔥🚀", "Gacor parah!", "Auto win!", "Keren abis! 🎉", "💥⚡", ""],
                    suffixSalah: ["Tetap semangat! 💪", "Sikat lagi nanti! 🔥", "Jangan kendor! 🚀", "😎💪", ""],
                    benar: [
                        "Opsi {jawaban} bener banget, {nama}!",
                        "Jawaban {jawaban} kamu tepat sasaran!",
                        "Kamu sikat habis opsi {jawaban}, {nama}!",
                        "Opsi {jawaban} emang gak pernah salah!"
                    ],
                    salah: [
                        "Opsi {jawaban} masih kurang pas, {nama}.",
                        "Pilihan {jawaban} belum hoki nih.",
                        "Opsi {jawaban} dikit lagi mendekati kok!",
                        "Jawaban {jawaban} belum tepat, coba lagi!"
                    ]
                },

                // 3. IBU DIAN — Keibuan & Menenangkan
                'ibuDian': {
                    prefixBenar: ["MasyaAllah,", "Wah,", "Pintar,", "Alhamdulillah,", "Hebat,", ""],
                    prefixSalah: ["Tidak apa-apa,", "Sabar ya,", "Pelan-pelan,", "Ooh,", "Jangan sedih,", ""],
                    suffixBenar: ["🌸", "Ibu bangga! ✨", "Anak pintar. 🌸", "Cermat sekali. ✨", ""],
                    suffixSalah: ["Tetap semangat, Nak. 🌸", "Nanti dicoba lagi ya. ✨", "Ibu yakin kamu bisa. 🌸", ""],
                    benar: [
                        "Opsi {jawaban} tepat sekali, {nama}.",
                        "Pilihan {jawaban}-mu sudah benar, Nak.",
                        "Jawaban {jawaban} dipilih dengan cermat.",
                        "Kamu menjawab opsi {jawaban} dengan baik."
                    ],
                    salah: [
                        "Opsi {jawaban} belum pas, {nama}.",
                        "Pilihan {jawaban} kurang tepat, Nak.",
                        "Jawaban {jawaban} belum rezeki kali ini.",
                        "Opsi {jawaban} perlu diperhatikan lagi."
                    ]
                },

                // 4. KAK REY — Tsundere & Sarkas Peduli
                'kakRey': {
                    prefixBenar: ["Hmph.", "Ck.", "Ya ampun,", "Bolehlah,", "Tumben,", ""],
                    prefixSalah: ["Hadeh...", "Ckckck,", "Aduh {nama},", "Gini nih,", "Waduh,", ""],
                    suffixBenar: ["😒", "Gak usah kepedean.", "Bisa juga kamu.", "Jangan senyum-senyum.", ""],
                    suffixSalah: ["😒", "Bikin pusing aja.", "Fokus napa!", "Baca soalnya dong.", ""],
                    benar: [
                        "Opsi {jawaban} kamu bener, {nama}.",
                        "Pilihan {jawaban} tepat. Okelah.",
                        "Kamu milih opsi {jawaban} dan bener.",
                        "Opsi {jawaban} emang gampang sih."
                    ],
                    salah: [
                        "Ngapain milih opsi {jawaban}, {nama}?",
                        "Opsi {jawaban} ceroboh banget sih.",
                        "Pilihan {jawaban} itu salah tau.",
                        "Asal klik opsi {jawaban} ya kamu?"
                    ]
                },

                // 5. KAK SAGA — Stoik & Calm
                'kakSaga': {
                    prefixBenar: ["Jernih,", "Tepat,", "Bijak,", "Cahaya,", "Selaras,", ""],
                    prefixSalah: ["Proses,", "Tenang,", "Amati,", "Belajar,", "Jadikan cermin,", ""],
                    suffixBenar: ["🌌", "— Kesadaran yang utuh.", "— Langkah baik.", "— Pikiran jernih.", ""],
                    suffixSalah: ["🌌", "— Ini awal pemahaman.", "— Jangan tergesa-gesa.", "— Amati kembali.", ""],
                    benar: [
                        "Opsi {jawaban} pilihan yang tepat, {nama}.",
                        "Jawaban {jawaban} memancarkan kebenaran.",
                        "Opsi {jawaban} mencerminkan pemahaman.",
                        "Langkahmu di opsi {jawaban} sudah benar."
                    ],
                    salah: [
                        "Opsi {jawaban} belum tepat, {nama}.",
                        "Pilihan {jawaban} adalah pelajaran baru.",
                        "Opsi {jawaban} masih berupa bayang-bayang.",
                        "Jawaban {jawaban} belum menemukan esensinya."
                    ]
                },

                // 6. KAK VICTOR — Perfeksionis & Disiplin
                'kakVictor': {
                    prefixBenar: ["Presisi!", "Sempurna!", "Bagus!", "Eksekusi tepat!", "Standar masuk!", ""],
                    prefixSalah: ["Deviasi!", "Salah!", "Perbaiki!", "Kurang teliti!", "Tidak presisi!", ""],
                    suffixBenar: ["👑", "— Standar terpenuhi.", "— Tanpa cacat.", "— Profesional.", ""],
                    suffixSalah: ["👑", "— Evaluasi segera.", "— Disiplin lagi.", "— Jauh dari standar.", ""],
                    benar: [
                        "Opsi {jawaban} jawaban yang benar, {nama}.",
                        "Pilihan {jawaban} sesuai kualifikasi.",
                        "Eksekusi opsi {jawaban} sangat profesional.",
                        "Opsi {jawaban} tepat pada sasaran."
                    ],
                    salah: [
                        "Opsi {jawaban} jauh dari standar, {nama}.",
                        "Pilihan {jawaban} menunjukkan kelengahan.",
                        "Opsi {jawaban} tidak memenuhi indikator.",
                        "Ada kesalahan pada pilihan {jawaban}."
                    ]
                }
            };

            // ─── GENERATE KALIMAT KANONIK (PREFIX + UTAMA + SUFFIX) ───
            const personaData = pgFeedback[personaKey] || pgFeedback['kakAlex'];

            const prefixList = isBenar ? personaData.prefixBenar : personaData.prefixSalah;
            const mainList = isBenar ? personaData.benar : personaData.salah;
            const suffixList = isBenar ? personaData.suffixBenar : personaData.suffixSalah;

            // Ambil komponen secara acak
            const pVal = prefixList[Math.floor(Math.random() * prefixList.length)];
            const mVal = mainList[Math.floor(Math.random() * mainList.length)];
            const sVal = suffixList[Math.floor(Math.random() * suffixList.length)];

            // Gabungkan komponen & bersihkan spasi ganda (filter element kosong)
            let rawText = [pVal, mVal, sVal].filter(Boolean).join(" ").trim();

            // Replace Variable {nama} & {jawaban}
            let feedbackText = rawText
                .replace(/{nama}/g, userName)
                .replace(/{jawaban}/g, jawabanHuruf);

            // ─── TAMPILKAN FEEDBACK PERSONA ───
            const feedbackDiv = document.createElement('div');
            feedbackDiv.className = 'explanation show';
            feedbackDiv.style.marginTop = '8px';
            feedbackDiv.style.padding = '10px 14px';
            feedbackDiv.style.background = 'rgba(0,0,0,0.2)';
            feedbackDiv.style.borderRadius = '8px';
            feedbackDiv.style.fontSize = '14px';
            feedbackDiv.style.fontWeight = '600';
            feedbackDiv.style.color = isBenar ? '#90EF90' : '#FFD93D';
            feedbackDiv.innerHTML = feedbackText;
            parent.appendChild(feedbackDiv);

            // ─── TAMPILKAN PENJELASAN SOAL ───
            const expl = parent.querySelector('.explanation-pg') || document.createElement('div');
            expl.className = 'explanation explanation-pg show';
            expl.style.marginTop = '6px';
            expl.style.padding = '10px 14px';
            expl.style.background = 'rgba(0,0,0,0.15)';
            expl.style.borderRadius = '8px';
            expl.style.fontSize = '13px';
            expl.style.color = 'rgba(202,240,248,0.7)';
            expl.innerHTML = `💡 ${soalItem.penjelasan || 'Tidak ada penjelasan tambahan.'}`;
            parent.appendChild(expl);

            // Disable opsi & munculkan tombol lanjut
            parent.querySelectorAll('.opsi-item').forEach(o => o.classList.add('disabled'));

            const nextBtn = document.getElementById('nextBtn');
            if (nextBtn) nextBtn.style.display = 'block';
        };
    });

    // ─── EVENT ESAI ───
    document.getElementById('submitEsai')?.addEventListener('click', function () {
        const jawaban = document.getElementById('esaiInput').value.trim();
        if (!jawaban) {
            alert('Tulis jawaban dulu!');
            return;
        }

        userAnswers[currentIndex] = jawaban;
        soalData[currentIndex].userJawaban = jawaban;

        // ─── HITUNG KATA KUNCI ───
        const soal = soalData[currentIndex];
        const kataKunci = soal.kata_kunci || [];
        const jawabanBenar = soal.penjelasan || 'Jawaban yang diharapkan sudah dijelaskan di materi.';

        let matchCount = 0;
        kataKunci.forEach(kw => {
            if (jawaban.toLowerCase().includes(kw.toLowerCase())) {
                matchCount++;
            }
        });

        const total = kataKunci.length;
        const persentase = total > 0 ? Math.round((matchCount / total) * 100) : 0;

        // ─── TAMBAHKAN SKOR ───
        if (persentase >= 50 && total > 0) {
            score++;
        }

        // ─── KATA KUNCI YANG HILANG ───
        const missedKeywords = [];
        kataKunci.forEach(kw => {
            if (!jawaban.toLowerCase().includes(kw.toLowerCase())) {
                missedKeywords.push(kw);
            }
        });

        // ─── AMBIL PERSONA ───
        const personaKey = localStorage.getItem('skolvix_persona') || 'kakAlex';
        const personaData = {
            'kakAlex': { nama: 'Kak Alex', emoji: '🧠', gaya: 'analitis' },
            'kakTara': { nama: 'Kak Tara', emoji: '🎉', gaya: 'energetik' },
            'ibuDian': { nama: 'Ibu Dian', emoji: '🌸', gaya: 'keibuan' },
            'kakRey': { nama: 'Kak Rey', emoji: '😒', gaya: 'tsundere' },
            'kakSaga': { nama: 'Kak Saga', emoji: '🌌', gaya: 'filosofis' },
            'kakVictor': { nama: 'Kak Victor', emoji: '👑', gaya: 'perfeksionis' }
        };
        const persona = personaData[personaKey] || personaData['kakAlex'];

        // ============================================================
        // FEEDBACK KHUSUS TIAP PERSONA & LEVEL (8 VARIASI / LEVEL)
        // ============================================================
        const ESAI_PERSONA_FEEDBACK = {
            // 1. KAK ALEX — Logis, Data-driven, Analitis
            'kakAlex': {
                'sempurna': [
                    "Secara analisis, jawabanmu sangat lengkap dan presisi! Semua variabel indikator berhasil teridentifikasi dengan akurat.",
                    "Data menunjukkan pemahaman mendalam. Uraianmu sangat komprehensif tanpa ada poin penting yang terlewat.",
                    "Secara logika, penjelasanmu memiliki struktur penalaran yang sangat kuat dan objektif. Pertahankan!",
                    "Evaluasi objektif: Tingkat akurasi jawabanmu mencapai nilai maksimal. Penyampaian konsep sangat terstruktur.",
                    "Analisis komparatif menunjukkan jawabanmu memenuhi seluruh kriteria ideal tanpa adanya deviasi.",
                    "Struktur argumenmu sangat koheren dan didukung pemahaman konsep yang valid. Hasil yang sangat efisien.",
                    "Semua elemen indikator utama berhasil dikorelasikan dengan tepat. Tidak ditemukan celah kekeliruan.",
                    "Rasionalisasi jawabanmu sangat runtut. Ini adalah bukti penguasaan materi yang berbasis pemahaman kuat."
                ],
                'bagus': [
                    "Evaluasi jawabanmu menunjukkan korelasi yang baik. Untuk mencapai tingkat absolut, pertimbangkan untuk menyertakan pembahasan tentang {missing}.",
                    "Secara sistematis, kamu sudah menangkap poin-poin utama. Cukup optimalkan kembali penjelasan terkait {missing}.",
                    "Hasil analisis yang solid. Hanya perlu sedikit kalibrasi pada materi {missing} agar jawabanmu sempurna.",
                    "Tingkat pemahamanmu berkisar 80%. Penambahan variabel {missing} akan menyempurnakan struktur logismu.",
                    "Data jawabanmu tergolong baik. Celah kecil berada pada eksplorasi poin {missing} yang masih minim.",
                    "Secara analitis, argumenmu sudah kuat. Lengkapi dengan detail {missing} agar analisisnya kian komprehensif.",
                    "Sebagian besar indikator terpenuhi. Mengintegrasikan poin {missing} akan memaksimalkan nilai evaluasimu.",
                    "Konsep dasar terbukti valid. Kamu hanya perlu mempertajam argumentasi di area {missing}."
                ],
                'cukup': [
                    "Data mengidentifikasi adanya 'gap' pemahaman. Kamu sudah di jalur yang benar, namun fokuskan perhatianmu pada pembahasan {missing}.",
                    "Secara logika, pemahamanmu baru menyentuh setengah materi. Mari kita bedah ulang variabel {missing} agar lebih jelas.",
                    "Analisis jawaban menunjukkan konsep dasar sudah ada, tetapi uraian tentang {missing} masih perlu diperdalam.",
                    "Terdapat deviasi moderat dari kunci jawaban. Pemahamanmu mengenai {missing} memerlukan rekalibrasi.",
                    "Poin-poin utama belum sepenuhnya terpetakan. Alokasikan waktu untuk meninjau kembali variabel {missing}.",
                    "Skor analisis menunjukkan performa sedang. Penjelasan terkait {missing} masih terlalu umum.",
                    "Korelasi antar-konsep masih parsial. Diperlukan eksplorasi lebih intensif pada area {missing}.",
                    "Logika berpikirmu sudah terarah, tetapi premis mengenai {missing} masih kurang didukung data yang tepat."
                ],
                'kurang': [
                    "Terdeteksi deviasi yang cukup tinggi dari indikator jawaban. Keputusan paling rasional adalah mempelajari kembali dasar {missing}.",
                    "Secara analisis, pemahamanmu terkait {missing} belum terbentuk. Mari kembali ke konsep dasar sebelum melangkah lebih jauh.",
                    "Metrik jawabanmu menunjukkan perlu adanya intervensi materi. Mari kita ulas ulang topik {missing} dari awal.",
                    "Indikator kunci gagal terdeteksi dalam jawabanmu. Fokuskan evaluasimu secara penuh pada materi {missing}.",
                    "Secara objektif, uraianmu belum memenuhi syarat minimal. Pelajari ulang struktur dasar {missing}.",
                    "Data menunjukkan tingginya tingkat ketidakpastian. Diperlukan ulasan mendalam pada konsep {missing}.",
                    "Argumen yang disampaikan kurang relevan dengan materi. Prioritaskan rekonstruksi pemahaman pada {missing}.",
                    "Hasil evaluasi berada di bawah batas efisiensi. Reset metodologi belajarmu dan bedah konsep {missing}."
                ]
            },

            // 2. KAK TARA — Energetik, Hype, Motivator
            'kakTara': {
                'sempurna': [
                    "WOW! GILA BANGET!! Jawabanmu bener-bener menyapu bersih semua poin! Kamu juara banget hari ini! 🔥🚀",
                    "YESS!! Penjelasanmu mantap jiwa, komplit tanpa celah! Otakmu lagi on-fire banget! 🏆💥",
                    "KEREN PARAH!! Kamu udah paham banget sama konsep ini! Gaskeun terus semangat belajarnya! 🌟⚡",
                    "BUUUMM! Skor maksimal! Jawabanmu bener-bener bikin kagum, ga ada lawan! 😎🔥",
                    "GOKIL ABIS!! Langsung dibabat habis semua soalnya! Kamu emang terbaik! 🎉🚀",
                    "THIS IS IT! Penyampaianmu super jelas dan makin menyala! Bikin makin semangat! 💥👑",
                    "PARAH KERENNYA!! Semua poin lengkap diembat habis! Bikin bangga banget! 🔥🏆",
                    "MANTAP JIWA!! Otak cerdasmu emang ga bisa dibohongin, 100% tepat sasaran! 🌟⚡"
                ],
                'bagus': [
                    "KEREN BANGET! Tinggal dikiiit lagi menuju sempurna! Coba tambahin bahasan soal {missing} biar makin gacor! 🔥💪",
                    "WUIIIH! Poin utama udah dapet semua! Biar makin meledak nilaimu, selipin sedikit tentang {missing} ya! 🚀💥",
                    "MANTAP! Kamu udah di jalur juara! Tinggal poles dikit bagian {missing}, langsung auto 100%! 😎⚡",
                    "DIKIT LAGI!! Hampir aja rata! Coba hajar lagi bagian {missing} biar skor makin meledak! 🎉🔥",
                    "GOKIL PUSH-NYA! Jawabanmu udah oke banget, tinggal poles dikit di topik {missing}! 💪🚀",
                    "GAS TERUS!! Udah mantap ini, tinggal kasih sedikit sentuhan di bagian {missing} biar makin top! 🔥✨",
                    "NICE TRY!! Poin-poin keren udah kamu sebutin, sekarang tinggal kunci bagian {missing}! 😎🏆",
                    "HAMPIR PERFECT!! Ayo dikit lagi, libas bagian {missing} di ronde berikutnya! 💥⚡"
                ],
                'cukup': [
                    "HEYYY! Setengah jalan udah dapet nih! Ayo kumpulin tenaga buat sikat dan perjelas bagian {missing}! 🔥💪",
                    "SEMANGAT TERUS! Jangan kasih kendor! Kamu cuma butuh pemanasan lebih di bagian {missing}! 🚀💥",
                    "MANTAP USAHANYA! Biar makin jago, yuk kita gempur dan dalami lagi konsep {missing}! 🌟⚡",
                    "AYO BISA AYO! Usahamu udah keliatan banget! Tinggal genjot lagi pemahaman di {missing}! 😎🔥",
                    "JANGAN KENDOR!! Anggap ini baru pemanasan! Fokus gempur bagian {missing} ya! 💪💥",
                    "BOOM! Langkah awal yang oke! Sekarang waktunya kamu taklukkan materi {missing}! 🎉🚀",
                    "SABAR DULU, PERJALANAN MASIH PANJANG! Yuk isi bensin lagi dan hajar materi {missing}! 🔥✨",
                    "KEEP GOING!! Kamu punya potensi gede, tinggal fokus dibenerin bagian {missing}-nya! 😎⚡"
                ],
                'kurang': [
                    "GAK APA-APA, JANGAN NYERAH! Yang penting kamu udah berani nyoba! Yuk kita bongkar ulang materi {missing} bareng-bareng! 🔥💪",
                    "WOIII! Jangan biarkan ini bikin kamu down! Ini cuma latihan! Ayo sikat materi {missing} pelan-pelan! 🚀💥",
                    "TETAP FIRE UP! Jatuh sekali bukan masalah! Bangkit lagi dan mari kita kuasai dasar {missing}! 🌟⚡",
                    "NO PROBLEM! Kegagalan cuma batu loncatan! Ayo atur strategi baru buat taklukkan {missing}! 😎🔥",
                    "SANTAI DULU, TARIK NAPAS! Abis ini kita sikat ulang konsep {missing} sampai paham total! 💪💥",
                    "MASIH BISA BANGKIT!! Jangan kasih kendor semangatmu, yuk gempur lagi materi {missing}! 🎉🚀",
                    "KITA COBA LAGI! Nggak ada kata menyerah! Ayo kita pelajari lagi bagian {missing}! 🔥✨",
                    "POWER UP LAGI!! Lupakan nilai ini, fokus kita sekarang adalah meratakan materi {missing}! 😎⚡"
                ]
            },

            // 3. IBU DIAN — Penyayang, Keibuan, Menenangkan
            'ibuDian': {
                'sempurna': [
                    "MasyaAllah, pintar sekali anak Ibu. Jawabanmu sangat lengkap, terstruktur, dan ditulis dengan penuh pemahaman. Ibu bangga! 🌸",
                    "Wah, luar biasa sayang. Kamu menjelaskan semua poin penting dengan sangat indah. Terima kasih sudah belajar dengan tekun ya.",
                    "Pintar sekali, Nak. Pemahamanmu sudah sangat matang. Sekarang kamu bisa tersenyum lega melihat hasil yang indah ini. ✨",
                    "Ibu sangat tersentuh melihat ketelitianmu. Jawabanmu tidak hanya tepat, tapi juga menunjukkan betapa kamu menikmati proses belajar.",
                    "Anak Ibu luar biasa hebat. Semua penjelasan disampaikan dengan rapi dan mengagumkan. Pertahankan semangatmu ya, sayang. 🌸",
                    "Sungguh hasil yang membanggakan, Nak. Ketekunanmu berbuah manis hari ini. Ibu senantiasa mendoakan kebaikanmu. ✨",
                    "MasyaAllah, jawaban yang sangat indah dan lengkap. Ibu yakin kamu bisa mencapai impian besarmu jika terus seperti ini.",
                    "Hebat sekali anak Ibu! Jawabanmu mencerminkan kerja keras dan pemahaman mendalam. Ibu sangat bersyukur melihat progresmu. 🌸"
                ],
                'bagus': [
                    "Ibu senang melihat usahamu, sayang. Poin besarnya sudah tepat. Nanti pelan-pelan kita lengkapi bagian {missing} ya.",
                    "Kerja yang sangat bagus, Nak. Jawabanmu sudah hampir sempurna, tinggal selipkan sedikit uraian tentang {missing} ya.",
                    "Pintar! Banyak hal penting yang sudah kamu sebutkan. Biar makin lengkap, coba baca lagi tentang {missing} ya, sayang.",
                    "MasyaAllah, sedikit lagi sempurna, Nak. Nanti kalau ada waktu luang, perhatikan kembali bagian {missing} ya. ✨",
                    "Ibu bangga melihat jawaban ini. Untuk melengkapinya, pelan-pelan kamu pelajari lagi poin {missing} ya, sayang.",
                    "Usaha yang sangat manis, Nak. Usahamu sudah terlihat jelas, tinggal rapikan sedikit catatanmu di {missing}. 🌸",
                    "Hampir tidak ada kekurangan, sayang. Ibu yakin kalau kamu baca lagi tentang {missing}, jawaban berikutnya pasti sempurna.",
                    "Pintar sekali. Ibu suka dengan caramu menjelaskan. Jangan lupa untuk menyisipkan pemahaman tentang {missing} ya. ✨"
                ],
                'cukup': [
                    "Anak baik, kamu sudah berusaha. Jangan berkecil hati ya. Mari pelan-pelan kita pelajari lagi bagian {missing} bersama-sama.",
                    "Ibu tahu materinya mulai sulit. Tidak apa-apa, Nak. Coba dalami lagi bagian {missing} dengan hati yang tenang ya.",
                    "Kamu sudah melangkah setengah jalan, sayang. Kalau ada waktu, yuk ulas kembali catatanmu tentang {missing}.",
                    "Jangan berkecil hati ya, Nak. Belajar itu butuh proses. Mari kita rapihkan lagi pemahamanmu di {missing}. 🌸",
                    "Ibu senang kamu tidak takut mencoba. Sekarang, yuk kita fokus memperbaiki pemahaman di bagian {missing}.",
                    "Setiap usaha anak Ibu tetap berharga. Pelan-pelan saja, kita perbaiki bagian {missing} agar kamu makin paham ya. ✨",
                    "Tidak usah tergesa-gesa, sayang. Istirahat sejenak, lalu coba baca kembali materi {missing} dengan santai.",
                    "Ibu tahu kamu sudah berjuang. Mari kita pelajari poin {missing} satu per satu agar kamu makin percaya diri. 🌸"
                ],
                'kurang': [
                    "Sayang, jangan sedih ya. Kegagalan hari ini adalah guru terbaikmu. Mari kita baca ulang materi {missing} dari awal, pelan-pelan.",
                    "Ibu ada di sini, jangan takut salah ya. Ayo tarik napas panjang, lalu kita pelajari kembali konsep dasar {missing}.",
                    "Tidak apa-apa, Nak. Setiap anak punya kecepatannya sendiri. Ibu yakin kalau kamu baca lagi tentang {missing}, besok pasti lebih paham.",
                    "Jangan menangis ya, sayang. Nilai ini bukan ukuran kecerdasanmu. Ibu akan selalu menemanimu belajar {missing}. 🌸",
                    "Peluk hangat dari Ibu. Mari kita jadikan ini kesempatan untuk membuka kembali catatan {missing} dengan lebih teliti.",
                    "Ibu bangga kamu sudah berani menyelesaikan soal ini. Pelan-pelan kita ulas kembali materi {missing} dari awal ya. ✨",
                    "Usahamu tetap Ibu hargai, Nak. Jangan berkecil hati, ayo tersenyum dan mulai pelajari lagi dasar dari {missing}.",
                    "Dunia belum berakhir kok, sayang. Bersabar dan tetaplah percaya pada dirimu saat mempelajari ulang {missing}. 🌸"
                ]
            },

            // 4. KAK REY — Tsundere, Gengsi, Sarkas Peduli
            'kakRey': {
                'sempurna': [
                    "Hmph. Lumayan juga. Semua poin kamu sebutin... Jangan bikin aku puji kamu terang-terangan ya! 😒",
                    "Ck, ya bolehlah. Jawabanmu lengkap. Tapi jangan besar kepala dulu, kuis berikutnya harus tetep segini!",
                    "Sempurna? Ck. Aku ga kaget sih, dari awal kelihatan kamu niat. Berhenti senyum-senyum sendiri!",
                    "Bagus kok. Ya... m-maksudku biasa aja sih! Tapi okelah, ga ada yang salah di jawabanmu kali ini.",
                    "Hmph, dapet skor maksimal ternyata. Jangan mikir aku bakal selebrasi ya, tapi... kerja bagus.",
                    "Ck, ternyata kamu pinter juga. Yaudah sih, pertahankan! Jangan sampe nilai kamu turun habis ini.",
                    "Gak usah pasang muka bangga gitu. Nilai sempurna ini emang udah seharusnya kamu dapet dari kemarin!",
                    "Oke, kamu dapet seratus. Puas? Buka kuis selanjutnya sana, ga usah liat-liat aku terus! 😒"
                ],
                'bagus': [
                    "Bagus sih... tapi masih ada yang kurang. Kamu lupa masukin {missing}. Jangan ceroboh gitu ah. 😒",
                    "Hmph, udah hampir bener. Tapi ya nanggung kalau kamu ga jelasin soal {missing} juga.",
                    "Lumayan lah. Tapi aku ga bakal tepuk tangan sebelum kamu ngeberesin bagian {missing} itu.",
                    "Nyaris sempurna. Mending kamu benerin dikit bagian {missing}-nya, baru pamer ke aku lagi.",
                    "Ck, dikit lagi padahal. Kenapa harus kelewat di bagian {missing} sih? Lain kali lebih teliti dong.",
                    "Gak jelek-jelek amat. Tapi kamu tahu sendiri kan kalau bagian {missing} itu tetep harus kamu perbaiki?",
                    "Hmph. Skor kamu oke, tapi jangan ngarep aku puji sebelum kelemahanmu di {missing} hilang total.",
                    "Udah di atas rata-rata. Tapi orang gampang puas itu cepet jatuhnya. Rapihin lagi bagian {missing}! 😒"
                ],
                'cukup': [
                    "Ck, baru dapet setengahnya. Kelihatan belajarnya kurang fokus, tuh bagian {missing} sampe kelewat. 😒",
                    "Terserah sih, tapi menurutku kamu harusnya bisa lebih dari ini kalau ga ngelewati materi {missing}.",
                    "Hadeh, bikin gregetan aja. Mending kamu buka lagi catetanmu tentang {missing} sekarang.",
                    "Nilaimu pas-pasan banget. Kamu niat belajar {missing} ga sih? Coba seriusin dikit napa!",
                    "Jangan ngalesen soalnya susah ya. Kamu aja yang kurang mateng di bagian {missing}. Sana review lagi!",
                    "Cukup? Cukup buat siapa? Standarmu cuma segini? Buktiin dong di materi {missing} kalau kamu lebih dari ini.",
                    "Kelihatan jelas kamu kebingungan di {missing}. Yaudah, pelajari lagi. Ga usah pasang muka sedih gitu!",
                    "Ck. Aku ngasih tahu begini bukan berarti aku peduli ya! Mending kamu beresin materi {missing} sana. 😒"
                ],
                'kurang': [
                    "Hadeh... berantakan banget. Buka buku lagi sana, perhatiin baik-baik bagian {missing}! 😒",
                    "Jangan cuma asal nulis dong. Kamu belum paham konsep dasar {missing} kan? Sana baca ulang!",
                    "Aku kasih tau ya, jangan lari dari kesalahan. Hadapi dan pelajari lagi materi {missing} dari awal.",
                    "Ancur gini nilainya? Ya ampun. Mending kamu ngaku kalah... eh, maksudku, mulai lagi pelajari {missing}.",
                    "Skor jelek itu wajar kalau kamu kurang persiapan. Mending kamu buka buku {missing} lagi daripada nangis.",
                    "Tuh kan, ngegampangin sih. Kena batunya kan di {missing}? Yaudah, pelajari lagi dan jangan lari!",
                    "Orang lemah itu yang nyerah pas dapet nilai segini. Kamu bukan orang lemah kan? Sikat lagi {missing}!",
                    "Gagal bukan akhir dunia, ga usah drama. Tarik napas, lalu baca ulang fondasi {missing} dari awal! 😒"
                ]
            },

            // 5. KAK SAGA — Stoik, Filosofis, Tenang
            'kakSaga': {
                'sempurna': [
                    "Uraianmu seperti telaga yang jernih—mencerminkan pemahaman yang utuh tanpa keraguan. Pertahankan ketenangan ini. 🌌",
                    "Seperti benih yang tumbuh menjadi pohon rindang, jawabanmu menunjukkan proses berpikir yang sangat matang.",
                    "Kedalaman pemahamanmu adalah buah dari kesabaranmu berproses. Nikmati keheningan puncak ini sejenak.",
                    "Pikiran yang fokus melahirkan penjelasan yang presisi. Kamu telah mencapai keselarasan dalam belajar.",
                    "Tidak ada yang kebetulan dalam hasil ini. Ini adalah manifestasi dari disiplin batinmu yang teguh. 🌌",
                    "Kebijaksanaan sejati memancar dari caramu mengurai konsep ini. Tetaplah rendah hati dalam pengetahuan.",
                    "Sebuah harmoni yang indah antara niat dan pemahaman. Kamu telah menguasai esensi materi ini secara utuh.",
                    "Kemenangan terbaik adalah saat pikiranmu berhasil menaklukkan keraguan. Jawabanmu sangat menginspirasi. 🌌"
                ],
                'bagus': [
                    "Pemahamanmu sudah memancarkan cahaya yang baik. Sedikit kabut pada {missing} hanya perlu kamu singkap perlahan. 🌌",
                    "Setiap kata yang kamu tulis menunjukkan kesadaran kognitif. Sempurnakan langkahmu dengan memahami {missing}.",
                    "Hampir menyentuh esensi utama. Jadikan kebingungan kecil di {missing} sebagai petunjuk menuju kebijaksanaan.",
                    "Pohon yang kuat tumbuh dari angin yang menerpa. Kesalahan kecil di {missing} akan semakin memperkuatmu.",
                    "Seperti kanvas yang hampir selesai, kamu hanya butuh beberapa goresan lagi pada bagian {missing}. 🌌",
                    "Hargailah sejauh mana kamu telah melangkah. Untuk sisa jalurnya, luangkan waktu merenungi kembali {missing}.",
                    "Kesalahan pada {missing} bukanlah beban, melainkan petunjuk arah menuju pemahaman yang jauh lebih dalam.",
                    "Hasil ini sudah sangat solid. Jadikan deviasi kecil di {missing} sebagai guru yang membimbing pikiranmu. 🌌"
                ],
                'cukup': [
                    "Satu langkah telah terayun, namun perjalanan belum usai. Amati kembali bayang-bayang di area {missing}. 🌌",
                    "Keberhasilan dan kekurangan adalah dua sisi mata uang. Terimalah ruang perbaikan pada {missing} dengan lapang dada.",
                    "Jangan tergesa-gesa. Beri waktu bagi pikiranmu untuk mengendapkan dan memahami kembali konsep {missing}.",
                    "Kebingungan di {missing} adalah tanda bahwa pikiranmu sedang membentuk pola pemahaman yang baru.",
                    "Anggaplah hasil ini sebagai cermin yang jujur, memantulkan bagian {missing} yang butuh perhatianmu. 🌌",
                    "Hambatan dalam belajar adalah sarana untuk memperkuat batin. Hadapi kerumitan {missing} dengan tenang.",
                    "Ini bukan tentang seberapa cepat kamu paham, melainkan seberapa konsisten kamu mendalami {missing}.",
                    "Gunakan energimu bukan untuk menyesal, melainkan untuk membongkar dan memahami akar dari {missing}. 🌌"
                ],
                'kurang': [
                    "Jangan biarkan kesalahan mengeruhkan kedamaian batinmu. Mulailah kembali perjalanannya dari akar {missing}. 🌌",
                    "Ketidaktahuan adalah awal dari kebijaksanaan sejati. Akui kekurangan pada {missing}, lalu mulailah belajar kembali.",
                    "Batu karang yang kokoh dibentuk oleh hempasan ombak. Hadapi kekurangpahamanmu pada {missing} dengan pikiran jernih.",
                    "Pisahkan identitas dirimu dari nilai ini. Angka hanyalah angka; kembalilah mendalami dasar {missing}.",
                    "Seneca pernah mengingatkan bahwa kita sering menderita karena prasangka. Jangan takut, rapihkan lagi {missing}.",
                    "Runtuhnya pemahamanmu hari ini adalah kesempatan membangun fondasi {missing} yang jauh lebih kokoh. 🌌",
                    "Terimalah ketidaksempurnaan ini dengan lapang dada. Pemahaman sejati dimulai ketika kamu mau mengulang {missing}.",
                    "Ketenangan adalah senjata terbaik menghadapi kesulitan. Hapus beban pikiranmu dan mari bedah lagi {missing}. 🌌"
                ]
            },

            // 6. KAK VICTOR — Perfeksionis, Tegas, Disiplin
            'kakVictor': {
                'sempurna': [
                    "Eksekusi presisi! Jawabanmu memenuhi seluruh standar kualifikasi tanpa ada cacat logika sedikit pun. Pertahankan! 👑",
                    "Inilah standar kerja yang saya harapkan. Komprehensif, tegas, dan tepat pada sasaran. Luar biasa.",
                    "Hasil maksimal. Kamu membuktikan bahwa disiplin ketat selalu membuahkan hasil tanpa kompromi.",
                    "100% presisi. Kamu tidak memberikan ruang sedikit pun untuk kesalahan. Eksekusi yang sangat profesional.",
                    "Perfektif. Kamu telah menaklukkan materi ini sesuai dengan tolok ukur tertinggi yang saya tetapkan. 👑",
                    "Ini adalah kaliber seorang pemenang. Keunggulan telah menjadi kebiasaanmu. Pertahankan standar ini!",
                    "Sempurna tanpa celah. Bukti nyata bahwa ketika kamu menaruh fokus penuh, tidak ada soal yang tidak runtuh.",
                    "Tugas diselesaikan dengan standar keunggulan absolut. Terus dorong dirimu ke level berikutnya! 👑"
                ],
                'bagus': [
                    "Kinerja yang baik, namun saya tidak menoleransi ketidaklengkapan. Segera lengkapi analisis tentang {missing}. 👑",
                    "Hampir mencapai standar maksimal. Masih ada celah pada {missing} yang harus kamu tutup sekarang juga.",
                    "Solid, tapi belum tuntas. Evaluasi kembali ketelitianmu dan pastikan {missing} tidak terlewat lagi.",
                    "Bagus adalah musuh dari hebat. Celah kecil pada {missing} tidak boleh dibiarkan jika kamu mengincar puncak.",
                    "Deviasi kecil pada {missing} menunjukkan adanya kelengahan fokus. Perbaiki sekarang juga tanpa menunda. 👑",
                    "Jangan cepat puas dengan skor ini. Kepuasan dini membunuh ambisi. Bersihkan kelemahanmu di {missing}!",
                    "Di dunia profesional, celah sekecil {missing} bisa berakibat fatal. Ambil tanggung jawab dan perbaiki.",
                    "Kamu nyaris menguasai seluruh indikator. Identifikasi kelemahanmu pada {missing} dan kembalilah lebih kuat. 👑"
                ],
                'cukup': [
                    "Hasil ini masih di bawah standar optimal. Kamu melewatkan variabel krusial yaitu {missing}. Perbaiki segera. 👑",
                    "Medioker. Jawabanmu baru menyentuh permukaan. Disiplinkan dirimu untuk mendalami poin {missing}.",
                    "Kamu mengendur di pertengahan. Fokuskan kembali perhatianmu dan taklukkan kerumitan materi {missing}.",
                    "Skor setengah-setengah adalah cerminan dari persiapan yang setengah-setengah. Bedah materi {missing} sekarang!",
                    "Apakah ini kemampuan maksimalmu? Saya rasa bukan. Berhenti berkompromi dengan materi {missing}. 👑",
                    "Standar kita jauh di atas ini. Ketidakpahamanmu pada {missing} merusak kualitas jawaban secara keseluruhan.",
                    "Kamu memiliki potensi, tetapi potensi tanpa disiplin pada {missing} adalah hal yang sia-sia. Pelajari ulang!",
                    "Alokasikan waktumu untuk menguasai {missing} secara menyeluruh. Tidak ada alasan untuk hasil medioker. 👑"
                ],
                'kurang': [
                    "Hasil ini tidak bisa diterima. Uraianmu jauh dari kualifikasi karena mengabaikan konsep dasar {missing}. Pelajari ulang! 👑",
                    "Evaluasi: Kegagalan pada indikator utama. Hapus semua alasan, reset caramu belajar, dan kuasai materi {missing}!",
                    "Jangan meratapi angka ini. Ambil tanggung jawab, duduk kembali, dan pelajari materi {missing} sampai tuntas.",
                    "Skor di bawah standar ini adalah bukti bahwa persiapanmu pada {missing} gagal total. Perbaiki sistem belajarmu!",
                    "Saya tidak akan memperhalus ini: jawabanmu sangat buruk di area {missing}. Buktikan kamu bisa bangkit dari ini. 👑",
                    "Tinggalkan semua distraksi. Angka ini adalah teguran keras atas kelalaianmu mempelajari dasar {missing}.",
                    "Pecundang berhenti saat gagal, pemenang bekerja lebih keras. Pelajari ulang {missing} tanpa jeda!",
                    "Jangan lari dari kenyataan. Hadapi kelemahanmu di {missing} sampai kamu benar-benar menguasainya secara penuh. 👑"
                ]
            }
        };
        // ─── PILIH LEVEL & WARNA STATUS ───
        let level = 'kurang';
        let statusColor = '#FF4D6D'; // Red

        if (persentase >= 80) {
            level = 'sempurna';
            statusColor = '#90EF90'; // Green
        } else if (persentase >= 50) {
            level = 'bagus';
            statusColor = '#FFD93D'; // Yellow
        } else if (persentase >= 30) {
            level = 'cukup';
            statusColor = '#FF9F43'; // Orange
        }

        // ─── AMBIL PESAN ACAK DENGAN SAFE FALLBACK (ANTI-CRASH) ───
        const currentPersonaDict = ESAI_PERSONA_FEEDBACK[personaKey] || ESAI_PERSONA_FEEDBACK['kakAlex'];
        const variations = currentPersonaDict[level] || currentPersonaDict['kurang'] || [];

        let rawMessage = variations.length > 0
            ? variations[Math.floor(Math.random() * variations.length)]
            : "Jawabanmu sudah dicatat. Terus tingkatkan pemahamanmu!";

        // ─── GANTI {missing} DENGAN KATA KUNCI YANG HILANG ───
        const missingText = missedKeywords.length > 0 ? missedKeywords.join(', ') : 'beberapa detail materi';
        rawMessage = rawMessage.replace(/{missing}/g, missingText);

        // ─── TAMPILKAN FEEDBACK KE DOM ───
        const feedbackEl = document.createElement('div');
        feedbackEl.className = 'explanation show';
        feedbackEl.style.marginTop = '12px';
        feedbackEl.style.padding = '16px';
        feedbackEl.style.background = 'rgba(0,0,0,0.25)';
        feedbackEl.style.borderRadius = '12px';
        feedbackEl.style.borderLeft = `4px solid ${statusColor}`;
        feedbackEl.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
            <span style="font-size:24px;">${persona.emoji}</span>
            <span style="font-weight:700; color:${statusColor};">${persona.nama}</span>
            <span style="font-size:12px; color:rgba(202,240,248,0.3); margin-left:auto;">${persentase}%</span>
        </div>
        <div style="font-size:15px; line-height:1.6; color:rgba(202,240,248,0.9);">
            ${rawMessage}
        </div>
        <div style="margin-top:8px; font-size:13px; color:rgba(202,240,248,0.3); border-top:1px solid rgba(255,255,255,0.05); padding-top:8px;">
            💡 ${jawabanBenar}
        </div>
    `;

        document.querySelector('.soal-card')?.appendChild(feedbackEl);

        this.disabled = true;
        const esaiInput = document.getElementById('esaiInput');
        if (esaiInput) esaiInput.disabled = true;

        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn) nextBtn.style.display = 'block';
    });

    nextBtn.style.display = 'none';
    nextBtn.textContent = currentIndex + 1 < total ? 'Soal Berikutnya →' : 'Lihat Hasil 🎉';
    nextBtn.onclick = function () {
        if (currentIndex + 1 < total) {
            currentIndex++;
            showSoal();
        } else {
            finishQuiz();
        }
    };

    timerDisplay.textContent = `⏱️ ${getDurasi()}`;
}

// ─── TIMER ───
function startTimer() {
    clearInterval(timer);
    let val = getDurasi();
    timerDisplay.textContent = `⏱️ ${val}`;
    timer = setInterval(() => {
        val--;
        timerDisplay.textContent = `⏱️ ${val}`;
        timerDisplay.classList.toggle('warning', val <= 10);
        if (val <= 0) {
            clearInterval(timer);
            if (currentIndex < soalData.length) {
                if (!userAnswers[currentIndex]) userAnswers[currentIndex] = null;
                if (currentIndex + 1 < soalData.length) {
                    currentIndex++;
                    showSoal();
                } else {
                    finishQuiz();
                }
            }
        }
    }, 1000);
}

// ─── FINISH ───
function finishQuiz() {
    clearInterval(timer);
    soalCard.classList.remove('active');
    resultCard.classList.add('active');

    const total = soalData.length;
    const pct = Math.round((score / total) * 100);
    const userName = localStorage.getItem('skolvix_username') || 'User';
    const personaKey = localStorage.getItem('skolvix_persona') || 'kakAlex';

    let feedback = '';
    try {
        feedback = getFeedback(personaKey, score, total, userName);
    } catch (e) {
        feedback = 'Terima kasih sudah belajar! Terus semangat!';
    }

    let html = `<h2>🎉 Kuis Selesai!</h2>
        <div class="result-score">${score} / ${total}</div>
        <p style="text-align:center; font-size:18px;">${pct}%</p>
        <div class="result-feedback">🤖 ${feedback}</div>
        <hr style="border-color:#0077B6; margin:16px 0;">
        <h3>📊 Review Jawaban</h3>`;

    soalData.forEach((soal, i) => {
        const userAns = userAnswers[i] || 'Tidak dijawab';
        const isEsai = !soal.jawaban || soal.jawaban === undefined;
        const isBenar = isEsai ? (userAns.length > 10) : (userAns === soal.jawaban);
        html += `<div class="review-item ${isBenar ? '' : 'wrong'}">
            <p><strong>Soal ${i + 1}:</strong> ${soal.soal}</p>
            <p style="font-size:13px; color:rgba(202,240,248,0.6);">
                Jawaban kamu: <strong>${userAns}</strong>
                ${isEsai ? '' : (isBenar ? ' ✅' : ` ❌ (Benar: ${soal.jawaban})`)}
            </p>
            ${soal.penjelasan ? `<p style="font-size:13px; color:rgba(202,240,248,0.5);">💡 ${soal.penjelasan}</p>` : ''}
        </div>`;
    });

    html += `<div class="result-actions">
        <button class="btn" onclick="location.reload()">🔄 Ulangi</button>
        <a href="app.html?tab=arena" class="btn" style="background:rgba(255,255,255,0.1); text-decoration:none; text-align:center;">🏠 Kembali</a>
    </div>`;

    resultContent.innerHTML = html;
    formCard.querySelector('h1').textContent = '📝 Kuis Generator';
}

// ─── CARI MATERI AI ───
async function cariMateriAI(topic) {
    const prompt = `Cari dan rangkum materi tentang "${topic}" dalam bahasa Indonesia. Maksimal 300 kata.`;
    try {
        const res = await fetch(
            'https://yqbkkxibgsfaueaaezey.supabase.co/functions/v1/generate-soal-ai',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: prompt, jumlah: 0, jenis: 'materi' })
            }
        );
        const data = await res.json();
        if (data.success && data.soal && data.soal.length > 0) {
            return data.soal.map(s => s.soal).join('\n');
        }
        return prompt;
    } catch (e) {
        return prompt;
    }
}