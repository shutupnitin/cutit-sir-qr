// --- Razorpay Premium Unlock ---
document.getElementById('razorpay-button').addEventListener('click', () => {
  const options = {
    key: "rzp_live_AJEAZ1WJHOpOOQ",
    amount: 100, // ₹1 in paise
    currency: "INR",
    name: "cutit.sbs",
    description: "Premium QR Unlock",
    image: "assets/logo.svg",
    handler: function (response) {
      console.log("Payment success", response.razorpay_payment_id);

      // Optional: Notify Cutie bot!
      const cutieReply = document.getElementById('cutie-reply');
      cutieReply.innerHTML = `
        <p>✨ You fancy now! Premium unlocked 💕</p>
        <p>Watermark removed. Cutie loves your style.</p>
      `;

      // Remove watermark from QR preview
      const watermark = document.getElementById('qr-watermark');
      if (watermark) watermark.remove();
    },
    prefill: {
      name: "Cutie Fan",
      email: "you@example.com",
      contact: "9000000000"
    },
    theme: {
      color: "#a855f7"
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
});
