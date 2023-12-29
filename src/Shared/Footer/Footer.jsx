// import { useEffect } from "react";
import logo from "../../assets/Logo/vintage-summer-camp-logo-template-vector.jpg";
// import Aos from "aos";
// import "aos/dist/aos.css";

const Footer = () => {
  //   useEffect(() => {
  //     Aos.init();
  //   }, []);
  return (
    <div>
      <footer
        className="footer lg:p-10 py-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-base-content"
        //   data-aos="fade-up"
        //   data-aos-duration="2000"
      >
        <div className="lg:ps-10">
          <div className="logo lg:ps-0 ps-40">
            <img src={logo} alt="" />
          </div>
          <p className="lg:text-left text-center lg:ps-0 ps-20">
            Summer Camp Learning School
            <br />
            Providing reliable service since 1992
          </p>
        </div>
        <div className="lg:text-left text-center lg:ps-0 ps-36">
          <span className="footer-title">Services</span>
          <a className="link link-hover">Sports Training</a>
          <a className="link link-hover">Excercise</a>
          <a className="link link-hover">Competetion Joining</a>
          <a className="link link-hover">Sports Consult</a>
        </div>
        <div className="lg:text-left text-center lg:ps-0 ps-36">
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="lg:text-left text-center lg:ps-0 ps-36">
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
