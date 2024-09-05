# Crude Server

A simple CRUD server built with Express.js and TypeScript, connected to a MongoDB database. This server provides a RESTful API for managing resources, allowing users to create, read, update, and delete resources.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Description

This project is a backend server that allows users to interact with a set of resources through a RESTful API. The server is built using TypeScript and Express.js, with data persistence provided by MongoDB. It supports basic CRUD operations to manage resources effectively.

## Features

- Create a new resource.
- List resources with optional filters.
- Retrieve details of a specific resource.
- Update resource information.
- Delete a resource.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js.
- **TypeScript**: Superset of JavaScript that adds static types.
- **MongoDB**: NoSQL database for storing resource data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: Module for loading environment variables from a `.env` file.

## Requirements

- Node.js (version 14.x or higher)
- MongoDB Atlas account (for database hosting)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/soewal19/TestTaskGroup99/task2.git
   cd crude-server

Install the dependencies:
bash
npm install

Create a .env file in the root directory and add the following variables:
text
PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.4lthmvu.mongodb.net/chat-app?retryWrites=true&w=majority

Start the server in development mode:
bash
npm run dev

Usage
The server will be running on http://localhost:3000. You can use tools like Postman or curl to interact with the API endpoints.
API Endpoints
1. Create Resource
   Endpoint: POST /api/resources
   Description: Creates a new resource.
   Request Body:
   json
   {
   "name": "string",
   "description": "string"
   }

Response:
201 Created: Resource created successfully.
2. List Resources
   Endpoint: GET /api/resources
   Description: Retrieves a list of resources with optional filtering.
   Query Parameters:
   name: Filter resources by name.
   Response:
   200 OK: Returns an array of resources.
3. Get Resource
   Endpoint: GET /api/resources/:id
   Description: Retrieves details of a specific resource by ID.
   Response:
   200 OK: Returns the resource details.
   404 Not Found: Resource not found.
4. Update Resource
   Endpoint: PUT /api/resources/:id
   Description: Updates an existing resource by ID.
   Request Body:
   json
   {
   "name": "string",
   "description": "string"
   }

Response:
200 OK: Returns the updated resource.
404 Not Found: Resource not found.
5. Delete Resource
   Endpoint: DELETE /api/resources/:id
   Description: Deletes a resource by ID.
   Response:
   204 No Content: Resource deleted successfully.
   404 Not Found: Resource not found.
   Directory Structure
 6. **Swagger for API Documentation**: Swagger is integrated into the project to automatically generate API documentation. This allows developers and users to easily view available endpoints, parameters, and request/response formats.  

   crude-server/
  

     ├── src/
     ├── controllers/
     └── resourceController.ts
     ├── models/
     │   └── resourceModel.ts
     ├── routes/
     │   └── resourceRoutes.ts
     ├── swagger/
     │   └── swaggerOptions.ts
     ├── app.ts
     | └── index.ts
     ├── .env
     ├── .gitignore
     ├── package.json
     └── tsconfig.json

## Swagger Documentation
Access the Swagger UI at: http://localhost:3000/api-docs
## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.
## License
This project is licensed under the MIT License - see the LICENSE file for details.