import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import styles from "./profissional.module.css";
import {useState} from "react";
import {cadastrarProfissional} from "@/pages/api/cadastroProfissionalService";
import {erro, notificacao} from "@/utils/toast";
import {ToastContainer} from "react-toastify";

export default function Profissional() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [especialidade, setEspecialidade] = useState("");
    const [senha, setSenha] = useState("");
    const [imagem, setImagem] = useState<File | null>(null);
    const [ativo] = useState(true);


    const listaEspecialidades = [
        {id: "corte", nome: "Corte de Cabelo"},
        {id: "barba", nome: "Barba"},
        {id: "penteado", nome: "Penteado"},
        {id: "coloracao", nome: "Coloração"},
        {id: "tratamento", nome: "Tratamentos"}
    ];


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
            console.log(`dados: ${dados.imagem}`);
            await cadastrarProfissional(dados);

            notificacao("Profissional cadastrado com sucesso!");

        } catch (error) {
            console.log(error);
            erro("Erro ao cadastrar profissional")
        }
    }

    function gerenciarImagem(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        if (e.target.files?.[0]) {
            setImagem(e.target.files[0]);
        }
    }

    return (
        <>
            <ToastContainer></ToastContainer>
        <main className={styles.page_content}>

            <Header/>

            <section className="container">
                <h1 className="titulo">
                    CADASTRAR PROFISSIONAL
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