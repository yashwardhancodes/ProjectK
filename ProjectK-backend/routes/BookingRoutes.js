const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking.js');

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new booking
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const { customerName, vehicleModel, serviceType } = req.body;

    // Ensure all required fields are present
    if (!customerName || !vehicleModel || !serviceType) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newBooking = new Booking({
      customerName,
      vehicleModel,
      serviceType
    });

    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
