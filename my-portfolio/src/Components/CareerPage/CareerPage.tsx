import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./CareerPage.css";
import ImageCard from "../Common/ImageCard";
import { CareerHistory } from "../../Data/work_history";

const CareerPage = () => {
  const listOfHistory = CareerHistory.map((work, index) => {
    return (
      <Slide index={index}>
        <ImageCard
          CompanyName={work.CompanyName}
          ImageName={work.ImageName}
          JobDescription={work.JobDescription}
          SkillsUsed={work.SkillsUsed}
        />
      </Slide>
    );
  });

  return (
    <div className="careerContainer">
      <CarouselProvider
        className="carousel"
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={3}
        isIntrinsicHeight={true}
      >
        <Slider>{listOfHistory}</Slider>
        <div className="carousel-button-group">
          <ButtonBack className="carousel-button">Back 👈</ButtonBack>
          <ButtonNext className="carousel-button">Next 👉</ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default CareerPage;
