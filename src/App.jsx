import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./sticky/Header";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Locations from "./pages/Locations";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MobileHeader from "./sticky/MobileHeader";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Header />
      <MobileHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Rent />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
