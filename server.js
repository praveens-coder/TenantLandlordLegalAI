const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Tenant-Landlord Legal AI Backend is Running!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
