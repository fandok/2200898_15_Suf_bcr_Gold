import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import NavbarComponent from "./components/NavbarComponents/NavbarComponent";
import FooterComponents from "./components/FooterComponents/FooterComponents";
import WhyUsPage from "./pages/WhyUsPage/WhyUsPage";
import TestimonialPage from "./pages/TestimonialPage/TestimonialPage";
import FaqPage from "./pages/FAQPage/FaqPage";
import HasilPencarianPage from "./pages/HasilPencarianPage/HasilPencarianPage";
import DetailMobilPage from "./pages/DetailMobilPage/DetailMobilPage";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/whyus" Component={WhyUsPage}></Route>
        <Route path="/testimonial" Component={TestimonialPage}></Route>
        <Route path="/faq" Component={FaqPage}></Route>
        <Route path="/search" Component={SearchPage}></Route>
        <Route path="/hasil-pencarian" Component={HasilPencarianPage}></Route>
        <Route path="/detail-mobil" Component={DetailMobilPage}></Route>
      </Routes>

      <FooterComponents />
    </div>
  );
}

export default App;
