# 📝 Node.js & Express Guestbook Application

A simple, in-memory guestbook web application built with **Node.js**, **Express**, and **EJS** templating.  
This project serves as a foundational exercise in building a full-stack application with a non-persistent data store.

---

## 🚀 Features

- ✍️ **Create Entries:** Users can submit their name and message through a simple web form.  
- 📜 **List Entries:** All submitted messages are displayed on the homepage.  
- 🕒 **Reverse Chronological Order:** Newest messages appear at the top.  
- ✅ **Server-Side Validation:** Prevents empty “Name” or “Message” fields.  
- 💾 **In-Memory Storage:** Entries are stored in a global array on the server (reset on restart).  
- 🎨 **Styled UI:** Clean, modern CSS served from the `public` directory.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-------------|----------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Web framework for routing and middleware |
| **EJS** | View engine for dynamic HTML rendering |
| **HTML5 & CSS3** | Structure and styling |

---

## 📁 Project Structure

```
nodejs-guestbook/
├── public/
│   └── css/
│       └── style.css       # All application styles
├── routes/
│   └── guestbook.js        # Handles all GET and POST logic
├── views/
│   └── guestbook.ejs       # Main HTML template
├── .gitignore              # Ignores node_modules
├── app.js                  # Main server file (setup, middleware, start)
├── package.json            # Metadata and dependencies
└── README.md               # You are here!
```

---

## ⚙️ How to Run

### 🧩 Prerequisites
You need to have **Node.js** (which includes npm) installed on your system.

---

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/nefekzlky/nodejs-guestbook.git
cd nodejs-guestbook
```

---

### 2️⃣ Install Dependencies
```bash
npm install
```

---

### 3️⃣ Run the Server
```bash
node app.js
```

After starting, you should see:
```
The server running on http://localhost:3000
```

---

### 4️⃣ Open in Browser
Visit the application at:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 🧠 Notes

- All guestbook entries are **temporary** — restarting the server clears them.  
- This project is intentionally simple for **educational purposes**.  
- Great starting point to later integrate **MongoDB**, **SQLite**, or other databases for persistence.

---

## 🔗 Repository

**GitHub:** [nefekzlky/nodejs-guestbook](https://github.com/nefekzlky/nodejs-guestbook)

---
