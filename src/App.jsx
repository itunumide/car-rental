import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./sticky/Header";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Locations from "./pages/Locations";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Checkout from "./pages/checkout/Checkout";
import MobileHeader from "./sticky/MobileHeader";
import Cart from "./pages/Cart";
import LoginPlaceholder from "./pages/forgotPasswordModals/LoginPlaceholder"
import UseVerificationFlow from './pages/verifyAccount/UseVerificationFlow';
import VerificationCode from "./pages/verifyAccount/VerificationCode";
import VerificationSuccess from "./pages/verifyAccount/VerificationSuccess";
import NotFound from "./pages/NotFound";
import Footer from "./sticky/Footer";


const App = () => {
  const { email, handleVerificationSent, handleVerificationSuccess, handleLoginRedirect } = UseVerificationFlow();
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
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        {/* temporary Login Route */}
        <Route path="/login-placeholder" element={<LoginPlaceholder />} />
        <Route path="/verify-account" element={<VerificationCode email={email} onVerificationSuccess={handleVerificationSuccess} />} />
        <Route path="/verification-success" element={<VerificationSuccess onLoginRedirect={handleLoginRedirect} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     <Footer />
    </Router>
  );
};

export default App;