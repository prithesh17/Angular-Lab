const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Sample array to store objects
let objectsArray = [];

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to add new object to the array
app.post('/api/objects', (req, res) => {
  const newObject = req.body;
  objectsArray.push(newObject);
  res.json({ message: 'Object added successfully', object: newObject });
});

// Endpoint to get all objects in the array
app.get('/api/objects', (req, res) => {
  res.json(objectsArray);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
