import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import styles from "./criar-servico.module.css";
import ButtonGold from "@/pages/components/ButtonGold";
import {cadastroServico} from "@/pages/api/cadastroServicoService";
import {useState} from "react";
import {toast} from "react-toastify";

type Servico = {
    nome: string;
    descricao: string;
    valor: number;
    ativo: boolean;
    imagem: File | null;
}

export default function Criar() {

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState<number>(0);
    const [imagem, setImagem] = useState<File | null>(null);
    const ativo = true;

    async function criarServico() {
        try {
            const dados = {
                nome,
                descricao,
                valor,
                ativo,
                imagem
            }

            await cadastroServico(dados)

        } catch (e: any) {
            toast.error(e.message)
        }
    }

    return (
        <main className={styles.pagina_conteudo}>
            <Header/>
            <section className="container">

                <h1 className={styles.titulo_servico}>Criar um Serviço</h1>

                <form action="" onSubmit={criarServico}>
                    <div className={styles.inputs}>
                        <label htmlFor="nome" className={styles.label}>Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            className="input col-12"
                            placeholder="Nome..."
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                    </div>


                    <div className={styles.inputs}>
                        <label htmlFor="descricao" className={styles.label}>Descrição:</label>
                        <textarea
                            id="descricao"
                            className="input col-12"
                            placeholder="Digite a descrição do serviço..."
                            rows={2}
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)}
                        />
                    </div>


                    <div className={styles.inputs}>
                        <label htmlFor="valor" className={styles.label}>Valor (R$):</label>
                        <input
                            type="number"
                            id="valor"
                            className="input col-12"
                            placeholder="0,00"
                            step="0.01"
                            min="0"
                            value={valor}
                            onChange={e => setValor(e.target.value.toString())}
                        />
                    </div>


                    <div className={styles.inputs}>
                        <label htmlFor="imagem" className={styles.label}>Imagem do Serviço:</label>
                        <input
                            type="file"
                            id="imagem"
                            className="input col-12"
                            accept="image/*"
                        />
                    </div>

                    <div className={styles.container_botao}>
                        <button type="submit" className={`btn w-100 py-3 fw-medium ${styles.botao_enviar}`}>
                            Cadastrar Serviço
                        </button>
                    </div>
                </form>
            </section>


            <Footer/>
        </main>
    );
}