# Real-Time Chat Application

**Live Demo:** [https://real-time-chat-app-rq6r.onrender.com](https://real-time-chat-app-rq6r.onrender.com)

## Overview
This project is a real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js), Socket.io for real-time communication, and styled with TailwindCSS and DaisyUI. It features authentication, authorization, online user status, global state management, and robust error handling.

## Why Use a Real-Time Chat App?
A real-time chat application enables users to communicate instantly, making it ideal for:
- **Team collaboration:** Facilitates quick decision-making and seamless teamwork.
- **Customer support:** Provides immediate assistance to users, improving satisfaction.
- **Social interaction:** Connects friends, family, or communities in real time.
- **Business communication:** Enhances productivity by reducing delays in information exchange.
- **Learning environments:** Supports group discussions and instant feedback in educational settings.

This application demonstrates how modern web technologies can be combined to deliver a fast, interactive, and reliable messaging experience.

## Features
- Tech stack: MERN (MongoDB, Express, React, Node.js), Socket.io, TailwindCSS, DaisyUI
- Authentication and authorization using JWT
- Real-time messaging with Socket.io
- Online user status tracking (Socket.io and React Context)
- Global state management with Zustand
- Comprehensive error handling on both server and client sides

## Prerequisites
- Node.js (v16 or higher recommended)
- npm (v8 or higher recommended)
- MongoDB instance (local or MongoDB Atlas)

## Getting Started

### 1. Clone the Repository
```
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install Dependencies
```
npm install
npm install --prefix frontend
```

### 3. Environment Variables
Create a `.env` file in the root or `backend` directory with the following content:
```
MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### 4. Build the Frontend
```
npm run build
```

### 5. Start the Application
```
npm start
```
The backend server will start and serve the built frontend at `http://localhost:5000` by default.

## Development
- To run the backend in development mode with hot-reloading:
  ```
  npm run dev
  ```
- To run the frontend development server with hot-reloading:
  ```
  cd frontend
  npm run dev
  ```
  The frontend will be available at `http://localhost:5173` by default.

## Deployment
This application can be deployed on platforms such as Render, Railway, or Heroku. For deployment on Render:
1. Push your code to a GitHub repository.
2. Create a new Web Service on Render and connect your repository.
3. Set the build command to:
   ```
   npm install && npm install --prefix frontend && npm run build
   ```
4. Set the start command to:
   ```
   npm start
   ```
5. Add the required environment variables (`MONGO_DB_URI`, `JWT_SECRET`, `PORT`).
6. Deploy the service. Render will provide a public URL for your application.

## License
This project is licensed under the ISC License.
