import { useEffect, useState } from "react";
import ButtonGold from "@/pages/components/ButtonGold";
import styles from "./cardServico.module.css";
import { listarServicoPorID } from "@/pages/api/servicoService";

type Servico = {
    id_servico: number;
    nome: string;
    descricao: string;
    imagemUrl?: string;
    valor: number;
    ativo: boolean;
};

type Props = {
    id: number;
};

export default function CardServico({ id }: Props) {
    const [servico, setServico] = useState<Servico | null>(null);

    useEffect(() => {
        async function load() {
            const data = await listarServicoPorID(id);
            setServico(data);
        }
        load();
    }, [id]);

    if (!servico) {
        return (
            <div className={`${styles.card} glass-card`}>
                <p>Carregando...</p>
            </div>
        );
    }

    return (
        <div className={`${styles.card} glass-card`}>
            <img
                src={servico.imagemUrl || "/imgs/cabelo_mulher.png"}
                alt="Serviço de cabelo"
                className={styles.imagem}
            />

            <h1 className={styles.nome_servico}>
                {servico.nome}
            </h1>

            <p className={styles.descricao}>
                {servico.descricao}
            </p>

            <div className="w-100 mt-4">
                <ButtonGold value="Ver mais" />
            </div>
        </div>
    );
}