
import styles from "../conta.module.css";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import secureLocalStorage from "react-secure-storage";
import Link from "next/link";
import { useRouter } from "next/router";
import {editarCliente, listarClientePorId} from "@/pages/api/clienteService";
import {erro, notificacao} from "@/utils/toast";
import {estaLogado} from "@/pages/api/authService";
import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";

export default function Conta() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [logado, setLogado] = useState(false);
    const router = useRouter();
    const id = router.query.id;

    async function carregarInformacoes() {

        if (!id) return;

        try {

            const cliente = await listarClientePorId(id as string);
            setNome(cliente.nome);
            setEmail(cliente.email);
            setTelefone(cliente.telefone);
            setSenha(cliente.senha);

        } catch (error: any) {
            erro(error.message || "Erro ao carregar cliente"
            );
        }
    }

    async function salvarCliente(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!id) {
            erro("Cliente não encontrado");
            return;
        }
        try {
            const dados = {
                nome,
                email,
                telefone,
                senha
            };

            await editarCliente(id as string, dados);
            notificacao("Cliente atualizado com sucesso!");
            setTimeout(() => {
                router.push("/home")}, 2000);

        } catch (error: any) {
            erro(error.message || "Erro ao atualizar cliente");
        }
    }

    async function verificarLogin() {
        setLogado(await estaLogado());
    }

    useEffect(() => {
        verificarLogin();
        if (router.isReady && id) {
            carregarInformacoes();
        }
    }, [router.isReady, id]);


    if (!logado) {

        return (
            <main
                className="text-center d-flex justify-content-center align-items-center vh-100"
            >
                <div>
                    <h1 className="text-white">
                        Faça login para acessar essa tela
                    </h1>
                    <Link href="/home" className="text-white">
                        Retornar para a página principal
                    </Link>

                </div>
            </main>
        );
    }

    return (
        <>
            <ToastContainer />
            <main className={styles.page_content}>
                <Header />
                <section className="container">

                    <h1 className="titulo">
                        EDITAR CONTA
                    </h1>

                    <form className={styles.formulario} onSubmit={salvarCliente}>
                        <div>
                            <label className={styles.label}>
                                E-mail
                            </label>
                            <input
                                className={styles.campo}
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="Digite seu e-mail"
                            />
                        </div>

                        <div>

                            <label className={styles.label}>
                                Senha
                            </label>

                            <input
                                className={styles.campo} type="password" value={senha}
                                onChange={(e) =>
                                    setSenha(e.target.value)
                                }
                                placeholder="Digite sua senha"
                            />
                        </div>

                        <div>

                            <label className={styles.label}>
                                Nome
                            </label>
                            <input
                                className={styles.campo} type="text" value={nome}
                                onChange={(e) =>
                                    setNome(e.target.value)
                                }
                                placeholder="Digite seu nome"
                            />
                        </div>

                        <div>

                            <label className={styles.label}>
                                Telefone
                            </label>
                            <input
                                className={styles.campo} type="tel" value={telefone}
                                onChange={(e) =>
                                    setTelefone(e.target.value)
                                }
                                placeholder="(11)99999-9999"
                                maxLength={15}
                            />
                        </div>

                        <button
                            className={styles.botao}
                            type="submit">
                            Salvar Alterações
                        </button>
                    </form>
                </section>
                <Footer />
            </main>
        </>
    );
}