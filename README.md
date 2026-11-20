# Ravi Kumar — Personal Portfolio Website

A modern, high-performance, and responsive personal developer portfolio website built with pure semantic **HTML5**, **CSS3**, and vanilla **JavaScript**. Crafted with a clean SaaS aesthetic, fluid animations, hardware-accelerated GPU transitions, and a complete Dark/Light mode system.

---

## 🌟 Live Demo & Profiles

- **GitHub Profile**: [@iamravikumar-hq](https://github.com/iamravikumar-hq)
- **LinkedIn**: [ravi-kumar-in](https://www.linkedin.com/in/ravi-kumar-in)
- **Direct Email**: [iamravikumar.hq@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=iamravikumar.hq@gmail.com&su=Hello%20Ravi%20-%20Portfolio%20Inquiry)

---

## 🚀 Key Features

### 1. 🌓 Seamless Dark & Light Mode
- Instant theme toggle button in the navbar with animated Sun/Moon icons.
- Persisted across page refreshes and visits via `localStorage`.
- Zero Flash of Unstyled Theme (FOUC) powered by an early `<head>` script evaluator.
- Cohesive color palettes: warm peach & crisp cream for light mode; deep slate navy for dark mode.

### 2. ⚡ Silky Smooth & 60fps Performance
- Hardware-accelerated GPU transforms (`translate3d`) for all cursor movements and transitions.
- Zero layout reflow/repaint lag on mousemove or scroll.
- Staggered `IntersectionObserver` scroll reveal with auto-unobserve for minimal CPU/memory footprint.

### 3. 🎯 Precision Custom Cursor
- Dual-element pointer: responsive instant dot with a smooth trailing ring.
- Automatically shrinks into a tight, focused pointer ring (22px) when hovering links, buttons, and interactive cards.
- Graceful fallback to default native cursor on touch and mobile devices.

### 4. 💻 Developer Identity Badge
- Terminal-inspired window header (`ravi-kumar.cpp`) with macOS-style control dots.
- Live pulsating "Active Learner" status indicator.
- Student credentials: B.Tech Computer Science at **KIET Group of Institutions, Ghaziabad**.
- Core competency tags: `C / C++`, `DSA`, `Frontend Engineering`.

### 5. 📬 Live Contact Form & Direct Gmail
- Active contact form integrated with **FormSubmit AJAX** delivering messages straight to `iamravikumar.hq@gmail.com`.
- Loading spinner state and animated confirmation response.
- One-click **Direct Gmail Compose** link opening Gmail directly with pre-filled recipient.

### 6. 📄 Dedicated In-Progress Pages
- **Resume Page (`resume.html`)**: Informs visitors and recruiters that the resume is currently being updated with latest coursework and technical skills.
- **Experience Page (`experience.html`)**: Details ongoing academic learning and upcoming milestone experiences.

---

## 📂 Project Structure

```text
Portfolio/
├── index.html          # Main landing page (Hero, About, Toolkit, Projects, Contact Teaser)
├── projects.html       # Full Projects showcase page
├── experience.html     # Experience & journey page
├── resume.html         # Curriculum Vitae & Resume status page
├── contact.html        # Contact page with live form and Gmail links
├── style.css           # Complete responsive stylesheet (Light/Dark design system)
├── script.js           # Interactive behaviors (Cursor, Theme, FormSubmit, Modals)
├── README.md           # Documentation
└── assets/
    ├── fonts/          # Shantell Sans & Permanent Marker webfonts
    ├── gifs/           # SVGs and animated rocket illustration
    ├── socialicons/    # LinkedIn, GitHub, Gmail vector icons
    ├── techstackicon/  # C, C++, HTML5, CSS3, JS, Git, GitHub, Vercel icons
    └── templates/      # Project screenshot preview templates
```

---

## 🛠️ Tech Stack

- **Core**: HTML5, CSS3 (Custom Variables, Flexbox, CSS Grid), Vanilla JavaScript (ES6+)
- **Typography**: Shantell Sans, Permanent Marker
- **Email Service**: FormSubmit AJAX API + Direct Gmail URL Handler
- **Hosting**: Compatible with Vercel, Netlify, GitHub Pages, or any static host

---

## 💻 Local Setup & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iamravikumar-hq/portfolio.git
   cd portfolio
   ```

2. **Run locally:**
   Open `index.html` directly in any web browser, or launch using a local development server:
   - **VS Code**: Right click `index.html` → *Open with Live Server*
   - **Node.js**:
     ```bash
     npx serve .
     ```
   - **Python**:
     ```bash
     python -m http.server 3000
     ```

3. Open `http://localhost:3000` in your browser.

---

## 👤 Author

**Ravi Kumar**
- B.Tech in Computer Science & Engineering
- **KIET Group of Institutions, Ghaziabad**
- GitHub: [@iamravikumar-hq](https://github.com/iamravikumar-hq)
- LinkedIn: [in/ravi-kumar-in](https://www.linkedin.com/in/ravi-kumar-in)
- Email: [iamravikumar.hq@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=iamravikumar.hq@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
