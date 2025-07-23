# Flight App ✈️

Welcome to **Flight App**, a backend-focused Django application designed for managing flight reservations. Built with Django and Django REST Framework (DRF), this project provides a robust API for handling flights, passengers, and reservations, all manageable through the Django Admin Panel. It includes token-based authentication, custom permissions for staff and non-staff users, and dynamic filtering for upcoming flights.

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

- **Flight Management**: Create, update, and manage flight details including flight number, airline, cities, departure date, and time.
- **Reservation System**: Allow users to create and manage reservations with multiple passengers.
- **Role-Based Access**: Staff users have full access to all flights and reservations, while regular users can only view upcoming flights and their own reservations.
- **Dynamic Filtering**: Non-staff users see only future flights (after today’s date and time), while staff see all flights.
- **API Documentation**: Interactive API documentation via `drf-yasg` for easy exploration.
- **Django Admin Integration**: Manage flights, passengers, and reservations through the Django Admin Panel.
- **Passenger Management**: Store passenger details and associate them with reservations.

## Screenshot

![Stock App Screenshot](./f_app-gif.gif)

## Technologies Used

- **Django**: Backend framework for building the application and handling authentication.
- **Django REST Framework (DRF)**: For creating RESTful APIs with serialization and authentication.
- **SQLite**: Lightweight database for storing flight, passenger, and reservation data.
- **Python Decouple**: For securely managing environment variables.
- **drf-yasg**: For generating Swagger API documentation.
- **psycopg2**: Database adapter (optional for PostgreSQL support, though SQLite is used by default).
- **Python**: Core programming language for backend logic.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/flight-app.git
   cd flight-app
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

- **Django Admin Panel**: Access `/admin` to manage flights, passengers, and reservations (requires superuser login).
- **API Access**: Use tools like Postman or curl to interact with the API endpoints. Obtain a token via `/api/auth/login/` for authenticated requests.
- **API Documentation**: Explore the Swagger UI at `/swagger/` or `/redoc/` for detailed endpoint information.
- **Flight Management**: Staff users can manage all flights, while regular users can only view upcoming flights (filtered by date and time).
- **Reservation Management**: Users can create and view their own reservations; staff can view all reservations.

## Project Structure

```
✈️ Flight App
├── db.sqlite3
├── flight
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations
│   ├── models.py
│   ├── permissions.py
│   ├── serializers.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── main
│   ├── __init__.py
│   ├── asgi.py
│   ├── db.sqlite3
│   ├── settings
│   ├── urls.py
│   └── wsgi.py
├── manage.py
├── README.md
├── requirements.txt
└── users
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── migrations
    ├── models.py
    ├── serializers.py
    ├── signals.py
    ├── tests.py
    ├── urls.py
    └── views.py


```

## API Endpoints

The following endpoints are available via the API (accessible at `/api/`):

- **Flights**: `/api/flights/` (List, Create, Retrieve, Update, Delete; staff have full access, non-staff see only upcoming flights)
- **Reservations**: `/api/reservations/` (List, Create, Retrieve, Update, Delete; users see only their own reservations, staff see all)
- **Swagger Documentation**: `/swagger/` or `/redoc/` for interactive API exploration.

Authentication is required for most endpoints (use Token Authentication via `Authorization: Token <token>`). Non-staff users are restricted to read-only access for flights and their own reservations.

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

Safe travels! ✈️ If you have any questions or feedback, feel free to open an issue or contact the maintainers.
