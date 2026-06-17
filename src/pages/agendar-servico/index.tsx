import styles from "@/pages/agendar-servico/agendar-servico.module.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonGold from "../components/ButtonGold";

const AgendarServico = () => {
    return(
        <>
            <Header />
                <section id={styles.agendar_servico}>
                    <div className={`${styles.container_agendar} layout_guide`}>
                        <h1>AGENDAR SERVIÇO</h1>
                        <form action="post" className={styles.formulario_servico}>
                            <div className={styles.div_profissionais_servico}>
                                <div>
                                    <label>Selecione os serviços</label>
                                    <select name="" id="">
                                        <option>Vitu</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Selecione os profissionais</label>
                                    <select name="" id="">
                                        <option value="">eduardo</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.div_data}>
                                <label>Selecione a data</label>
                                <input type="text" />
                            </div>
                            <div className={styles.div_hora_inicio_fim}>
                                <div>
                                    <label>Selecione a hora inicio</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label>Selecione a hora fim</label>
                                </div>
                            </div>
                            <div className={styles.div_observacoes}>
                                <label>Observações</label>
                                <input type="text" />
                            </div>

                            <ButtonGold value="Agendar"/>
                        </form>
                    </div>
                </section>
            <Footer />
        </>
    )
}

export default AgendarServico;