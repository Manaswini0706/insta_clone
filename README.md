# Insta Clone

## Overview

Welcome to the Insta Clone project! This repository is a clone of the popular social media platform Instagram. The project aims to replicate some of the key features and functionalities of Instagram, allowing users to share photos, follow other users, and engage in a social media experience.

## Features

- **User Authentication:** Users can create accounts, log in, and securely authenticate their identity.
- **Profile Management:** Users have profiles where they can update their information, profile pictures, and view their posts.
- **Post Sharing:** Users can upload photos, add captions, and share them with their followers.
- **Follow/Unfollow:** The ability to follow and unfollow other users to stay updated on their posts.
- **Feed:** A personalized feed that displays posts from the users you follow.

## Technologies Used

### Frontend

- HTML, CSS, JavaScript
- React.js

### Backend

- Node.js
- Express.js

### Database

- MongoDB

### Authentication

- JWT (JSON Web Tokens)

## Setup

### Prerequisites

1. Ensure you have Node.js and npm installed.

2. Set up a MongoDB database and obtain the connection URI.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/insta_clone.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd insta_clone
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Create a `.env` file in the root directory and add the following:**

    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_connection_uri
    JWT_SECRET=your_jwt_secret_key
    ```

5. **Run the application:**

    ```bash
    npm start
    ```

6. **Visit `http://localhost:3000` in your browser to access the Insta Clone application.**

### Backend Dependencies

- **Express:** Web application framework for Node.js.

    ```bash
    npm install express
    ```

- **Dotenv:** Zero-dependency module for loading environment variables.

    ```bash
    npm install dotenv
    ```

- **CORS:** Enables CORS for the Express server.

    ```bash
    npm install cors
    ```

### Running the Server

- Using npm start:

    ```bash
    npm start
    ```

- Using nodemon (automatically restarts the node application on changes):

    ```bash
    nodemon
    ```

## Contribution

If you're interested in contributing to the project, feel free to open issues or submit pull requests. Contributions of all kinds are welcome!

Happy cloning! 📸
