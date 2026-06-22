import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import styles from "./profissional.module.css";
import {useEffect, useState} from "react";
import {cadastrarProfissional} from "@/pages/api/cadastroProfissionalService";
import {erro, notificacao} from "@/utils/toast";
import {ToastContainer} from "react-toastify";
import {estaLogado} from "@/pages/api/authService";
import secureLocalStorage from "react-secure-storage";
import {router} from "next/client";
import Link from "next/link";
import {useRouter} from "next/router";
import {editarProfissional, listarProfissionalPorId} from "@/pages/api/profissionalService";

export default function Profissional() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [especialidade, setEspecialidade] = useState("");
    const [senha, setSenha] = useState("");
    const [imagem, setImagem] = useState<File | null>(null);
    const [ativo] = useState(true);
    const [logado, setLogado] = useState(false);
    const [role, setRole] = useState<string | null>(null);


    const listaEspecialidades = [
        {id: "corte", nome: "Corte de Cabelo"},
        {id: "barba", nome: "Barba"},
        {id: "penteado", nome: "Penteado"},
        {id: "coloracao", nome: "Coloração"},
        {id: "tratamento", nome: "Tratamentos"}
    ];

    const router = useRouter();
    const id = router.query.id;

    const telaEditar = !!id;

    async function carregarInformacoes() {
        if (!id) return;

        try {
            const profissional = await listarProfissionalPorId(id as string);

            setNome(profissional.nome);
            setEmail(profissional.email);
            setTelefone(profissional.telefone);
            setEspecialidade(profissional.especialidade);

        } catch (error) {
            console.log(error);
        }
    }


    async function salvarProfissional(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();
        try {

            const dados = {
                nome,
                email,
                telefone,
                especialidade,
                senha,
                imagem,
                ativo
            };

            if (telaEditar) {
                await editarProfissional(id as string, dados
                );
                notificacao(
                    "Profissional atualizado com sucesso!"
                );

            } else {

                await cadastrarProfissional(dados);

                notificacao(
                    "Profissional cadastrado com sucesso!"
                );
            }

            await cadastrarProfissional(dados);
            notificacao("Profissional cadastrado com sucesso!");

        } catch (error: any) {
            erro("Erro ao cadastrar profissional" + error.response.data)
        }
    }



    async function verificarLogin(){
        setLogado(await estaLogado())
        setRole(secureLocalStorage.getItem("role") as string);
    }

    function gerenciarImagem(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        if (e.target.files?.[0]) {
            setImagem(e.target.files[0]);
        }
    }

    useEffect(() => {

        verificarLogin();

        if (router.isReady) {
            carregarInformacoes();
        }

    }, [router.isReady, id]);

    if(!logado || role != "Profissional"){
        return(
            <>
                <main className="text-center d-flex justify-content-center align-items-center vh-100">
                    <div>
                        <h1 className="text-white text-center">Faça login para acessar essa tela</h1>
                        <Link href="/home" className="text-white">Retornar para a página principal</Link>
                    </div>
                </main>
            </>
        )}

    return (
        <>
            <ToastContainer></ToastContainer>
        <main className={styles.page_content}>

            <Header/>

            <section className="container">
                <h1 className="titulo">
                    {
                        telaEditar ? "EDITAR PROFISSIONAL"
                            : "CADASTRAR PROFISSIONAL"
                    }
                </h1>

                <form
                    className={styles.formulario}
                    onSubmit={salvarProfissional}
                >

                    <div>
                        <label className={styles.label}>
                            E-mail
                        </label>

                        <input
                            className={styles.campo}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu e-mail"
                        />

                    </div>

                    <div>
                        <label className={styles.label}>
                            Senha
                        </label>

                        <input
                            className={styles.campo}
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Digite sua senha"
                        />

                    </div>


                    <div>
                        <label className={styles.label}>
                            Nome
                        </label>

                        <input
                            className={styles.campo}
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite seu nome"
                        />

                    </div>


                    <div>
                        <label className={styles.label}>
                            Telefone
                        </label>

                        <input
                            className={styles.campo}
                            type="tel"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            placeholder="(11)99999-9999"
                            maxLength={15}
                        />
                    </div>


                    <div>
                        <label className={styles.label}>
                            Especialidade
                        </label>

                        <select
                            className={styles.campo}
                            value={especialidade}
                            onChange={(e) => setEspecialidade(e.target.value)}
                        >
                            <option value="" disabled >
                                Selecione uma especialidade...
                            </option>

                            {listaEspecialidades.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.nome}
                                </option>
                            ))}
                        </select>
                    </div>


                    <div>
                        <h5 className="fw-normal text-white">Imagem</h5>
                        <label htmlFor="imagem" className={`text-white-50 ${styles.campo}`}>
                            {
                                imagem != null ? "Imagem de profissional selecionada. Pronta para cadastro." : "Clique aqui para selecionar uma Imagem..."
                            }
                        </label>
                        <input
                            id="imagem"
                            className={styles.campo}
                            type="file"
                            onChange={gerenciarImagem}
                            accept="image/*"
                            hidden
                        />
                    </div>


                    <button
                        className={styles.botao}
                        type="submit"
                    >
                        Cadastrar
                    </button>

                </form>
            </section>


            <Footer/>

        </main>
        </>
    );
}