
# FilterFlex Frontend

FilterFlex is a web application built with React, Vite, and Tailwind CSS. It integrates Firebase for backend services and uses Flowbite for UI components. React Router is employed for navigation, and ESLint is used for code linting.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building the Project](#building-the-project)
- [Previewing the Build](#previewing-the-build)
- [Linting](#linting)
- [Additional Configuration](#additional-configuration)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v14.x or later)
- **npm** (comes with Node.js)
- **Git** (optional, for cloning)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/filterflex.git
   cd filterflex` 

2.  **Install Dependencies**
    `npm install` 
## Running the Project

3.  **Start the Development Server**
    `npm run dev` 
    
    Open `http://localhost:5173/` in your browser to view the app.
    

## Building the Project

4.  **Build for Production**
    `npm run build` 
    
    The production build will be in the `dist` directory.

## Previewing the Build

5.  **Preview the Production Build**
    `npm run preview` 
    
    This serves the content from `dist` for local testing.
    

## Linting

6.  **Lint the Code**
    `npm run lint` 
    
    This checks the code for errors and stylistic issues using ESLint.
    

## Additional Configuration

-   **Firebase Setup**: Add your Firebase configuration in the project. Refer to Firebase documentation for details on how to integrate it.
    
-   **Environment Variables**: Create a `.env` file at the root of the project with any required variables. Example:
    
    `VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain` 
    

## Troubleshooting

-   **Reinstall Dependencies**: If issues arise, try `npm install` again.
-   **Check Node & npm Versions**: Ensure they are up to date.
-   **Error Logs**: Review terminal output for error details.
