const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

const bookingRoutes = require('./routes/BookingRoutes');
app.use('/api/bookings', bookingRoutes);


// API Routes
app.get('/', (req, res) => {
  res.send('Garage Management API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
