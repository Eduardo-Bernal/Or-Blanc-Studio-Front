import ButtonGold from "@/pages/components/ButtonGold";
import {useRouter} from "next/router";



export default function Header() {

    const router = useRouter();

    function handleLogin() {
        router.push("/login");
    }

    return (
        <header
            className="col-12 d-flex flex-row justify-content-between px-4"
            style={{
                backgroundColor: "#1D1D1E",
                minHeight: "100px",
            }}
        >
            <div className="col-12 ps-2 pe-2">
                <div className="row align-items-center">


                    <div className="col-3">
                        <img
                            src="/imgs/logoLogin.png"
                            alt="Logo"
                            style={{ height: "100px" }}
                        />
                    </div>


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
                                background: "linear-gradient(-90deg, #fcff9e 0%, #c67700 100%)",
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