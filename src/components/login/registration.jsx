import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";


const Registration = () => {
  return (
    <div className="RegistrationDiv">
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
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
        />

        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Profil Admin"
        />
        <TextField
          id="outlined-password-input"
          label="AdminKeyWord"
          type="password"
          autoComplete="current-password"
        />
      </Box>
    </div>
  );
};

export default Registration;
