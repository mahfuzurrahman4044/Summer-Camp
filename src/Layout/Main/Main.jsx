import NavBar from "../../Shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="border border-1 border-blue-300">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;