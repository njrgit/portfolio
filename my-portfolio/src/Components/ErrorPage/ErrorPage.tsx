import ParticlesBg from "particles-bg";
import "./ErrorPage.css";
import NavBar from "../Navigation/NavBar";

const ErrorPage = () => {
  return (
    <div>
      <ParticlesBg type="thick" bg={true} />
      <NavBar />
      <div className="errorMessageDiv">
        <div className="errorContent">
          <h1>
            Oops, this page does not exist. Please navigate to another page
          </h1>
          <h1>⛔</h1>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
