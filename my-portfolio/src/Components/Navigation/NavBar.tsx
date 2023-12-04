import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to={``} className="ml2">
        <img src="NR.png" alt="nr-logo" className="nr-logo" />
      </Link>
      <Link to={`/AboutMe`} className="nav-links nav-links-to-end link dim">
        About Me
      </Link>
      <Link to={`/Contact`} className="nav-links link dim">
        Career
      </Link>
      <Link to={`/Projects`} className="nav-links link dim">
        Projects
      </Link>
      <Link to={`/Blog`} className="nav-links link dim">
        Blog
      </Link>
      <Link to={`/Contact`} className="nav-links link dim">
        Contact Me
      </Link>
    </div>
  );
};

export default NavBar;
