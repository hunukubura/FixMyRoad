# FixMyRoad PWA

FixMyRoad is a Progressive Web Application (PWA) designed to allow users to report road issues in the North Western Province of Sri Lanka. The application provides a user-friendly interface for reporting issues and managing them effectively.

## Features

- **Dashboard**: A visual representation of issue statuses (Pending, In Progress, Resolved) using pie charts.
- **Multilingual Support**: The application supports English, Sinhala, and Tamil languages, with placeholder translations available.
- **Map Integration**: Users can report and view issues on an interactive map using Leaflet and OpenStreetMap.
- **Email Notifications**: Admins receive email notifications for new reports submitted by users.
- **Admin Dashboard**: A dedicated interface for administrators to manage and oversee reported issues.
- **PWA Capabilities**: The application supports offline use and can be installed on devices.

## Project Structure

The project is divided into two main parts:

### Backend

- **Technologies**: Node.js, Express, SQLite
- **Directory**: `backend`
  - `src/app.js`: Entry point for the backend application.
  - `src/db/database.js`: Handles SQLite database connection.
  - `src/routes/reports.js`: Defines routes for reporting issues.
  - `src/controllers/reportController.js`: Manages report-related operations.
  - `src/utils/email.js`: Functions for sending email notifications.
  - `src/middleware/auth.js`: Authentication middleware.
  - `package.json`: Backend dependencies and scripts.
  - `README.md`: Documentation for backend setup and API usage.

### Frontend

- **Technologies**: React, Vite, Tailwind CSS
- **Directory**: `frontend`
  - `src/App.jsx`: Main component for the React application.
  - `src/main.jsx`: Entry point for the frontend application.
  - `src/components`: Contains various components such as Dashboard, MapView, and ReportForm.
  - `src/i18n`: Contains translation files for multilingual support.
  - `src/assets`: Static assets for the frontend.
  - `src/service-worker.js`: Service worker for PWA features.
  - `index.html`: Main HTML file for the frontend.
  - `manifest.json`: PWA metadata.
  - `tailwind.config.js`: Tailwind CSS configuration.
  - `vite.config.js`: Vite configuration.
  - `package.json`: Frontend dependencies and scripts.
  - `README.md`: Documentation for frontend setup and usage.

## Setup Instructions

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies using `npm install`.
3. Start the server with `npm start`.

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies using `npm install`.
3. Start the development server with `npm run dev`.

## Contribution Guidelines

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.