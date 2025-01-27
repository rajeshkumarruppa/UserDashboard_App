a# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



 Dashboard with CRUD Operations

 App videodemo:
https://drive.google.com/file/d/1bQWFDHXVJh5ntpGh2qOsnoa_qQMqPoiC/view?usp=sharing


  

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

The JSONPlaceHolder i used this mockapi =https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users

Fetch all users:

GET (https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users)

-Implemented pagination or infinite scrolling for the user list.

![Screenshot 2025-01-27 191556](https://github.com/user-attachments/assets/58bfc55d-467c-4504-85ed-e0bda67c9d72)


Add a user:

POST (https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users)

-Added client-side validation for the user input form.

![Screenshot 2025-01-27 191708](https://github.com/user-attachments/assets/a69186a2-5a7a-40ec-b2c5-04cf12f9e3c6)


Update a user:

PUT https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users/:id

![image](https://github.com/user-attachments/assets/653d4268-8a01-45ee-ab80-abbe555111a7)


Delete a user:

DELETE https://67977c52c2c861de0c6ce6a8.mockapi.io/users/users/:id



#Challenges Faced


During the development process, a key challenge I encountered was creating and customizing mock APIs for CRUD operations. This often consumed a significant amount of time, particularly when ensuring the mock data aligned with the expected structure and behavior of real API endpoints. Managing data consistency and customizing the response to match various use cases added complexity to this part of the development.


Author

Developed by Rajesh Kumar Ruppa.
