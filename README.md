# JAM — Language Learning with Flashcards

JAM is a full-stack language-learning web application built as the final team project for the Web Development course at the Digital Career Institute (DCI) in 2022.

The name **JAM** comes from the first names of the three creators: **Jochen, Ahmed and Mohammed**.

The project was designed to give language learners a simple way to create flashcards, save vocabulary and grammar content, and practice what they have learned.

## Project Type

* Final DCI team project
* Full-stack web application
* Built collaboratively by three students
* Original project year: 2022

## Main Features

* Create custom flashcards
* Practice with flashcards without registration
* User registration and login
* Password hashing with bcrypt
* JWT-based authentication
* Protected user routes
* Personal user profile
* Save and retrieve personal flashcards
* Browse stored flashcards
* Learning and practice workflow
* Learning result visualization
* Responsive user interface
* Contact form

## Tech Stack

### Frontend

* React 18
* React Router
* React Bootstrap / Bootstrap
* Styled Components
* Redux
* Axios
* React Hook Form
* Yup
* Chart.js / React Chart.js
* Framer Motion
* React Toastify

### Backend

* Node.js
* Express
* MongoDB
* Mongoose
* JSON Web Tokens (JWT)
* bcrypt
* Express Session
* Express Validator
* Cookie Parser
* Nodemailer

## Project Structure

```text
Final-Project-JAM/
├── frontend/     # React application
├── Backend/      # Express API, models, routes and controllers
└── README.md
```

## Application Flow

A visitor can start using the flashcard learning experience without creating an account.

Registered users can additionally log in, access protected profile functionality, create and store flashcards, retrieve their saved cards and continue their learning workflow.

The React frontend communicates with the Express backend, while MongoDB is used for persistent application data.

## Team Project

This repository represents collaborative work completed by **Jochen, Ahmed and Mohammed** as the final project of our DCI Web Development course.

The project is kept as part of our development history and demonstrates practical experience with teamwork, React, backend development, databases, authentication and full-stack application architecture.

## Historical Note

JAM was developed in 2022 using the tools and library versions available to the team at that time. It is preserved primarily as a portfolio and learning project rather than presented as a currently maintained production application.
