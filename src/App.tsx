import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import GamePage from "./components/pages/GamePage"
import DealSearch from "./components/pages/DealSearch"
import Contact from "./components/pages/Contact"

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dealsearch" element={<DealSearch />} />
        <Route path="/gamepage" element={<GamePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
