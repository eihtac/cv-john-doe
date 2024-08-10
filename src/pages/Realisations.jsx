import banner from '../assets/images/banner.jpg';
import freshFood from '../assets/images/fresh-food.jpg';
import restaurant from '../assets/images/restaurant-japonais.jpg';
import espaceBienEtre from '../assets/images/espace-bien-etre.jpg';
import "../index.css";

const Realisations = () => {
    return (
        <div className="portfolio d-flex justify-content-center align-items-center flex-column">
            <img src={banner} alt="bannière décorative" className="img-fluid banner w-100"></img>
            <h1 className="fs-1 pt-5 text-uppercase">Portfolio</h1>
            <p>Voici quelques-unes de mes réalisations.</p>
            <div className="underline mx-auto mb-1"></div> 
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card text-center shadow-sm h-100 d-flex flex-column">
                            <img src={freshFood} alt="Légumes" className="img-fluid card-img-top object-fit-cover" />
                            <div className="card-body d-flex flex-column p-0">
                                <h2>Fresh food</h2>
                                <p className="flex-grow-1">Réalisation d&apos;un site avec commande en ligne.</p>
                                <button type="button" className="btn btn-outline-primary mt-auto mx-auto w-auto px-3">Voir</button>
                                <p className="card-footer mt-2 m-0">Site réalisé avec PHP et MySQL</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card text-center shadow-sm h-100 d-flex flex-column">
                            <img src={restaurant} alt="Nourriture japonaise" className="img-fluid card-img-top object-fit-cover" />
                            <div className="card-body d-flex flex-column p-0">
                                <h2>Restaurant Akira</h2>
                                <p className="flex-grow-1">Réalisation d&apos;un site vitrine.</p>
                                <button type="button" className="btn btn-outline-primary mt-auto mx-auto w-auto px-3">Voir</button>
                                <p className="card-footer mt-2 m-0">Site réalisé avec WordPress</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card text-center shadow-sm h-100 d-flex flex-column">
                            <img src={espaceBienEtre} alt="Ambiance zen" className="img-fluid card-img-top object-fit-cover" />
                            <div className="card-body d-flex flex-column p-0">
                                <h2>Espace bien-être</h2>
                                <p className="flex-grow-1">Réalisation d&apos;un site vitrine pour un praticien bien-être.</p>
                                <button type="button" className="btn btn-outline-primary mt-auto mx-auto w-auto px-3">Voir</button>
                                <p className="card-footer mt-2 m-0">Site réalisé en HTML/CSS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Realisations;
