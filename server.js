const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to handle incoming requests
app.post('/payment_log', (req, res) => {
  const payload = req.body;

  // Log the payload received
  console.log('Received payload:', payload);

  // Send back the same payload as the response
  res.json(payload);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
