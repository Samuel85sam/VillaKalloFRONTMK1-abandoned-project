import axios from 'axios';
//! ↑ lire doc d'axios!!!

export const PostLoginToApi = async (data) => {
  
        axios.post("http://localhost:3000/api/auth/login", data).then(function (response) {
          if(response.status == 200){
             localStorage.setItem("token", response.data.token)//sauvegarde du token dans le localStorage
             return response.status;
             console.log('token récupéré↓↓↓');
             console.log(response);
          }
        })
        .catch(function (error) {
            console.log("error", error);
            //handle error here
          });
}