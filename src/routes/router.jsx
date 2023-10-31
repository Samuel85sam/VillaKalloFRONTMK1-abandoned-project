import { Routes, Route } from "react-router-dom";
import Home from "../components/home/home";
import Login from "../components/login/login";
import Reservation from "../components/reservation/reservation";
import Avis from "../components/avis/avis";
import NotFound from "../routes/notFound";
import PageAdmin from "../components/login/pageAdmin";
import Registration from "../components/login/registration";
import NewReservation from "../components/reservation/newReservation";
import UpdateReservation from "../components/reservation/updateReservation";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
              <Route path="registration" element={<Registration />}/>
              <Route path='pageAdmin' element={<PageAdmin/>}/> 
      <Route path="reservation" element={<Reservation />} />
              <Route path="new" element={<NewReservation />}/>
              <Route path='update' element={<UpdateReservation/>}/> 
      <Route path="avis" element={<Avis />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
