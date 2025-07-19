# FixMyRoad PWA - Frontend Documentation

## Overview
The FixMyRoad PWA is a progressive web application designed to allow users to report road issues in the North Western Province of Sri Lanka. The application supports multiple languages and provides a user-friendly interface for both users and administrators.

## Features
- **Dashboard**: Displays a pie chart of issue statuses (Pending, In Progress, Resolved).
- **Multi-language Support**: Available in English, Sinhala, and Tamil.
- **Map Integration**: Utilizes Leaflet and OpenStreetMap for reporting and viewing issues.
- **Email Notifications**: Admins receive email notifications for new reports.
- **Admin Dashboard**: Allows management of reports.
- **PWA Capabilities**: Supports offline use and installation.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/FixMyRoad.git
   ```
2. Navigate to the frontend directory:
   ```
   cd FixMyRoad/frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
The application will be available at `http://localhost:3000`.

### Building for Production
To create a production build, run:
```
npm run build
```
The build files will be generated in the `dist` directory.

## Folder Structure
- `src/`: Contains the source code for the application.
  - `components/`: Reusable React components.
  - `i18n/`: Translation files for multi-language support.
  - `assets/`: Static assets like images and icons.
  - `service-worker.js`: Service worker for PWA features.
- `index.html`: Main HTML file for the application.
- `manifest.json`: Metadata for the PWA.
- `tailwind.config.js`: Configuration for Tailwind CSS.
- `vite.config.js`: Configuration for Vite.
- `package.json`: Lists dependencies and scripts for the frontend.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.