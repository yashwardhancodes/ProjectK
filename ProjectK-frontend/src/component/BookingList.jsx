import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('/api/bookings')
      .then(response => setBookings(response.data))
      .catch(error => console.error('Error fetching bookings:', error));
  }, []);

  return (
    <div>
      <h2>Bookings</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking._id}>
            {booking.customerName} - {booking.vehicleModel} ({booking.serviceType})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;
