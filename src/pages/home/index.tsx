import Header from "@/pages/components/Header";
import ButtonGold from "@/pages/components/ButtonGold";
import Footer from "@/pages/components/Footer";

const Home = () => {
    return (
        <>
            <Header></Header>
            <main className=" d-flex align-items-center flex-column" style={{backgroundColor: "var(--preto-fundo)"}}>
                {/* BANNER */}
                <section className="h-75 d-flex align-items-center flex-column justify-content-center container">
                    <img className="h-100 col-12 object-fit-lg-cover rounded-4" src="/imgs/ImageHome.png" alt=""/>
                    <div className="col-10 position-relative d-flex justify-content-between p-4 z-3 glass"
                         style={{bottom: "50px"}}>
                        <div className="col-6 d-flex flex-column">
                            <label className="text-white" htmlFor="">Selecione o Serviço</label>
                            <input className="bg-transparent border border-0 text-white" type="text"
                                   placeholder="Digite..."/>
                        </div>
                        <div className="col-6 d-flex flex-column">
                            <label className="text-white" htmlFor="">Selecione o Profissional</label>
                            <input className="bg-transparent border border-0 text-white" type="text"
                                   placeholder="Digite..."/>
                        </div>
                    </div>
                </section>

                {/* SERVIÇOS */}
                <section className="vh-100 d-flex align-items-center flex-column justify-content-center container">
                    <h2 className="">Nossos Serviços</h2>
                    <div className="col-12 h-75 d-flex justify-content-between z-3">
                        <div className="d-flex col-8">
                            <img className="card bg-transparent object-fit-cover p-2" style={{height: "100%"}}
                                 src="/imgs/Cabelo.png" alt=""/>
                            <div className="col-4 h-100 position-relative d-flex justify-content-between flex-column">
                                <img className="card bg-transparent object-fit-cover p-2" style={{height: "50%"}}
                                     src="/imgs/Unha.png" alt=""/>
                                <img className="card bg-transparent object-fit-cover p-2" style={{height: "50%"}}
                                     src="/imgs/Pé.png" alt=""/>
                            </div>
                            <div className="col-4 h-100 position-relative d-flex justify-content-between flex-column">
                                <img className="card bg-transparent object-fit-cover p-2" style={{height: "50%"}}
                                     src="/imgs/depilation.png" alt=""/>
                                <img className="card bg-transparent object-fit-cover p-2" style={{height: "50%"}}
                                     src="/imgs/Maquiagem.png" alt=""/>

                            </div>
                        </div>

                        {/*card do lado direito*/}
                        <article className="col-4 d-flex align-items-center flex-column justify-content-between p-2">
                            <div className="p-2 bg-transparent glass-card d-flex flex-column align-items-center"
                                 style={{height: "80%"}}>
                                <h3 className="m-4 text-white text-center">Beleza e Estilo</h3>
                                <span className="text-white text-center mt-5">
                                    Oferecemos uma experiência completa de cuidado, estilo e sofisticação para valorizar sua beleza única. Nossa equipe utiliza técnicas modernas e atendimento personalizado para proporcionar resultados impecáveis em cada detalhe.
                                    Dos cuidados com os cabelos aos tratamentos de beleza, cada serviço é pensado para renovar sua autoestima e oferecer um momento de bem-estar, qualidade e elegância em cada atendimento.
                                </span>
                            </div>
                            <div className="botao h-auto w-100">
                                <ButtonGold value="Ver Todos"></ButtonGold>
                            </div>
                        </article>
                    </div>

                    <svg className="position-absolute" style={{right: "-300px", rotate: "-180deg"}} width="1069"
                         height="771"
                         viewBox="0 0 1069 771" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient
                                id="myGradient"
                                x1="0"
                                y1="0"
                                x2="1069"
                                y2="771"
                                gradientUnits="userSpaceOnUse">

                                <stop offset="0%" stopColor="#fcff9e"/>
                                <stop offset="100%" stopColor="#c67700"/>
                            </linearGradient>
                        </defs>
                        <path
                            d="M5.18973e-05 766.951C286.471 465.068 527.87 285.573 708.126 181.302C782.45 138.309 846.41 108.088 898.868 87.3518C766.383 92.0699 551.941 77.2873 242.554 4.86801L243.694 -4.27694e-05C564.519 75.0965 782.897 88.0904 913.398 81.7365C980.252 56.5033 1026.58 47.4906 1049.72 46.9753C1055 46.8576 1059.24 47.1769 1062.29 47.9185C1063.81 48.2877 1065.18 48.7952 1066.26 49.5097C1067.35 50.2299 1068.36 51.3091 1068.65 52.8313C1068.93 54.3484 1068.39 55.7228 1067.65 56.7984C1066.9 57.8687 1065.81 58.8608 1064.53 59.7879C1061.94 61.6495 1058.08 63.5816 1053.03 65.5245C1032.8 73.3007 991.302 82.0654 926.665 86.0173C922.675 86.2611 918.597 86.4866 914.43 86.6926C859.881 107.332 791.464 138.87 710.63 185.63C530.847 289.627 289.816 468.805 3.62592 770.392L5.18973e-05 766.951ZM930.551 80.7602C992.581 76.7046 1032.14 68.2001 1051.23 60.8583C1056.11 58.9807 1059.52 57.23 1061.6 55.731C1062.65 54.9779 1063.24 54.3703 1063.54 53.9445C1063.58 53.8804 1063.62 53.8255 1063.64 53.7796C1063.61 53.7515 1063.56 53.7187 1063.51 53.6829C1063.09 53.4078 1062.33 53.0751 1061.11 52.777C1058.67 52.184 1054.93 51.8602 1049.83 51.9738C1029.15 52.4344 988.706 59.9856 930.551 80.7602Z"
                            fill="url(#myGradient)"/>
                    </svg>

                    <svg className="position-absolute" style={{left: "-200", top: "1200px"}} width="767" height="591"
                         viewBox="0 0 767 591" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient
                                id="myGradient"
                                x1="0"
                                y1="0"
                                x2="1069"
                                y2="771"
                                gradientUnits="userSpaceOnUse">

                                <stop offset="0%" stopColor="#fcff9e"/>
                                <stop offset="100%" stopColor="#c67700"/>
                            </linearGradient>
                        </defs>
                        <path
                            d="M-302.378 766.951C-15.907 465.069 225.493 285.573 405.748 181.302C480.072 138.309 544.032 108.089 596.49 87.3519C464.005 92.07 249.564 77.2873 -59.8239 4.86807L-58.6842 1.82657e-05C262.141 75.0966 480.519 88.0904 611.021 81.7366C677.874 56.5033 724.204 47.4907 747.337 46.9754C752.623 46.8576 756.857 47.177 759.91 47.9185C761.43 48.2878 762.801 48.7952 763.884 49.5097C764.976 50.23 765.984 51.3091 766.271 52.8313C766.557 54.3484 766.015 55.7229 765.268 56.7984C764.524 57.8687 763.435 58.8609 762.147 59.788C759.562 61.6495 755.7 63.5817 750.647 65.5246C730.422 73.3008 688.924 82.0655 624.287 86.0173C620.297 86.2612 616.219 86.4867 612.052 86.6926C557.503 107.332 489.086 138.87 408.252 185.63C228.469 289.627 -12.5617 468.805 -298.752 770.392L-302.378 766.951ZM628.173 80.7603C690.203 76.7047 729.758 68.2002 748.852 60.8584C753.736 58.9808 757.144 57.2301 759.226 55.7311C760.272 54.978 760.866 54.3704 761.162 53.9446C761.206 53.8805 761.24 53.8256 761.267 53.7797C761.23 53.7515 761.186 53.7188 761.132 53.683C760.714 53.4078 759.957 53.0751 758.73 52.7771C756.288 52.184 752.549 51.8603 747.448 51.9739C726.772 52.4345 686.328 59.9856 628.173 80.7603Z"
                            fill="url(#myGradient)"/>
                    </svg>

                </section>

                {/*Profissionais*/}
                <section className="text-white vh-100 col-12 container">
                    <h2 className="text-center"> Especialistas em Beleza <br/> <strong>Nossa Equipe</strong></h2>
                    <div className="h-75 col-12 d-flex flex-column gap-1">
                        <div className="h-100 d-flex">
                            <article className="h-75 col-4 d-flex flex-column-reverse card text-white m-2" style={{
                                backgroundImage: `url("/imgs/Cabelo.png")`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}>
                                <div className="glass m-2 p-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h3 className="m-0">Kaio Cesar</h3>
                                        <p className="m-0">Cabeleleiro</p>
                                    </div>
                                    <small className="">Cabeleleiro com 15 anos de salão</small>
                                    <div>
                                        <i className="bi bi-instagram"></i>
                                        <i className="bi bi-facebook"></i>
                                    </div>
                                </div>

                            </article>


                        </div>

                        <ButtonGold value="Ver Todos"></ButtonGold>

                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Home;