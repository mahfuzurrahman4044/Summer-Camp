import logo from "../../assets/Logo/vintage-summer-camp-logo-template-vector.jpg";
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="footer lg:p-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-base-content">
        <div className="lg:ps-32">
          <div className="logo lg:ps-16 ps-0 relative lg:right-0 right-20">
            <img src={logo} alt="" />
          </div>
          <p className=" text-center lg:ps-0 ps-20">
            Summer Camp Learning School
            <br />
            Providing reliable service since 1992
          </p>
        </div>
        <div className="text-center lg:ps-0 ps-36">
          <span className="lg:text-xl font-semibold">Services</span>
          <a className="link link-hover text-center">Sports Training</a>
          <a className="link link-hover">Excercise</a>
          <a className="link link-hover">Competetion Joining</a>
          <a className="link link-hover">Sports Consult</a>
        </div>
        <div className="text-center lg:ps-0 ps-36">
          <span className="lg:text-xl font-semibold">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="text-center lg:ps-0 ps-36">
          <span className="lg:text-xl font-semibold">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
