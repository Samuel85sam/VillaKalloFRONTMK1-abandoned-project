import { NavLink } from "react-router-dom";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
            
          <Tab to="/reservation" label="Reserver" {...a11yProps(0)} />
          <Tab to="/login" label="Se Connecter" {...a11yProps(1)} />
          <Tab to="/avis" label="Livre d'Or" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <NavTabPanel value={value} index={0}>
        Reserver
      </NavTabPanel>
      <NavTabPanel value={value} index={1}>
        Se Connecter
      </NavTabPanel>
      <NavTabPanel value={value} index={2}>
        Livre d'Or
      </NavTabPanel>
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

