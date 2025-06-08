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
├── index.html # Root HTML
├── styles/ # Custom CSS (Tailwind extensions)
│ └── custom.css
├── scripts/ # JavaScript logic
│ ├── firebase.js # Firebase config
│ ├── main.js # Auth state + init
│ ├── router.js # Page routing
│ └── components/
│ ├── sidebar.js # Sidebar navigation
│ └── topbar.js # Topbar layout
├── pages/ # Auth and page views
│ ├── login.js
│ ├── addUser.js
│ └── dashboard.js
├── images/ # Assets like logo and background
├── README.md


## Website Previeew 
https://tall-paint-eclipse.glitch.me/

