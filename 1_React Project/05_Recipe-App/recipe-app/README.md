# Recipe App Pro 🍽️

Welcome to **Recipe App Pro**, a modern and user-friendly web application built with React for food enthusiasts to discover, explore, their favorite recipes! This project integrates with the Edamam API to fetch real-time recipe data, features a sleek interface styled with Styled Components, and includes client-side routing for seamless navigation.

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

- **Recipe Search**: Search for recipes by keywords or meal types (e.g., breakfast, lunch, dinner).
- **Recipe Details**: View detailed information about each recipe, including ingredients and instructions.
- **Responsive Design**: Fully responsive UI styled with Styled Components for a consistent experience across devices.
- **Private Routes**: Protected routes for authenticated users to access personalized features.
- **Navigation**: Intuitive navigation with a custom navbar for easy access to all pages.
- **Modern UI**: Clean and visually appealing interface with reusable components.

## Screenshot

![Recipe App Pro Screenshot](./r_app-gif.gif)

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router**: For client-side routing and navigation.
- **Axios**: For making API requests to fetch recipe data from the Edamam API.
- **Styled Components**: For styling the application with a component-scoped CSS-in-JS approach.
- **React Scripts**: For project setup and build tools.
- **Testing Libraries**: Jest, React Testing Library for unit and integration tests.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   - Create a `.env` file in the root directory.
   - Add your Edamam API credentials (API ID and API Key):
     ```
     REACT_APP_API_ID=your_api_id_here
     REACT_APP_API_KEY=your_api_key_here
     ```
   - You can obtain these credentials by signing up at [Edamam API](https://developer.edamam.com/).

4. **Run the Application**:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Usage

- **Home Page**: Search for recipes by entering keywords or selecting a meal type.
- **About Page**: Learn more about the application and its features.
- **Recipe Details**: Click on a recipe card to view detailed information.
- **Login/Register**: Access personalized features by logging in or creating an account (authentication is mocked in the provided code).
- **Navigation**: Use the navbar to switch between pages seamlessly.

## Project Structure

```
🍽️ Recipe App
├── package-lock.json
├── package.json
├── public
│   ├── assets
│   │   ├── coding.svg
│   │   ├── const.png
│   │   ├── cw.svg
│   │   ├── default-image.jpg
│   │   ├── design.svg
│   │   ├── diet.svg
│   │   ├── growing-up-man.svg
│   │   ├── growing-up-woman.svg
│   │   ├── home.svg
│   │   ├── loading.gif
│   │   ├── logo.png
│   │   ├── mail.svg
│   │   ├── man.svg
│   │   ├── map.svg
│   │   ├── meal.svg
│   │   ├── meal2.svg
│   │   ├── padlock.svg
│   │   ├── phone.svg
│   │   └── woman.svg
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── r_app-img.png
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── components
    │   ├── button
    │   ├── cards
    │   ├── globalStyles
    │   ├── header
    │   └── navbar
    ├── index.css
    ├── index.js
    ├── pages
    │   ├── about
    │   ├── detail
    │   ├── home
    │   ├── login
    │   └── register
    └── router
    ├── AppRouter.jsx
    └── PrivateRouter.js


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

Happy cooking! 🥗 If you have any questions or feedback, feel free to open an issue or contact the maintainers.
