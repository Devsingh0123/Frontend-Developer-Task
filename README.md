# Frontend Developer Assignment – Task Management App

## Project Overview

This is a full-stack Task Management application built as part of a Frontend Developer assignment.  
The project demonstrates modern frontend development using React and a secure backend built with Node.js and Express.

Users can register, log in, and manage their personal tasks through a clean and responsive dashboard.

---

## Tech Stack

### Frontend
- React
- Redux Toolkit
- Tailwind CSS
- Axios
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie-based Auth

---

## Features

### Authentication
- User Registration
- User Login & Logout
- JWT-based authentication
- Protected routes

### Task Management
- Create task
- View all tasks
- Update task
- Delete task
- Delete all tasks
- Task status: Pending / Completed

### Dashboard
- User-specific task list
- Search tasks by title
- Filter tasks (All / Pending / Completed)
- Responsive UI

---
## Project Structure

### Backend

```
backend/
├── controllers/
│   ├── auth.controller.js
│   ├── currentUser.controller.js
│   └── task.controller.js
├── models/
│   ├── User.schema.js
│   └── Task.schema.js
├── routes/
│   ├── auth.routes.js
│   └── task.routes.js
├── middleware/
│   └── isAuth.middleware.js
├── config/
│   └── db.js
├── index.js
└── .env
```

### Frontend

```
src/
├── redux/
│   ├── store.js
│   ├── authSlice/
│   │   └── authSlice.js
│   └── taskSlice/
│       └── taskSlice.js
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── Profile.jsx
│   └── PageNotFound.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Searchbar.jsx
│   ├── TaskCard.jsx
│   ├── TaskForm.jsx
│   └── Loader.jsx
├── routes/
│   ├── AppRoutes.jsx
│   └── ProtectedRoute.jsx
├── App.jsx
├── main.jsx
├── index.css
└── index.html
```
---
```
## Environment Variables

### Backend (.env)
PORT=
MONGO_URI=
JWT_SECRET=


### Frontend (.env)
VITE_API_BASE_URL=
```

---

## How to Run the Project

### Backend

cd backend
npm install
npm run dev or npm start
### Frontend
cd frontend
npm install
npm run dev

## API Documentation (Postman)

All APIs are documented using **Postman** for easy testing and verification.

### Auth APIs
- **POST** `/api/auth/register` – Register a new user
- **POST** `/api/auth/login` – Login user and generate JWT
- **POST** `/api/auth/logout` – Logout user and clear session

### Task APIs (Protected)
- **GET** `/api/tasks/createTask` – Fetch all user tasks
- **POST** `/api/tasks/getAllTasks` – Create a new task
- **PATCH** `/api/tasks/updateTask/:id` – Update an existing task
- **DELETE** `/api/tasks/deleteTask/:id` – Delete a task
- **DELETE** `/api/tasks/deleteAllTasks` – Delete all tasks

**Postman Collection File:**
- `Frontend-Dev-Task.postman_collection.json`

---

## Frontend–Backend Integration

- Axios is used with a base URL configured via environment variables.
- JWT authentication is implemented using **HTTP-only cookies** for security.
- Protected routes are secured using backend middleware.

---

## Production & Scaling Notes

- Environment variables are used to store sensitive configuration.
- MongoDB Atlas can be used as a cloud database in production.
- Frontend can be deployed on **Vercel***.
- Backend can be deployed on **Render**.

---

## Assignment Status

- Authentication: ✅ Completed
- Task CRUD: ✅ Completed
- Search & Filter: ✅ Completed
- Redux Toolkit: ✅ Implemented
- API Documentation: ✅ Completed
- Production Notes: ✅ Added

---

## Author

**Dayanand Kumar Chauhan**  
Frontend Developer
