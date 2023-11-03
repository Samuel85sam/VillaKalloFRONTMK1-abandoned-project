import { Navigate } from 'react-router-dom';

const HomeUser = ({user}) => {
  if (!user){
    return <Navigate to='/home' replace/>
  }
  return (
    <div className="HomeUserDiv">
      <h1>Page Utilisateur</h1>
      <ul>
        <li>Liste des réservations</li>
        <li>liste des locations effectuées + avis</li>
        <li>fenêtre dialogue avec propriétaires</li>
      </ul>
    </div>
  );
};

export default HomeUser