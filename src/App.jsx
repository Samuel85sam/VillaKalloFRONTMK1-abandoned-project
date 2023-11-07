import Footer from "./shared/footer";
import Router from "./routes/router";
import Navigation from "./shared/navBar";

const App = () => {
  return (
    <>
      <Navigation />
      <Router />
      <Footer />
    </>
  );
};

export default App;
