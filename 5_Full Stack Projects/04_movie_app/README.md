# Movie App Pro 🎬

Welcome to **Movie App Pro**, a modern and responsive web application built with React for movie enthusiasts to browse, discover, and manage their favorite films! This project integrates with a movie API to fetch real-time movie data, offers user authentication via Firebase, and provides a seamless user experience with a clean, Tailwind CSS-styled interface.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Browse Movies**: Explore a wide range of movies with detailed information.
- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS for a great experience on all devices.
- **Movie Details**: View in-depth details about each movie, including ratings, genres, and more.
- **Private Routes**: Protected routes for authenticated users to access premium features.
- **Search Functionality**: Easily search for movies by title or genre.
- **Modern UI**: Sleek and intuitive interface with components from Headless UI and Heroicons.

## Screenshot

![Movie App Pro Screenshot](./m_app-giff.gif)

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router**: For client-side routing and navigation.
- **Firebase**: For user authentication and backend services.
- **Axios**: For making API requests to fetch movie data.
- **Tailwind CSS**: For styling the application with a utility-first approach.
- **Headless UI**: For accessible and customizable UI components.
- **Heroicons**: For beautiful, scalable icons.
- **React Scripts**: For project setup and build tools.
- **Testing Libraries**: Jest, React Testing Library for unit and integration tests.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Firebase**:

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add your Firebase configuration to `src/auth/firebase.js`.
   - Enable Firebase Authentication (Email/Password or other providers).

4. **Set Up Environment Variables**:

   - Create a `.env` file in the root directory.
   - Add your movie API key (e.g., TMDB API key):
     ```
     REACT_APP_MOVIE_API_KEY=your_api_key_here
     ```

5. **Run the Application**:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Usage

- **Home Page**: Browse trending movies and search for specific titles.
- **Login/Register**: Create an account or log in to access personalized features.
- **Movie Details**: Click on a movie card to view detailed information.
- **Navigation**: Use the navbar to switch between pages seamlessly.

## Project Structure

```
🎬 Movie App
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.css
│   ├── App.js
│   ├── auth
│   │   └── firebase.js
│   ├── components
│   │   ├── Header.jsx
│   │   ├── MovieCard.jsx
│   │   └── Navbar.jsx
│   ├── context
│   │   └── AuthContext.js
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── MovieDetail.jsx
│   │   └── Register.jsx
│   └── router
│       ├── PrivateRouter.jsx
│       └── router.js
└── tailwind.config.js
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a Pull Request.

Please ensure your code follows the project's coding standards and includes tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy movie browsing! 🍿 If you have any questions or feedback, feel free to open an issue or contact the maintainers.
