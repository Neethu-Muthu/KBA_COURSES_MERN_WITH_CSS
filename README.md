# Blockchain Courses

Welcome to the Blockchain Courses website! This platform offers a range of educational resources for learning about blockchain technology and its applications.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)

## Project Overview

This project is a web application designed to showcase various blockchain-related courses. It provides a user-friendly interface for browsing courses, viewing details, and adding courses to a cart. Built using the MERN stack (MongoDB, Express, React, Node.js), the site aims to deliver a smooth and engaging experience for users.

## Features

- **Course Listings**: Browse available blockchain courses.
- **Course Details**: View detailed information about each course, including descriptions, prerequisites, and features.
- **Edit and Remove**: Admins can edit or remove courses.

## Installation

### Prerequisites

Before you begin, ensure you have the following software installed:

- **Node.js**: Version 14 or higher
- **npm**: Node Package Manager (usually comes with Node.js)
- **MongoDB**: For the database
- **Express JS**: For backend

### Clone the Repository

1. Clone the repository from GitHub:

    ```bash
    git clone [https://github.com/yourusername/blockchain-courses.git](https://github.com/Neethu-Muthu/KBA_COURSES_MERN_WITH_CSS.git)
    cd KBA_COURSES_MERN_WITH_CSS
    ```

### Backend Setup

1. **Navigate to the backend directory**:

    ```bash
    cd server
    ```

2. **Install backend dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

    

    Replace `your_mongodb_connection_string` with your MongoDB connection string, and `your_jwt_secret` with a secret key for JWT authentication.

4. **Run the backend server**:

    ```bash
   node app.js
    ```

    The backend server will start on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the frontend directory**:

    ```bash
    cd ../ui
    ```

2. **Install frontend dependencies**:

    ```bash
    npm install
    ```

3. **Run the frontend development server**:

    ```bash
    npm run dev
    ```

    The frontend application will run on `http://localhost:5173`.

### Database Setup

Ensure MongoDB is running on your machine. If you're using MongoDB Atlas, ensure that your connection string is correctly set in the `.env` file. For a local MongoDB installation, you can start MongoDB with:

```bash
sudo systemctl start mongod
## Usage
- Navigating the Site: Use the navigation bar to access different sections of the site.
- Viewing Courses: Click on a course to view detailed information.
- Managing Courses: Admins can edit or remove courses through the provided buttons.



Make sure to replace placeholders like `yourusername`, `your_mongodb_connection_string`, and `your_jwt_secret` with the actual values relevant to your project.


