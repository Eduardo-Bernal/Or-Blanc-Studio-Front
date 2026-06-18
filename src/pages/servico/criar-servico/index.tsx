import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import styles from "./criar-servico.module.css";
import ButtonGold from "@/pages/components/ButtonGold";



export default function Criar() {
    return (
        <main className={styles.pagina_conteudo}>
            <Header />
            
            <h1 className={styles.titulo_servico}>Criar um Serviço</h1>  

            <div className={styles.conteudo}>
             
                <div className={styles.inputs}>
                    <label htmlFor="nome" className={styles.label}>Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        className={styles.nome}
                    />
                </div>

               
                <div className={styles.inputs}>
                    <label htmlFor="descricao" className={styles.label}>Descrição:</label>
                    <textarea
                        id="descricao"
                        className={styles.descricao}
                        placeholder="Digite a descrição do serviço..."
                        rows={2}    
                    />
                </div>

                
                <div className={styles.inputs}>
                    <label htmlFor="valor" className={styles.label}>Valor (R$):</label>
                    <input
                        type="number"
                        id="valor"
                        className={styles.valor}
                        placeholder="0,00"
                        step="5,00"
                        min="0"
                    />
                </div>

               
                <div className={styles.inputs}>
                    <label htmlFor="imagem" className={styles.label}>Imagem do Serviço:</label>
                    <input
                        type="file"
                        id="imagem"
                        className={styles.imagem_input}
                        accept="image/*"
                    />
                </div>

                 <div className={styles.container_botao}>
                 <button type="submit" className={`btn w-100 py-3 fw-medium ${styles.botao_enviar}`}>
                  Cadastrar Serviço
                 </button>
    </div>
            </div> 

          <Footer   />  
        </main>
    );
}