function generateQR() {
  const input = document.getElementById("qrInput").value;
  const canvas = document.getElementById("qrCanvas");
  const theme = document.getElementById("themeSelect").value;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(input)}`;

  const img = new Image();
  img.src = qrUrl;
  img.onload = () => {
    const ctx = canvas.getContext("2d");
    canvas.width = 220;
    canvas.height = 240;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    ctx.font = "12px Poppins";
    ctx.fillStyle = "#6b7280";
    ctx.textAlign = "center";
    ctx.fillText("made by cutit.sbs ✦ your vibe. your code", 110, 235);
  };
}

function surpriseMe() {
  const vibes = [
    "Scan if you're iconic ✨",
    "Born to vibe, built to QR",
    "The QR you didn't know you needed",
    "cutit.sbs — where vibes go viral"
  ];
  const random = vibes[Math.floor(Math.random() * vibes.length)];
  document.getElementById("qrInput").value = random;
  generateQR();
}

function toggleChat() {
  const chat = document.getElementById("chatWindow");
  chat.style.display = chat.style.display === "none" || chat.style.display === "" ? "block" : "none";
}
