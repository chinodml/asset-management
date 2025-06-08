
# 🥖 Fuwa Fuwa Admin Panel

This project is a web-based administrative dashboard created as our final project for the **Elective course**. The panel simulates the internal system of a **bread manufacturing company**, allowing administrators to log in, manage data, and navigate through a static but structured interface.

---

## 🚀 Project Summary

The **Fuwa Fuwa Admin Panel** is a front-end web application that provides a foundational structure for an internal admin system. While it's primarily static, the project demonstrates key frontend development principles, including:

- Modular JavaScript structure
- Responsive UI design using Tailwind CSS
- Integration with **Firebase Authentication** and **Firestore** for basic login and signup functionality

---

## 🔐 Features

### ✅ Authentication
- User **sign-up** and **login** implemented via **Firebase Authentication**
- Password confirmation on registration
- Firebase Firestore used to store user profile data (name, email, UID, timestamp)
- Auto-logout and login status detection

### 🖥️ Dashboard Layout
- Fully responsive layout with **sidebar**, **topbar**, and **main content area**
- Sidebar with navigation links like:
  - Dashboard
  - Assets
  - Users
  - Departments
  - Requests, Reports, etc.
- Topbar includes current section title and logout button

### 🎨 User Interface
- Built with **Tailwind CSS** for a clean and responsive UI
- Custom design motif: **warm orange-red to brown palette** representing toasted bread, bakery warmth, and professionalism
- Includes background image with **blur/fade effect** for login/signup pages
- Fully mobile-adaptive layout with graceful fallbacks

---

## 🧰 Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Markup structure |
| **Vanilla JavaScript (ES Modules)** | Logic, routing, and Firebase interaction |
| **Tailwind CSS** | Styling and layout |
| **Firebase** | Auth and Firestore for user data |

---

## 📁 Folder Structure Overview
=======
# Fuwa Fuwa Admin Panel

This is a simple web-based admin panel created as a final project for our Elective subject.

## Overview

The **Fuwa Fuwa Admin Panel** is designed for managing basic admin tasks in a bread manufacturing company. It features a clean, responsive interface built using **HTML**, **JavaScript**, and **Tailwind CSS**.

The goal of the project was to create a minimal but functional system with user authentication and a basic dashboard structure.

## Features

- **Login & Sign-Up** functionality using **Firebase Authentication**
- Firebase **Firestore** integration for storing user information
- A simple **static dashboard** with a sidebar and topbar layout
- Responsive and mobile-friendly design using **Tailwind CSS**
- Warm, bakery-themed UI using a custom orange-brown motif

## Tech Stack

- **HTML5**
- **Vanilla JavaScript (ES Modules)**
- **Tailwind CSS**
- **Firebase (Auth + Firestore)**

## Project Structure

- `index.html` – main page
- `scripts/` – JS logic (auth, routing, UI components)
- `pages/` – login, signup, and dashboard views
- `styles/` – custom styles
- `images/` – logo and background assets

## Notes

This is a frontend-focused mock application. It does not include backend validation, role management, or real asset tracking — just enough for demonstrating login, routing, and UI layout as part of our final submission.

---


