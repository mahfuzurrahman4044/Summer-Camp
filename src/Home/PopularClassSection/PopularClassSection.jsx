import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useEffect, useState } from "react";
import "./PopularClassSection.css"
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

import "aos/dist/aos.css"
import Aos from "aos";

const PopularClassSection = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    const [popularClasses, setPopularClasses] = useState();
    //   console.log(popularClasses);

    useEffect(() => {
        fetch("http://localhost:5000/classes")
            .then(res => res.json())
            .then(data => {
                setPopularClasses(data);
            });
    }, []);

    const results = popularClasses?.filter(
        popularClass => popularClass.type === "popular"
    );

    return (
        <div data-aos="fade-up">
            <SectionTitle title={"Popular Classes"}></SectionTitle>
            <div className="class my-6" data-aos="fade-up">
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
                    {results?.map(result =>
                        <SwiperSlide key={result._id}>
                            <img className="rounded-md" src={result.img} alt="" />
                            <h3 className="text-2xl font-semibold title">{result.classTitle}</h3>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default PopularClassSection;
