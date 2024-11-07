import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import AdminNav from "./AdminNav";

const Bike = () => {
    const { id } = useParams();
    const [bike, setBike] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");
    
    useEffect(() => {
        fetchBikeDetails();
    }, [id]);

    const fetchBikeDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/adminPanel/bikes/${id}`);
            setBike(response.data);
            setLoading(false);
        } catch (err) {
            setError("Error fetching bike details");
            setLoading(false);
        }
    };

    const addService = async () => {
        try {
            const currentDateTime = new Date();
            const newService = {
                serviceName: "General Service",
                dateOfService: currentDateTime,
                bill: {
                    billDate: currentDateTime,
                    totalAmount: 0,
                    entries: []
                }
            };

            const response = await axios.post(`http://localhost:3000/adminPanel/bikes/${id}/addService`, newService);

            if (response.data) {
                fetchBikeDetails();
                setMessage("Service added successfully!");
                
                // Clear the message after 2 seconds
                setTimeout(() => setMessage(""), 2000);
            }
        } catch (err) {
            setMessage("Failed to add service. Try again.");
            
            // Clear the message after 2 seconds in case of an error
            setTimeout(() => setMessage(""), 2000);
        }
    };

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <>
            <AdminNav />
            <div className="flex justify-center min-h-screen text-white">
                <div className="rounded-lg p-6 w-full max-w-lg">
                    <h1 className="text-2xl text-white font-bold mb-4">{bike?.bikeNo}</h1>
                    <h1 className="text-xl text-red-500 font-bold mb-4">{bike?.owner}</h1>

                    {message && <p className="text-green-500">{message}</p>}

                    {bike && (
                        <>
                            <div className="mb-2">
                                <strong>Bike No:</strong> {bike.bikeNo}
                            </div>
                            <div className="mb-2">
                                <strong>Owner:</strong> {bike.owner}
                            </div>
                            <div className="mb-2">
                                <strong>Contact No:</strong> {bike.contactNo}
                            </div>
                            <div className="mb-4">
                                <strong>Date of Registration:</strong> {bike.dateOfReg}
                            </div>
                            <div className="flex">
                                <h2 className="text-xl font-semibold mb-3">Services</h2>
                                <button
                                    className="ml-40 rounded-lg w-35 h-8 bg-red-500"
                                    onClick={addService}
                                >
                                    Add Service
                                </button>
                            </div>

                            {bike.services && bike.services.length > 0 ? (
                                bike.services.map((service) => (
                                    <Link
                                        key={service._id}
                                        to={`/adminPanel/${id}/${service._id}/bill`}
                                    >
                                        <div className="mb-4 border p-4 rounded-lg">
                                            <h3 className="font-medium">Service Name: {service.serviceName}</h3>
                                            <p>Date of Service: {new Date(service.dateOfService).toLocaleString()}</p>

                                            <h4 className="mt-2 font-semibold">Bill Details</h4>
                                            {service.bill ? (
                                                <>
                                                    <p>Bill Date: {new Date(service.bill.billDate).toLocaleDateString()}</p>
                                                    <p>Total Amount: ${service.bill.totalAmount}</p>
                                                </>
                                            ) : (
                                                <p>No bill available for this service.</p>
                                            )}
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p>No services found for this bike.</p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Bike;
