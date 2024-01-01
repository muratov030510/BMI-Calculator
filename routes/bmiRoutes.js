const express = require('express');
const router = express.Router();
const path = require('path');

// GET request to render the HTML form
router.get('/bmicalculator', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

// POST request for BMI calculation
router.post('/bmicalculator', (req, res) => {
  // Logic for BMI calculation
});

module.exports = router;
