import React, { useState } from 'react';
import Navbar from './AdminNav';
import { useNavigate } from 'react-router-dom';

const UpdateBike = () => {
  const [bikeNo, setBikeNo] = useState("");
  const [owner, setOwner] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [dateOfReg, setDateOfReg] = useState("");



  const handleUpdateBike = async () => {
   console.log(bikeNo,owner,contactNo,dateOfReg)
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-black py-10 px-4">
        <form onSubmit={handleUpdateBike} className="w-full max-w-md sm:max-w-lg bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-red-500 sm:mb-6 text-center">Update Bike</h2>

          <div className="mb-4">
            <label htmlFor="bikeNo" className="block text-gray-700 font-semibold mb-2">Bike Number</label>
            <input
              type="text"
              id="bikeNo"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the bike number"
              value={bikeNo}
              onChange={(e) => setBikeNo(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="owner" className="block text-gray-700 font-semibold mb-2">Owner</label>
            <input
              type="text"
              id="owner"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the owner's name"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contactNo" className="block text-gray-700 font-semibold mb-2">Contact Number</label>
            <input
              type="tel"
              id="contactNo"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the contact number"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dateOfReg" className="block text-gray-700 font-semibold mb-2">Date Of Registration</label>
            <input
              type="date"
              id="dateOfReg"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the date of Registration"
              value={dateOfReg}
              onChange={(e) => setDateOfReg(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition duration-200"
          >
            Update Bike
          </button>

        
        </form>
      </div>
    </>
  );
};

export default UpdateBike;
