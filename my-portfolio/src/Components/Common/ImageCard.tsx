import { ICareerInfo } from "../../Interfaces/ICareerInfo";
import "./ImageCard.css";

const ImageCard = ({
  CompanyName,
  ImageName,
  JobDescription,
  SkillsUsed,
}: ICareerInfo) => {
  return (
    <div className="image-card-item">
      <img src={ImageName} alt="img" className="image-card-pic" />
      <div className="text-section">
        <h1 className="image-card-company-header">{CompanyName}</h1>
        <p className="image-card-text">{JobDescription}</p>
        <h1 className="image-card-skills-header">Skills</h1>
        <p className="image-card-skills-text">{SkillsUsed}</p>
      </div>
    </div>
  );
};

export default ImageCard;
