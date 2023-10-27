import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
