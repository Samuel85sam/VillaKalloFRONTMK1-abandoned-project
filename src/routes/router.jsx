import Home from "../components/home/home";
import LandingPage from "../components/login/landingPage";
import Register from "../components/login/register";
import Reservation from "../components/reservation/reservation";
import Avis from "../components/avis/avis";
import NotFound from "./notFound";
import HomeUser from "../components/home/homeUser";
import HomeAdmin from "../components/home/homeAdmin";
import "../App.scss";
import { Routes, Route } from "react-router-dom";
import Guards from "../components/login/guards";


const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Guards />}>
        <Route path="homeUser" element={<HomeUser />} />
        <Route path="homeAdmin" element={<HomeAdmin />} />
      </Route>
      <Route path="home" element={<Home />} />
      <Route path="landingPage" element={<LandingPage />} />
      <Route path="register" element={<Register />} />
      <Route path="reservation" element={<Reservation />} />
      <Route path="avis" element={<Avis />} />
      <Route path="*" element={<NotFound />} />
      <Route path="login" element={<LandingPage />} />
    </Routes>
  );
};

export default Router;
