import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const PopularInstructorSection = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/instructors")
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
        <div>
            <SectionTitle title={"Popular Instructors"}></SectionTitle>
            <div className="class">
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
                        <SwiperSlide key={result.id}>
                            <img src={result.img} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PopularInstructorSection;
