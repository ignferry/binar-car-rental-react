import { useEffect } from 'react';
import Logo from '../../assets/Logo.png';

export default function Navbar() {
    useEffect(() => {
        // Close side navbar on link click
        window.onload = () => {
            const offcanvas = new window.bootstrap.Offcanvas("sideNavBar");
            const offcanvasLinks = document.getElementsByClassName("offcanvas-link");
            for (const link of offcanvasLinks) {
                link.addEventListener("click", () => {
                    offcanvas.hide();
                });
            }
        }
    }, []);

    return (
        <header className="fixed-top">
            <nav className=" bg-blue navbar navbar-expand-md justify-content-center">
                <div className="col-md-10 container-fluid">
                    <img src={Logo} className="logo-img"/>

                    <button className="d-md-none offcanvas-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#sideNavBar" aria-controls="sideNavBar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-nav collapse navbar-collapse justify-content-end"> 
                        <ul className="navbar-nav">
                            <li className="nav-item me-2 p-2">
                                <a className="nav-link" href="#ourServices">Our Services</a>
                            </li>
                            <li className="nav-item me-2 p-2">
                                <a className="nav-link" href="#whyUs">Why Us</a>
                            </li>
                            <li className="nav-item me-2 p-2">
                                <a className="nav-link" href="#testimonial">Testimonial</a>
                            </li>
                            <li className="nav-item me-2 p-2">
                                <a className="nav-link" href="#faq">FAQ</a>
                            </li>
                        </ul>
                        <button className="btn btn-success p-2">Register</button>
                    </div>

                    <div id="sideNavBar" className="offcanvas-md offcanvas-end d-block d-md-none w-50 py-3" tabIndex={-1} >
                        <div className="offcanvas-header">
                            <span><b>BCR</b></span>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" data-bs-target="#sideNavBar" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul>
                                <li>
                                    <a href="#ourServices" className="offcanvas-link">Our Services</a>
                                </li>
                                <li>
                                    <a href="#whyUs" className="offcanvas-link">Why Us</a>
                                </li>
                                <li>
                                    <a href="#testimonial" className="offcanvas-link">Testimonial</a>
                                </li>
                                <li>
                                    <a href="#faq" className="offcanvas-link">FAQ</a>
                                </li>
                            </ul>
                            <button className="btn btn-success">Register</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}