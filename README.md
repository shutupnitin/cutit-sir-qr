# cutit.sbs (V8)

A pastel-anime glassmorphism QR code generator with Firebase Auth & Razorpay Premium.

## 🌐 Pages
- `index.html` – Home & QR Generator
- `about.html` – About Us
- `premium.html` – Premium Checkout
- `links.html` – Linktree-style Links
- `contact.html` – Contact Form
- `terms.html` – Terms & Chill
- `privacy.html` – Privacy-ish

## 🚀 Deploy to Netlify
1. Fork/clone this repo.
2. `git add . && git commit -m "Initial V8 launch"`
3. Push to GitHub.
4. On Netlify: **New site from Git** → select repo → **deploy directory**: `/`.
5. (Optional) Set environment variables for Firebase and Razorpay keys.

## 🔑 Firebase Setup
1. Create project in Firebase console.
2. Enable **Email/Password**, **Google**, **Apple** under Authentication → Sign-in Methods.
3. In Firestore, create collection `qrCodes` and `users`.
4. Copy your Firebase config into `/js/firebase-config.js`.

## 💳 Razorpay Setup
- Live Key ID: `rzp_live_AJEAZ1WJHOpOOQ`
- Amount: ₹50 ×100 (paise)
- Coupon: `CUTITCAMPUS` → 50% off
- Place keys in `/js/razorpay.js`.

## 📦 Ready!  
Your site is live. Share your vibe. Share your code.
