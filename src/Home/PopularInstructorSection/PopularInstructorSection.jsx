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
      className="bg-gradient-to-r from-violet-500 to-fuchsia-500"
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
            <SwiperSlide
              key={result._id}
            >
              <img className="rounded-md" src={result.img} alt="" />
              <h3 className="uppercase lg:text-2xl font-semibold">
                {result.name}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularInstructorSection;