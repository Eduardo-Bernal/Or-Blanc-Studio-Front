import ButtonGold from "@/pages/components/ButtonGold";
import {useRouter} from "next/router";
import {estaLogado, sair} from "@/pages/api/authService";
import {useEffect, useState} from "react";
import secureLocalStorage from "react-secure-storage";
import Link from "next/link";

export default function Header() {

    const router = useRouter();
    const [logado, setLogado] = useState<boolean>(false);

    const [role, setRole] = useState<string | null>(null);
    const [idCliente, setIdCliente] = useState<string | null>(null);
    const [idProfissional, setIdProfissional] = useState<string | null>(null);



    function handleLogin() {
        router.push("/login");
    }

    function handleLogout() {
        sair();
    }

    async function verificarLogin() {
        setLogado(await estaLogado());
    }

    function setLogin() {
        setRole(secureLocalStorage.getItem("role") as string);
        setIdCliente(secureLocalStorage.getItem("id_cliente") as string);
        setIdProfissional(secureLocalStorage.getItem("id_profissional") as string);
    }

    useEffect(() => {
        verificarLogin();
        setLogin();
    }, []);

    return (
        <header
            className="col-12 d-flex flex-row justify-content-between px-4 "
            style={{
                backgroundColor: "#1D1D1E",
                minHeight: "100px",
            }}
        >
            <div className="col-12 ps-2 pe-2 container container-fluid">
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
                            <Link href="/home" className="link">
                                Home
                            </Link>
                            <Link href="/servico/visualizar" className="link">
                                Serviços
                            </Link>
                            {
                                 role === "Cliente" && (
                                    <Link href={`/agenda-usuario/${idCliente}`} className="link">
                                        Agenda
                                    </Link>
                                 )
                            }
                            {
                                role === "Profissional" && (
                                    <Link href={`/agenda-profissional/${idProfissional}`} className="link">
                                        Agenda
                                    </Link>
                                )
                            }
                            <a href="/home#Equipe" className="link">
                                Equipe
                            </a>
                            <Link href={`/conta/${idCliente}`} className="link">
                                Conta
                            </Link>
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