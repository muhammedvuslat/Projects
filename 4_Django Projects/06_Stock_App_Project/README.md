# Stock App 📦

Welcome to **Stock App**, a backend-focused Django application designed for efficient inventory management. Built with Django and Django REST Framework (DRF), this project provides a robust API for managing products, categories, brands, firms, purchases, and sales, all accessible through the Django Admin Panel. It includes token-based authentication, data serialization, and stock tracking with automated updates for purchases and sales.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Inventory Management**: Track products, categories, brands, and firms with detailed attributes.
- **Purchase and Sales Tracking**: Record and manage purchase and sales transactions with automatic stock updates.
- **Token-Based Authentication**: Secure API access using DRF’s token authentication.
- **Dynamic Filtering and Search**: Filter and search products, firms, and transactions by various fields.
- **API Documentation**: Interactive API documentation via `drf-yasg` for easy exploration.
- **Django Admin Integration**: Manage all data through the Django Admin Panel.
- **Data Validation**: Phone number validation for firms and automated total price calculations for transactions.

## Screenshot

![Stock App Screenshot](./s-app_gif.gif)

## Technologies Used

- **Django**: Backend framework for building the application and handling authentication.
- **Django REST Framework (DRF)**: For creating RESTful APIs.
- **SQLite**: Lightweight database for storing inventory and transaction data.
- **Python Decouple**: For securely managing environment variables.
- **drf-yasg**: For generating Swagger API documentation.
- **django-filter**: For advanced filtering in API endpoints.
- **Python**: Core programming language for backend logic.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:

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
   - Generate a secure key using `django.core.management.utils.get_random_secret_key()` or a similar tool.

5. **Apply Migrations**:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Create a Superuser (Optional)**:

   ```bash
   python manage.py createsuperuser
   ```

   This allows access to the Django Admin Panel at `/admin`.

7. **Run the Application**:
   ```bash
   python manage.py runserver
   ```
   The app will be available at `http://localhost:8000`.

## Usage

- **Django Admin Panel**: Access `/admin` to manage categories, brands, products, firms, purchases, and sales (requires superuser login).
- **API Access**: Use tools like Postman or curl to interact with the API endpoints. Obtain a token via `/api/auth/login/` for authenticated requests.
- **API Documentation**: Explore the Swagger UI at `/swagger/` or `/redoc/` for detailed endpoint information.
- **Stock Management**: Create purchases to increase stock, and sales to decrease stock, with automatic updates handled via signals.
- **Filtering and Search**: Use query parameters in API requests to filter or search data (e.g., `?name=category_name` for categories).

## Project Structure

```
📦 Stock App
├── account
│   ├── __init__.py
│   ├── __pycache__
│   ├── admin.py
│   ├── apps.py
│   ├── migrations
│   ├── models.py
│   ├── serializers.py
│   ├── signals.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── db.sqlite3
├── main
│   ├── __init__.py
│   ├── __pycache__
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── manage.py
├── README.md
├── requirements.txt
└── stock
    ├── __init__.py
    ├── __pycache__
    ├── admin.py
    ├── apps.py
    ├── migrations
    ├── models.py
    ├── serializer.py
    ├── signals.py
    ├── tests.py
    ├── urls.py
    └── views.py

```

## API Endpoints

The following endpoints are available via the API (accessible at `/api/`):

- **Categories**: `/api/categories/` (List, Create, Retrieve, Update, Delete; supports search by `name`)
- **Brands**: `/api/brands/` (List, Create, Retrieve, Update, Delete; supports search by `name`)
- **Products**: `/api/products/` (List, Create, Retrieve, Update, Delete; supports search by `name`, `category`, and filtering by `brand`, `category`)
- **Firms**: `/api/firms/` (List, Create, Retrieve, Update, Delete; supports search by `name`)
- **Purchases**: `/api/purchases/` (List, Create, Retrieve, Update, Delete; supports search by `firm`, `product`, and filtering; auto-updates stock)
- **Sales**: `/api/sales/` (List, Create, Retrieve, Update, Delete; supports search by `product`, and filtering; auto-updates stock with validation)
- **Swagger Documentation**: `/swagger/` or `/redoc/` for interactive API exploration.

Authentication is required for most endpoints (use Token Authentication via `Authorization: Token <token>`).

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a Pull Request.

Please ensure your code follows Django and DRF best practices and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy inventory management! 📦 If you have any questions or feedback, feel free to open an issue or contact the maintainers.
