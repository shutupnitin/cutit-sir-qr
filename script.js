// Placeholder interactivity
document.querySelectorAll('.qr-type').forEach(el => {
  el.addEventListener('click', () => {
    // mark selected type
    document.querySelectorAll('.qr-type').forEach(x => x.classList.remove('active'));
    el.classList.add('active');
  });
});

document.getElementById('qrForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Your custom QR is ready for download!');
});
