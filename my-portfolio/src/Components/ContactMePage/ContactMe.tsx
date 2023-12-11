import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contact-me-container">
      <div className="contact-card">
        <h1 className="profile-card-header">Niro Ravi</h1>
        <img className="contact-me-pic" src="Niro_Ravi.jpg" alt="profile-pic" />
        <h2>
          <i
            className="fa fa-phone"
            style={{ fontSize: "2rem", paddingRight: "1rem" }}
          ></i>
          <span className="fi fi-gb" style={{paddingRight:"1rem"}}></span>+44 7966697272
        </h2>
        <h2>
          <i
            className="fa fa-phone"
            style={{ fontSize: "2rem", paddingRight: "1rem" }}
          ></i>
          <span className="fi fi-ca" style={{paddingRight:"1rem"}}></span>+01 4167353376
        </h2>
        <h2>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://www.linkedin.com/in/niroravi/"
          >
            <i
              className="fa fa-linkedin-square"
              style={{ fontSize: "2rem", paddingRight: "1rem" }}
            ></i>
            www.linkedin.com/in/niroravi
          </a>
        </h2>
        <h2>
          <i
            className="fa fa-envelope"
            style={{ fontSize: "2rem", paddingRight: "1rem" }}
          ></i>
          nirojuderavi@outlook.com
        </h2>
      </div>
    </div>
  );
};

export default ContactMe;
