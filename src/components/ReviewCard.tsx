import { ReviewType } from "@/vite-env";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"

type ReviewCardProps = {
  reviews: ReviewType[];
};

const ReviewCard: React.FC<ReviewCardProps> = ({ reviews }) => {
  return (
    <Carousel
    opts={{
      align: "start",
    }}
    className="w-10/12"
  >
    <CarouselContent>
      {reviews.map((review, index) => (
        <CarouselItem key={index} className="flex items-center md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-sm font-semibold">{review.snippet}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  );
};

export default ReviewCard;
