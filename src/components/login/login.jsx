import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


const Login = () => {

  // État local pour stocker les valeurs des champs du formulaire
  const [inputValue, setInputValue] = useState({
    login: "TestLogin",
    password: "testPassword",
  });


  // État local pour déterminer si les données sont prêtes à être envoyées
  const [readyToSend, isReadyToSend] = useState(false);
  console.log("inputValues ↓↓↓");
  console.log(inputValue);


  // Fonction de gestion des changements dans les champs du formulaire
  const handleChange = (name, value) => {
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };


  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)

    //Validations et  contrôles de saisie pour garantir que les données sont correctes avant l'envoi

    if (inputValue.loginName === '') {
      alert('veuillez saisir un nom.');
      return;
    }
    if (inputValue.password === '') {
      alert('veuillez saisir un password.');
      return;
    }

    isReadyToSend(true); // Définit l'état "readyToSend" sur true pour indiquer que les données sont prêtes à être envoyées au serveur
  };

  const navigate = useNavigate();

  // Fonction pour envoyer les données au serveur via Axios
  const PostToApi = (inputValue) => {
    console.log('input values (envoyées à DB)↓↓↓');
    console.log(inputValue);
    axios.post("http://localhost:3000/api/auth/login", inputValue).then(function (response) {
      if(response.status == 200){
         localStorage.setItem("token", response.data.token)//sauvegarde du token dans le localStorage
         console.log('token récupéré↓↓↓');
         console.log(response);
         navigate('/homeUser');
      }
    })
     
  .catch(function (error) {
    console.log("error", error);
    //handle error here
  });
 
  //------------------récupération de JWT pour log de l'utilisateur-------------------------

// Assuming you have obtained the JWT token
const jwtToken = 'response.json';

// Set the token in cookies or localStorage
Cookies.set('jwtToken', jwtToken); // You can also use localStorage.setItem()

// Redirect the user to the protected route (e.g., /homeUser)
// Or handle the redirection as per your app's logic

  //--------------------------------------------------------

  }

  useEffect(() => {
    // Si "readyToSend" est true, alors appeler PostToApi
readyToSend === false ? null : PostToApi(inputValue);
console.log('envoi inputValue envoyée à postToApi ↓↓↓');
console.log(inputValue);
}, [readyToSend]);

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
        <button type="submit" onClick={handleSubmit}>→ Login →</button>
      </form>
    </div>
  );
};

export default Login;