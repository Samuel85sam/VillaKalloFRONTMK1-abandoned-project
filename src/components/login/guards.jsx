
import { Navigate, Outlet } from 'react-router-dom';

const Guards = () => {

    const  authLogin  = localStorage.getItem('token')
    console.log('token récupéré du local storage dans guards ↓↓↓');
    console.log(authLogin);
  
    if (authLogin === undefined) {
      return null; // or loading indicator/spinner/etc
    }
  
    return authLogin 
      //  ? <Outlet />
      //  : <Navigate to="/login"  />;
  }
  


export default Guards;