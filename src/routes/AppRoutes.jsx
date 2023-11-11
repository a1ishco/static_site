import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import Portfolio from "../pages/Portfolio/Portfolio";
import Login from "../pages/Portfolio/Components/Login";
import ContactPortfolio from "../pages/Portfolio/Components/Contact";
import Otp from "../pages/Portfolio/Components/Otp";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio/" element={<Portfolio />} />
      <Route path="/portfolio/component/login" element={<Login />} />
      <Route path="/portfolio/component/contact" element={<ContactPortfolio />} />
      <Route path="/portfolio/component/otp" element={<Otp />} />


      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
