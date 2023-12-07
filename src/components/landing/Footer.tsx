import Logo from "../../assets/Logo.png";
import IconFacebook from "../../assets/icon_facebook.png";
import IconInstagram from "../../assets/icon_instagram.png";
import IconTwitter from "../../assets/icon_twitter.png";
import IconMail from "../../assets/icon_mail.png";
import IconTwitch from "../../assets/icon_twitch.png";

export default function Footer() {
    return (
        <footer className="container-fluid col-md-10 mb-2 mb-md-5">
            <div className="row row-cols-1 row-cols-md-4">
                <div className="col col-md-4 mb-3 d-flex flex-column">
                    <p className="my-2">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p className="my-2">binarcarrental@gmail.com</p>
                    <p className="my-2">081-233-334-808</p>
                </div>
                <div className="col col-md-2 mb-3 d-flex flex-column fw-bold">
                    <a className="my-2" href="#ourServices">Our Services</a>
                    <a className="my-2" href="#whyUs">Why Us</a>
                    <a className="my-2" href="#testimonial">Testimonial</a>
                    <a className="my-2" href="#faq">FAQ</a>
                </div>
                <div className="col col-md-3 mb-3 d-flex flex-column">
                    <p className="my-2">Connect with us</p>
                    <div className="my-2">
                        <a href="https://www.facebook.com/" target="_blank"><img src={IconFacebook} className="me-2 mb-2"/></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src={IconInstagram} className="me-2 mb-2"/></a>
                        <a href="https://www.twitter.com/" target="_blank"><img src={IconTwitter} className="me-2 mb-2"/></a>
                        <a href="mailto: binarcarrental@gmail.com" target="_blank"><img src={IconMail} className="me-2 mb-2"/></a>
                        <a href="https://www.twitch.com/" target="_blank"><img src={IconTwitch} className="me-2 mb-2"/></a>
                    </div>
                </div>
                <div className="col col-md-3 mb-3 d-flex flex-column">
                    <p className="my-2">Copyright Binar 2022</p>
                    <img src={Logo} className="logo-img my-2"/>
                </div>
            </div>
        </footer>
    );
}