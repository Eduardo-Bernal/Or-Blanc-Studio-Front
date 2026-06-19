import styles from "./cardServico.module.css";

type Props = {
    nome: string;
    descricao: string;
    imagemUrl: string | null;
};

export default function CardServico({ nome, descricao, imagemUrl }: Props) {

    return (
        <div className={`${styles.card} glass-card`}>

            <img
                src={imagemUrl || "/imgs/cabelo_mulher.png"}
                alt={nome}
                className={styles.imagem}
            />

            <h1 className={styles.nome_servico}>
                {nome}
            </h1>

            <p className={styles.descricao}>
                {descricao}
            </p>

            <button>
                Ver mais
            </button>

        </div>
    );
}