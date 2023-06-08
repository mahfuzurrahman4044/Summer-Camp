import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useEffect, useState } from "react";
import "./PopularClassSection.css"

const PopularClassSection = () => {
  const [popularClasses, setPopularClasses] = useState();
  console.log(popularClasses);

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
    <div className="class my-6">
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
        {results?.map(result => (
          <SwiperSlide key={result.id}>
            <img src={result.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularClassSection;
