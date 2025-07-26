import { auth, googleProvider, appleProvider } from "./firebase-config.js";
import { initiatePremiumCheckout }        from "./razorpay.js";
import { addDoc, collection }             from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// ---- UI References ----
const qrSection    = document.getElementById("qrSection");
const qrCanvas     = document.getElementById("qrCanvas");
const qrDataInput  = document.getElementById("qrData");
const downloadBtn  = document.getElementById("downloadBtn");
const premiumBtn   = document.getElementById("premiumBtn");
const surpriseBtn  = document.getElementById("surpriseBtn");
const themeSelect  = document.getElementById("themeSelect");
const chatPanel    = document.getElementById("chatPanel");
const chatToggle   = document.getElementById("chatToggleBtn");
const chatClose    = document.getElementById("chatClose");
const versionBtn   = document.getElementById("versionBubble");
const versionModal = document.getElementById("versionModal");
const closeVersion = document.getElementById("closeVersion");

// ---- Event Listeners ----
downloadBtn.addEventListener("click", generateQR);
premiumBtn.addEventListener("click", () => initiatePremiumCheckout(""));
surpriseBtn.addEventListener("click", () => {
  const themes = ["minimal","y2k","anime","cyber","kpop"];
  themeSelect.value = themes[Math.floor(Math.random()*themes.length)];
  generateQR();
});
chatToggle.addEventListener("click", ()=> chatPanel.classList.toggle("hidden"));
chatClose.addEventListener("click", ()=> chatPanel.classList.add("hidden"));
versionBtn.addEventListener("click", ()=> versionModal.classList.toggle("hidden"));
closeVersion.addEventListener("click", ()=> versionModal.classList.add("hidden"));

// ---- QR Generation + Firestore Save ----
async function generateQR() {
  const data  = qrDataInput.value.trim() || "cutit.sbs";
  const theme = themeSelect.value;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(data)}`;
  const img   = new Image();
  img.crossOrigin = "anonymous";
  img.src  = qrUrl;
  img.onload = async () => {
    const canvas = document.createElement("canvas");
    canvas.width  = 260;
    canvas.height = 300;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    ctx.font      = "14px Sora";
    ctx.fillStyle = "#666";
    ctx.textAlign = "center";
    ctx.fillText("made by cutit.sbs ✦ your vibe. your code", 130, 290);

    qrCanvas.innerHTML = "";
    qrCanvas.appendChild(canvas);

    // Firestore log
    try {
      await addDoc(collection(db, "qrCodes"), {
        data, theme, timestamp: new Date()
      });
    } catch(e) {
      console.error("Firestore error:", e);
    }
  };
}

// ---- Firebase Auth UI Hooks (example) ----
// TODO: wire up your sign-in forms for Email/Google/Apple
