import ButtonGold from "@/pages/components/ButtonGold";
import {useRouter} from "next/router";
import {estaLogado, sair} from "@/pages/api/authService";
import {useEffect, useState} from "react";

export default function Header() {

    const router = useRouter();
    const [logado, setLogado] = useState<boolean>(false);

    function handleLogin() {
        router.push("/login");
    }

    function handleLogout() {
        sair();
    }

    async function verificarLogin() {
        setLogado(await estaLogado());
    }

    useEffect(() => {

        verificarLogin();
    },);

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
                            style={{height: "100px"}}
                        />
                    </div>


                    <div className="col-6">
                        <nav className="d-flex justify-content-center gap-4">
                            <a href="/home" className="text-decoration-none text-white">
                                Home
                            </a>
                            <a href="/servico/visualizar" className="text-decoration-none text-white">
                                Serviços
                            </a>
                            <a href="/agenda-usuario" className="text-decoration-none text-white">
                                Agenda
                            </a>
                            {/*<a href="/" className="text-decoration-none text-white">*/}
                            {/*    Equipe*/}
                            {/*</a>*/}
                            <a href="/conta" className="text-decoration-none text-white">
                                Conta
                            </a>
                        </nav>
                    </div>


                    {logado ? <div className="col-3 d-flex justify-content-end gap-3 p-4">
                        <button
                            className="btn btn-outline-light"
                            style={{minWidth: "120px"}}
                            onClick={() => handleLogout()}
                        >
                            Sair
                        </button>
                    </div> : <div className="col-3 d-flex justify-content-end gap-3">
                        <div className="p-4">
                            <ButtonGold
                                type="button"
                                value="Login"
                                onClick={() => {
                                    handleLogin()
                                }}
                            />
                        </div>

                        <div className="p-4">
                            <button
                                className="btn btn-outline-light"
                                style={{minWidth: "120px"}}
                            >
                                Registre-se
                            </button>
                        </div>
                    </div>}


                </div>
            </div>
        </header>
    );
}