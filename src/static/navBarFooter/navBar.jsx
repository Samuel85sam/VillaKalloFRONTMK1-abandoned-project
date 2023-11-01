import { Link } from "react-router-dom";
import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//? routing avis+login+resa, villaKollo HOME MENU entête

function NavTabPanel (props)  {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

NavTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default  function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
//! ↓↓↓ REDIRECTION dans les Tab??? to="/reservation"?
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <ul className="flex flex-row">
          <li>
            <Link to="/reservation" className="navBar__link">
              Réservation
            </Link>
          </li>
          <li>
            <Link to="/login" className="navBar__link">
              Mon Compte
            </Link>
          </li>
          <li>
            <Link to="/avis" className="navBar__link">
              Livre d'Or
            </Link>
          </li>
          
        </ul>
      </Box>
      
    </Box>
  );
}
//     return (
//         <section>
//             <div>
//                 <NavLink to=''>VillaKailokairi</NavLink>
//             </div>
//             <nav>
//                 <h2>navBar</h2>
//                 <ul>
//                     <li>
//                         <NavLink to='/avis'> Livre d'Or </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/reservation'> Réserver </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/Login'> se connecter </NavLink>
//                     </li>
//                 </ul>
//             </nav>
//         </section>

//     )
// }

