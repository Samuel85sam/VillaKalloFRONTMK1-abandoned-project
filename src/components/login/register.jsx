import * as React from "react";
import axios from "axios";
import Login from "./login";
import { useState, useEffect } from "react";

const Register = (props) => {

  // État local pour stocker les valeurs du formulaire
  const [inputValue, setInputValue] = useState({
    nom: "nomTest",
    prenom: "prenomTest",
    tel: "0123456789",
    email: "mail@test",
    password: "passwordTest",
  });


  // État local pour déterminer si les données sont prêtes à être envoyées
  const [readyToSend, isReadyToSend] = useState(false);
  console.log("inputValues ↓↓↓");
  console.log(inputValue);


  // Fonction pour mettre à jour les valeurs du formulaire en fonction du nom du champ
  const handleChange = (name, value) => {
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };


  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)

      //Validations et  contrôles de saisie pour garantir que les données sont correctes avant l'envoi
    if(inputValue.nom ===''){
      alert('veuillez saisir un nom.');
      return;
    }
    if(inputValue.prenom ===''){
      alert('veuillez saisir un prenom.');
      return;
    }
    if(inputValue.tel ===''){
      alert('veuillez saisir un tel.');
      return;
    }
    if(inputValue.email ===''){
      alert('veuillez saisir une adresse email.');
      return;
    }
    if(inputValue.password ===''){
      alert('veuillez saisir un password.');
      return;
    }


    isReadyToSend(true); // Définit l'état "readyToSend" sur true pour indiquer que les données sont prêtes à être envoyées au serveur
  };


  // Fonction pour envoyer les données au serveur via Axios
  const PostToApi = (inputValue) => {
    axios.post("http://localhost:3002/api/auth/register", inputValue);
  };

  useEffect(() => {
        // Si "readyToSend" est true, alors appelez PostToApi
    readyToSend === false ? null : PostToApi();
  }, [readyToSend]);

  return (
    <div className="RegistrationDiv">
      <form>
      <label htmlFor="nom">Nom :</label>
        <input
          label="nom"
          type="text"
          name="nom"
          className="input"
          value={inputValue.nom}
          onChange={(e) => handleChange("nom", e.target.value)}
        />
        <label htmlFor="prenom">Prenom :</label>
        <input
          label="prenom"
          type="text"
          name="prenom"
          className="input"
          value={inputValue.prenom}
          onChange={(e) => handleChange("prenom", e.target.value)}
        />
        <label htmlFor="tel">Tel :</label>
        <input
          label="tel"
          type="text"
          name="tel"
          className="input"
          value={inputValue.tel}
          onChange={(e) => handleChange("tel", e.target.value)}
        />
        <label htmlFor="email">Email :</label>
        <input
          label="Email"
          type="text"
          name="email"
          className="input"
          value={inputValue.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <label htmlFor="password">Password :</label>
        <input
          label="Password"
          type="password"
          name="password"
          className="input"
          value={inputValue.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
