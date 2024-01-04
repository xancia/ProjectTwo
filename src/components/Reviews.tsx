/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard"

type ReviewsProps = {
    title: string | undefined
  };

const Reviews: React.FC<ReviewsProps> = ({title}) => {
    const [reviewID, setReviewID] = useState(0)
    const [reviews, setReviews] = useState([])

    const url = `https://opencritic-api.p.rapidapi.com/game/search?criteria=${title}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6adda4dea7msh0d84ee148b8b875p14ba25jsn3fd070b06a7c',
            'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
        }
    };

    async function fetchReviewID() {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setReviewID(result[0].id)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchReviewID()
    }, [])

    const url2 = `https://opencritic-api.p.rapidapi.com/reviews/game/${reviewID}?skip=20`;
    const options2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6adda4dea7msh0d84ee148b8b875p14ba25jsn3fd070b06a7c',
            'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
        }
    };

    async function fetchReviews() {
        try {
            const response = await fetch(url2, options2);
            const result = await response.json();
            console.log(result);
            setReviews(result)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
      fetchReviews()
    }, [reviewID])
    
    

  return (
    <div>

        {reviews.length > 1 &&
        <div className="flex justify-center">
        <ReviewCard reviews={reviews}/>
        </div>
        }
    </div>
  )
}

export default Reviews