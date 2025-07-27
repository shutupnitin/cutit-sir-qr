document.getElementById("modeSwitch").onclick = () => {
  document.body.classList.toggle("light");
};

document.querySelectorAll(".qr-mode").forEach((button) => {
  button.addEventListener("click", () => {
    const mode = button.dataset.mode;
    document.getElementById("generateQR").setAttribute("data-mode", mode);
  });
});

document.getElementById("generateQR").addEventListener("click", async () => {
  const url = document.getElementById("linkInput").value;
  const mode = document.getElementById("generateQR").getAttribute("data-mode") || "default";
  const canvas = document.getElementById("qrCanvas");
  const ctx = canvas.getContext("2d");

  if (!url) return alert("Paste a link first");

  canvas.width = 256;
  canvas.height = 256;

  // Draw themed background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw QR code (basic)
  const qr = await QRCode.toCanvas(canvas, url, { margin: 1, width: 256 });
  
  // Watermark
  ctx.fillStyle = "#333";
  ctx.font = "12px Antonio";
  ctx.fillText("Made by CutIt.sbs â¦ your vibe. your code.", 10, 245);

  document.getElementById("qrResult").classList.remove("hidden");
});

document.getElementById("downloadQR").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "cutit_qr.png";
  link.href = document.getElementById("qrCanvas").toDataURL();
  link.click();
});

document.getElementById("chatToggle").addEventListener("click", () => {
  document.getElementById("chatWindow").classList.toggle("hidden");
});

document.getElementById("sendChat").addEventListener("click", async () => {
  const input = document.getElementById("chatInput").value;
  if (!input) return;
  const msgBox = document.getElementById("chatMessages");
  msgBox.innerHTML += `<p><b>You:</b> ${input}</p>`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }]
    })
  });
  const data = await response.json();
  const reply = data.choices[0].message.content;
  msgBox.innerHTML += `<p><b>Cutie:</b> ${reply}</p>`;
});
