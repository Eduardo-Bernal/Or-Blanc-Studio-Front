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
                        <h1 className={styles.titulo}>AGENDAR SERVIÇO</h1>
                        <form action="post" className={styles.formulario_servico}>
                            <div className={styles.div_profissionais_servico}>
                                <div>
                                    <label>Selecione os serviços</label>
                                    <select name="" id="">
                                        <option>Selecione os serviços</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Selecione os profissionais</label>
                                    <select name="" id="">
                                        <option value="">Selecione os Profissionais de preferencia...</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.div_data}>

                                <div className={styles.div_dia_atendimento}>
                                    <label>Selecione a data</label>
                                    <input type="text" placeholder="Selecione o dia de atendimento" />
                                </div>

                                <div className={styles.div_hora_inicio}>
                                    <label>Selecione a hora inicio</label>
                                    <input type="text" placeholder="Selecione a hora que deseja iniciar" />
                                </div>

                            </div>
                            <div className={styles.div_observacoes}>
                                <label>Observações</label>
                                <input type="text" placeholder="Escreva as observações a seguir..."/>
                            </div>

                            <div className={styles.div_botao}>
                            <ButtonGold value="Agendar"/>
                            </div>
                        </form>
                    </div>
                </section>
            <Footer />
        </>
    )
}

export default AgendarServico;