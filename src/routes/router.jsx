import { Routes, Route } from "react-router-dom";
import Home from "../components/home/home";
import LandingPage from "../components/login/landingPage";
import Register from "../components/login/register";
import Login from "../components/login/login";
import Reservation from "../components/reservation/reservation";
import Avis from "../components/avis/avis";
import NotFound from "../routes/notFound";
import HomeUser from "../components/home/homeUser";
import HomeAdmin from "../components/home/homeAdmin";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="landingPage" element={<LandingPage />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<LandingPage />}/>
      <Route path="reservation" element={<Reservation />} />
      <Route path="avis" element={<Avis />} />
      <Route path="*" element={<NotFound />} />
      <Route path="homeUser" element={<HomeUser/>} />
      <Route path="homeAdmin" element={<HomeAdmin/>} />
    </Routes>
  );
};

export default AppRouter;
