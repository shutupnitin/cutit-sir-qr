
// --- Modal Toggle ---
document.querySelectorAll('[data-modal-toggle]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.modalToggle);
    target.classList.toggle('hidden');
  });
});

// --- QR Generator Logic ---
const qrInput = document.getElementById('qr-input');
const qrCanvas = document.getElementById('qr-canvas');
const qrButton = document.getElementById('qr-button');

qrButton.addEventListener('click', () => {
  if (!qrInput.value.trim()) return;
  qrCanvas.innerHTML = '';
  new QRCode(qrCanvas, {
    text: qrInput.value.trim(),
    width: 256,
    height: 256,
    colorDark: '#222',
    colorLight: '#fefefe',
    correctLevel: QRCode.CorrectLevel.H
  });
});

// --- Cutie Bot Trigger ---
const cutieTrigger = document.getElementById('cutie-trigger');
const cutieContainer = document.getElementById('cutie-container');

cutieTrigger.addEventListener('click', () => {
  cutieContainer.classList.remove('hidden');
  startCutieBot();
});

function startCutieBot() {
  const typing = document.getElementById('cutie-typing');
  typing.innerText = 'Cutie is typing...';
  setTimeout(() => {
    typing.innerText = 'Hiya 🌸 Paste a link like `qr https://nitin.codes` and I’ll zap it into a cute QR for you!';
  }, 1500);
}
