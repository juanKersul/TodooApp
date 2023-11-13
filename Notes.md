# Application Design - Explanatory Notes

## 1. Route Structure

### - Log In, Registration, and Main Application Routes

- I opted for three separate routes to handle user login, registration, and the main application functionality. This modular approach enhances maintainability and allows for clear separation of concerns.

- **Private Route with Authorization:**
  - The main application route is designated as private, requiring user authentication for access. This ensures that sensitive information and application features are protected.

## 2. JWT Authorization

- I chose to implement JSON Web Tokens (JWT) for user authorization.

### - Register and Login Endpoints

- Utilizing the POST method for both registration and login endpoints, as they involve handling sensitive user data. The registration endpoint creates a new user, while the login endpoint returns an authentication token.

- **Token Usage for Task Operations:**
  - For subsequent task-related operations (POST, PUT, PATCH, GET), the presence of a valid token is required. This token is obtained during the login process and serves as a secure means of authorization.

## 3. Authentication Middleware

- Implemented a middleware for authentication purposes. This middleware verifies the incoming requests for the presence and validity of the JWT. Additionally, it extracts user identification information, facilitating further authorization in subsequent endpoints.

- **User Identification:**
  - The middleware extracts user ID information from the JWT, streamlining the process for subsequent endpoints that require user-specific actions.

## 4. Database Design

- Utilized a relational database with two tables: one for users and another for Todos (tasks).

- **User-Todo Relationship:**
  - Established a one-to-many relationship between the Users and Todos tables. Each user can have multiple associated tasks, providing a structured and scalable approach to task management.

## 5. Endpoint Overview

### - Registration

- Endpoint: `/register`
- Method: POST

### - Login

- Endpoint: `/login`
- Method: POST

### - Task Operations

  - - **Create Task:**
- Endpoint: `/tasks`
- Method: POST
- Authorization: Token required

  - - **Get Tasks:**
- Endpoint: `/tasks`
- Method: GET
- Authorization: Token required

  - - **Update Task:**
- Endpoint: `/tasks/{taskId}`
- Method: PUT/PATCH
- Authorization: Token required

  - - **Delete Task:**
- Endpoint: `/tasks/{taskId}`
- Method: DELETE
- Authorization: Token required
