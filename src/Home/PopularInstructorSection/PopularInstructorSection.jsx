import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

import "aos/dist/aos.css"
import Aos from "aos";
const PopularInstructorSection = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    const [popularInstructors, setPopularInstructors] = useState([]);

    useEffect(() => {
        fetch("https://summer-camp-server-blue.vercel.app/instructors")
            .then((res) => res.json())
            .then((data) => {
                setPopularInstructors(data);
            })
            .catch((error) => {
                console.log("Error fetching instructors:", error);
            });
    }, []);

    const results = popularInstructors?.filter(
        (popularInstructor) => popularInstructor.type === "popular"
    );

    return (
        <div data-aos="fade-up">
            <SectionTitle title={"Popular Instructors"}></SectionTitle>
            <div className="class" data-aos="fade-up">
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
                    {results?.map((result) => (
                        <SwiperSlide key={result._id}>
                            <img className="rounded-md" src={result.img} alt="" />
                            <h3 className="uppercase text-2xl font-semibold">{result.name}</h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PopularInstructorSection;
