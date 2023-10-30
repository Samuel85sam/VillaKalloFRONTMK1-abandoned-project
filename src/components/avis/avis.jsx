import { Outlet } from "react-router-dom";

//?Afficher liste,formulaire
const Avis = () => {

    return (
        <div>
            <h3>Avis</h3>
            <Outlet />
        </div>



    )
}

export default Avis