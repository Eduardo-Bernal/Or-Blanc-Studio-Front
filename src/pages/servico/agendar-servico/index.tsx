import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import styles from "./agendar-servico.module.css";

export default function Agendar() {

    return (
        <main className={styles.pagina_conteudo}>

            <Header />
            <div className={styles.conteudo}>

                <div className={styles.inputs}>
                    <label htmlFor="Servico os serviços" className={styles.label}>Selecione os serviços</label>
                    <input
                        type="text"
                        id="Servico os serviços"
                        className={styles.nome_servico}
                    />
                </div>


                <div className={styles.inputs}>
                    <label htmlFor="Selecione os profissionais" className={styles.label}>Selecione os profissionais</label>
                    <textarea
                        id="Selecione os profissionais"
                        placeholder="Selecione os profissionais de sua preferência"
                        // rows={1}
                        className={styles.nome_profissional}
                    />
                </div>

                <div className={styles.inputs}>
                    <label htmlFor="Selecione a data" className={styles.label}>Selecione a data:</label>
                    <input
                        type="text"
                        id="Selecione a data"
                        className={styles.data}
                    />
                </div>


                   <div className={styles.inputs}>
                    <label htmlFor="Selecione o horario de inicio" className={styles.label}>Selecione o horario de inicio</label>
                    <input
                        type="text"
                        id="Selecione o horario de inicio"
                        className={styles.data_inicio}
                    />                    
                </div>

                  <div className={styles.inputs}>
                    <label htmlFor="Selecione o horario final" className={styles.label}>Selecione o horario final:</label>
                    <input
                        type="text"
                        id="Selecione o horario final"
                        className={styles.data_final}
                    />                    
                </div>


                <div className={styles.inputs}>
                    <label htmlFor="Observacoes" className={styles.label}>Observações:</label>
                    <input
                        type="text"
                        id="Observacoes"
                        className={styles.data_final}
                    />                    
                </div>



                <div className={styles.container_botao}>
                    <button type="submit" className={`btn w-100 py-3 fw-medium ${styles.botao_enviar}`}>
                        Agendar
                    </button>
                </div>  
            </div>

            <Footer />
        </main>
    )
}