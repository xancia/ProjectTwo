/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react"
import { NavBar } from "../NavBar"
import Container from "../utility/Container"
import { GameType } from "@/vite-env"
import { useParams } from "react-router-dom"

const GamePage = () => {
  const [gameID,setGameID] = useState('')
  const [game, setGame] = useState<GameType | null>(null)
  const {title} = useParams()
  console.log(title)
 
  const APIKEY = import.meta.env.VITE_RAWG
  async function fetchGameID() {
    const res = await fetch(`https://api.rawg.io/api/games?key=${APIKEY}&search=${title}&page_size=1&page=1`)
    const data = await res.json()
    console.log(data.results[0].id)
    setGameID(data.results[0].id)
  }
  async function fetchGameData() {
    if (gameID){
    const newRes = await fetch(`https://api.rawg.io/api/games/${gameID}?key=${APIKEY}`)
    const gameData = await newRes.json()
    console.log(gameData)
    setGame(gameData)
    } else {
      console.log("game ID not ready yet")
    }
  }

  useEffect(() => {
    fetchGameID()
  }, [])

  useEffect(() => {
    fetchGameData()
  }, [gameID])
  
  


  return (
    <div>
      <NavBar />
      {game && 
      <Container className="pt-20">
        <img src={game.background_image} alt="" />
        <p className="font-bold text-4xl p-4">{game.name}</p>
        <p>Developers: {game.developers.map((dev:any) => (dev.name + ' '))}</p>
        <p>Publishers: {game.publishers.map((publisher:any) => (publisher.name + ' '))}</p>
        <p>Genres: {game.genres.map((genre:any) => (genre.name + ' '))}</p>
        {game.ratings[0]?.title && <p>Rated {game.ratings[0].title} by {game.ratings[0].count} people</p>}
        <p>Available on: {game.platforms.map((platform:any) => (platform.platform.name + ' '))}</p>
        <p className="text-sm">Description: {game.description_raw}</p>
        <p>Tags: {game.tags.map((tag:any) => {
          if(tag.language === 'eng') {
            return <Fragment key={tag.id}><span className="underline">{tag.name}</span> <span></span></Fragment>
          }
        })}</p>
      </Container>}
    </div>
  )
}

export default GamePage