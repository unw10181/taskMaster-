# Backend Development Project – Project & Task Management API

A secure backend REST API built to practice **authentication, authorization, API routing, and MongoDB integration** using Node.js, Express, and Mongoose.

---

## Description

This project is a backend application that provides a **JWT-secured API** for managing users, projects, and tasks.  
Users can register, log in, create projects, and manage tasks within those projects. All resources are protected by **authentication and ownership-based authorization**, ensuring users can only access and modify their own data.

This project focuses on real-world backend fundamentals such as:

- Secure user authentication
- Authorization and access control
- Relational data modeling with MongoDB
- RESTful API design

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [API Features](#api-features)
- [Authentication & Security](#authentication--security)
- [Project Structure](#project-structure)
- [Project Next Steps](#project-next-steps)
- [GitHub Repository](#github-repository)
- [About the Author](#about-the-author)
- [Reflection](#reflection)

---

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- dotenv

---

## API Features

### User Authentication

- Register new users
- Secure password hashing with bcrypt
- User login with JWT issuance

### Project Management

- Create projects
- Retrieve all projects owned by the authenticated user
- Update and delete projects with ownership checks

### Task Management

- Create tasks under specific projects
- Retrieve all tasks for a project
- Update and delete tasks with multi-level ownership validation  
  _(Task → Project → User)_

---

## Authentication & Security

- All protected routes require a valid JWT
- Tokens are passed via the `Authorization: Bearer <token>` header
- Users can only:
  - View their own projects
  - Modify or delete projects they own
  - Manage tasks only within projects they own
- Unauthorized access attempts return proper HTTP status codes:
  - `401 Unauthorized`
  - `403 Forbidden`

---

## Project Structure

project-manager-api/
│
├── config/ # Database connection
├── models/ # Mongoose schemas (User, Project, Task)
├── routes/ # API route handlers
│ └── api/
├── utils/ # Authentication helpers (JWT middleware)
├── server.js # Application entry point
├── .env # Environment variables
└── package.json

---

## Project Next Steps

- Add user roles (admin vs standard user)
- Add pagination and sorting for projects and tasks
- Implement request validation middleware
- Add automated testing (Jest / Supertest)
- Optional frontend integration

---

## GitHub Repository

**Repository Link:**  
https://github.com/unw10181/taskMaster-

---

## About the Author

I build backend and full-stack applications using **Node.js, Express, MongoDB, React, and TypeScript**, with a strong focus on **security, clean architecture, and real-world API design**.

---

## Reflection

This project strengthened my understanding of:

- JWT-based authentication
- Ownership-based authorization
- Secure REST API design
- Managing relational data in MongoDB
- Writing maintainable and scalable backend code

It closely mirrors backend patterns used in production systems.
