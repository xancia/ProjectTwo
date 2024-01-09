/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

type ReviewsProps = {
  title: string | undefined;
};

const Reviews: React.FC<ReviewsProps> = ({ title }) => {
  const [reviewID, setReviewID] = useState(0);
  const [reviews, setReviews] = useState([]);

  const url = `https://opencritic-api.p.rapidapi.com/game/search?criteria=${title}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_OPENCRITIC,
      "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
    },
  };

  async function fetchReviewID() {
    try {
      const response = await fetch(url, options);
      if (response.status === 429) {
        console.log("Daily limit reached");
        return;
      }
      const result = await response.json();
      const filteredArr = result.filter(
        (game: { name: string }) =>
          game.name.toLowerCase() == title?.toLowerCase()
      );
      if (filteredArr[0]?.id) {
        setReviewID(filteredArr[0].id);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchReviewID();
  }, []);

  const url2 = `https://opencritic-api.p.rapidapi.com/reviews/game/${reviewID}?skip=20`;
  const options2 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_OPENCRITIC,
      "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
    },
  };

  async function fetchReviews() {
    try {
      const response = await fetch(url2, options2);
      const result = await response.json();
      setReviews(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchReviews();
  }, [reviewID]);

  return (
    <div>
      {reviews.length > 1 && (
        <div className="flex justify-center">
          <ReviewCard reviews={reviews} />
        </div>
      )}
    </div>
  );
};

export default Reviews;
