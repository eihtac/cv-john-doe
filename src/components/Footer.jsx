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
                    <div className="col-md-3 px-5">
                        <h5>John Doe</h5>
                        <address>
                            <p>40 Rue Laure Diebold <br/> 
                            69009 Lyon, France <br/>
                            Téléphone : 06 20 30 40 50 </p> 
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

                    <div className="col-md-3 px-5">
                        <h5>Liens utiles</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-decoration-none text-dark">Accueil</a></li> 
                            <li><a href="/#about" className="text-decoration-none text-dark">À propos</a></li> 
                            <li><a href="/services" className="text-decoration-none text-dark">Services</a></li> 
                            <li><a href="/contact" className="text-decoration-none text-dark">Me contacter</a></li> 
                            <li><a href="/mentionslegales" className="text-decoration-none text-dark">Mentions légales</a></li> 
                        </ul>
                    </div>

                    <div className="col-md-3 px-5">
                        <h5>Mes dernières réalisations</h5>
                        <ul className="list-unstyled">
                            <li><a href="/realisations" className="text-decoration-none text-dark">Fresh food</a></li> 
                            <li><a href="/realisations" className="text-decoration-none text-dark">Restaurant Akira</a></li> 
                            <li><a href="/realisations" className="text-decoration-none text-dark">Espace bien-être</a></li> 
                        </ul>
                    </div>

                    <div className="col-md-3 px-5">
                        <h5>Mes derniers articles</h5>
                        <ul className="list-unstyled">
                            <li><a href="/blog" className="text-decoration-none text-dark">Coder son site en HTML/CSS</a></li> 
                            <li><a href="/blog" className="text-decoration-none text-dark">Vendre ses produits sur le web</a></li> 
                            <li><a href="/blog" className="text-decoration-none text-dark">Se positionner sur Google</a></li> 
                        </ul>
                    </div>
                </div>
                <button
                    className="btn btn-dark text-light text-center m-0 w-100 py-3 rounded-0 mt-4"
                    onClick={handleScrollTop}
                    id="scrollTopLink"
                >
                    
                        &copy; Designed by John Doe.
                    
                </button>
            </div>
        </footer>
    );
}

export default Footer;
