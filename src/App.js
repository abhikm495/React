import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/homepage/HomePage";
import Privacy from "./pages/privacy/Privacy";
import TermsAndConditions from "./pages/termsAndConditions/TermsAndConditions";
import Shipping from "./pages/shipping/Shipping";
import Refund from "./pages/refund/Refund";
import AboutUs from "./pages/aboutus/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/privacy-policy" element={<Privacy />}></Route>
          <Route
            path="/term-conditions"
            element={<TermsAndConditions />}
          ></Route>
          <Route path="/shipping-policy" element={<Shipping />}></Route>
          <Route path="/refund-policy" element={<Refund />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
