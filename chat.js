// chat.js — Logika Chat AI Skolvix

const EDGE_FUNCTION_URL = "https://yqbkkxibgsfaueaaezey.supabase.co/functions/v1/rag-chat";

let selectedPersona = localStorage.getItem("skolvix_persona") || "kakAlex";
let isSending = false;
let username = localStorage.getItem("skolvix_username") || "Pengguna";

const messagesContainer = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const typingIndicator = document.getElementById("typingIndicator");
const chatEmpty = document.getElementById("chatEmpty");

const PERSONA_LIST = [
    { key: "kakAlex", emoji: "🧠", nama: "Kak Alex", type: "Si Paling Logis" },
    { key: "kakTara", emoji: "🎉", nama: "Kak Tara", type: "Si Pemandu Sorak" },
    { key: "ibuDian", emoji: "🌸", nama: "Ibu Dian", type: "Si Penyayang" },
    { key: "kakRey", emoji: "😒", nama: "Kak Rey", type: "Si Cuek" },
    { key: "kakSaga", emoji: "🌌", nama: "Kak Saga", type: "Si Filsuf Stoik" },
    { key: "kakVictor", emoji: "👑", nama: "Kak Victor", type: "Si Perfeksionis" }
];

function renderPersonas() {
    const desktopContainer = document.getElementById("personaSelectorDesktop");
    if (desktopContainer) {
        desktopContainer.querySelectorAll(".persona-chip").forEach(chip => {
            chip.classList.toggle("active", chip.dataset.persona === selectedPersona);
        });
    }
    const mobileSelect = document.getElementById("personaSelect");
    if (mobileSelect) {
        mobileSelect.value = selectedPersona;
    }

    const persona = PERSONA_LIST.find(p => p.key === selectedPersona) || PERSONA_LIST[0];
    const avatar = document.getElementById("chatAvatar");
    const name = document.getElementById("chatPersonaName");
    const status = document.getElementById("chatPersonaStatus");

    if (avatar) avatar.textContent = persona.emoji;
    if (name) name.textContent = persona.nama;
    if (status) status.textContent = persona.type;

    localStorage.setItem("skolvix_persona", selectedPersona);
}

function addMessage(role, content, sumber = null) {
    if (chatEmpty) chatEmpty.style.display = "none";
    const div = document.createElement("div");
    div.className = `chat-msg ${role}`;

    const persona = PERSONA_LIST.find(p => p.key === selectedPersona) || PERSONA_LIST[0];
    const labelText = role === "user" ? " Kamu" : ` ${persona.nama}`;
    const label = document.createElement("div");
    label.className = "msg-label";
    label.textContent = labelText;
    div.appendChild(label);

    const contentDiv = document.createElement("div");
    contentDiv.className = "msg-content";
    contentDiv.textContent = content;
    div.appendChild(contentDiv);

    if (sumber && sumber.length > 0) {
        const details = document.createElement("details");
        details.className = "msg-sumber";
        const summary = document.createElement("summary");
        summary.textContent = "📚 Lihat sumber materi";
        details.appendChild(summary);
        sumber.forEach((s, i) => {
            const p = document.createElement("p");
            p.textContent = `${i + 1}. ${s.bab || "Materi"} (${s.kelas || ""} - ${s.mapel || ""})`;
            p.style.margin = "4px 0";
            p.style.fontSize = "11px";
            details.appendChild(p);
        });
        div.appendChild(details);
    }

    messagesContainer.appendChild(div);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

async function sendQuestion() {
    const question = chatInput.value.trim();
    if (!question || isSending) return;
    isSending = true;
    sendBtn.disabled = true;
    chatInput.disabled = true;

    addMessage("user", question);
    chatInput.value = "";
    typingIndicator.style.display = "flex";
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    try {
        const response = await fetch(EDGE_FUNCTION_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pertanyaan: question, persona: selectedPersona, username: username })
        });

        const data = await response.json();
        typingIndicator.style.display = "none";

        if (!response.ok) {
            const errorMsg = data.error || `Terjadi error (${response.status})`;
            addMessage("ai", `❌ ${errorMsg}`);
            return;
        }

        if (data.error) {
            addMessage("ai", `❌ ${data.error}`);
            return;
        }

        addMessage("ai", data.jawaban, data.sumber);
    } catch (error) {
        typingIndicator.style.display = "none";
        addMessage("ai", "❌ Gagal terhubung ke AI. Periksa koneksi internetmu.");
        console.error("Error:", error);
    }

    isSending = false;
    sendBtn.disabled = false;
    chatInput.disabled = false;
    chatInput.focus();
}

sendBtn.addEventListener("click", sendQuestion);
chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendQuestion();
    }
});

document.querySelectorAll("#personaSelectorDesktop .persona-chip").forEach(chip => {
    chip.addEventListener("click", () => {
        selectedPersona = chip.dataset.persona;
        renderPersonas();
    });
});

document.getElementById("personaSelect").addEventListener("change", (e) => {
    selectedPersona = e.target.value;
    renderPersonas();
});

document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "app.html";
});

renderPersonas();


