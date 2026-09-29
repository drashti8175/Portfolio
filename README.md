# Drashti Patel — Portfolio

> Personal portfolio website built with React + Vite. Features a full-page home with scroll-spy navigation, animated sections, project showcase, achievements timeline, and a full-stack task manager.

**Live:** _coming soon_ &nbsp;|&nbsp; **GitHub:** [drashti8175](https://github.com/drashti8175) &nbsp;|&nbsp; **LinkedIn:** [drashti-patel-31ba52333](https://www.linkedin.com/in/drashti-patel-31ba52333/)

---

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 18, Vite, React Router v6 |
| Animations | Framer Motion, React Type Animation |
| Styling | CSS Modules (split into 8 files), Playfair Display + DM Sans fonts |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT (JSON Web Tokens) |

---

## Features

- **Single-page portfolio** — Hero, Skills, Projects, Achievements, Journey, Contact sections
- **Scroll-spy navigation** — active link highlights as you scroll
- **Project filter tabs** — filter by AI/ML or Full Stack
- **Framer Motion animations** — fade-up and slide-in on scroll
- **Type animation** — rotating role titles in the hero
- **Full-stack Task Manager** — CRUD with Express + MongoDB backend, JWT auth
- **GitHub API integration** — Projects page fetches live repos with fallback
- **Responsive** — works on mobile, tablet, and desktop
- **Light editorial theme** — cream background, Playfair Display headings, gold + indigo accents

---

## Projects Showcased

| Project | Category | Status |
|---|---|---|
| KNN Interactive Classroom | AI / ML | ✅ Live |
| VisionFlow AI | AI / ML | ✅ Live |
| PhishGuard AI | ML · Security | ✅ Live |
| AI Travel Planner | AI Agents · LangGraph | 🔧 In Progress |
| LogicLab | AI · ISEF | 🔧 In Progress |
| MediCore | Full Stack | 🔧 In Progress |
| ShopStack | Full Stack | 🔧 In Progress |
| SpaceX Falcon 9 Capstone | ML · Data Science | 🔧 In Progress |
| Clinic Management System | Full Stack | 🔧 In Progress |
| 100 Days 100 Web Projects | Web Challenge | 🔧 In Progress |
| Student Portfolio | Full Stack | 🔧 In Progress |

---

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Frontend

```bash
cd student-portfolio
npm install
npm run dev
# runs on http://localhost:5173
```

### Backend (Task Manager API)

```bash
cd task-manager-api
npm install
# create .env file:
# MONGO_URI=mongodb://localhost:27017/task-manager
# PORT=5000
# JWT_SECRET=your_secret_key
npm run dev
# runs on http://localhost:5000
```

---

## Project Structure

```
student-portfolio/
├── src/
│   ├── assets/          # Images
│   ├── components/      # Home, Projects, Contact, Tasks, NavBar, Login ...
│   ├── styles/          # base.css, home.css, layout.css, components.css ...
│   ├── api.js           # Axios helper for backend calls
│   ├── App.jsx          # Routes + layout shell
│   └── main.jsx
├── public/
└── vite.config.js

task-manager-api/
├── models/
│   └── Task.js          # Mongoose schema
├── server.js            # Express app + CRUD routes
└── .env
```

---

## About Me

**Drashti Patel** — B.Tech Computer Engineering, CHARUSAT (2024–28)

- 📍 Navsari, Gujarat
- 🥇 1st Position — Lifelong Learner Award, CSPIT CHARUSAT
- 🎓 IBM AI for Sustainability Internship (1M1B · AICTE · Sep 2026)
- 🔥 LeetCode 50 Days Badge 2026
- 🐍 Kaggle Python & Pandas Badges

**Contact:** drashtiipatel2006@gmail.com &nbsp;|&nbsp; +91 79902 86668

---

<p align="center">Made with React + Vite · Drashti Patel · 2025</p>
