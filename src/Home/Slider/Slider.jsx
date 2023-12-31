import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/Slider/Boys-playing-ball-outside-robert-collins-333411.png";
import img2 from "../../assets/Slider/familysportsvacation.jpg";
import img3 from "../../assets/Slider/iStock-1161534983_1629035673563_162903568695.jpg";
import img4 from "../../assets/Slider/Melbourne_Stars_Super_Squad_School_Holiday_Program_April2023_Academy_Kids_Clinic-5.jpg";
import img5 from "../../assets/Slider/shutterstock-522863668___08084416583.jpg";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Slider = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Carousel className="lg:px-56 lg:py-5 slideRes bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="slider-img" data-aos="zoom-in" data-aos-duration="3000">
        <img className="rounded-md" src={img1} />
      </div>
      <div className="slider-img" data-aos="zoom-in" data-aos-duration="3000">
        <img className="rounded-md" src={img2} />
      </div>
      <div className="slider-img" data-aos="zoom-in" data-aos-duration="3000">
        <img className="rounded-md" src={img3} />
      </div>
      <div className="slider-img" data-aos="zoom-in" data-aos-duration="3000">
        <img className="rounded-md" src={img4} />
      </div>
      <div className="slider-img" data-aos="zoom-in" data-aos-duration="3000">
        <img className="rounded-md" src={img5} />
      </div>
    </Carousel>
  );
};

export default Slider;
