import * as React from "react";
import { useState } from "react";


const Login = () => {
  // État local pour stocker les valeurs des champs du formulaire
  const [inputValue, setInputValue] = useState({
    login: "TestLogin",
    password: "testPassword",
  });

  console.log("inputValues ↓↓↓");
  console.log(inputValue);

  // Fonction de gestion des changements dans les champs du formulaire
  const handleChange = (name, value) => {
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };
  
  // État local pour suivre si l'utilisateur est déjà enregistré ou non
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="LoginDiv">
      <form>
      <label htmlFor="Login">Login :</label>
        <input
          label="Login"
          type="text"
          name="login"
          className="input"
          value={inputValue.login}
          onChange={(e) => handleChange("login", e.target.value)}
        />
        <label htmlFor="noPasswordm">Password :</label>
        <input
          label="Password"
          type="password"
          name="password"
          className="input"
          value={inputValue.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <button type="submit">→ Login →</button>
      </form>
    </div>
  );
};

export default Login;
