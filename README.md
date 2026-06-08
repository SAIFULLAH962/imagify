# Imagify - AI Text to Image Generator

A full-stack AI SaaS application built with React (Vite) + Node.js + MongoDB.

## 🚀 Project Overview

This project was built following the GreatStack YouTube tutorial:
- **Video**: How To Create Full Stack Text to Image Generator AI SaaS App Using React JS | MERN Project
- **Channel**: GreatStack

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite), React Router DOM, Axios, Context API
- **Backend**: Node.js, Express.js (covered in backend section)
- **Database**: MongoDB (covered in backend section)
- **AI API**: ClipDrop / Stability AI for image generation
- **Payments**: Razorpay (covered in backend section)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        - Navigation bar with login/credits
│   ├── Footer.jsx        - Site footer
│   ├── Login.jsx         - Login/Signup modal
│   ├── Header.jsx        - Hero section
│   ├── Steps.jsx         - How it works section
│   ├── Description.jsx   - App description section
│   ├── Testimonials.jsx  - User testimonials
│   └── GenerateBtn.jsx   - CTA generate button
├── pages/
│   ├── Home.jsx          - Home page
│   ├── Result.jsx        - Image generator page
│   └── BuyCredit.jsx     - Pricing/credits page
├── context/
│   └── AppContext.jsx    - Global state management
└── assets/
    └── assets.js         - Static data & assets
```

## 🏃 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.
