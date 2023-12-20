import GameCard from "../GameCard"
import { NavBar } from "../NavBar"
import { Input } from "../ui/input"
import Container from "../utility/Container"
import { Button } from "../ui/button"

const DealSearch = () => {
  return (
    <div>
        <NavBar />
        <Container className="pt-28">
            <div className="flex">
                <Input type="text" placeholder="Type a game name"/>
                <Button type="submit">Search</Button>
            </div>

            <div className="mt-10">
                <p>Check Out These Hot Deals!</p>
                <GameCard />
            </div>
        </Container>
    </div>
  )
}

export default DealSearch