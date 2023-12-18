import Card from "../Common/Card";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <div className="profileFacePicGridItem">
        <img src="Niro_Ravi.jpg" alt="profilePic" className="profileFacePic" />
      </div>
      <div className="grid-item">
        <Card
          header={`A little bit about me....💁`}
          text={`I'm Niro, a software engineer from London, England, who has been lucky enough to apply their trade both in North America and Europe. 💻
          \nAlongside techonology, I have a an active intrest in travelling, visiting different places in the world and learning about their cultures.I've had the priviledge of visiting different parts of North America, Europe, Asia and Africa. The aim in the next couple years would be to complete all of the habitable continets. 🌍
          \nSport and competition is something I am extremly fond of. Having played many sports such as rugby, football and badminton, I enjoy all aspects of sport, from the team camaraderie to the motivation as an individual to improve and be their best version. 🏉⚽
          \nMany of these values I try to apply in my everyday life, including my mindset when it comes to technology and work by always keeping myself updated on the new releases and features whilst taking the time to practice these in my personal projects. 🎓
          \nIf you want to know more about me, don't be afraid to reach out 👋`}
        />
      </div>
    </div>
  );
};

export default AboutMe;
