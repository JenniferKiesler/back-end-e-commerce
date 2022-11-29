# E-Commerce Back End

## Description

The back end for an e-commerce site. The application was reconfigured to use Sequelize to interact with a MySQL database.

In this application,
- when the database name, MySQL username, and MySQL password is added to an environment variable file, the user is able to connect to a database using Sequelize.
- when schema and seed commands are entered, a development database is created and is seeded with test data.
- when the user enters the command to invoke the application, the server is started and the Sequelize models are synced to the MySQL database.
- For the API GET routes for categories, products, or tags, the data for each of these routes is displayed in a formatted JSON.
- For the API POST, PUT, and DELETE routes, the data in my database is successfully created, updated, and deleted.

## Installation

To use [dotenv](https://www.npmjs.com/package/dotenv), [Express](https://www.npmjs.com/package/express), [MySQL2](https://www.npmjs.com/package/mysql2), and [Sequelize](https://www.npmjs.com/package/sequelize) packages, use the following command:

```
npm install
```

To create the database, log into MySQL Shell and use:

```
SOURCE schema.sql
```

To seed the database, use the following command:

```
npm run seed
```

## Usage

This application is invoked by using the following command:

```
npm run watch
```

## Walkthrough Video

Use the link below to view a walkthrough of this application.

https://drive.google.com/file/d/1fIOyzLEqBylTRxwNGvU4-KNU7u9NBgy0/view?usp=sharing

If the video is blurry, download the video.

## Questions

Feel free to contact me at jennyhawes24@gmail.com or look at my [Github](https://github.com/JenniferKiesler).