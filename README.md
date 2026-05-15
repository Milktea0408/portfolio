# Portfolio

A personal portfolio website built with React, Vite, and Tailwind CSS. It includes a ```Home``` page with featured projects and tech stack, and dedicated ```About``` and ```Contact``` pages.

## Features

- Responsive portfolio with routed pages
- Home page with:
  - Introduction
  - Personal projects section
  - Technical skills section
- About page with bio and interests
- Contact page with direct links and a contact form
- Reusable navigation and footer components
- Social icons for GitHub, LinkedIn, and email
- Tailwind-based styling with custom typography and colors

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- ESLint
- EmailJS
- Lucide React

## Running the application

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Project Structure

```text
personal_website/
├── public/
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── bash.svg
│   │   ├── bootstrap.svg
│   │   ├── c_programming.svg
│   │   ├── css.svg
│   │   ├── docker.svg
│   │   ├── fastapi.svg
│   │   ├── favicon.svg
│   │   ├── git.svg
│   │   ├── html5.svg
│   │   ├── javascript.svg
│   │   ├── java.svg
│   │   ├── materialui.svg
│   │   ├── nodejs.svg
│   │   ├── postgresql.svg
│   │   ├── python.svg
│   │   ├── react.svg
│   │   ├── tailwind.svg
│   │   ├── typescript.svg
│   │   ├── temp_avatar.png
│   │   └── default_project_image.jpg
│   ├── components/
│   │   ├── home/
│   │   │   ├── ProjectsSection.jsx
│   │   │   └── TechStack.jsx
│   │   ├── icons/
│   │   │   ├── EmailIcon.jsx
│   │   │   ├── GithubIcon.jsx
│   │   │   └── LinkedInIcon.jsx
│   │   └── layout/
│   │       ├── Footer.jsx
│   │       └── Navbar.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Pages.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── tailwind.css
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE.md
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Routes

| Route | Home |
|---|---|
| ```\``` | Home |
| ```\home``` | Home |
| ```\about``` | About |
| ```\contact``` | Contact |

## License

The [MIT License](LICENSE.md) is used for this project