import ExtraSection from "../ExtraSection/ExtraSection";
import PopularClassSection from "../PopularClassSection/PopularClassSection";
import PopularInstructorSection from "../PopularInstructorSection/PopularInstructorSection";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClassSection></PopularClassSection>
            <PopularInstructorSection></PopularInstructorSection>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;