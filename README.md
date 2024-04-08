# User Registration and Authentication API

This is a Node.js application that provides RESTful API endpoints for user registration and authentication. It uses SQLite as the database to store user information securely.

## Features

- User registration: Allows users to register by providing a unique username and password.
- Password hashing: Hashes user passwords securely using bcrypt before storing them in the database.
- Username validation: Ensures that each username is unique to prevent duplicate registrations.
- User authentication: Provides endpoints for user login using their registered credentials.
