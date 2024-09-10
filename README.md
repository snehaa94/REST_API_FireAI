# User Management RESTful API

This is a simple RESTful API for managing users. The API is built using Node.js, Express, and MongoDB. It supports basic CRUD operations like creating, reading, updating, and deleting users.

## Features

- Create a new user
- Retrieve all users
- Retrieve a specific user by ID
- Update a user's information
- Delete a user

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling for Node.js
- **Body-parser**: Middleware for parsing incoming request bodies

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine
- MongoDB installed and running

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/user-management-api.git
   cd user-management-api
2. **Install the dependencies:**
   npm install
3.**Set up the database:**
4. **Start the server:**
   npm start

**API Endpoints-**

Method	Endpoint	Description

  POST	/api/users	Create a new user
  GET	/api/users	Get all users
  GET	/api/users/:id	Get a user by ID
  PUT	/api/users/:id	Update a user by ID
  DELETE	/api/users/:id	Delete a user by ID
  
**Example Requests**

**Create a New User-**

POST /api/users
**Body:**
json
Copy code
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}

**Response:**
json
Copy code
{
  "message": "User registered successfully"
}

**Get All Users-**

GET /api/users

**Response:**
json

[
  {
    "_id": "60d21b4667d0d8992e610c85",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123",
    "__v": 0
  }
]

**Get a User by ID-**

GET /api/users/:id

**Response:**

json
Copy code
{
  "_id": "60d21b4667d0d8992e610c85",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123",
  "__v": 0
}

**Update a User-**

PUT /api/users/:id

**Body:**
json
Copy code
{
  "name": "John Smith",
  "email": "johnsmith@example.com",
  "password": "newpassword123"
}

**Response:**

json
Copy code
{
  "_id": "60d21b4667d0d8992e610c85",
  "name": "John Smith",
  "email": "johnsmith@example.com",
  "password": "newpassword123",
  "__v": 0
}

**Delete a User-**

DELETE /api/users/:id

**Response:**

json
Copy code
{
  "message": "User deleted successfully"
}

**Running the Project**

To run the project locally:

Ensure MongoDB is running.
Start the server:
bash
Copy code
npm start
Use Postman or another API client to interact with the API.


**Project Structure**

project-folder/
│
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── controllers/
│   └── userController.js
├── config/
│   └── db.js
├── app.js
└── package.json

**Contact**
If you want to contact me, you can reach me at snehakashyap6109@gmail.com
