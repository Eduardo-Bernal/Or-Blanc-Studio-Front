    import Header from "@/pages/components/Header";
    import Footer from "@/pages/components/Footer";
    import styles from "./profissional.module.css";
    import ButtonGold from "@/pages/components/ButtonGold";
    import {useState} from "react";
    import {useRouter} from "next/router";
    import { useEffect } from "react";
    import {cadastrarProfissional} from "@/pages/api/cadastroProfissionalService";


    interface Profissional {
        nome: string;
        telefone: string;
        email: string;
        especialidade: string;
        senha: string;
        ativo: boolean;
        imagem: File;
    }

    export default function Profissional() {
        const [nome, setNome] = useState("");
        const [email, setEmail] = useState("");
        const [telefone, setTelefone] = useState("");
        const [especialidade, setespecialidades] = useState("")
        const [senha, setSenha] = useState("");
        const [imagem, setImagem] = useState<File | null>(null);
        const [ativo, setAtivo] = useState<boolean>(true);

        const listaEspecialidades = [
            { id: 'corte', nome: 'Corte de Cabelo' },
            { id: 'barba', nome: 'Barba' },
            { id: 'penteado', nome: 'Penteado' },
            { id: 'coloracao', nome: 'Coloração' },
            { id: 'tratamento', nome: 'Tratamentos' }
        ];

        const router = useRouter();
        const id = router.query.id;

        async function salvarProfissional(e: React.FormEvent<HTMLFormElement>) {
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
                }

                await cadastrarProfissional(dados)
            }catch (error) {
                console.log(error);
            }
        }



        return (
            <main className={styles.page_content}>
                <Header/>

                <h1 className={"titulo"}>
                    CADASTRAR PROFISSIONAL
                </h1>
                <div className={styles.formulario}>
                    <label className={styles.label} htmlFor="servico">
                        Nome
                    </label>
                    <input
                        className={styles.campo}
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        placeholder="Digite seu nome"
                    />

                    <label className={styles.label} htmlFor="telefone">
                        Telefone
                    </label>
                    <input
                        className={styles.campo}
                        type="tel"
                        id="telefone"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}
                        placeholder="(11)99999-9999"
                        maxLength={15}
                    />

                    <label className={styles.label} htmlFor="senha">
                        Senha
                    </label>

                    <input
                        className={styles.campo}
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        placeholder="Digite sua senha"
                    />

                    <label className={styles.label} htmlFor="email">
                        E-mail
                    </label>

                    <input
                        className={styles.campo}
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Digite seu e-mail"
                    />

                    <label className={styles.label} htmlFor="especialidade">
                        Especialidade
                    </label>

                    <select
                        style={{color: 'white'}}
                        className={styles.campo}
                        id="especialidade"
                        value={especialidade}
                        onChange={e => setespecialidades(e.target.value)}
                    >
                        <option value="">
                            Selecione uma especialidade
                        </option>

                        {listaEspecialidades.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.nome}
                            </option>
                        ))}
                    </select>

                </div>
                <Footer/>
            </main>
        )
    }