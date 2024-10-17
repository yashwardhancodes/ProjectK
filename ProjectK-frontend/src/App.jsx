import React from "react";
import BookingList from "./component/BookingList";
import BookingForm from "./component/BookingForm";
import Header from "./Header";
import FactsSection from "./component/factsSection";
import AboutUs from "./component/AboutUs";
import ReviewComponent from "./component/ReviewComponent";

function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <FactsSection />
      <BookingList />
      <BookingForm />
      <ReviewComponent listingId={1} /> {/* Pass a valid listingId */}
    </>
  );
}

export default App;
