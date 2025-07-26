// Theme Toggle
document.getElementById("themeToggleBtn")
        .addEventListener("click", toggleTheme);

function toggleTheme() {
  document.body.classList.toggle("retro");
}

// QR Generator + Watermark
function generateQR() {
  const input = document.getElementById("qrInput").value;
  const canvas = document.getElementById("qrCanvas");
  const qrUrl = 
    `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(input)}`;

  const img = new Image();
  img.src = qrUrl;
  img.onload = () => {
    const ctx = canvas.getContext("2d");
    canvas.width = 220;
    canvas.height = 240;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    ctx.font = "12px Poppins";
    ctx.fillStyle = getComputedStyle(document.body)
                     .getPropertyValue("--pf-text").trim() ||
                   getComputedStyle(document.body)
                     .getPropertyValue("--rs-text").trim();
    ctx.textAlign = "center";
    ctx.fillText(
      "made by cutit.sbs ✦ your vibe. your code",
      canvas.width / 2, 235
    );
  };
}

// SurpriseMe Logic
function surpriseMe() {
  const vibes = [
    "Scan if you're iconic ✨",
    "Born to vibe, built to QR",
    "The QR you didn't know you needed",
    "cutit.sbs — where vibes go viral"
  ];
  document.getElementById("qrInput").value = 
    vibes[Math.floor(Math.random() * vibes.length)];
  generateQR();
}

// Chatbot Toggle
function toggleChat() {
  const chat = document.getElementById("chatWindow");
  chat.style.display = chat.style.display === "block" ? "none" : "block";
}
