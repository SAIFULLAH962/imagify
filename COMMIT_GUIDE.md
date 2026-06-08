# 📋 GitHub Commit Guide — Imagify Project
# Replace "Your Name" with your actual name in every commit message

## SETUP (Do this first)
```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/imagify.git
```

---

## COMMIT 1 — Project Initialization
Files to add: package.json, vite.config.js, index.html, .gitignore
```bash
git add package.json vite.config.js index.html .gitignore
git commit -m "Your Name - Initialized React Vite project with dependencies (axios, react-router-dom)"
git push -u origin main
```

---

## COMMIT 2 — Entry Point & Global Styles
Files to add: src/main.jsx, src/index.css
```bash
git add src/main.jsx src/index.css
git commit -m "Your Name - Added main entry point and global CSS styles with dark theme variables"
git push
```

---

## COMMIT 3 — App Component with Routing
Files to add: src/App.jsx
```bash
git add src/App.jsx
git commit -m "Your Name - Created App component with React Router routes for Home, Result, and BuyCredit pages"
git push
```

---

## COMMIT 4 — Global State with Context API
Files to add: src/context/AppContext.jsx
```bash
git add src/context/AppContext.jsx
git commit -m "Your Name - Implemented AppContext with user auth state, credit tracking, generateImage and logout functions"
git push
```

---

## COMMIT 5 — Assets & Static Data
Files to add: src/assets/assets.js
```bash
git add src/assets/assets.js
git commit -m "Your Name - Added static assets file with pricing plans, testimonials data, and steps data"
git push
```

---

## COMMIT 6 — Navbar Component
Files to add: src/components/Navbar.jsx
```bash
git add src/components/Navbar.jsx
git commit -m "Your Name - Built Navbar component with logo, login button, credits display, and user dropdown menu"
git push
```

---

## COMMIT 7 — Footer Component
Files to add: src/components/Footer.jsx
```bash
git add src/components/Footer.jsx
git commit -m "Your Name - Created Footer component with logo, copyright text, and social media icons"
git push
```

---

## COMMIT 8 — Login Modal
Files to add: src/components/Login.jsx
```bash
git add src/components/Login.jsx
git commit -m "Your Name - Developed Login/Signup modal with form validation, toggle between states, and API integration"
git push
```

---

## COMMIT 9 — Hero Header Component
Files to add: src/components/Header.jsx
```bash
git add src/components/Header.jsx
git commit -m "Your Name - Designed Header hero section with animated headline, CTA button, and sample images grid"
git push
```

---

## COMMIT 10 — How It Works Steps
Files to add: src/components/Steps.jsx
```bash
git add src/components/Steps.jsx
git commit -m "Your Name - Created Steps component showing 3-step process with icons and hover animations"
git push
```

---

## COMMIT 11 — App Description Section
Files to add: src/components/Description.jsx
```bash
git add src/components/Description.jsx
git commit -m "Your Name - Added Description section with two-column layout, stats display, and AI badge"
git push
```

---

## COMMIT 12 — Testimonials Section
Files to add: src/components/Testimonials.jsx
```bash
git add src/components/Testimonials.jsx
git commit -m "Your Name - Built Testimonials section with star ratings, user quotes, and avatar cards"
git push
```

---

## COMMIT 13 — Generate Button Component
Files to add: src/components/GenerateBtn.jsx
```bash
git add src/components/GenerateBtn.jsx
git commit -m "Your Name - Added GenerateBtn CTA component with auth-check navigation logic"
git push
```

---

## COMMIT 14 — Home Page
Files to add: src/pages/Home.jsx
```bash
git add src/pages/Home.jsx
git commit -m "Your Name - Assembled Home page by composing Header, Steps, Description, Testimonials, and GenerateBtn components"
git push
```

---

## COMMIT 15 — Image Generator Result Page
Files to add: src/pages/Result.jsx
```bash
git add src/pages/Result.jsx
git commit -m "Your Name - Built Result page with prompt input, loading spinner, image display, and download functionality"
git push
```

---

## COMMIT 16 — Buy Credits / Pricing Page
Files to add: src/pages/BuyCredit.jsx
```bash
git add src/pages/BuyCredit.jsx
git commit -m "Your Name - Created BuyCredit pricing page with 3-tier plans, Razorpay payment integration, and trust badges"
git push
```

---

## COMMIT 17 — Final: README & Environment Config
Files to add: README.md, .env (do NOT push .env — it's in .gitignore)
```bash
git add README.md
git commit -m "Your Name - Added project README with setup instructions, tech stack, and project structure documentation"
git push
```

---

✅ Done! Your repo will have 17 well-labeled commits showing your step-by-step progress.
