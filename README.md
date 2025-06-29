# CodeFlash

🚀 **CodeFlash** is a modern, AI-powered code review and typing test platform. Instantly get expert feedback on your code, improve your skills, and track your progress—all in a beautiful, responsive web app.

---

## ✨ Features
- **AI Code Review:** Get instant, actionable feedback on your code using Google Generative AI.
- **Typing Speed Test:** Measure your coding speed and accuracy with real code snippets.
- **Multi-language Support:** Review and test code in JavaScript, Python, Java, and more.
- **Modern UI:** Clean, responsive design with glassmorphism and vibrant accents.
- **Progress Tracking:** See your WPM, accuracy, and skill level after each test.
- **Best Practices & Insights:** Learn industry standards and get smart suggestions.

---

## 🛠️ Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, Lucide Icons
- **Backend:** Node.js, Express, Google Generative AI API

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/codeflash.git
cd codeflash
```

### 2. Setup the Backend
```bash
cd backend
npm install
```

- Create a `.env` file in the `backend` directory:
  ```env
  GOOGLE_API_KEY=your-google-generative-ai-api-key
  ```
- Start the backend server:
  ```bash
  npm start
  # or
  node server.js
  ```

### 3. Setup the Frontend
```bash
cd ../frontend
npm install
npm run dev
```

- The frontend will run at [http://localhost:5173](http://localhost:5173)
- The backend will run at [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Environment Variables
- `GOOGLE_API_KEY` — Your Google Generative AI API key (get one at [Google AI Studio](https://aistudio.google.com/app/apikey))

---

## 📦 Project Structure
```
CodeFlash/
  backend/      # Node.js/Express backend
  frontend/     # React/Tailwind frontend
```

---

## 🖥️ Usage
- Visit the homepage to:
  - Paste or type your code and get an instant AI-powered review
  - Take a typing test to measure your coding speed and accuracy
  - Explore features and learn best practices

---

## 🤝 Contributing
1. Fork this repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License
[MIT](LICENSE)

---

> Made with ❤️ by the CodeFlash team 