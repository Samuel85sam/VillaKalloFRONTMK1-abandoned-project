import axios from "axios";
//! ↑ lire doc d'axios!!!

export const PostLoginToApi = async (data) => {
  // Fonction pour, lors d'un login, envoyer les données au serveur via Axios
  try {
    const response = await axios.post("http://localhost:3000/api/auth/login", data);
    if (response.status == 200) {
      console.log('token récupéré et enregistré');
        localStorage.setItem("token", response.data.token); //sauvegarde du token dans le localStorage
        // console.log("token récupéré↓↓↓");
        // console.log(response.data.token);
        console.log('response.status↓↓↓');
        console.log(response.status);
        return response;
        
      } else {
        return console.log('!!!===>log fail!!!');;
        
      }
    } catch (err) {
      console.error(err);
    }
    
      // info:
      // 200: OK
      // 201: Created
      // 204: No Content
      // 400: Bad Request
      // 404: Not Found
      // 500: Internal Server Error
   
    
};




// import axios from "axios";
// //! ↑ lire doc d'axios!!!

// export const PostLoginToApi = async (data) => {

//   // Fonction pour, lors d'un login, envoyer les données au serveur via Axios
//   axios
//     .post("http://localhost:3000/api/auth/login", data)
//     .then(function (response) {
//       if (response.status == 200) {
//         localStorage.setItem("token", response.data.token); //sauvegarde du token dans le localStorage
//         // console.log("token récupéré↓↓↓");
//         // console.log(response.data.token);
//         // console.log('response.status↓↓↓');
//         console.log(response.status);
//         return response.status;
//         //! doit normalement retourner qqch ds login.jsx ligne 58???
//       }
    
//       // info:
//       // 200: OK
//       // 201: Created
//       // 204: No Content
//       // 400: Bad Request
//       // 404: Not Found
//       // 500: Internal Server Error
   
//     })
//     .catch(function (error) {
//       console.log("POST LOGIN FAILED!!!===>", error);
//       //handle error here
//     });
// };
