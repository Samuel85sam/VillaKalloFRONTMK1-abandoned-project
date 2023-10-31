import Footer from './static/navBarFooter/footer';
import NavBar from './static/navBarFooter/navBar';
import AppRouter from './routes/router';
import './App.scss'

const App = () => {


  return (
    <div>
      <NavBar />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App
