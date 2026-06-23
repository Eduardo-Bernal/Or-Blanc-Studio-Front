export default function Footer() {
    return (
        <footer
            className="col-12 px-4 z-3 "
            style={{
                backgroundColor: "#1D1D1E",
                minHeight: "100px",
                borderTop: "1px solid rgba(255,255,255,0.2)",

            }}
        >
            <div className="col-12 ps-2 pe-2 container container-fluid">
                <div
                    className="row align-items-center"
                    style={{
                        minHeight: "100px",
                    }}
                >
                    <div className="col-3">
                        <img
                            src="/imgs/logoLogin.png"
                            alt="Logo"
                            style={{ height: "100px" }}
                        />
                    </div>

                    <div className="col-6 text-center text-white">
                        Copyright 2026© OrBlancStudios. Todos os direitos reservados.
                    </div>

                    <div className="col-3 d-flex justify-content-end gap-3">
                        <a href="#" className="text-white">
                            <i className="bi bi-instagram"></i>
                        </a>

                        <a href="#" className="text-white">
                            <i className="bi bi-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}