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
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setcurrentDealData } from "./utility/currentDealDataSlice";
import StoreButton from "./StoreButton";

type GameCardProps = {
  deal: DealType;
};

const GameCard: React.FC<GameCardProps> = ({ deal }) => {
  const formatDate = (unixTimestamp: number) => {
    const date = new Date(unixTimestamp * 1000);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  };

  const dispatch = useDispatch()

  function handleClick() {
    dispatch(setcurrentDealData(deal))
    localStorage.setItem('currentDeal', JSON.stringify(deal));
  }

  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardDescription className="relative">
          <img className="max-h-12" src={deal.thumb} alt="game thumb" />{" "}
          {Number(deal.dealRating) > 0 && (
            <>
              <span className="bg-red-500 font-bold text-white absolute top-0 left-0 w-9 h-5">
                -{Math.floor(deal.savings)}%
              </span>
            </>
          )}
          <span className="flex absolute top-0 right-0">
            <img className="w-5" src="/Metacritic_logo_original.svg" alt="" />{" "}
            <span className="font-bold text-black dark:text-white ml-1">
              {deal.metacriticScore}
            </span>
          </span>
        </CardDescription>

        <CardTitle>{deal.title} </CardTitle>
        <CardDescription>
          Release Date: {formatDate(deal.releaseDate)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {Number(deal.dealRating) > 0 ? (
          <>
            <p className="line-through text-gray-500 text-sm">
              ${deal.normalPrice}
            </p>
            <p className="text-green-500 font-bold text-xl">
              ${deal.salePrice}
            </p>
            <p>Deal Rating: {deal.dealRating}</p>
          </>
        ) : (
          <>
            <div className="flex">
              <p>No Deals Available </p>{" "}
              <Icon className="ml-1 mt-1" icon="twemoji:anguished-face" />
            </div>
            <p>Current Price is: ${deal.salePrice}</p>
          </>
        )}
      </CardContent>
      <CardFooter className="flex-col items-start">
        <Button variant='outline' className="mb-2" onClick={handleClick} asChild>
            <Link to={`/dealsearch/${deal.title}`}>
                Game Info
            </Link>
        </Button>
        <StoreButton variant="outline" deal={deal}/>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
