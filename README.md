# 📁 Portfolio - Shudhanshu Mishra

[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-20-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5-black)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green)](https://www.mongodb.com/)

## 🚀 Overview
A modern, responsive **personal portfolio website** built with **HTML, CSS, JavaScript** for the frontend and **Node.js/Express/MongoDB** for the backend. Features smooth animations (particles.js, typing effect, ScrollReveal), dynamic projects section, and a fully functional contact form that saves messages to a MongoDB database.

Perfect for showcasing skills as a Full-Stack Developer!

**Live Demo**: [Add your deployed link here](https://your-portfolio.vercel.app)  
**GitHub Repo**: [shudhanshu725/portfolio](https://github.com/shudhanshu725/portfolio)

## ✨ Features
- 🎭 Hero section with typing animation, particles background, and 3D tilt effects
- 📄 Downloadable Resume (PDF)
- 📊 Animated skills progress bars (HTML, CSS, JS, Node.js)
- 🛠️ Dynamic projects showcase (populated via JavaScript)
- 📧 Contact form with backend persistence (saves to MongoDB)
- 📱 Fully responsive design
- 🎨 Social links (GitHub, LinkedIn, Email)

## 🛠️ Tech Stack
| Frontend | Backend | Tools/Libs |
|----------|---------|------------|
| HTML5, CSS3, Vanilla JS | Node.js, Express.js | MongoDB, Mongoose |
| Particles.js, Typed.js | CORS | ScrollReveal, Vanilla Tilt |
| | | Vanilla JS animations |

## 📸 Screenshots
Add screenshots here:
```
![Hero Section](./frontend/screenshot-hero.png)
![Projects Section](./frontend/screenshot-projects.png)
```

## 🚀 Quick Start
### Prerequisites
- [Node.js](https://nodejs.org/) (v20+)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/) (local instance on port 27017)

### Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/shudhanshu725/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. **Start MongoDB** (ensure it's running on `mongodb://127.0.0.1:27017`):
   ```bash
   # On Windows (MongoDB service)
   net start MongoDB
   ```

4. **Run Backend** (Contact form API):
   ```bash
   node backend/server.js
   ```
   Server runs on `http://localhost:5000`.

5. **Open Frontend**:
   - Simply open `frontend/index.html` in your browser (no server needed).
   - Or serve statically: `npx serve frontend` (if live reload desired).

6. **Test Contact Form**:
   - Fill form → Submits to `/api/contact` → Saves to `portfolio.contacts` collection in MongoDB.

## 🏗️ Project Structure
```
portfolio/
├── frontend/           # Static frontend files
│   ├── index.html      # Main portfolio page
│   ├── style.css       # Styles & animations
│   ├── script.js       # JS logic (typing, particles, form, projects)
│   ├── pic.png         # Profile image
│   └── resume.pdf      # Downloadable resume
├── backend/            # Express API server
│   └── server.js       # Server, MongoDB connection, /api/contact
├── package.json        # Dependencies & scripts
└── README.md           # You're reading it!
```

## ☁️ Deployment
### Frontend (Static Hosting)
- **Vercel/Netlify**: Drag `frontend/` folder or use CLI.
- **GitHub Pages**: Push `frontend/` to `gh-pages` branch.

### Backend + Database
- **Render/Heroku**: Deploy `backend/` with MongoDB Atlas (free tier).
- Update MongoDB URI in `server.js` for production.

### Full-Stack Example
- Frontend: Vercel
- Backend: Render → CORS origins: `https://your-frontend.vercel.app`

## 🔍 Scripts (package.json)
```json
{
  \"scripts\": {
    \"dev\": \"node backend/server.js\",
    \"start\": \"node backend/server.js\"
  }
}
```
*(Suggested addition - edit package.json if desired)*

## 📞 Contact
- **Email**: shudhanshu.webdev23@gmail.com
- **GitHub**: [shudhanshu725](https://github.com/shudhanshu725)
- **LinkedIn**: [Add your profile](https://linkedin.com/in/yourprofile)

Submit via the website contact form!

## 📄 License
This project is [ISC](LICENSE) licensed.

---

⭐ **Star the repo if you like it!** ⭐  
© 2024 Shudhanshu Mishra. Built with ❤️ using modern web tech.

