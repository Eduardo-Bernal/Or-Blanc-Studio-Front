export default function Header() {
    return (
        <header
            className="container-fluid px-4"
            style={{
                backgroundColor: "#1D1D1E",
                minHeight: "100px",
            }}
        >
            <div className="container h-100">
                <div className="row align-items-center py-3">

                    {/* Logo */}
                    <div className="col-3">
                        <img
                            src="/imgs/logoLogin.png"
                            alt="Logo"
                            style={{ height: "70px" }}
                        />
                    </div>

                    {/* Menu Centralizado */}
                    <div className="col-6">
                        <nav className="d-flex justify-content-center gap-4">
                            <a href="#" className="text-decoration-none text-white">
                                Home
                            </a>
                            <a href="#" className="text-decoration-none text-white">
                                Serviços
                            </a>
                            <a href="#" className="text-decoration-none text-white">
                                Agenda
                            </a>
                            <a href="#" className="text-decoration-none text-white">
                                Equipe
                            </a>
                            <a href="#" className="text-decoration-none text-white">
                                Avaliações
                            </a>
                        </nav>
                    </div>


                    <div className="col-3 d-flex justify-content-end gap-3">
                        <button
                            className="btn px-4"
                            style={{
                                background: "linear-gradient(90deg, #B98A2D, #E9C65D)",
                                color: "#000",
                                border: "none",
                                minWidth: "120px",
                            }}
                        >
                            LOGIN
                        </button>

                        <button
                            className="btn btn-outline-light px-4"
                            style={{ minWidth: "120px" }}
                        >
                            Registre-se
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
}