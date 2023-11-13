# Todoo Fullstack App

Welcome to Todoo fullstack application! This application consists of a frontend built with [React] and a backend powered by [Express]. Follow the steps below to get the app up and running.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [docker](https://www.docker.com/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/ensolvers-github-challenges/ManuelKersul-6a5fd5.git
    ```

2. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

3. install dependencies:

   ```bash
   npm install
   ```

4. Navigate to the backend directory:

   ```bash
   cd backend
   ```

5. create a .env file in the backend directory and add the following:

   ```bash
   PORT=3000
   DATABASE_URI=postgres://postgres:admin@localhost:5432/postgres
   SECRET_KEY=secret
   ```

6. install dependencies:

   ```bash
   npm install
   ```

7. build the UI:

   ```bash
   npm run build:ui
   ```

8. Start the database (It may take a few seconds):

   ```bash
   npm run db
   ```

9. Start the backend in a new terminal window:

   ```bash

    npm run start
    ```

10. open the navegador and navigate to <http://localhost:3000>

## Notes

you can see the versions using the tags in the repository
