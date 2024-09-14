import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./sticky/Header";
import Home from "./pages/Home"
import Rent from "./pages/Rent"
import Locations from "./pages/Locations"
import FAQ from "./pages/FAQ"
import About from "./pages/About"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <div>
      <Header />

      <Router>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Rent />} />
          <Route path="/locations" element={<location />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<about />} />
          <Route path="/contact" element={<contact />} />

        </Routes>

      </Router>
    </div>
  )
}

export default App