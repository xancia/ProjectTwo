import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { DealType } from "@/vite-env";


type GameCardProps = {
    deal: DealType;
  };

const GameCard: React.FC<GameCardProps> = ({ deal }) => {
    const formatDate = (unixTimestamp:number) => {
        const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
        const month = date.getMonth() + 1; // getMonth() returns 0-11
        const day = date.getDate();
        const year = date.getFullYear();
      
        return `${month}/${day}/${year}`;
      };

  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardDescription className="relative">
          <img className="max-h-12" src={deal.thumb} alt="game thumb" />{" "}
          <span className="bg-red-500 font-bold text-white absolute top-0 left-0 w-9 h-5">
            -{Math.floor(deal.savings)}%
          </span>
          <span className="flex absolute top-0 right-0">
            <img className="w-5" src="/Metacritic_logo_original.svg" alt="" />{" "}
            <span className="font-bold text-black dark:text-white">
              {deal.metacriticScore}
            </span>
          </span>
        </CardDescription>

        <CardTitle>{deal.title} </CardTitle>
        <CardDescription>Release Date: {formatDate(deal.releaseDate)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-through text-gray-500 text-sm">
          ${deal.normalPrice}
        </p>
        <p className="text-green-500 font-bold text-xl">${deal.salePrice}</p>
        <p>Deal Rating: {deal.dealRating}</p>
      </CardContent>
      <CardFooter>
        {deal.storeID == "1" ? (
          <Button asChild>
            <a
              href={`https://store.steampowered.com/search/?term=${deal.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Steam
            </a>
          </Button>
        ) : (
          ""
        )}{" "}
        {deal.storeID == "2" ? (
          <Button asChild>
            <a
              href={`https://www.gamersgate.com/games/?query=${deal.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GamersGate
            </a>
          </Button>
        ) : (
          ""
        )}{" "}
        {deal.storeID == "3" ? (
          <Button asChild>
            <a
              href={`https://www.greenmangaming.com/search?query=${deal.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GreenManGaming
            </a>
          </Button>
        ) : (
          ""
        )}
      </CardFooter>
    </Card>
  );
};

export default GameCard;
