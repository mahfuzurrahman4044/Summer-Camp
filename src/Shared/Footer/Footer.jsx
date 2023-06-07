import logo from "../../assets/Logo/vintage-summer-camp-logo-template-vector.jpg"

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <p>Summer Camp Learning School<br />Providing reliable service since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Sports Training</a>
                    <a className="link link-hover">Excercise</a>
                    <a className="link link-hover">Competetion Joining</a>
                    <a className="link link-hover">Sports Consult</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
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