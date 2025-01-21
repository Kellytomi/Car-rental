# Luxury Car Rental Website

A modern, responsive car rental website built with React, Vite, and TailwindCSS featuring elegant UI design and smooth animations.

## Features

- Responsive design that works on mobile and desktop
- Modern glass-morphism UI elements
- Animated wave backgrounds and hover effects
- Dynamic pricing plans with monthly/annual toggle
- React Router navigation
- Mobile-friendly navigation menu

## Tech Stack

- React 18
- Vite
- TailwindCSS
- React Router DOM
- Lucide React (for icons)

## Getting Started

1. Install dependencies:
    ```sh
    npm install
    ```

2. Run development server:
    ```sh
    npm run dev
    ```

3. Build for production:
    ```sh
    npm run build
    ```

## Project Structure

- [src](http://_vscodecontentref_/1) - Source code
  - [App.jsx](http://_vscodecontentref_/2) - Main application component with routing
  - [Pricing.jsx](http://_vscodecontentref_/3) - Pricing plans page component
  - [styles.css](http://_vscodecontentref_/4) - Custom TailwindCSS styles
  - [index.css](http://_vscodecontentref_/5) - Global styles
  - [main.jsx](http://_vscodecontentref_/6) - Application entry point

## Styling

The project uses TailwindCSS for styling with custom configurations:
- Custom animations (wave, float effects)
- Montserrat font integration
- Dark mode optimized
- Glass-morphism effects

## Development

- ESLint is configured for React development
- Hot Module Replacement (HMR) enabled
- PostCSS with autoprefixer for better browser compatibility

## Deployment

The project includes a Netlify [_redirects](http://_vscodecontentref_/7) file for SPA routing support. Build the project using:

```sh
npm run build
