# Fuwa Fuwa Admin Panel
This project is a web-based administrative dashboard created as our final project for the **Elective course**. The panel simulates the internal system of a **bread manufacturing company**, allowing administrators to log in, manage data, and navigate through a static but structured interface.

---

## Project Summary

The **Fuwa Fuwa Admin Panel** is a front-end web application that provides a foundational structure for an internal admin system. While it's primarily static, the project demonstrates key frontend development principles, including:

- Modular JavaScript structure
- Responsive UI design using Tailwind CSS
- Integration with **Firebase Authentication** and **Firestore** for basic login and signup functionality

---

## Features

### Authentication
- User **sign-up** and **login** implemented via **Firebase Authentication**
- Password confirmation on registration
- Firebase Firestore used to store user profile data (name, email, UID, timestamp)
- Auto-logout and login status detection

### Dashboard Layout
- Fully responsive layout with **sidebar**, **topbar**, and **main content area**
- Sidebar with navigation links like:
  - Dashboard
  - Assets
  - Users
  - Departments
  - Requests, Reports, etc.
- Topbar includes current section title and logout button

### User Interface
- Built with **Tailwind CSS** for a clean and responsive UI
- Custom design motif: **warm orange-red to brown palette** representing toasted bread, bakery warmth, and professionalism
- Includes background image with **blur/fade effect** for login/signup pages
- Fully mobile-adaptive layout with graceful fallbacks

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Markup structure |
| **Vanilla JavaScript (ES Modules)** | Logic, routing, and Firebase interaction |
| **Tailwind CSS** | Styling and layout |
| **Firebase** | Auth and Firestore for user data |

---

## Folder Structure Overview
fuwa-fuwa-admin/
├── index.html                # Root HTML file
├── styles/                   # Custom CSS (Tailwind extensions)
│   └── custom.css
├── scripts/                  # JavaScript logic
│   ├── firebase.js           # Firebase config
│   ├── main.js               # App initialization & auth state management
│   ├── router.js             # Page routing
│   └── components/           # Reusable UI components
│       ├── sidebar.js        # Sidebar navigation
│       └── topbar.js         # Topbar layout
├── pages/                    # Page-specific logic and views
│   ├── login.js              # Login page
│   ├── addUser.js            # Sign-up page
│   └── dashboard.js          # Dashboard page
├── images/                   # Static image assets (logo, backgrounds, etc.)
│   └── fuwafuwa-logo.png     # Logo example
│   └── fuwafuwa-bg.png       # Background image
├── README.md                 # Project documentation



## Website Previeew 
https://tall-paint-eclipse.glitch.me/


## Notes

This is a frontend-focused mock application. It does not include backend validation, role management, or real asset tracking — just enough for demonstrating login, routing, and UI layout as part of our final submission.

---


