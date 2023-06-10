import img1 from "../../assets/Review/cb1b6fa6-3e27-42e8-81a5-58fe53a89799.jpeg"
import img2 from "../../assets/Review/successful-college-student-lg.png"
import img3 from "../../assets/Review/91468731.webp"
import "./ExtraSection.css"

import "aos/dist/aos.css"
import { useEffect } from "react";
import Aos from "aos";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const ExtraSection = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="bg-base-200 py-5" data-aos="fade-up">
            <SectionTitle title={"Review"}></SectionTitle>
            <div className="py-5 lg:flex justify-around items-center extra-section">
                <div className="card w-96 bg-base-100 shadow-xl card">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-left">
                        <h2>
                            The Summer Camp service exceeded my expectations in every way. The staff members were friendly, attentive, and knowledgeable, ensuring a safe and enjoyable experience for my child. The wide range of co-curricular activities provided a great opportunity for skill development and making new friends. So that is why, I am Highly recommending to all!
                        </h2>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl card">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-left">
                        <h2>
                            While the Summer Camp service provided a decent experience overall, there were a few areas that could be improved. The organization could offer more structured and diverse activities to cater to different interests. Additionally, clearer communication regarding schedules and any changes would enhance the overall customer experience.
                        </h2>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl card">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-left">
                        <h2>
                            I had a mixed experience with the Summer Camp service. On the positive side, the staff members were enthusiastic and supportive, creating a welcoming environment for the children. However, I felt that the activities offered were somewhat limited, and the organization could benefit from incorporating more creative and engaging options for the campers.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;
