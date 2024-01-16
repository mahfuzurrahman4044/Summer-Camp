import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

import "aos/dist/aos.css";
import Aos from "aos";
const PopularInstructorSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [popularInstructors, setPopularInstructors] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-server-pied-alpha.vercel.app/instructors")
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
    <div
      className="bg-gradient-to-r from-blue-500 to-cyan-500"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
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
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          {results?.map((result) => (
            <SwiperSlide key={result._id}>
              <h3 className="first-letter:uppercase lg:py-2 lg:text-2xl font-semibold">
                {result.name}
              </h3>
              <img className="rounded-md" src={result.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularInstructorSection;
