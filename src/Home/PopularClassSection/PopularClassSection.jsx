import "./PopularClassSection.css"
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
    fetch("https://summer-camp-server-blue.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setPopularClasses(data);
      });
  }, []);

  const results = popularClasses?.filter(
    (popularClass) => popularClass.type === "popular"
  );

  return (
    <div data-aos="fade-up">
      <SectionTitle title={"Popular Classes"}></SectionTitle>
      <div className="grid lg:grid-cols-3 ms-8">
        {results?.map((result) => (
          <div key={result._id}>
            <div className="card lg:w-96 bg-base-100 shadow-xl mb-4 cardRes">
              <figure className="px-10 pt-10 class">
                <img src={result.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{result.classTitle}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClassSection;
