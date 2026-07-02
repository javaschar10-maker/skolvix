# 🚀 SKOLVIX PROJECT CONTEXT & MASTER RULES

## 1. 📖 Project Overview & Philosophy
**Skolvix** adalah platform gamifikasi edukasi (EdTech Arena) berbasis web untuk pelajar Indonesia dengan konsep awal "Liga Perintis" (MVP Season). Platform ini bukan sekadar web e-learning biasa, melainkan menggabungkan kurikulum resmi (SIBI) dengan elemen RPG/Gaming untuk memicu kompetisi yang sehat dan ambisius antar siswa.

### 🎯 3 Core Psychology Hooks:
1. **Satset**: Meringkas kurikulum resmi agar efisien dan langsung ke intinya.
2. **AI (6 Persona Guru)**: Pembelajaran adaptif dengan karakter AI (Kak Alex, Kak Tara, Ibu Dian, Kak Rey, Kak Saga, Kak Victor) yang memberikan *feedback* gaya bahasa berbeda.
3. **Push Rank**: Sistem kompetisi *realtime* di mana siswa mengumpulkan "Koin IQ" dari ujian/kuis untuk mendaki Leaderboard.

---

## 2. 🛠️ Tech Stack & Architecture
- **Frontend**: Vanilla HTML5, CSS3, dan Vanilla JavaScript (ES6). TIDAK menggunakan framework seperti React atau Vue demi menjaga performa yang instan dan ringan di HP *low-end*.
- **Smooth Scroll**: Menggunakan `Lenis Smooth Scroll` (v1.1.16) untuk efek animasi gulir premium ala website Apple.
- **Backend & Database**: Supabase (Menggunakan `supabaseClient` via CDN langsung di HTML).
- **State Management**: Mengkombinasikan Database Supabase (untuk data permanen) dan `localStorage` / `sessionStorage` (untuk status UI minor seperti sidebar minimize, history spin wheel, dan status *welcome popup*).

---

## 3. 🎨 UI/UX Design System (The "Skolvix Vibe")
- **Color Palette (Cyberpunk / Deep Space)**:
  - Background Utama: Deep Navy (`#050d1a`, `#0a1628`).
  - Aksen Utama: Cyan / Neon Blue (`#00d4ff`, `#38BDF8`) & Royal Blue (`#1d6ae5`).
  - Aksen Gamifikasi: Gold (`#F59E0B`, `#f5c842`), Green (`#00e5a0`), Red (`#ff4d6d`).
- **Typography**: 
  - Font Display/Heading: `Space Grotesk` (Futuristik, tebal, techy).
  - Font Body: `Inter` (Bersih, sangat mudah dibaca).
- **Cosmic Aurora Background**: Menggunakan manipulasi radial-gradient CSS raksasa (`#skolvix-cosmic-bg`) dengan animasi *breathing* super pelan agar GPU tidak terbebani.
- **The "Sharp Text" Glassmorphism Rule**: DILARANG KERAS menggunakan efek 3D Tilt (`transform: rotateX/rotateY`) pada komponen UI yang berisi banyak teks. Gunakan efek **2D Flat Floating Glassmorphism** (melayang lurus menghadap depan) agar *rendering* teks dijamin 100% HD / anti-blur / anti-rasterized oleh *engine browser*.

---

## 4. 🏗️ Frontend Architecture Breakdown

### A. Landing Page (`index.html`)
Wajah utama Skolvix untuk menarik pengguna baru.
- **Hero Section**: Menggunakan tiruan UI Dashboard (*Mockup*) 2D bergaya *glassmorphism*. Terdiri dari 3 kolom padat (Sidebar Menu, Subjek Grid, Leaderboard Top 5 Realtime).
- **Realtime Injection**: Terdapat *script* di bagian bawah yang me-*fetch* Top 5 user dari Supabase dan menampilkannya di *mockup leaderboard* dengan efek *Skeleton Loading* CSS.
- **Spin Wheel Mechanism**: Fitur "Putar Roda Keberuntungan" berbasis Canvas HTML5 (`#spinCanvas`). Diprogram untuk selalu memberikan *reward* secara kalkulatif (misal: Diskon 50%). Status *spin* disimpan di `localStorage` (`skolvix_discount` atau `skolvix_bonus_energi`).

### B. Dashboard App (`app.html` & `app.js`)
Area inti saat user sudah "Login". Sistem login MVP saat ini hanya menggunakan *Username* unik (tanpa password) yang dicocokkan ke database Supabase.
- **App Shell Layout**:
  - *Desktop*: Topbar (Stats Koin & Energi) + Collapsible Sidebar (Kiri).
  - *Mobile*: Topbar + Bottom Navigation Bar (Bawah). Sidebar disembunyikan.
- **Tab Panel System**: Navigasi menggunakan sistem *Single Page Application* (SPA) palsu berbasis manipulasi *class* `.active` pada `.tab-panel` (Beranda, Arena, Komunitas, Profil).
- **Skeleton Loader Instan**: Menggunakan `<div id="skeleton">` yang di-render murni dengan *inline-style* di HTML paling atas untuk mencegah *flicker* / layar putih sebelum CSS/JS termuat sempurna.

---

## 5. ⚙️ Game Mechanics & App Logic (`app.js`)

### A. Daily Reset & Session Management
- Di-handle oleh fungsi `checkDailyReset(user)`.
- **Energi**: Maksimal/reset ke 25 setiap hari baru (berdasarkan perbandingan tanggal *last_login* dengan *date* hari ini).
- **Streak**: Bertambah +1 jika login hari ini berjarak tepat 1 hari dari *last_login*. Jika lebih dari 1 hari, Streak hangus kembali ke 1.
- **Bonus Energi**: Jika *user* mendapat energi dari *Spin Wheel* di Landing Page, bonus tersebut ditambahkan ke sisa energi harian dan kuncinya dihapus dari `localStorage`.

### B. Persona & Dynamic Greetings
- *User* dapat memilih 1 dari 6 Persona Guru AI. Disimpan di `localStorage` (`skolvix_persona`).
- `renderDashboardGreeting`: Menyapa *user* di Beranda berdasarkan waktu lokal (Pagi, Siang, Sore, Malam) dan menggunakan gaya bahasa dari Persona AI yang sedang aktif.

### C. Mekanisme Kuis & Koin IQ (Core Loop)
- *User* menekan kartu mata pelajaran di Tab Arena -> `startQuizBtn` muncul jika energi > 0.
- Koin IQ adalah indikator progres absolut. Disimpan di Supabase `user_progress.koin_iq`. Koin ini yang menentukan posisi *user* di Leaderboard.

---

## 6. 🗄️ Database Schema (Supabase)
Tabel utama saat ini: `user_progress`
- `id` (UUID / Integer)
- `username` (String/Text, Unique, disanitasi jadi *lowercase* saat login).
- `koin_iq` (Integer, Default 0) - Penentu Leaderboard.
- `energi` (Integer, Default 25).
- `streak` (Integer, Default 0) - Konsistensi harian.
- `last_login` (String/Date, format YYYY-MM-DD).
- `badges` (Array of Strings) - Menyimpan ID badge (contoh: `["starter", "streak3"]`).

---

## 7. 🛑 CRITICAL RULES FOR AI CODER (Wajib Patuhi!)
1. **NO 3D TEXT BLUR**: Jangan pernah mencoba mengembalikan efek `rotateX/rotateY` pada `.mockup-glass` di `index.html`. Desain saat ini sudah sempurna untuk teks beresolusi HD.
2. **DO NOT TOUCH AUTHOR TAG**: Dilarang keras mengubah, menghapus, atau memodifikasi baris `<div class="hero-badge">...Build by javas Chairunnas...</div>`.
3. **DO NOT BREAK LENIS**: Script inisialisasi `new Lenis({...})` ada di paling bawah `index.html`. Saat mengubah struktur HTML, pastikan tag penutup `</body>` aman agar Lenis tidak mati.
4. **NO EMOJI FOR CORE UI**: Jangan gunakan Emoji bawaan OS untuk tombol struktural penting (seperti tanda panah navigasi). Selalu gunakan CSS Kapsul (`.center-pill`) atau ikon SVG untuk menghindari *bug* *rendering browser* saat berbenturan dengan *backdrop-filter blur*.
5. **MOBILE-FIRST RESPONSIVE**: Setiap kali mendesain UI baru di `app.html`, pastikan kompatibel dengan `.bottom-nav` untuk mobile. Elemen utama tidak boleh tertutup navigasi bawah (`padding-bottom: 72px` pada `.app-shell`).

---

## 8. 🪵 Automatic Development Log
*(Setiap kali Anda - AI Coder - selesai melakukan modifikasi, penambahan fitur, atau perbaikan bug pada proyek ini, Anda DIWAJIBKAN untuk secara otomatis menuliskan log perubahan di baris bawah ini. Jangan hapus log sebelumnya!)*

### 📅 Running History:
- [02-07-2026] index.html: Membersihkan efek 3D tilt menjadi 2D Floating Glassmorphic padat untuk visual tajam berstandar HD.
- [02-07-2026] index.html: Menyematkan integrasi fetch dynamic database (Top 5 Liga Perintis), Animasi Breathing CSS, dan Script Lenis Smooth Scroll.
- [02-07-2026] app.html & app.js: Integrasi sistem Supabase untuk Authentication sederhana (Username), Daily Reset (Energy & Streak), dan Time-based Persona Greetings.