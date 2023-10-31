import { Outlet } from "react-router-dom";
//TODO: calendrier dispos et bouton "RESERVER"→ redirection vers newReservation
const Reservation = () => {
  return (
    <div className="reservationDiv">
      <h3>Reservation</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore fugiat
        iusto illum. Maiores ut nisi dolore ipsam officia exercitationem saepe
        dignissimos. Dolores animi alias temporibus, rerum dolorum nulla odit
        repellat?
      </p>
      <Outlet />
    </div>
  );
};

export default Reservation;
