/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { NavBar } from "../NavBar";
import Container from "../utility/Container";
import { DealType, GameType } from "@/vite-env";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import GameInfo from "../GameInfo";
import { Button } from "../ui/button";
import StoreButton from "../StoreButton";

const GamePage = () => {
  const [gameID, setGameID] = useState("");
  const [game, setGame] = useState<GameType | null>(null);
  const [showText, setShowText] = useState(false);
  const [shortText, setShortText] = useState("");
  const [dealData, setdealData] = useState<DealType | null>(null)
  const { title } = useParams();

  const storedDeal = localStorage.getItem("currentDeal");

  useEffect(() => {
    if (storedDeal) {
      const data = JSON.parse(storedDeal);
      console.log(data)
      setdealData(data)
    }
  }, [])
  
  

  const APIKEY = import.meta.env.VITE_RAWG;
  async function fetchGameID() {
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${APIKEY}&search=${title}&page_size=1&page=1`
    );
    const data = await res.json();
    setGameID(data.results[0].id);
  }
  async function fetchGameData() {
    if (gameID) {
      const newRes = await fetch(
        `https://api.rawg.io/api/games/${gameID}?key=${APIKEY}`
      );
      const gameData = await newRes.json();
      setGame(gameData);
    } else {
      console.log("game ID not ready yet");
    }
  }

  useEffect(() => {
    fetchGameID();
  }, []);

  useEffect(() => {
    fetchGameData();
  }, [gameID]);

  useEffect(() => {
    setShortText(game?.description_raw.slice(0, 200) + "...");
  }, [game]);

  return (
    <div>
      <NavBar />
      {game && (
        <Container className="pt-20">
          <img src={game.background_image} alt="" />
          <div>
            <div className="flex">
              <p className="font-bold text-7xl py-4 text-slate-900 dark:text-white">
                {game.name}
              </p>
              {game.ratings[0]?.title && (
                <div className="p-4 mt-3">
                  <div className="flex">
                    <p className="capitalize font-bold">
                      {game.ratings[0].title}
                    </p>{" "}
                    {game.ratings[0].title === "exceptional" ? (
                      <Icon className="ml-1 mt-1" icon="twemoji:bullseye" />
                    ) : (
                      <Icon
                        className="ml-1 mt-1"
                        icon="twemoji:check-mark-button"
                      />
                    )}
                  </div>
                  <p className="text-gray-500 underline">
                    {game.ratings[0].count} RATINGS
                  </p>
                </div>
              )}
            </div>

            
              {dealData && 
                  <div>
                  <div className="flex">
                  <div className="">
                    <p className="line-through text-gray-500 text-sm">
                      ${dealData.normalPrice}
                    </p>
                    <p className="text-green-500 font-bold text-xl">
                      ${dealData.salePrice}
                    </p>
                  </div>

                  <StoreButton className="ml-2 h-12" deal={dealData}/>
                 </div>

                 </div>}
           

            <div>
              <GameInfo title="Developers" content={game.developers} />
              <GameInfo title="Publishers" content={game.publishers} />
              <GameInfo title="Genres" content={game.genres} />
              <GameInfo title="Available On" content={game.platforms} />
              <GameInfo title="Tags" content={game.tags} />
            </div>
          </div>

          <p className="py-4 font-bold text-2xl">About</p>
          <p className="text-sm py-4 pt-0">
            {showText ? game.description_raw : shortText}{" "}
            <Button className="h-2 w-20" onClick={() => setShowText(!showText)}>
              {showText ? "Hide text" : "Read more"}
            </Button>
          </p>
        </Container>
      )}
    </div>
  );
};

export default GamePage;
