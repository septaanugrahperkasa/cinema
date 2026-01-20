# React Movie Gallery

A web-based movie gallery application built with React and Vite, consuming data from The Movie Database (TMDB) API. The application provides movie listings and search functionality using a clean and structured frontend architecture.

---

## Technology Stack

### Frontend
- React 18
- Vite
- React Router DOM

### Styling & UI
- Bootstrap 5
- React Bootstrap
- Bootstrap Icons

### Carousel & Slider
- React Slick
- Slick Carousel
- Swiper

### Development Tools
- ESLint
- Vite Plugin React

---

## API Configuration

This application integrates with **The Movie Database (TMDB) API**.

**Base URL**
```

[https://api.themoviedb.org/3](https://api.themoviedb.org/3)

````

### Available Services
- Fetch popular movies
- Fetch top-rated movies
- Search movies by keyword

Example service implementation:
```js
const API_KEY = 'YOUR_API_KEY'
const BASE_URL = 'https://api.themoviedb.org/3'
````

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
cinema/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## Notes

* API Key should be stored securely using environment variables.
* This project uses client-side rendering with React Router.

---

## License

This project is intended for development and educational purposes.