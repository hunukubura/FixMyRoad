# FixMyRoad Backend

This is the backend part of the FixMyRoad Progressive Web Application (PWA). The backend is built using Node.js and Express, and it handles data storage, API endpoints, and email notifications for road issue reports.

## Features

- RESTful API for managing road issue reports.
- SQLite database for data storage.
- Email notifications to admins for new reports.
- Middleware for authentication.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- SQLite

### Installation

1. Clone the repository:

   git clone https://github.com/yourusername/FixMyRoad.git

2. Navigate to the backend directory:

   cd FixMyRoad/backend

3. Install the dependencies:

   npm install

### Running the Application

To start the backend server, run:

npm start

The server will be running on `http://localhost:3000`.

### API Endpoints

- `POST /reports` - Create a new report
- `GET /reports` - Retrieve all reports
- `GET /reports/:id` - Retrieve a specific report by ID
- `PUT /reports/:id` - Update a report by ID
- `DELETE /reports/:id` - Delete a report by ID

### Email Notifications

The backend sends email notifications to admins whenever a new report is submitted. Ensure that the email configuration is set up correctly in the `utils/email.js` file.

### Database

The SQLite database is managed through the `db/database.js` file. Ensure that the database is initialized before running the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.