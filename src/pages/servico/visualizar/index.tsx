import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import styles from "@/pages/servico/visualizar/visualizar.module.css";
import { useEffect, useState } from "react";
import { listarServicos } from "@/pages/api/servicoService";
import CardServico from "@/pages/components/CardServico";

type Servico = {
    id_servico: number;
    nome: string;
    descricao: string;
    imagemUrl: string;
    valor: number;
    ativo: boolean;
};

export default function Visualizar() {

    const [servicos, setServicos] = useState<Servico[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function load() {
            try {

                const data = await listarServicos();
                setServicos(data);

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        load();

    }, []);

    return (
        <main className={styles.page_content}>

            <Header />

            <h1 className="titulo">
                Ver Serviço
            </h1>

            <div className={styles.conteudo}>

                {loading && <p>Carregando...</p>}

                {!loading && servicos.map((item) => (
                    <CardServico
                        key={item.id_servico}
                        nome={item.nome}
                        descricao={item.descricao}
                        imagemUrl={item.imagemUrl}
                    />
                ))}

            </div>

            <Footer />

        </main>
    );
}