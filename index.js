const express = require('express');
const app = express();

// Set port
const PORT = process.env.PORT || 3000;

// Simple endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express API!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
