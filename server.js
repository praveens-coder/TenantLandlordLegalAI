const express = require('express');
const connectDB = require('./config/database');  // Import MongoDB connection
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

app.use('/api/laws', require('./routes/lawRoutes'));


app.get('/', (req, res) => {
    res.send('Tenant-Landlord Legal AI Backend is Running!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
