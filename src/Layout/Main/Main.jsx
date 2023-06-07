import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="border border-1 border-blue-300">
            <div className="sticky">
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;