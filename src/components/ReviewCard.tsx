import { ReviewType } from "@/vite-env";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

type ReviewCardProps = {
  reviews: ReviewType[];
};

const ReviewCard: React.FC<ReviewCardProps> = ({ reviews }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-9/12 md:w-10/12 lg:w-full"
    >
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem
            key={index}
            className="flex items-center justify-center md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="">
                <CardContent className="flex flex-col p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xl text-pink-500">
                        {review.Outlet.name}
                      </p>
                      <p>{review.alias}</p>
                    </div>
                    {review.score && (
                      <span
                        className={`inline-flex items-center justify-center ${
                          review.score >= 80
                            ? "bg-green-500"
                            : review.score >= 60
                            ? "bg-yellow-500"
                            : review.score >= 40
                            ? "bg-orange-500"
                            : "bg-red-500"
                        } w-10 h-10 rounded-full text-white font-bold`}
                      >
                        {review.score}
                      </span>
                    )}
                  </div>

                  <p className="text-xs mt-2">{review.snippet}</p>

                  <Button variant="outline" className="mt-4 w-36" asChild>
                    <a
                      href={review.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Full Review
                    </a>
                  </Button>
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
