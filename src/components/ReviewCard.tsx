import { ReviewType } from "@/vite-env"

type ReviewCardProps = {
    review: ReviewType;
  };

const ReviewCard: React.FC<ReviewCardProps> = ({review}) => {
  return (
    <div>{review.score}</div>
  )
}

export default ReviewCard