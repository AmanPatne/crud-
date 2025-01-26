
const express = require('express');
const sequelize = require('./Config/db.js');
const bodyParser = require('body-parser');
const userController = require('./Controller/data.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// User routes
app.post('/users', userController.addUsers);

// Test the database connection and sync models
sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch(err => console.log('Error: ' + err));

