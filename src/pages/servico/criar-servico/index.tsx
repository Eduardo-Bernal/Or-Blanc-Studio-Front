import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import styles from "./criar-servico.module.css";
import ButtonGold from "@/pages/components/ButtonGold";
import {useEffect, useState} from "react";
import {estaLogado} from "@/pages/api/authService";
import secureLocalStorage from "react-secure-storage";
import {router} from "next/client";



export default function Criar() {

    const [logado, setLogado] = useState(false);
    const [role, setRole] = useState<string | null>(null);

    async function verificarLogin(){
        setLogado(await estaLogado())
        setRole(secureLocalStorage.getItem("role") as string);
    }

    useEffect(() => {
        verificarLogin();
    }, []);

    if(!logado || role != "Profissional") {
        setTimeout(() => {
            router.push("/login")
        }, 1500)
        return (
            <>
                <main className="text-center d-flex justify-content-center align-items-center vh-100">
                    <div>
                        <h1 className="text-white text-center">Faça login para acessar essa tela</h1>
                    </div>
                </main>
            </>
        )
    }

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
                        step="0.01"
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