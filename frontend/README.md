
## 📘 `frontend/setup.md` — Frontend Setup Guide (React)

----
## ✅ Prerequisites

* [Node.js (v16+ recommended)](https://nodejs.org/)
* npm (comes with Node)

---

## 📁 Project Structure (Frontend Only)

```
note-agent/
└── frontend/
    ├── src/
    ├── public/
    ├── package.json
    ├── .env.local
    └── setup.md
```

---

## 🔁 1. Clone the Repository

```bash
git clone https://github.com/0102ayush/note-agent.git
cd note-agent/frontend
```

---

## 📦 2. Install Dependencies

```bash
npm install
```

---

## 🛠 3. Set Up Environment Variables

Create a `.env.local` file:

```bash
cp .env.example .env.local
```

Make sure this line is present:

```env
REACT_APP_API_BASE_URL=http://localhost:8000
```

> 🧠 This tells the frontend where to send API requests (your backend must be running at this address).

---

## ▶️ 4. Start the Development Server

```bash
npm start
```

Your app will open automatically at:

```
http://localhost:3000
```

---

## 🧪 5. Test the App

* Upload an audio file
* See the summary screen
* Try searching transcript and exporting notes

---

## 🛡 .env Handling

| File           | Purpose                                    |
| -------------- | ------------------------------------------ |
| `.env.local`   | Developer-specific config (ignored by Git) |
| `.env.example` | Template included in repo for quick setup  |

---

## 🚨 Common Issues

| Problem                   | Fix                                         |
| ------------------------- | ------------------------------------------- |
| API not connecting        | Make sure backend is running on port `8000` |
| `.env.local` not detected | Restart `npm start` after changes           |
| Upload fails              | Ensure backend `/upload` route works        |

---
