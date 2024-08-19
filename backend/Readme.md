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
