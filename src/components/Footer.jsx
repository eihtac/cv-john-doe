import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../index.css";

const Footer = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollTopLink = document.getElementById('scrollTopLink');
            if (window.scrollY > 10) {
                scrollTopLink.style.display = 'block';
            } else {
                scrollTopLink.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer py-3 w-100 bg-light">
            <div className="container-fluid p-0">
                <div className="row justify-content-center px-5 pt-5">
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h5>John Doe</h5>
                        <address>
                            <p>40 Rue Laure Diebold <br/>
                                69009 Lyon, France <br/>
                                Téléphone : 06 20 30 40 50 <br/>
                                <Link to="/profilgithub" className="text-decoration-none text-dark">Profil Github</Link>
                            </p>
                        </address>
                        <div>
                            <a href="https://github.com" target="blank" rel="noopener noreferrer" className="m-2">
                                <FontAwesomeIcon icon={faGithub} style={{color: "#444444"}} size="2xl"/>
                            </a>
                            <a href="https://x.com/" target="blank" rel="noopener noreferrer" className="m-2">
                                <FontAwesomeIcon icon={faSquareTwitter} style={{color: "#444444"}} size="2xl"/>
                            </a>
                            <a href='https://fr.linkedin.com/' target="blank" rel="noopener noreferrer" className="m-2">
                                <FontAwesomeIcon icon={faLinkedin} style={{color: "#444444"}} size="2xl"/>
                            </a>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h5>Liens utiles</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-decoration-none text-dark">Accueil</Link></li>
                            <li><Link to="/#about" className="text-decoration-none text-dark">À propos</Link></li>
                            <li><Link to="/services" className="text-decoration-none text-dark">Services</Link></li>
                            <li><Link to="/contact" className="text-decoration-none text-dark">Me contacter</Link></li>
                            <li><Link to="/mentionslegales" className="text-decoration-none text-dark">Mentions légales</Link></li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h5>Mes dernières réalisations</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/realisations" className="text-decoration-none text-dark">Fresh food</Link></li>
                            <li><Link to="/realisations" className="text-decoration-none text-dark">Restaurant Akira</Link></li>
                            <li><Link to="/realisations" className="text-decoration-none text-dark">Espace bien-être</Link></li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <h5>Mes derniers articles</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/blog" className="text-decoration-none text-dark">Coder son site en HTML/CSS</Link></li>
                            <li><Link to="/blog" className="text-decoration-none text-dark">Vendre ses produits sur le web</Link></li>
                            <li><Link to="/blog" className="text-decoration-none text-dark">Se positionner sur Google</Link></li>
                        </ul>
                    </div>
                </div>

                <button className="btn btn-dark text-light text-center m-0 w-100 py-3 rounded-0 mt-4" onClick={handleScrollTop} id="scrollTopLink">
                    &copy; Designed by John Doe.
                </button>
            </div>
        </footer>
    );
}

export default Footer;
