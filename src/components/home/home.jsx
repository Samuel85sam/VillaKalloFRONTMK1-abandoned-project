import { Outlet } from "react-router-dom";
{
  /* <TODO> 
  
  → choix langues
  → carousel
  → aperçu reservation deux calendars
  → sections contenu + ancres
  → 
</TODO> */
}
const Home = () => {
  return (
    <section className="HomeSection">
      <h1>HomePage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil libero
        sequi provident dolorem aperiam, reprehenderit hic quisquam aspernatur
        quos ea modi iure commodi asperiores laborum ipsum tempora? Quasi,
        similique soluta!
      </p>
      <Outlet />
    </section>
  );
};

export default Home;
