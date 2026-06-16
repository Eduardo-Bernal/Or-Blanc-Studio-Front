import styles from "@/pages/agendar-servico/agendar-servico.module.css"
import Header from "../components/Header";
import Footer from "../components/Footer";

const AgendarServico = () => {
    return(
        <>
            <Header />
                <section id={styles.agendar_servico}>
                    <div className={`${styles.container_agendar} layout_guide`}>
                        <h1>AGENDAR SERVIÇO</h1>
                        <form action="post" className={styles.formulario_servico}>
                            
                        </form>
                    </div>
                </section>
            <Footer />
        </>
    )
}

export default AgendarServico;