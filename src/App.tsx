import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Reviews from "./components/pages/Reviews"
import DealSearch from "./components/pages/DealSearch"
import Contact from "./components/pages/Contact"

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dealsearch" element={<DealSearch />} />
        <Route path="/dealsearch/:temp" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
