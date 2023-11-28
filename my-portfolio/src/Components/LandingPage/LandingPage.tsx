import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="appHeaderContainer">
      <Link to={`/home`}>
        <img className="profilePic pointer" src="NR.png" alt="profilePicture" />
      </Link>
    </div>
  );
};

export default LandingPage;
