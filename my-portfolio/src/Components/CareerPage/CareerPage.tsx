import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./CareerPage.css";
import Card from "../Common/Card";
import ImageCard from "../Common/ImageCard";

const CareerPage = () => {
  return (
    <div className="careerContainer">
      <CarouselProvider
        className="carousel"
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={3}
        isIntrinsicHeight={true}
      >
        <Slider>
          <Slide index={0}>
            <ImageCard />
          </Slide>
          <Slide index={1}>
            <ImageCard />
          </Slide>
          <Slide index={2}>
            <ImageCard />
          </Slide>
        </Slider>
        <div className="carousel-button-group">
          <ButtonBack className="carousel-button">Back 👈</ButtonBack>
          <ButtonNext className="carousel-button">Next 👉</ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default CareerPage;
