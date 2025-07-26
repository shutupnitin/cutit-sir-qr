export function initiatePremiumCheckout(couponCode = "") {
  const amount = couponCode === "CUTITCAMPUS" ? 2500 : 5000; // paise
  const options = {
    key: "rzp_live_AJEAZ1WJHOpOOQ",
    amount,
    currency: "INR",
    name: "Cutit.sbs Premium",
    description: "Premium QR & CutieGPT v2",
    handler: async (res) => {
      // mark premium locally & in Firestore
      localStorage.setItem("cutitPremium", "true");
      // (optional) update Firebase user doc
      alert("Payment successful! Premium unlocked 💖");
    },
    theme: { color: "#ff5ea8" },
  };
  const rzp = new Razorpay(options);
  rzp.open();
}
