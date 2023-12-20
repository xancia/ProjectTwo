/* eslint-disable react-hooks/exhaustive-deps */
import GameCard from "../GameCard";
import { NavBar } from "../NavBar";
import { Input } from "../ui/input";
import Container from "../utility/Container";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setdealData } from "../utility/dealDataSlice";
import { useEffect, useState } from "react";
import { DealType } from "@/vite-env";
import { RootState } from "../utility/store";

const DealSearch = () => {
  const dealData = useSelector((state: RootState) => state.dealData as DealType[] | null);
  const dispatch = useDispatch();
  const [searching, setSearching] = useState(false)
  const [input, setinput] = useState("")

  const url =
    "https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&desc=0&output=json&steamworks=0&sortBy=Deal%20Rating&AAA=0&pageSize=20&exact=0&upperPrice=50&pageNumber=0&onSale=true&metacritic=70&storeID%5B0%5D=1%2C2%2C3";
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
      console.log(result);
      dispatch(setdealData(result))
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const url2 = `https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&title=${input}&desc=0&output=json&steamworks=0&sortBy=Deal%20Rating&AAA=0&pageSize=20&exact=0&upperPrice=50&pageNumber=0&onSale=true&storeID%5B0%5D=1%2C2%2C3`;
  const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_KEY,
		'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
	}
};

    async function fetchSearched() {
        try {
            const response = await fetch(url2, options2);
            const result = await response.json();
            console.log(result);
            dispatch(setdealData(result))

        } catch (error) {
            console.error(error);
        }
    }


    function handleSubmit() {
        setSearching(true)
        fetchSearched()
    }
  

  return (
    <div className="bg-gray-50 dark:bg-slate-950">
      <NavBar />
      <Container className="pt-28">
        <div className="flex">
          <Input type="text" placeholder="Search for a specific game" value={input} onChange={(e) => setinput(e.target.value)}/>
          <Button type="submit" onClick={handleSubmit}>Search</Button>
        </div>

        <div className="mt-10">
          {searching ? <p className="text-center font-bold text-3xl p-4 capitalize">the Best Deals for: {input}</p> : <p className="text-center font-bold text-3xl p-4">Check Out These Hot Deals!</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-10">
            {dealData && dealData.map((deal:DealType) => (
                <GameCard key={deal.dealID} deal={deal}/>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DealSearch;
