# Help Center API

This project is a RESTful API built using Node.js, Express, SQLite, and Sequelize. The API allows users to manage "Help Center" cards, representing different sections of a help center, such as "Branches," "Manage Your Account," and "Manage Billing."

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Database](#database)
- [Error Handling](#error-handling)
- [License](#license)

## Features

- **Create a Card:** Add a new help center card with a title and description.
- **Retrieve All Cards:** Get a list of all help center cards.
- **Retrieve a Specific Card:** Get details of a specific card by its title.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [NPM](https://www.npmjs.com/get-npm) (usually comes with Node.js)
- [SQLite3](https://www.sqlite.org/index.html) (or another SQL database if preferred)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd help-center-api

Project structure-
help-center-api/
├── models/
│   ├── Card.js          # Sequelize model for Card
│   └── index.js         # Sequelize initialization and database connection
├── routes/
│   └── cards.js         # Express routes for card operations
├── controllers/
│   └── cardController.js # Logic for handling card operations
├── .env                 # Environment variables
├── package.json         # Project metadata and dependencies
├── server.js            # Entry point of the application
└── README.md            # Project documentation

API Endpoints
The following endpoints are available:

GET /ping

Description: Check if the server is running.
Response: { "message": "Server is running!" }
POST /cards

Description: Create a new help center card.
Request Body:
json
Copy code
{
  "title": "Card Title",
  "description": "Card description here."
}
Response: The newly created card object.
GET /cards

Description: Retrieve all help center cards.
Response: An array of card objects.
GET /cards/

Description: Retrieve a specific card by its title.
Response: The card object corresponding to the given title.

