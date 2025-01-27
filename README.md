# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



User Dashboard with CRUD Operations

Description

This project is a user dashboard application that performs CRUD (Create, Read, Update, Delete) operations using React and Axios. Instead of using a test API like JSONPlaceholder, we have set up a local JSON server using the json-server package. The server simulates a REST API to manage user data. All the CRUD operations interact with this local server.

Features

Create: Add new users to the database.

Read: Fetch and display the list of users from the server.

Update: Edit and update existing user details.

Delete: Remove users from the database.

Validation: Ensures that all user inputs are valid before submission.

Pagination: Displays a paginated list of users for better navigation.

Responsive Design: Optimized for all screen sizes using Bootstrap.

Folder Structure


|USER_CRUD
|---user_crud-app/
|   |src/
|   |-- components/
|   |   |-- Create.jsx
|   |   |-- Read.jsx
|   |   |-- Update.jsx
|-- server-api/    # Folder containing JSON server configuration
|   |-- db.json    # The mock database file
|-- package.json
|-- README.md

Prerequisites

Node.js and npm installed on your system.

Install json-server globally:

npm install -g json-server

Setup Instructions

1. Clone the Repository

git clone <repository-url>
cd user_crud-app

2. Install Dependencies

Run the following command to install all required packages:

npm install

3. Installed Packages

Bootstrap: For styling and responsive design.

Axios: For handling HTTP requests.

React Router DOM: For routing between pages.

JSON Server: To simulate a backend API.

4. Setup JSON Server

Navigate to the server-api folder and ensure the db.json file exists. Example db.json:

{
  "users": [
    {
      "id": 1,
      "FirstName": "John",
      "LastName": "Doe",
      "Email": "john.doe@example.com",
      "Department": "Engineering"
    }
  ]
}
5.Start the JSON server:
  1.take separete terminal and > cd server-api
  2.run this command :npm run dev   
  it will start server and gives json-server url = http://localhost:3006/

json-server --watch server-api/db.json --port 3006

6. Start the React App


In a separate terminal, start the React development server:

npm run dev




Usage

Homepage: Displays the list of users with pagination.

Add User: Navigate to the Add User page to create new users with validation.

Edit User: Click the edit button to modify user details.

Delete User: Use the delete button to remove a user from the list.

Technologies Used

React: For building the user interface.

Axios: For making HTTP requests.

JSON Server: For simulating a backend REST API.

Bootstrap: For styling and responsive design.

React Router DOM: For routing and navigation.

Example Endpoints

The JSON server runs at http://localhost:3006.

Fetch all users:

GET http://localhost:3006/users

Add a user:

POST http://localhost:3006/users

Update a user:

PUT http://localhost:3006/users/:id

Delete a user:

DELETE http://localhost:3006/users/:id



Author

Developed by Rajesh Kumar Ruppa.
