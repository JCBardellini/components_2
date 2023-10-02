import React, { useState } from "react";
import "./index.css";

const RateReview = () => {
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div id="rate-container">
      <button>Submit</button>
    </div>
  );
};

export default RateReview;
