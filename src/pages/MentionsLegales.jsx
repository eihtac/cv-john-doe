import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMobileScreenButton, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

const MentionsLegales = () => {
    return (
        <div className="mentions-legales pt-5 mt-5 d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-uppercase">Mentions Légales</h1>
            <div className="underline mx-auto mb-4"></div> 
            <div className="accordion container mt-4" id="accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Éditeur du site
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <h3>John Doe</h3>
                            <address className="mb-1"><FontAwesomeIcon icon={faLocationDot}/> 40 Rue Laure Diebold, <br/>
                            69009 Lyon, France</address> 
                            <a href="tel:+33620304050" className="text-decoration-none mb-1 d-block"><FontAwesomeIcon icon={faMobileScreenButton} style={{color: "#444444"}}/> 06 20 30 40 50 </a>
                            <a href="mailto:john.doe@gmail.com" className="text-decoration-none d-block"><FontAwesomeIcon icon={faEnvelope} style={{color: "#444444"}}/> john.doe@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hébergeur
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <h3>Always Data</h3>
                            <address>91 rue du Faubourg Saint-Honoré, <br/>
                                     75008 Paris</address> 
                            <a href="https://www.alwaysdata.com" className="text-decoration-none"><FontAwesomeIcon icon={faGlobe} style={{color: "#444444"}}/> www.alwaysdata.com</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Crédits
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <h3>Crédits</h3>
                            <p>Site développé par John Doe, étudiant du CEF.<br /> <br/>
                            Les images libres de droit sont issues du site <a href="https://pixabay.com">Pixabay</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentionsLegales;
