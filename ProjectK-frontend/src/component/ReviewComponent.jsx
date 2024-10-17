import React, { useState } from 'react';
import './reviewComponent.css'; // Import your custom CSS file

const ReviewComponent = () => {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating) {
      setReviews([...reviews, { rating }]);
      setRating(0);
    }
  };

  // Function to group reviews by rating
  const groupedReviews = {
    5: reviews.filter((review) => review.rating === 5),
    4: reviews.filter((review) => review.rating === 4),
    3: reviews.filter((review) => review.rating === 3),
    2: reviews.filter((review) => review.rating === 2),
    1: reviews.filter((review) => review.rating === 1),
  };

  return (
    <div className="review-container flex flex-col justify-center items-center h-auto p-4 bg-review-bg bg-cover bg-center text-black">
      {/* Rate Our Service Label */}
      <h2 className="review-header text-3xl font-bold mb-4">Rate Our Service</h2>

      <form onSubmit={handleSubmit} className="mb-6 w-full max-w-md">
        {/* Star Rating Section */}
        <div className="review-stars flex mb-4 justify-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-8 h-8 cursor-pointer ${star <= rating ? 'text-red-500' : 'text-gray-400'}`}
              fill="currentColor"
              onClick={() => setRating(star)}
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.431 8.232 1.182-5.95 5.786 1.406 8.197L12 18.896l-7.356 3.864 1.406-8.197-5.95-5.786 8.232-1.182z" />
            </svg>
          ))}
        </div>
        <button type="submit" className="review-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded block mx-auto">
          Submit
        </button>
      </form>

      <div className="flex flex-col w-full max-w-5xl mx-auto p-4">
    <h3 className="review-label text-center mb-6">Reviews:</h3> {/* Apply the "review-label" class */}

    {/* Grid layout for reviews */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.keys(groupedReviews).reverse().map((key) =>
          groupedReviews[key].length > 0 && (
            groupedReviews[key].map((review, index) => (
              <div key={index} className="rating-item flex flex-col justify-center items-center p-4 rounded-lg shadow-lg bg-gray-800 text-white">
                {/* Display stars for each review */}
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-6 h-6 ${star <= review.rating ? 'text-red-500' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431 8.232 1.182-5.95 5.786 1.406 8.197L12 18.896l-7.356 3.864 1.406-8.197-5.95-5.786 8.232-1.182z" />
                    </svg>
                  ))}
                </div>
                {/* Optional: Add review text or other details here */}
              </div>
            ))
          )
        )}
    </div>
</div>

    </div>
  );
};

export default ReviewComponent;
