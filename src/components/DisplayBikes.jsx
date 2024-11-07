import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DisplayBikes = () => {
  const [bikes, setBikes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let result = await fetch("http://localhost:3000/adminPanel");
      result = await result.json();
      setBikes(result);
    } catch (error) {
      console.error("Error fetching bikes:", error);
    }
  };

  const deleteBike = async (id) => {
    try {
      let result = await fetch(`http://localhost:3000/adminPanel/${id}`, {
        method: "DELETE",
      });
      if (result.ok) {
        getProducts(); // Refresh the list after deletion
      }
    } catch (error) {
      console.error("Error deleting bike:", error);
    }
  };

  return (
    <div className="h-screen flex justify-center">
      <table className="table-auto w-full max-w-6xl h-fit text-center border-collapse m-4 text-xs md:text-base">
        <thead>
          <tr className="bg-black text-white">
            <th className="border px-2 py-1 md:px-4 md:py-2">Sr.No.</th>
            <th className="border px-2 py-1 md:px-4 md:py-2">Bike No.</th>
            <th className="border px-2 py-1 md:px-4 md:py-2">Owner</th>
            <th className="border px-2 py-1 md:px-4 md:py-2">Reg Date</th>
            <th className="border px-2 py-1 md:px-4 md:py-2">Operations</th>
          </tr>
        </thead>
        <tbody>
          {bikes.map((bike, index) => (
            <tr
              key={bike._id}
              onClick={() => navigate(`/adminPanel/${bike._id}`)}
              className="cursor-pointer hover:bg-gray-800"
            >
              <td className="border px-2 py-1 md:px-4 md:py-2">{index + 1}</td>
              <td className="border px-2 py-1 md:px-4 md:py-2">{bike.bikeNo}</td>
              <td className="border px-2 py-1 md:px-4 md:py-2">{bike.owner}</td>
              <td className="border px-2 py-1 md:px-4 md:py-2">{bike.dateOfReg}</td>
              <td className="border px-2 py-1 md:px-4 md:py-2">
                <button
                  className="bg-red-500 p-1 rounded-md mr-2"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent row click from triggering
                    deleteBike(bike._id);
                  }}
                >
                  Delete
                </button>
                <Link
                  to={`/updateBike/${bike._id}`}
                  className="text-blue-500 underline"
                  onClick={(e) => e.stopPropagation()} // Prevent row click from triggering
                >
                  Update Bike
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayBikes;
