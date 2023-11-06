import Footer from './shared/navBarFooter/footer';
import Home from "./components/home/home";
import LandingPage from "./components/login/landingPage";
import Register from "./components/login/register";
import Reservation from "./components/reservation/reservation";
import Avis from "./components/avis/avis";
import NotFound from "./routes/notFound";
import HomeUser from "./components/home/homeUser";
import HomeAdmin from "./components/home/homeAdmin";
import './App.scss'
import { Routes, Route, Link } from "react-router-dom";
import PrivateRoute from './components/login/guards';
import Guards from './components/login/guards';


const App = () => {



  return (
    <>
      

      <Navigation />

      <Routes>
        <Route path="" element={<Guards/>} >
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
      <Footer />
    </>
  );
};

const Navigation = () => {

  return (
    <div className='divNav'>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/home">HOME</Link><br />
        <Link to="/landingPage">LOGIN</Link><br />
        <Link to="/reservation">RESERVATION</Link><br />
        <Link to="/avis">LIVRE D'OR</Link><br />
      </nav>
    </div>
  )
}

export default App
