import "./Slider.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/Slider/99491480.webp"
import img2 from "../../assets/Slider/7-2.jpg"
import img3 from "../../assets/Slider/shutterstock-522863668___08084416583.webp"
import img4 from "../../assets/Slider/5cd0a845-aede-4dcf-9a5f-1433e97f89a9-large16x9_cAMP.webp"
import img5 from "../../assets/Slider/IMG_7453.jpg"

import "aos/dist/aos.css"
import { useEffect } from "react";
import Aos from "aos";

const Slider = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <Carousel className="mx-5 slideRes" data-aos="fade-up">
            <div className="slider-img">
                <img className="rounded-md" src={img1} />
            </div>
            <div className="slider-img">
                <img className="rounded-md" src={img2} />
            </div>
            <div className="slider-img">
                <img className="rounded-md" src={img3} />
            </div>
            <div className="slider-img">
                <img className="rounded-md" src={img4} />
            </div>
            <div className="slider-img">
                <img className="rounded-md" src={img5} />
            </div>
        </Carousel>
    );
};

export default Slider;
