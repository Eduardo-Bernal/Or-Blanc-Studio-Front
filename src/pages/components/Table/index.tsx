import {ReactNode} from "react";
import Header from "@/pages/components/Header";
import styles from "@/pages/components/Table/table.module.css";

interface Servico {
    profissional: string;
    servico: string;
    data: string;
    hora: string;
}

interface TabelaProps {
    titulo: string;
    dados: Servico[];
    ehAgendado?: boolean;
}

export default function Tabela({titulo, dados}: TabelaProps) {

    return (
        <main className={styles.agendaMain}>
            <div className={styles.agendaContent}>
                <div className={styles.tabelaContainer}>
                    <div className={styles.tabelaHeader}>
                        <h3 className={styles.tabelaTitulo}>{titulo}</h3>

                        <button className={styles.btnFiltro}>
                            <span className={styles.icon}><i className="bi bi-filter"></i></span>
                            Filtrar
                        </button>
                    </div>

                    <table className={styles.tabelaCustom}>
                        <thead>
                        <tr>
                            <th>Nome Profissional</th>
                            <th>Serviço</th>
                            <th>Data</th>
                            <th>Hora</th>
                        </tr>
                        </thead>

                        <tbody>
                        {dados.map((item, index) => (
                            <tr key={index}>
                                <td>{item.profissional}</td>
                                <td>{item.servico}</td>
                                <td>{item.data}</td>
                                <td>{item.hora}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
};


