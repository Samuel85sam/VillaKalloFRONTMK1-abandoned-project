import * as React from "react";
import { useState, useEffect } from "react";
import Register from "./register";
import Login from "./login";

const LandingPage = () => {
  // Vous utilisez le hook useState pour créer une variable d'état "isRegistered" et une fonction "setIsRegistered" pour gérer cet état. L'initialisez à false.
  const [isRegistered, setIsRegistered] = useState(false);
//Vous définissez une fonction "handleAction" qui sera appelée lorsqu'un bouton est cliqué. Cette fonction met à jour l'état "isRegistered" en inversant sa valeur actuelle.
  const handleAction = function () {
    setIsRegistered(!isRegistered);
  };
//Vous retournez un élément JSX qui contient un bouton. Le texte du bouton est conditionnellement déterminé en fonction de la valeur de "isRegistered". Si "isRegistered" est vrai, le bouton affiche "Register", sinon, il affiche "Login". De plus, vous affichez soit le composant "Login" ou le composant "Register" en fonction de la valeur de "isRegistered".
  return (
    <div>
      <button onClick={handleAction}>
        {isRegistered ? "Register" : "Login"}
      </button>
      {isRegistered ? <Login /> : <Register />}
    </div>
  );
};

export default LandingPage;
