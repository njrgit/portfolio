import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./CareerPage.css";

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
            <img src="Niro_Ravi.jpg" alt="" />
          </Slide>
          <Slide index={1}>
            <img src="map.jpg" alt="" />
          </Slide>
          <Slide index={2}>
            <img src="NR.png" alt="" />
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default CareerPage;
