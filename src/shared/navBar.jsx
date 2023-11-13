import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <div className="divNav">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="">HOME</Link>
        <br />
        <Link to="/landingPage">LOGIN</Link>
        <br />
        <Link to="/reservation">RESERVATION</Link>
        <br />
        <Link to="/avis">LIVRE D'OR</Link>
        <br />
      </nav>
    </div>
  );
};
export default Navigation;
