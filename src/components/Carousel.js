import Slider from "react-slick";
import "./carousel.css";
import image1 from '../photos-and-icons/carousel-images/carousel-image-1.png';
import image2 from '../photos-and-icons/carousel-images/carousel-image-2.png';
import image3 from '../photos-and-icons/carousel-images/carousel-image-3.png';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="carousel-image">
          <img src={image1} />
        </div>
        <div className="carousel-image">
          <img src={image2} />
        </div>
        <div className="carousel-image">
          <img src={image3} />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;