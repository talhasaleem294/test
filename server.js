const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 5000;

// Use morgan to log requests
app.use(morgan('combined'));  // You can use 'tiny', 'dev', or 'combined' format

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Express! updated');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
