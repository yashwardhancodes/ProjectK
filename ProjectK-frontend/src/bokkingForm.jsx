import { useState } from 'react';
import axios from 'axios';

function BookingForm() {
  const [customerName, setCustomerName] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [serviceType, setServiceType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/bookings', {
        customerName,
        vehicleModel,
        serviceType
      });
      console.log('Booking created:', response.data);
    } catch (error) {
      console.error('Error creating booking:', error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Vehicle Model"
        value={vehicleModel}
        onChange={(e) => setVehicleModel(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Service Type"
        value={serviceType}
        onChange={(e) => setServiceType(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;
