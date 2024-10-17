// src/pages/ListingPage.jsx
import React from 'react';
import ReviewComponent from '../components/ReviewComponent';

const ListingPage = () => {
  const listingId = 'your-listing-id'; // Replace this with the actual listing ID

  return (
    <div>
      <h1>Listing Details</h1>
      {/* Add more listing details here if needed */}
      <ReviewComponent listingId={listingId} />
    </div>
  );
};

export default ListingPage;
