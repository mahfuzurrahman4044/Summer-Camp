import "./PopularClassSection.css";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import "./PopularClassSection.css";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

import "aos/dist/aos.css";
import Aos from "aos";

const PopularClassSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [popularClasses, setPopularClasses] = useState();
  //   console.log(popularClasses);

  useEffect(() => {
    fetch("https://summer-camp-server-pied-alpha.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setPopularClasses(data);
      });
  }, []);

  const results = popularClasses?.filter(
    (popularClass) =>
      popularClass.type === "popular" && popularClass.status === "Approved"
  );

  return (
    <div
      className="bg-gradient-to-r from-blue-500 to-cyan-500 popularClass"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <SectionTitle title={"Popular Classes"}></SectionTitle>
      <div className="grid lg:grid-cols-3 lg:ps-7 ps-16">
        {results?.map((result) => (
          <div
            data-aos="flip-left"
            data-aos-duration="2000"
            className="lg:mb-5"
            key={result._id}
          >
            <div className="card lg:w-96 bg-gradient-to-r from-blue-600 to-cyan-400 p-2 rounded-md shadow-xl mb-4 cardRes">
              <figure className="px-10 pt-10 class">
                <img src={result.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{result.classTitle}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClassSection;