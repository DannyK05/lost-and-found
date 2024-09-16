### Lost and Found Website

---

### Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Integration](#api-integration)
- [Folder Structure](#folder-structure)
- [License](#license)

---

### Introduction

This Lost and Found website allows users to post items they've lost or found on the OAU campus. It is designed to help students recover their lost items or return items they've found to their rightful owners. Users can list items, view lost and found items, and contact the respective owners.

---

### Features

- **User Authentication**: Secure login and registration using OAU student email.
- **Post Lost Items**: Users can report items they've lost, providing details such as location, date, and description.
- **Post Found Items**: Users can report items they've found, making it easier for the rightful owners to retrieve them.
- **Search Functionality**: Search for specific lost or found items by category, date, or location.
- **User Dashboard**: A personalized dashboard for users to manage their listed lost and found items.
- **Responsive Design**: The website is optimized for both desktop and mobile views.
- **JWT-Based Authentication**: Secure login with token-based authentication.

---

### Technologies

- **Frontend**:
  - React.js (with Hooks, Context API)
  - Redux Toolkit for state management
  - Tailwind CSS for styling
  - Vite for fast builds and hot reload
  - React Router for routing
- **Backend** (API integration):
  - Node.js
  - Express.js
  - MongoDB (or any database)
  - JWT Authentication
  - REST API

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/lost-and-found.git
   cd lost-and-found
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

### Environment Variables

To run the project, you'll need to configure environment variables. Create a `.env` file in the root directory and add the following:

```bash
VITE_PUBLIC_BASE_URL=<your_api_base_url>
VITE_PUBLIC_API_KEY=<your_api_key_if_needed>
```

---

### Running the Application

1. To start the development server, run:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

3. For production, build the app:

   ```bash
   npm run build
   ```

   Then serve the build:

   ```bash
   npm run serve
   ```

---

### API Integration

- **Authentication**: The API uses JWT for secure login and registration. Ensure that users authenticate with their OAU student email.
- **Endpoints**:
  - **POST** `/api/auth/login`: Log in with credentials.
  - **POST** `/api/auth/signup`: Register a new user.
  - **POST** `/api/items/lost`: Post a lost item.
  - **POST** `/api/items/found`: Post a found item.
  - **GET** `/api/items/lost`: Get all lost items.
  - **GET** `/api/items/found`: Get all found items.

Make sure to attach the JWT token to the `Authorization` header for secure endpoints.

---

### Folder Structure

```
|-- src
|   |-- assets              # Static files (images, icons)
|   |-- components          # Reusable components (e.g., FormInput, LoadingSpinner)
|   |-- pages               # Main pages (Login, Signup, LostItems, FoundItems)
|   |-- store               # Redux slices, API configurations
|   |-- utils               # Utility functions (API requests, JWT handling)
|   |-- App.js              # Root component
|   |-- index.js            # Entry point
|-- .env                    # Environment variables
|-- README.md               # Project documentation
|-- package.json            # Project dependencies and scripts
```

---

### License

This project is licensed under the MIT License.
