import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Reviews from "./components/pages/Reviews"

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:temp" element={<Reviews />} />
      </Routes>
    </>
  )
}

export default App
