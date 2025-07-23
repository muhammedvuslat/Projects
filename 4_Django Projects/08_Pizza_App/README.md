# Pizza Order App 🍕

Welcome to **Pizza Order App**, a full-stack web application built with Django for pizza lovers to browse, order, and manage their pizza orders! This project features a robust backend with Django, a SQLite database, and a user-friendly frontend for a seamless ordering experience. Users can view pizzas, place orders, update or delete them, and manage their accounts with authentication.

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

- **Browse Pizzas**: View a list of available pizzas with their toppings, prices, and images.
- **Order Management**: Place new orders, update existing ones, or delete orders.
- **User Authentication**: Secure login and registration for personalized order tracking.
- **Responsive Design**: Frontend templates designed for a smooth experience across devices.
- **Dynamic Forms**: Easily select pizza size and quantity using Django forms.
- **Media Support**: Upload and display pizza images using Django’s media handling.

## Screenshot

![Pizza Order App Screenshot](./p_app-gif.gif)

## Technologies Used

- **Django**: Backend framework for building the application and handling authentication.
- **Python**: Programming language for the backend logic.
- **SQLite**: Lightweight database for storing pizza, order, and user data.
- **Pillow**: For handling image uploads (e.g., pizza images).
- **Python Decouple**: For managing environment variables securely.
- **HTML/CSS**: For frontend templates and styling.
- **Django Templates**: For rendering dynamic content on the frontend.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/pizza-order-app.git
   cd pizza-order-app
   ```

2. **Create a Virtual Environment**:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Set Up Environment Variables**:

   - Create a `.env` file in the root directory.
   - Add your Django secret key:
     ```
     SECRET_KEY=your_secret_key_here
     ```
   - Generate a secure key or use a tool like `django.core.management.utils.get_random_secret_key()`.

5. **Apply Migrations**:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Create a Superuser (Optional)**:

   ```bash
   python manage.py createsuperuser
   ```

   This allows you to access the Django admin panel at `/admin`.

7. **Run the Application**:
   ```bash
   python manage.py runserver
   ```
   The app will be available at `http://localhost:8000`.

## Usage

- **Home Page**: Welcome page with an overview of the application.
- **Pizzas Page**: Browse all available pizzas with their details.
- **Order Page**: Select a pizza, choose size and quantity, and place an order (requires login).
- **My Orders**: View, update, or delete your orders (accessible to authenticated users).
- **Admin Panel**: Manage pizzas, toppings, and orders at `http://localhost:8000/admin` (superuser access required).

## Project Structure

```
🍕 Pizza Order App
├── db.sqlite3
├── main
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── manage.py
├── media
│   └── pizza_pics
│       ├── favorite.jpeg
│       ├── mahroom_pizza.jpeg
│       ├── margarita.jpeg
│       └── superos.jpeg
├── pizzas
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── forms.py
│   ├── migrations
│   │   ├── __init__.py
│   │   ├── 0001_initial.py
│   │   ├── 0002_alter_order_size.py
│   │   └── 0003_rename_quantiy_order_quantity.py
│   ├── models.py
│   ├── templates
│   │   └── pizzas
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── README.md
├── requirements.txt
├── static
│   ├── css
│   │   └── style.css
│   ├── images
│   │   ├── nav-logo.png
│   │   └── pizzaback.jpg
│   └── js
│       └── timeout.js
└── users
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── forms.py
    ├── migrations
    │   └── __init__.py
    ├── models.py
    ├── templates
    │   └── users
    ├── tests.py
    ├── urls.py
    └── views.py

```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a Pull Request.

Please ensure your code follows Django’s best practices and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy your pizza! 🍕 If you have any questions or feedback, feel free to open an issue or contact the maintainers.
