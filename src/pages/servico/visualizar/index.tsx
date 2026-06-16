import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import styles from "./visualizar.module.css";
import ButtonGold from "@/pages/components/ButtonGold";

export default function Visualizar(){
    return (
        <main className={styles.page_content}>
            <Header />

            <h1 className={styles.titulo}>
                Ver Serviço
            </h1>

            <div className={styles.conteudo}>
                <div className={styles.card}>
                    <img
                        src="/imgs/cabelo_mulher.png"
                        alt="Serviço de cabelo"
                        className={styles.imagem}
                    />

                    <h1 className={styles.nome_servico}>
                        BABY LISS
                    </h1>
                    <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </p>

                <div className="w-100 mt-4">
                    <ButtonGold
                        value="Ver mais"
                    />
                </div>

            </div>
            </div>
            <Footer />
        </main>
    )
}