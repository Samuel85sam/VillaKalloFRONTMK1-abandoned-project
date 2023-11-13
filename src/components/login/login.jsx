import * as React from "react";
import { useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { PostLoginToApi } from "../../apiCalls/authCalls";

const Login = () => {
  const navigate = useNavigate();

  // État local pour stocker les valeurs des champs du formulaire
  const [inputValue, setInputValue] = useState({
    login: "essai1234",
    password: "essai1234",
  });
  
  const handleChange = (name, value) => {
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
    //Validations et  contrôles de saisie pour garantir que les données sont correctes avant l'envoi
    if (inputValue.login === "") {
      alert("veuillez saisir un nom.");
      return;
    }
    if (inputValue.password === "") {
      alert("veuillez saisir un password.");
      return;
    }
   
    PostLoginToApi(inputValue).then(result => {
      if (result.status === 200) {
        navigate('/homeUser')
        console.log('===> redirection HomeUser');
      } else if (result.status !== 200) {
        navigate('/landing page')
        console.log('====> redirection landing page')
      }
    })
  };

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
        <button type="submit" onClick={handleSubmit}>
          → Connexion →
        </button>
      </form>
    </div>
  );
};

export default Login;


// État local pour déterminer si les données sont prêtes à être envoyées
  // const [readyToSend, isReadyToSend] = useState(false);
  // console.log("inputValues ↓↓↓");
  // console.log(inputValue);
  // Fonction de gestion des changements dans les champs du formulaire

  //isReadyToSend(true); // Définit l'état "readyToSend" sur true pour indiquer que les données sont prêtes à être envoyées au serveur
    // postLogin(inputValue)
//------------------récupération de JWT pour log de l'utilisateur-------------------------

  // Assuming you have obtained the JWT token
  //const jwtToken = "response.json";

  // Set the token in cookies or localStorage
  //Cookies.set("jwtToken", jwtToken); // You can also use localStorage.setItem()

  // Redirect the user to the protected route (e.g., /homeUser)
  // Or handle the redirection as per your app's logic

  //--------------------------------------------------------

  // const postLogin = async (data) => {

  //   const result = await PostLoginToApi(data);
  //   console.log(" inputValue envoyée à postLoginToApi ↓↓↓");
  //   console.log(data);
  //   console.log(`result.status in login ====>${result.status}`);
  //   if (result.status === 200) {
  //     navigate('/homeUser')
  //     console.log('===> redirection HomeUser');
  //   }else if(result.status === !200){
  //   navigate('/landing page')
  //   console.log('====> redirection landing page')
  // }
  // };

  // useEffect(() => {
  //   // Si "readyToSend" est true, alors appeler PostLoginToApi
  //   readyToSend === false ? null : postLogin(inputValue);

  // }, [readyToSend]);

  // État local pour suivre si l'utilisateur est déjà enregistré ou non
  //const [isRegistered, setIsRegistered] = useState(false);