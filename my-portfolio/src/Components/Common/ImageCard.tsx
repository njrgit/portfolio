import { ICareerInfo } from "../../Interfaces/ICareerInfo";
import "./ImageCard.css";

const ImageCard = ({
  CompanyName,
  ImageName,
  JobDescription,
  SkillsUsed,
}: ICareerInfo) => {
  return (
    <div className="card-item">
      <img src={ImageName} alt="img" className="image-card-pic" />
      <div className="text-section">
        <h1 className="image-card-header">{CompanyName}</h1>
        <p className="image-card-text">{JobDescription}</p>
        <h2 className="image-card-header">Skills</h2>
        <p className="image-card-text">{SkillsUsed}</p>
      </div>
    </div>
  );
};

export default ImageCard;
