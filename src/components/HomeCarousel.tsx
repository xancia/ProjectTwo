/* eslint-disable react-hooks/exhaustive-deps */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { DealType } from "@/vite-env";
import { Skeleton } from "./ui/skeleton";

const HomeCarousel = () => {
  const [dealData, setDealData] = useState<[] | null>(null);
  const [game, setGame] = useState<string[]>([]);

  const url =
    "https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&desc=0&output=json&steamworks=0&sortBy=Deal%20Rating&AAA=0&pageSize=5&exact=0&upperPrice=50&pageNumber=0&onSale=true&metacritic=85&storeID%5B0%5D=1%2C2%2C3";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_KEY,
      "X-RapidAPI-Host": "cheapshark-game-deals.p.rapidapi.com",
    },
  };

  async function fetchData() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setDealData(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const APIKEY = import.meta.env.VITE_RAWG;

  async function fetchGameID(title: string) {
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${APIKEY}&search=${title}&page_size=1&page=1`
    );
    const data = await res.json();
    return data.results[0].id;
  }

  async function fetchGameData(ID: string) {
    const newRes = await fetch(
      `https://api.rawg.io/api/games/${ID}?key=${APIKEY}`
    );
    const gameData = await newRes.json();
    return gameData.background_image;
  }

  async function getGameImage() {
    if (Array.isArray(dealData)) {
      try {
        const ids = await Promise.all(
          dealData.map((deal: DealType) => fetchGameID(deal.title))
        );

        const gameImages = await Promise.all(
          ids.map((id) => fetchGameData(id))
        );

        setGame(gameImages);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    }
  }

  useEffect(() => {
    getGameImage();
  }, [dealData]);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-56 md:w-96"
    >
      <CarouselContent>
        {Array.isArray(dealData) &&
          dealData.map((deal: DealType, index: number) => (
            <CarouselItem key={index} className="flex items-center">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-between p-0">
                    {game.length > 2 ? <img src={game[index]} alt="game bg" /> : <Skeleton className="w-[180px] h-[100px] md:w-[350px] md:h-[200px] rounded-md m-4" />}

                    <div className="flex justify-between w-full items-center bg-gray-300 dark:bg-slate-800 px-4 py-2">
                      <p className="font-bold">{deal.title}</p>
                      <div className="">
                        <p className="line-through text-gray-500 text-sm">
                          ${deal.normalPrice}
                        </p>
                        <p className="text-green-500 font-bold text-xl">
                          ${deal.salePrice}
                        </p>
                      </div>
                    </div>
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

export default HomeCarousel;
