// flappyowl.js - Flappy Owl Minigame Engine
// Night city flight with 2D buildings, animated owl, and energy pickups

// ─── CONSTANTS ───
const GRAVITY = 900;          // px/s²
const FLAP_VEL = -340;        // px/s (negative = up)
const SCROLL_SPEED = 160;     // px/s
const MAX_DIST = 1000;        // meters
const M_PER_SEC = MAX_DIST / 200; // 5 m/s
const OWL_R = 14;             // owl collision radius

const BUILD_MIN_W = 55;
const BUILD_MAX_W = 85;
const BUILD_GAP = 140;        // vertical gap between top & bottom building
const BUILD_SPACING = 210;    // horizontal space between buildings

const ENERGY_INTERVAL_MIN = 55; // meters between pickups
const ENERGY_INTERVAL_MAX = 75; // meters between pickups
const ENERGY_R = 12;

const ENERGY_CAP = 25;           // max daily energy
const KOIN_PER_PICKUP = 20;      // koin earned per pickup when energy is full

// ─── STATE ───
let state = "idle"; // idle | playing | dead | finished
let canvas, ctx, W, H;
let currentUser = null;

// Owl
let owl = { x: 80, y: 0, vy: 0, angle: 0, wingFrame: 0, wingDir: 1 };

// Buildings
let buildings = [];
let nextBuildX = 0;

// Energy pickups
let pickups = [];
let energyEarned = 0;
let nextPickupAt = 0; // distance in meters when next pickup spawns

// Distance & time
let distance = 0;
let elapsed = 0;

// Stars (parallax)
let stars = [];
let farBuildings = []; // parallax silhouette

// Animation
let lastTime = 0;
let animFrame = null;

// Cloud puffs
let clouds = [];

// ─── CANVAS SETUP ───

function setupCanvas() {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    const container = canvas.parentElement;
    const rect = container.getBoundingClientRect();
    canvas.width = Math.floor(rect.width);
    canvas.height = Math.floor(rect.height);
    W = canvas.width;
    H = canvas.height;
}

// ─── STAR & CLOUD GENERATION ───

function generateStars() {
    stars = [];
    for (let i = 0; i < 80; i++) {
        stars.push({
            x: Math.random() * W,
            y: Math.random() * H * 0.7,
            size: Math.random() * 2 + 0.5,
            brightness: Math.random() * 0.6 + 0.2,
            speed: Math.random() * 8 + 2, // parallax scroll speed
            twinkle: Math.random() * Math.PI * 2
        });
    }
}

function generateClouds() {
    clouds = [];
    for (let i = 0; i < 5; i++) {
        clouds.push({
            x: Math.random() * W * 2,
            y: Math.random() * H * 0.35 + 20,
            w: Math.random() * 80 + 50,
            h: Math.random() * 20 + 10,
            speed: Math.random() * 12 + 5,
            opacity: Math.random() * 0.06 + 0.02
        });
    }
}

function generateFarBuildings() {
    farBuildings = [];
    let x = 0;
    while (x < W * 2) {
        const w = Math.random() * 30 + 20;
        const h = Math.random() * 60 + 30;
        farBuildings.push({ x, w, h });
        x += w + Math.random() * 15;
    }
}

// ─── BUILDING GENERATION ───

function createBuilding(x) {
    const w = randInt(BUILD_MIN_W, BUILD_MAX_W);
    const minTop = 40;
    const maxBottom = H - 40;
    const gapCenter = randInt(minTop + BUILD_GAP / 2 + 20, maxBottom - BUILD_GAP / 2 - 20);
    const topH = gapCenter - BUILD_GAP / 2;
    const botY = gapCenter + BUILD_GAP / 2;
    const botH = H - botY;

    // Generate window pattern
    const winCols = Math.max(1, Math.floor((w - 16) / 16));
    const topWinRows = Math.max(1, Math.floor((topH - 20) / 20));
    const botWinRows = Math.max(1, Math.floor((botH - 20) / 20));

    // Randomly lit windows
    const topWins = [];
    for (let r = 0; r < topWinRows; r++)
        for (let c = 0; c < winCols; c++)
            if (Math.random() > 0.35) topWins.push({ r, c, cyan: Math.random() > 0.93 });

    const botWins = [];
    for (let r = 0; r < botWinRows; r++)
        for (let c = 0; c < winCols; c++)
            if (Math.random() > 0.35) botWins.push({ r, c, cyan: Math.random() > 0.93 });

    // Rooftop features
    const hasAntenna = Math.random() > 0.6;
    const hasLedge = Math.random() > 0.4;

    return {
        x, w, topH, botY, botH,
        winCols, topWinRows, botWinRows,
        topWins, botWins,
        hasAntenna, hasLedge,
        passed: false,
        hue: Math.random() * 30 + 210 // blue-ish variation
    };
}

function initBuildings() {
    buildings = [];
    nextBuildX = W + 100;
    for (let i = 0; i < 6; i++) {
        const b = createBuilding(nextBuildX);
        buildings.push(b);
        nextBuildX += b.w + randInt(160, 240);
    }
}

// ─── ENERGY PICKUP ───

function spawnEnergyPickup() {
    // Find a building pair ahead of the owl to place the energy between
    const target = buildings.find(b => !b.passed && b.x > owl.x + 80 && b.x < owl.x + 400);
    if (!target) return;

    const px = target.x + target.w / 2;
    const gapCenter = target.topH + BUILD_GAP / 2;
    const py = gapCenter + randInt(-30, 30);

    pickups.push({
        x: px, y: py,
        collected: false,
        pulse: 0
    });

    // Schedule next pickup
    nextPickupAt = distance + randInt(ENERGY_INTERVAL_MIN, ENERGY_INTERVAL_MAX);
}

// ─── GAME ACTIONS ───

function resetGame() {
    owl.y = H * 0.4;
    owl.vy = 0;
    owl.angle = 0;
    owl.wingFrame = 0;
    distance = 0;
    elapsed = 0;
    energyEarned = 0;
    nextPickupAt = randInt(ENERGY_INTERVAL_MIN, ENERGY_INTERVAL_MAX);
    pickups = [];
    generateStars();
    generateClouds();
    generateFarBuildings();
    initBuildings();
}

function startGame() {
    resetGame();
    state = "playing";
    document.getElementById("startOverlay").classList.add("hidden");
    document.getElementById("resultOverlay").classList.add("hidden");
    document.getElementById("hud").style.display = "flex";
    document.getElementById("progressBar").style.display = "block";
    lastTime = performance.now();
    if (animFrame) cancelAnimationFrame(animFrame);
    loop(lastTime);
}

function flap() {
    if (state !== "playing") return;
    owl.vy = FLAP_VEL;
    owl.wingFrame = 1; // trigger wing up
}

// ─── UPDATE ───

function update(dt) {
    elapsed += dt;
    distance = elapsed * M_PER_SEC;

    // Owl physics
    owl.vy += GRAVITY * dt;
    owl.y += owl.vy * dt;
    owl.angle = Math.max(-0.4, Math.min(1.2, owl.vy / 500));

    // Wing animation
    if (owl.wingFrame > 0) {
        owl.wingFrame -= dt * 6;
        if (owl.wingFrame < 0) owl.wingFrame = 0;
    } else {
        // Idle wing flap
        owl.wingFrame = Math.sin(elapsed * 4) * 0.3 + 0.3;
    }

    // Scroll buildings
    const scrollAmt = SCROLL_SPEED * dt;
    buildings.forEach(b => { b.x -= scrollAmt; });
    pickups.forEach(p => { p.x -= scrollAmt; p.pulse += dt * 3; });

    // Remove off-screen buildings & add new ones
    buildings = buildings.filter(b => b.x + b.w > -50);
    while (buildings.length < 6) {
        const last = buildings[buildings.length - 1];
        const newX = last.x + last.w + randInt(160, 240);
        buildings.push(createBuilding(newX));
    }

    // Scroll parallax
    stars.forEach(s => {
        s.x -= s.speed * dt;
        s.twinkle += dt * 2;
        if (s.x < -5) s.x = W + 5;
    });
    clouds.forEach(c => {
        c.x -= c.speed * dt;
        if (c.x + c.w < -10) { c.x = W + randInt(20, 100); c.y = Math.random() * H * 0.3 + 20; }
    });
    farBuildings.forEach(fb => {
        fb.x -= SCROLL_SPEED * 0.15 * dt;
    });
    // Recycle far buildings
    const lastFar = farBuildings[farBuildings.length - 1];
    if (lastFar && lastFar.x + lastFar.w < 0) {
        farBuildings.shift();
        const newX = farBuildings[farBuildings.length - 1].x + farBuildings[farBuildings.length - 1].w + randInt(5, 20);
        farBuildings.push({ x: newX, w: randInt(20, 35), h: randInt(30, 70) });
    }

    // Check building pass (for distance feedback)
    buildings.forEach(b => {
        if (!b.passed && b.x + b.w < owl.x) {
            b.passed = true;
        }
    });

    // Energy pickup spawn — continuously throughout the run
    if (distance >= nextPickupAt && distance < MAX_DIST - 50) {
        spawnEnergyPickup();
    }

    // Collision detection
    checkCollisions();

    // Boundary checks
    if (owl.y - OWL_R < 0) {
        owl.y = OWL_R;
        owl.vy = 0;
    }
    if (owl.y + OWL_R > H) {
        die();
        return;
    }

    // Check finish
    if (distance >= MAX_DIST) {
        finish();
        return;
    }

    // Check pickup collection
    pickups.forEach(p => {
        if (!p.collected) {
            const dx = owl.x - p.x;
            const dy = owl.y - p.y;
            if (Math.sqrt(dx * dx + dy * dy) < OWL_R + ENERGY_R) {
                p.collected = true;
                energyEarned++;
            }
        }
    });

    // Update HUD
    document.getElementById("hudDist").textContent = Math.floor(distance) + "m";
    document.getElementById("hudEnergy").textContent = energyEarned;
    document.getElementById("progressFill").style.width = Math.min(100, (distance / MAX_DIST) * 100) + "%";
}

function checkCollisions() {
    const ox = owl.x, oy = owl.y, or = OWL_R - 2; // slightly forgiving hitbox

    for (const b of buildings) {
        if (ox + or < b.x || ox - or > b.x + b.w) continue;

        // Top building
        if (oy - or < b.topH) { die(); return; }
        // Bottom building
        if (oy + or > b.botY) { die(); return; }
    }
}

function die() {
    state = "dead";
    document.getElementById("hud").style.display = "none";
    document.getElementById("progressBar").style.display = "none";
    showResult(false);
}

function finish() {
    state = "finished";
    document.getElementById("hud").style.display = "none";
    document.getElementById("progressBar").style.display = "none";
    showResult(true);
}

// ─── RENDER ───

function render() {
    ctx.clearRect(0, 0, W, H);

    drawSky();
    drawClouds();
    drawStars();
    drawFarBuildings();
    drawBuildings();
    drawPickups();
    drawOwl();
}

function drawSky() {
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, "#030810");
    grad.addColorStop(0.5, "#0a1628");
    grad.addColorStop(1, "#0d1f3c");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Moon
    const moonX = W * 0.82, moonY = H * 0.12, moonR = 18;
    ctx.beginPath();
    ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 245, 220, 0.9)";
    ctx.fill();
    // Moon glow
    const moonGlow = ctx.createRadialGradient(moonX, moonY, moonR, moonX, moonY, moonR * 4);
    moonGlow.addColorStop(0, "rgba(255, 245, 220, 0.1)");
    moonGlow.addColorStop(1, "rgba(255, 245, 220, 0)");
    ctx.fillStyle = moonGlow;
    ctx.fillRect(moonX - moonR * 4, moonY - moonR * 4, moonR * 8, moonR * 8);
}

function drawStars() {
    stars.forEach(s => {
        const flicker = Math.sin(s.twinkle) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.brightness * flicker})`;
        ctx.fill();
    });
}

function drawClouds() {
    clouds.forEach(c => {
        ctx.beginPath();
        ctx.ellipse(c.x, c.y, c.w / 2, c.h / 2, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${c.opacity})`;
        ctx.fill();
    });
}

function drawFarBuildings() {
    ctx.fillStyle = "rgba(15, 25, 50, 0.8)";
    farBuildings.forEach(fb => {
        ctx.fillRect(fb.x, H - fb.h, fb.w, fb.h);
    });
}

function drawBuildings() {
    buildings.forEach(b => {
        // Building color
        const baseColor = `hsl(${b.hue}, 25%, 12%)`;
        const edgeColor = `hsl(${b.hue}, 30%, 18%)`;
        const winColor = "rgba(245, 200, 66, 0.7)";
        const winColorCyan = "rgba(0, 212, 255, 0.4)";

        // ── Top building ──
        ctx.fillStyle = baseColor;
        ctx.fillRect(b.x, 0, b.w, b.topH);

        // Edge highlight
        ctx.fillStyle = edgeColor;
        ctx.fillRect(b.x, 0, 2, b.topH);
        ctx.fillRect(b.x + b.w - 2, 0, 2, b.topH);

        // Ledge
        if (b.hasLedge) {
            ctx.fillStyle = edgeColor;
            ctx.fillRect(b.x - 3, b.topH - 6, b.w + 6, 6);
        }

        // Antenna
        if (b.hasAntenna) {
            ctx.strokeStyle = edgeColor;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(b.x + b.w / 2, 0);
            ctx.lineTo(b.x + b.w / 2, -15);
            ctx.stroke();
            // Blinking light
            if (Math.sin(elapsed * 3) > 0) {
                ctx.beginPath();
                ctx.arc(b.x + b.w / 2, -15, 2, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255, 77, 109, 0.9)";
                ctx.fill();
            }
        }

        // Top building windows
        const winSize = 8;
        const winGap = 16;
        const winOffsetX = (b.w - b.winCols * winGap) / 2 + 4;
        b.topWins.forEach(({ r, c, cyan }) => {
            const wx = b.x + winOffsetX + c * winGap;
            const wy = 12 + r * 20;
            if (wy + winSize < b.topH - 8) {
                ctx.fillStyle = cyan ? winColorCyan : winColor;
                ctx.fillRect(wx, wy, winSize, winSize);
            }
        });

        // ── Bottom building ──
        ctx.fillStyle = baseColor;
        ctx.fillRect(b.x, b.botY, b.w, b.botH);

        // Edge highlight
        ctx.fillStyle = edgeColor;
        ctx.fillRect(b.x, b.botY, 2, b.botH);
        ctx.fillRect(b.x + b.w - 2, b.botY, 2, b.botH);

        // Ledge
        if (b.hasLedge) {
            ctx.fillStyle = edgeColor;
            ctx.fillRect(b.x - 3, b.botY, b.w + 6, 6);
        }

        // Bottom building windows
        b.botWins.forEach(({ r, c, cyan }) => {
            const wx = b.x + winOffsetX + c * winGap;
            const wy = b.botY + 12 + r * 20;
            if (wy + winSize < H - 4) {
                ctx.fillStyle = cyan ? winColorCyan : winColor;
                ctx.fillRect(wx, wy, winSize, winSize);
            }
        });
    });
}

function drawPickups() {
    pickups.forEach(p => {
        if (p.collected) return;
        const pulse = Math.sin(p.pulse) * 3;
        const r = ENERGY_R + pulse;

        // Outer glow
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 2.5);
        glow.addColorStop(0, "rgba(0, 212, 255, 0.3)");
        glow.addColorStop(1, "rgba(0, 212, 255, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Inner orb
        const inner = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        inner.addColorStop(0, "#00ffff");
        inner.addColorStop(1, "rgba(0, 212, 255, 0.5)");
        ctx.fillStyle = inner;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();

        // Lightning symbol
        ctx.fillStyle = "#003040";
        ctx.font = "bold 14px 'Space Grotesk', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("⚡", p.x, p.y + 1);
    });
}

function drawOwl() {
    ctx.save();
    ctx.translate(owl.x, owl.y);
    ctx.rotate(owl.angle);

    const wingFlap = owl.wingFrame; // 0=down, 1=up

    // ── Wings ──
    const wingAngle = -0.3 + wingFlap * 0.8;
    // Left wing
    ctx.save();
    ctx.translate(-5, 0);
    ctx.rotate(-wingAngle);
    ctx.beginPath();
    ctx.ellipse(0, 0, 16, 6, -0.3, 0, Math.PI * 2);
    ctx.fillStyle = "#5c3d1e";
    ctx.fill();
    ctx.restore();
    // Right wing
    ctx.save();
    ctx.translate(-5, 0);
    ctx.rotate(wingAngle);
    ctx.beginPath();
    ctx.ellipse(0, 0, 16, 6, 0.3, 0, Math.PI * 2);
    ctx.fillStyle = "#5c3d1e";
    ctx.fill();
    ctx.restore();

    // ── Body ──
    ctx.beginPath();
    ctx.ellipse(0, 0, OWL_R, OWL_R * 1.1, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#8B6914";
    ctx.fill();

    // Belly
    ctx.beginPath();
    ctx.ellipse(2, 4, 9, 10, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#D4B878";
    ctx.fill();

    // ── Ear tufts ──
    ctx.fillStyle = "#6B4F10";
    // Left tuft
    ctx.beginPath();
    ctx.moveTo(-8, -10);
    ctx.lineTo(-5, -20);
    ctx.lineTo(-2, -11);
    ctx.closePath();
    ctx.fill();
    // Right tuft
    ctx.beginPath();
    ctx.moveTo(2, -11);
    ctx.lineTo(5, -20);
    ctx.lineTo(8, -10);
    ctx.closePath();
    ctx.fill();

    // ── Eyes ──
    // Left eye (white)
    ctx.beginPath();
    ctx.arc(-6, -4, 7, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.strokeStyle = "#6B4F10";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Right eye (white)
    ctx.beginPath();
    ctx.arc(6, -4, 7, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.stroke();

    // Pupils (look forward)
    ctx.fillStyle = "#1a1a1a";
    ctx.beginPath();
    ctx.arc(-4, -4, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(8, -4, 3.5, 0, Math.PI * 2);
    ctx.fill();

    // Pupil shine
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(-3, -5.5, 1.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(9, -5.5, 1.5, 0, Math.PI * 2);
    ctx.fill();

    // ── Beak ──
    ctx.beginPath();
    ctx.moveTo(-1, 1);
    ctx.lineTo(2, 5);
    ctx.lineTo(5, 1);
    ctx.closePath();
    ctx.fillStyle = "#f5a623";
    ctx.fill();

    // ── Feet ──
    ctx.strokeStyle = "#f5a623";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-5, 14);
    ctx.lineTo(-7, 19);
    ctx.moveTo(-5, 14);
    ctx.lineTo(-3, 19);
    ctx.moveTo(5, 14);
    ctx.lineTo(3, 19);
    ctx.moveTo(5, 14);
    ctx.lineTo(7, 19);
    ctx.stroke();

    ctx.restore();
}

// ─── INPUT ───

function handleInput(e) {
    if (e.type === "keydown" && e.code !== "Space" && e.code !== "ArrowUp") return;
    if (e.type === "keydown") e.preventDefault();

    if (state === "playing") {
        flap();
    }
}

// ─── GAME LOOP ───

function loop(timestamp) {
    const dt = Math.min((timestamp - lastTime) / 1000, 0.05); // cap dt
    lastTime = timestamp;

    if (state === "playing") {
        update(dt);
    }

    render();
    animFrame = requestAnimationFrame(loop);
}

// ─── RESULT ───

async function showResult(completed) {
    const overlay = document.getElementById("resultOverlay");
    overlay.classList.remove("hidden");

    const distFloor = Math.floor(distance);
    document.getElementById("resDistance").textContent = distFloor + "m";

    // If energy is already at cap, convert pickups to Koin IQ
    const energyIsFull = currentUser && currentUser.energi >= ENERGY_CAP;
    let reward = energyEarned;
    let koinReward = 0;

    if (energyIsFull) {
        reward = 0;
        koinReward = energyEarned * KOIN_PER_PICKUP;
        document.getElementById("resEnergy").textContent = `🪙 ${koinReward}`;
        document.querySelector("#resultCard .result-stat:nth-child(2) .rs-label").textContent = "Koin IQ (energi full)";
    } else {
        document.getElementById("resEnergy").textContent = reward;
        document.querySelector("#resultCard .result-stat:nth-child(2) .rs-label").textContent = "Energi Dapat";
    }

    let emoji, title, message;
    if (completed) {
        emoji = "🏆";
        title = "FINISH! 1000m!";
        message = "LUAR BIASA! Kamu berhasil menyelesaikan 1000 meter! Owl-mu terbang seperti champion!";
    } else if (distFloor >= 700) {
        emoji = "🥈";
        title = "Hampir Sampai!";
        message = `Kamu mencapai ${distFloor}m. Sedikit lagi sampai finish!`;
    } else if (distFloor >= 300) {
        emoji = "🦉";
        title = "Lumayan!";
        message = `Kamu mencapai ${distFloor}m. Terus latihan agar lebih jauh!`;
    } else {
        emoji = "💥";
        title = "Crash!";
        message = `Kamu mencapai ${distFloor}m. Coba lagi, ketuk lebih cepat!`;
    }

    document.getElementById("resultEmoji").textContent = emoji;
    document.getElementById("resultTitle").textContent = title;
    if (energyIsFull && koinReward > 0) {
        message += `\n\n⚡ Energi sudah full (${ENERGY_CAP}), pickup diubah jadi 🪙 ${koinReward} Koin IQ!`;
    }
    document.getElementById("resultMessage").textContent = message;

    // Save to Supabase
    if (currentUser && (reward > 0 || koinReward > 0)) {
        const updateData = {};
        if (reward > 0) updateData.energi = currentUser.energi + reward;
        if (koinReward > 0) updateData.koin_iq = currentUser.koin_iq + koinReward;

        await supabaseClient
            .from("user_progress")
            .update(updateData)
            .eq("username", currentUser.username);

        if (reward > 0) currentUser.energi += reward;
        if (koinReward > 0) currentUser.koin_iq += koinReward;
    }

    document.getElementById("energiDisplay").textContent = currentUser ? currentUser.energi : 0;
    document.getElementById("koinDisplay").textContent = currentUser ? currentUser.koin_iq : 0;
}

// ─── INIT ───

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

    // Setup canvas & draw idle scene
    setupCanvas();
    generateStars();
    generateClouds();
    generateFarBuildings();
    initBuildings();

    owl.y = H * 0.4;
    owl.x = 80;

    // Draw idle scene
    function idleLoop() {
        if (state !== "idle") return;
        elapsed += 0.016;
        stars.forEach(s => { s.twinkle += 0.03; });
        owl.wingFrame = Math.sin(elapsed * 3) * 0.3 + 0.3;
        ctx.clearRect(0, 0, W, H);
        drawSky();
        drawClouds();
        drawStars();
        drawFarBuildings();
        drawBuildings();
        drawOwl();
        requestAnimationFrame(idleLoop);
    }
    idleLoop();

    // Event listeners
    document.getElementById("startBtn").addEventListener("click", () => {
        startGame();
    });

    document.getElementById("retryBtn").addEventListener("click", () => {
        startGame();
    });

    document.getElementById("backBtn").addEventListener("click", () => {
        window.location.href = "app.html";
    });

    // Input
    document.addEventListener("keydown", handleInput);
    canvas.addEventListener("click", handleInput);
    canvas.addEventListener("touchstart", (e) => {
        e.preventDefault();
        handleInput(e);
    });

    // Resize
    window.addEventListener("resize", () => {
        setupCanvas();
        generateStars();
        generateClouds();
        generateFarBuildings();
    });
});

// ─── UTILS ───

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
