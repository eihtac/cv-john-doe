import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../index.css';

const Header = () => {
    const location = useLocation(); 

    useEffect(() => {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === location.pathname) {
                link.classList.add('active'); 
            } else {
                link.classList.remove('active'); 
            }
        });
    }, [location]); 

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand ms-5 text-uppercase">John Doe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto me-5">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-uppercase">Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link text-uppercase">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/realisations" className="nav-link text-uppercase">Réalisations</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link text-uppercase">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link text-uppercase">Me contacter</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
