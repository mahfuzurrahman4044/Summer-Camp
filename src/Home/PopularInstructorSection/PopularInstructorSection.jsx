import { Swiper, SwiperSlide } from "swiper/react";

import logo from "../../assets/Logo/vintage-summer-camp-logo-template-vector.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const PopularInstructorSection = () => {
    return (
        <div>
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={logo} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logo} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logo} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logo} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logo} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logo} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logo} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logo} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={logo} alt="" /></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default PopularInstructorSection;