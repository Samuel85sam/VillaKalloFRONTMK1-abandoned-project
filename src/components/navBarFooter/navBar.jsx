import { Link, NavLink } from "react-router-dom";

//? routing avis+login+resa, villaKollo HOME MENU entête


const NavBar = () => {

    return (
        <section>
            <div>
                <NavLink to=''>VillaKailokairi</NavLink>
            </div>
            <nav>
                <h2>navBar</h2>
                <ul>
                    <li>
                        <NavLink to='/avis'> Livre d'Or </NavLink>
                    </li>
                    <li>
                        <NavLink to='/reservation'> Réserver </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Login'> se connecter </NavLink>
                    </li>
                </ul>
            </nav>
        </section>
        
        
    )
}

export default NavBar