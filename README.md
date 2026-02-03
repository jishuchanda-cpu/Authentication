# 🌈 Rangeen – MERN Authentication & Using AI

A full-stack **MERN authentication project** with a premium UI, role-based access (User/Admin), protected routes, and dashboard user management.

This project is ideal for learning **real-world authentication flows**, **JWT security**, and **React Router protected routing**.

---

## 🚀 Features

### 🔐 Authentication

* User **Registration & Login**
* Password hashing using **bcryptjs**
* Authentication using **JWT (JSON Web Token)**
* Token stored securely in `localStorage`

### 👥 User Roles

* Default role: **user** (on every signup)
* Admin role supported
* Role-based redirection after login:

  * **User → Home Page**
  * **Admin → Dashboard**

### 🛡 Protected Routes

* Home & Dashboard accessible **only when logged in**
* Unauthorized users redirected to Login

### 📊 Admin Dashboard

* View all registered users
* Table view with:

  * Name
  * Email
  * Phone
  * Role
  * Joined Date

### 🎨 UI & UX

* Premium Login & Signup UI
* Smooth page navigation using **react-router-dom**
* Logout option available on Home & Dashboard
* Informational Offers page

---

## 🧱 Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS (custom premium UI)

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* bcryptjs

---

## 📁 Project Structure

### Frontend (`/frontend`)

```
src
 ├── api
 │    └── index.js
 ├── pages
 │    ├── Auth.jsx
 │    ├── Home.jsx
 │    ├── Dashboard.jsx
 │    └── Offers.jsx
 ├── utils
 │    └── auth.js
 ├── App.jsx
 └── main.jsx
```

### Backend (`/backend`)

```
backend
 ├── models
 │    └── User.js
 ├── routes
 │    └── auth.js
 ├── server.js
 └── .env
```

---

## 🔄 Application Flow

1. User registers → role set as `user`
2. User logs in → JWT generated
3. Token saved in browser
4. Based on role:

   * User → Home Page
   * Admin → Dashboard
5. Admin can view all users
6. Logout clears token and redirects to login

---

## 🔐 API Endpoints

### Auth Routes

| Method | Endpoint              | Description            |
| ------ | --------------------- | ---------------------- |
| POST   | `/api/auth/signup`    | Register new user      |
| POST   | `/api/auth/login`     | Login user             |
| GET    | `/api/auth/me`        | Get logged-in user     |
| GET    | `/api/auth/all-users` | Admin: fetch all users |

---

## ⚙️ Environment Variables

Create a `.env` file in backend:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

## ▶️ Run Project Locally

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🔒 Security Highlights

* Passwords hashed with bcrypt
* JWT-based authentication
* Role validation on admin routes
* Protected frontend routes

---

## 📌 Future Improvements

* Refresh token implementation
* Email verification
* Forgot password flow
* Pagination in dashboard
* UI animations

---

## 👨‍💻 Author

**Rangeen MERN Project**
Built with ❤️ for learning full-stack authentication

---

## ⭐ Support

If you like this project, please ⭐ star the repository on GitHub!

Happy Coding 🚀
