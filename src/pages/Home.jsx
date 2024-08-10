import { ProgressBar } from 'react-bootstrap';
import "../index.css";
import johnDoeImage from '../assets/images/john-doe-about.jpg';  

const Home = () => {
    return (
        <div className="home">
            <section className="background d-flex justify-content-center align-items-center flex-column text-white">
                <h1 className="mb-4 position-relative">Bonjour, je suis John Doe</h1>
                <h2 className="fs-1 mb-3 position-relative">Développeur web full stack</h2>
                <button type="button" className="btn btn-primary px-4 position-relative">
                    <a href="#about" className="text-white text-decoration-none">En savoir plus</a>
                </button>
            </section>

            <section id="about" className="container bg-white shadow-lg p-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="border-bottom border-primary pb-2">À propos</h3>
                        <p className="pt-4 pe-4 fs-5">Passionné par l&apos;informatique et les nouvelles technologies, j&apos;ai suivi une formation d&apos;<strong>intégrateur-développeur</strong> web au CEF. Au cours de cette formation, j&apos;ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
                        <p className="pt-2 pe-4 fs-5">Basé à Lyon, je suis en recherche d&apos;une alternance au sein d&apos;une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>
                        <p className="pt-2 pe-4 fs-5">J&apos;accorde une attention particulière à la qualité du code que j&apos;écris et je respecte les bonnes pratiques du web.</p>
                    </div>

                    <div className="col-md-6">
                        <img src={johnDoeImage} alt="John Doe en train de travailler" className="img-fluid rounded mb-4"></img> 
                        <h4 className="mb-2">Mes compétences</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2">HTML5 90%
                                <div className="w-100">
                                    <ProgressBar now={90} variant="danger" />
                                </div>
                            </li>
                            <li className="mb-2">CSS3 80%
                                <div className="w-100">
                                    <ProgressBar now={80} variant="info" />
                                </div>
                            </li>
                            <li className="mb-2">JAVASCRIPT 70%
                                <div className="w-100">
                                    <ProgressBar now={70} variant="warning" />
                                </div>
                            </li>
                            <li className="mb-2">PHP 60%
                                <div className="w-100">
                                    <ProgressBar now={60} variant="success" />
                                </div>
                            </li>
                            <li className="mb-2">REACT 50%
                                <div className="w-100">
                                    <ProgressBar now={50} />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
