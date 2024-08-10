import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

const Contact = () => {
    return (
        <div className="contact pt-5 position-relative">
            <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
            <div className="content-box my-4 w-100 container-lg d-flex justify-content-center align-items-center flex-column position-relative rounded p-4">
                <h1 className="text-uppercase pt-4">Me contacter</h1>
                <p>Pour me contacter en vue d&apos;un entretien ou d&apos;une future collaboration, merci de remplir le formulaire de contact.</p>
                <div className="underline mx-auto mb-4 w-25"></div> 
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <h2>Formulaire de contact</h2> 
                            <div className="underline2 mb-5 w-100"></div> 
                            <form>
                                <div className="mb-3">
                                    <input type="text" id="name" className="form-control" placeholder="Votre nom"></input>
                                </div>
                                <div className="mb-3">
                                    <input type="email" id="email" className="form-control" placeholder="Votre adresse email"></input>
                                </div>
                                <div className="mb-3">
                                    <input type="tel" id="number" className="form-control" placeholder="Votre numéro de téléphone"></input>
                                </div>
                                <div className="mb-3">
                                    <input type="text" id="subject" className="form-control" placeholder="Sujet"></input>
                                </div>
                                <div className="mb-3">
                                    <textarea id="message" className="form-control" rows="5" placeholder="Votre message"></textarea>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary">Envoyer</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 mb-4">
                            <h2>Mes coordonnées</h2>
                            <div className="underline2 mb-5"></div> 
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faLocationDot} style={{color: "#444444"}} size="1x" className="me-2" />
                                <address className="mb-0">40 rue Laure Diebold, 69009 Lyon, France</address>
                            </div>
                            <div className="mb-4 d-flex align-items-center">
                                <FontAwesomeIcon icon={faMobileScreenButton} style={{color: "#444444"}} size="1x" className="me-2" />
                                <a href="tel:+33620304050" className="mb-0 text-decoration-none text-reset">06 20 30 40 50</a>
                            </div>
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.089576563149!2d4.805528915556179!3d45.77043937910585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea58e2aa29c1%3A0x6e1a8a43869b3a56!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1664902143743!5m2!1sfr!2sfr" 
                                width="100%" height="250" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="Google Maps"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
