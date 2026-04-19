```markdown
# 🔐 AuthApp – Flask Authentication System

![Flask](https://img.shields.io/badge/Flask-2.3.3-000000?style=flat&logo=flask&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.10+-blue?style=flat&logo=python&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-3-003B57?style=flat&logo=sqlite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Deployment](https://img.shields.io/badge/Deployed-Render-46E3B7?style=flat&logo=render&logoColor=white)
```
A fully functional, secure, and beautifully designed authentication web application built with **Flask**, **SQLite**, and vanilla **HTML/CSS/JS**.  
It features user signup, login, a personalized dashboard, and is deployed live for demonstration.



## ✨ Features

### 🔒 Authentication & Security
- **User Registration** with username, email, and password
- **Secure Password Hashing** using Werkzeug
- **Login** with username or email
- **Session Management** – users stay logged in across pages
- **Protected Routes** – dashboard only accessible when authenticated
- **Logout** functionality

### 📋 User Dashboard
- Personalized welcome message with avatar (first letter of username)
- Member since date (from database timestamp)
- Activity feed showing account creation and status
- Quick action buttons (Settings, Logout)
- Responsive statistics cards (customizable)

### 🎨 Modern UI/UX
- **Glassmorphism design** with blurred backgrounds and smooth shadows
- Fully responsive (mobile‑first approach)
- Smooth animations and hover effects
- Password strength meter (real‑time feedback on signup)
- Clean, accessible forms with validation

### ⚙️ Backend & Database
- **SQLite** database (lightweight, file‑based)
- Automatic table creation on first run
- `created_at` timestamp for each user
- Database connection management with `sqlite3.Row` for dictionary‑like rows

---

## 🛠️ Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| **Backend**  | Flask (Python)                      |
| **Database** | SQLite3                             |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla)   |
| **Security** | Werkzeug (password hashing)         |
| **Deployment** | Render (or any WSGI‑compatible host) |

---

## 📁 Project Structure

```
flask-auth-app/
│
├── app.py                  # Flask application entry point
├── requirements.txt        # Python dependencies
├── database.db             # SQLite database (auto‑generated)
│
├── templates/              # HTML templates (Jinja2)
│   ├── base.html           # Base layout with navbar & alerts
│   ├── index.html          # Landing page
│   ├── signup.html         # Registration form
│   ├── login.html          # Login form
│   └── dashboard.html      # User dashboard
│
├── static/                 # Static assets
│   ├── css/
│   │   └── style.css       # Global styles (glassmorphism theme)
│   └── js/
│       └── script.js       # Password strength & client‑side validation
│
└── README.md               # You are here
```

---

## 🚀 Getting Started (Local Development)

Follow these instructions to run the project on your local machine.

### Prerequisites
- Python 3.10 or higher
- pip (Python package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/flask-auth-app.git
   cd flask-auth-app
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Open your browser** and navigate to:
   ```
   http://127.0.0.1:5000
   ```

> **Note:** The `database.db` file will be created automatically on the first run.

---

## ☁️ Deployment

This project is ready to be deployed on any platform that supports Python WSGI applications. Below are instructions for **Render** (free tier).

### Deploy to Render

1. Push your code to a GitHub repository.
2. Log in to [Render](https://render.com) and click **New +** → **Web Service**.
3. Connect your GitHub repository.
4. Configure the service:
   - **Name**: `flask-auth-app` (or your choice)
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
5. Add an environment variable:
   - `SECRET_KEY` = *(generate a random string, e.g., `your-super-secret-key`)*
6. Click **Create Web Service**.

Your app will be live at `https://your-service-name.onrender.com` in a few minutes.

> **⚠️ Important about SQLite on Render:**  
> Render’s filesystem is ephemeral – the database will reset on each deploy. For production persistence, consider migrating to **PostgreSQL** (Render offers a free tier) or use **Supabase** / **Neon**. For a demo, the ephemeral database is acceptable.

---

## 🧪 Testing the App

1. Visit the homepage.
2. Click **Sign Up** and create an account.
3. You will be redirected to the login page. Enter your credentials.
4. Upon successful login, you'll land on the dashboard.
5. The dashboard displays your username, email, member‑since date, and an activity feed.
6. Click **Logout** to end the session.

---

## 🔮 Future Enhancements

Ideas to extend this project:

- [ ] Email verification (send confirmation links)
- [ ] Password reset functionality
- [ ] Profile picture upload (using Flask-Uploads)
- [ ] Two‑factor authentication (2FA)
- [ ] Admin panel for user management
- [ ] Add more interactive dashboard widgets (to‑do list, notes)
- [ ] Migrate to PostgreSQL for production persistence

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/awesome-feature`).
3. Commit your changes (`git commit -m 'Add some awesome feature'`).
4. Push to the branch (`git push origin feature/awesome-feature`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- [Flask Documentation](https://flask.palletsprojects.com/)
- [Werkzeug](https://werkzeug.palletsprojects.com/)
- [Inter Font](https://fonts.google.com/specimen/Inter) (Google Fonts)
- Glassmorphism inspiration from modern UI trends

---

## 📬 Contact

**Pruthvi R**  
- GitHub: [github.com/Spidey173](https://github.com/Spidey173)  
- Email: pruthvi.r0006@gmail.com 

---

⭐ **If you find this project useful, please give it a star on GitHub!** ⭐