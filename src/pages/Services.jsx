import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay, faFileCode, faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";
import banner from '../assets/images/banner.jpg'
import "../index.css";

const Services = () => {
    return (
        <div className="services d-flex justify-content-center align-items-center flex-column mb-5">
            <img src={banner} alt="bannière décorative" className="w-100"></img>
            <h1 className="fs-1 pt-5 text-uppercase">Mon offre de services</h1>
            <p>Voici les prestations sur lesquelles je peux intervenir.</p>
            <div className="underline mx-auto mb-5"></div> 
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 mb-1 pb-5">
                        <div className="card text-center shadow-sm py-5 px-3 h-100 d-flex flex-column">
                            <FontAwesomeIcon icon={faDisplay} size="3x" className="text-primary my-4" />
                            <h2 className="text-uppercase">UX Design</h2>
                            <p className="flex-grow-1">L&apos;<strong>UX design</strong> est une méthode de conception centrée sur l&apos;utilisateur. Son but est d&apos;offrir une expérience de navigation optimale à l&apos;internaute.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-1 pb-5">
                        <div className="card text-center shadow-sm py-5 px-3 h-100 d-flex flex-column">
                            <FontAwesomeIcon icon={faFileCode} size="3x" className="text-primary my-4" />
                            <h2 className="text-uppercase">Développement web</h2>
                            <p className="flex-grow-1">Le <strong>développement de sites web</strong> repose sur l&apos;utilisation des langages HTML, CSS, JavaScript et PHP.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-1 pb-5">
                        <div className="card text-center shadow-sm py-5 px-3 h-100 d-flex flex-column">
                            <FontAwesomeIcon icon={faMagnifyingGlassDollar} size="3x" className="text-primary my-4" />
                            <h2 className="text-uppercase">Référencement</h2>
                            <p className="flex-grow-1">Le <strong>référencement naturel d&apos;un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
