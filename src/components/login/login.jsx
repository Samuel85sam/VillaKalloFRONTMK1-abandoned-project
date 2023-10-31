import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { NavLink } from "react-router-dom";
/* <TODO>
  → formulaire de resitration user
  → formulaire de resitration admin
  → Sign-in user
  → Sign-in admin
              → gestion users 
</TODO> */

const Login = () => {
  return (
    <div className="LoginDiv">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="logName" label="Login" variant="outlined" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </Box>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea optio,
        aspernatur similique magni facere quibusdam, doloribus quaerat non
        laboriosam et laudantium eum temporibus rerum voluptas asperiores
        eligendi quisquam autem nesciunt?
      </p>
      <div className="newLogin">
        <NavLink to="/registration"> Créer un Compte</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Login;
