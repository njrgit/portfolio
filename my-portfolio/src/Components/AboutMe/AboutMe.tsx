import Card from "../Common/Card";
import "./AboutMe.css";

const AboutMe = () =>
{

  const defaultText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo earum sunt error distinctio dolorem et, nobis delectus reprehenderit, ipsa corporis ipsam. Rem quas ipsum rerum est, aspernatur quibusdam ducimus dolorum!`;

  return (
    <div className="aboutMeContainer">
      <div className="profileFacePicGridItem">
        <img src="Niro_Ravi.jpg" alt="profilePic" className="profileFacePic" />
      </div>
      <div className="grid-item">
        <Card header={`Who ? 💁`} text={defaultText} />
      </div>
      <div className="grid-item">
        <Card header={`What ? 🔍`} text={defaultText} />
      </div>
      <div className="grid-item">
        <Card header={`When ? 📅`} text={defaultText} />
      </div>
      <div className="grid-item">
        <Card header={`Where ? 🌍`} text={defaultText} />
      </div>
      <div className="grid-item-last">
        <Card header={`Why ? 🕵`} text={defaultText} />
      </div>
    </div>
  );
};

export default AboutMe;
