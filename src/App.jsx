
import './App.scss'
import NavBar from './components/navBarFooter/navBar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import Reservation from './components/reservation/reservation';
import Avis from './components/avis/avis';
import Footer from './components/navBarFooter/footer';
import NotFound from './routes/notFound';


const App = () => {

  // const routes = useRoutes(appRouter)

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path="reservation" element={<Reservation />}/>
        <Route path="avis" element={<Avis />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Home />
      <Footer />
    </div>
  )
}

export default App
