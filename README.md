# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




# TaskManager App

A responsive React application built with **React, Vite, and Tailwind CSS**.  
Implements task management, API data fetching, light/dark mode, pagination, and responsive design.

## Features

- **Task Management**  
  Add, delete, complete, and filter tasks (All / Active / Completed).  
  Tasks are persisted in `localStorage`.

- **API Integration**  
  Fetches posts from JSONPlaceholder API with search and pagination.

- **Theme Switcher**  
  Toggle between light and dark mode; theme persists across sessions.

- **Responsive Design**  
  Works seamlessly on mobile, tablet, and desktop.

- **Reusable Components**  
  Includes Button, Card, Navbar, Footer, Layout, and Task components.


## Setup Instructions

1. Clone your repository:
```bash
git clone <your-repo-url>
cd <repo-folder>
Install dependencies:

bash
Copy code
npm install
Start development server:

bash
Copy code
npm run dev
Open the app in your browser at http://localhost:5173 (or the URL displayed in terminal).

Deployment
Deployed via [GitHub Pages]:
[]

Tech Stack
React 18 + Vite

Tailwind CSS

React Router

JavaScript (ES6+)

Screenshots
Home Page(src\screenshots\Home.png)

Task Page(src\screenshots\Task.png)

ApiData Page(src\screenshots\Api.png)




