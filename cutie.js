// --- Cutie Bot Core Logic ---
const cutieInput = document.getElementById('cutie-input');
const cutieReply = document.getElementById('cutie-reply');

cutieInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    const cmd = cutieInput.value.trim();
    if (!cmd) return;
    parseCutieCommand(cmd);
    cutieInput.value = '';
  }
});

function parseCutieCommand(cmd) {
  cutieReply.innerHTML = '';
  const typing = document.createElement('p');
  typing.innerText = 'Cutie is typing...';
  cutieReply.appendChild(typing);

  setTimeout(() => {
    typing.remove();

    if (cmd.startsWith('qr ')) {
      const url = cmd.slice(3).trim();
      if (!isValidURL(url)) {
        cutieReply.innerHTML = 'Oops 💔 that doesn’t look like a real link!';
        return;
      }
      const qrDiv = document.createElement('div');
      new QRCode(qrDiv, {
        text: url,
        width: 200,
        height: 200,
        colorDark: '#2a2a2a',
        colorLight: '#fff0fa',
        correctLevel: QRCode.CorrectLevel.H
      });
      cutieReply.appendChild(qrDiv);
    } else if (cmd === 'hello') {
      cutieReply.innerHTML = 'Heyy 🌈 You found one of my secret greetings!';
    } else {
      cutieReply.innerHTML = 'I didn’t get that, cutie 🫧 Try something like `qr https://your.link`!';
    }
  }, 1500);
}

function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}
