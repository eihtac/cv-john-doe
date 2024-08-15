import banner from '../assets/images/banner.jpg';
import code from '../assets/images/coder.jpg';
import croissance from '../assets/images/croissance.jpg';
import google from '../assets/images/google.jpg';
import screens from '../assets/images/screens.jpg';
import seo from '../assets/images/seo.jpg';
import technos from '../assets/images/technos.png';
import "../index.css";

const Blog = () => {
    return (
        <div className="blog d-flex justify-content-center align-items-center flex-column">
            <img src={banner} alt="bannière décorative" className="img-fluid banner"></img>
            <h1 className="mt-4">BLOG</h1>
            <p>Retrouvez ici quelques articles sur le développement web.</p>
            <div className="underline mx-auto mb-3"></div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-12 mb-4">
                        <div className="card text-start shadow-sm h-100 d-flex flex-column">
                            <img src={code} alt="Lignes de code" className="img-fluid card-img-top object-fit-cover" />
                            <div className="card-body d-flex flex-column p-0">
                                <h2 className="mx-3 my-3">Coder son site en HTML/CSS</h2>
                                <p className="flex-grow-1 mx-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button type="button" className="btn btn-primary mt-auto align-self-start w-auto px-3 mx-3 my-2">Lire la suite</button>
                                <small className="card-footer mt-2 m-0">Publié le <time dateTime="2022-08-20">20 août 2022</time></small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 mb-4">
                        <div className="card text-start shadow-sm h-100 d-flex flex-column">
                            <img src={croissance} alt="Illustration croissance économique" className="img-fluid card-img-top object-fit-cover" />
                            <div className="card-body d-flex flex-column p-0">
                                <h2 className="mx-3 my-3">Vendre ses produits sur le web</h2>
                                <p className="flex-grow-1 mx-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button type="button" className="btn btn-primary mt-auto align-self-start w-auto px-3 mx-3 my-2">Lire la suite</button>
                                <small className="card-footer mt-2 m-0">Publié le <time dateTime="2022-08-20">20 août 2022</time></small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 mb-4">
                        <div className="card text-start shadow-sm h-100 d-flex flex-column">
                            <img src={google} alt="Ordinateur portable ouvert sur google" className="img-fluid card-img-top object-fit-cover" />
                            <div className="card-body d-flex flex-column p-0">
                                <h2 className="mx-3 my-3">Se positionner sur Google</h2>
                                <p className="flex-grow-1 mx-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button type="button" className="btn btn-primary mt-auto align-self-start w-auto px-3 mx-3 my-2">Lire la suite</button>
                                <small className="card-footer mt-2 m-0">Publié le <time dateTime="2022-08-01">1 août 2022</time></small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 mb-4">
                        <div className="card text-start shadow-sm h-100 d-flex flex-column">
                            <img src={screens} alt="Différentes tailles d'écran" className="img-fluid card-img-top object-fit-cover" />
                            <div className="card-body d-flex flex-column p-0">
                                <h2 className="mx-3 my-3">Coder en responsive design</h2>
                                <p className="flex-grow-1 mx-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button type="button" className="btn btn-primary mt-auto align-self-start w-auto px-3 mx-3 my-2">Lire la suite</button>
                                <small className="card-footer mt-2 m-0">Publié le <time dateTime="2022-07-31">31 juillet 2022</time></small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 mb-4">
                        <div className="card text-start shadow-sm h-100 d-flex flex-column">
                            <img src={seo} alt="mots-clés liés au référencement" className="img-fluid card-img-top object-fit-cover" />
                            <div className="card-body d-flex flex-column p-0">
                                <h2 className="mx-3 my-3">Techniques de référencement</h2>
                                <p className="flex-grow-1 mx-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button type="button" className="btn btn-primary mt-auto align-self-start w-auto px-3 mx-3 my-2">Lire la suite</button>
                                <small className="card-footer mt-2 m-0">Publié le <time dateTime="2022-07-30">30 juillet 2022</time></small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 mb-4">
                        <div className="card text-start shadow-sm h-100 d-flex flex-column">
                            <img src={technos} alt="Différentes technologies" className="img-fluid card-img-top object-fit-cover" />
                            <div className="card-body d-flex flex-column p-0">
                                <h2 className="mx-3 my-3">Apprendre à coder</h2>
                                <p className="flex-grow-1 mx-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <button type="button" className="btn btn-primary mt-auto align-self-start w-auto px-3 mx-3 my-2">Lire la suite</button>
                                <small className="card-footer mt-2 m-0">Publié le <time dateTime="2022-07-12">12 juillet 2022</time></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;
