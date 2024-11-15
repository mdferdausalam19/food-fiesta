# 🍲 Food Fiesta

Welcome to **Food Fiesta** – a dynamic and engaging web application designed for food enthusiasts to explore, plan, and track recipes seamlessly.

## 🌐 Live Website

[Visit Food Fiesta](https://food-fiesta-web.vercel.app/)

## 📂 Repository

[GitHub Repository](https://github.com/mdferdausalam19/food-fiesta)

## 🔍 Overview

This website is developed using **Vite**, **React**, **Tailwind CSS**, **DaisyUI**, and additional packages such as **react-icons** and **react-toastify**. The site is fully responsive, catering to small, medium, and large devices. A JSON file in the public folder serves as a mock API to provide recipe data.

## ✨ Key Features

- **Responsive Navbar**: 🌟 A user-friendly navigation bar that adapts across different screen sizes.
- **Hero Banner**: 🖼️ Includes interactive demo buttons for showcasing sample interactions.
- **Dynamic Recipe Display**: 🍽️ Fetches and displays detailed recipes, including ingredients, preparation steps, and estimated cooking time from a mock API.
- **"Want to Cook" Button**: 📋 Allows users to add recipes to a list, displaying the name, time, and calories in a table format. Each entry includes a 'Preparing' button. If the user clicks the 'Want to Cook' button for a recipe already added, an alert toast notification informs them that "This item already exists!".
- **"Preparing" Button**: 🔄 Moves a recipe from the "Want to Cook" list to the "Currently Cooking" list when clicked.
- **Recipe Sidebar**: 🗂️ Categorized display for easy navigation and quick access.

## 🗂️ Folder Structure

```
public
  └── images
  └── recipes.json
src
  └── components
      └── Banner
          └── Banner.jsx
      └── CardContainer
          └── CardContainer.jsx
      └── CardSidebarContainer
          └── CardSidebarContainer.jsx
      └── CurrentlyCooking
          └── CurrentlyCooking.jsx
      └── Navbar
          └── Navbar.jsx
      └── OurRecipes
          └── OurRecipes.jsx
      └── Sidebar
          └── Sidebar.jsx
      └── WantToCook
          └── WantToCook.jsx
  └── App.jsx
  └── index.css
  └── main.jsx 
.gitignore
eslint.config.js
index.html
package-lock.json
package.json
postcss.config.js
README.md
tailwind.config.js
vite.config.js
```

## 🛠️ Technical Details

- **No Dynamic Routes**: This project does not use dynamic routing.
- **Static API**: Recipes are sourced from a JSON file stored in the `public` folder.
- **Libraries & Packages Used**:
  - **Vite** for fast development build.
  - **React** for a component-based structure.
  - **Tailwind CSS** & **DaisyUI** for efficient styling.
  - **react-icons** for scalable icon sets.
  - **react-toastify** for user-friendly notifications.

## 🚀 Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mdferdausalam19/food-fiesta.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd food-fiesta
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. **Visit the app in your browser**:
   Open [http://localhost:5173](http://localhost:5173) to see the app in action.

