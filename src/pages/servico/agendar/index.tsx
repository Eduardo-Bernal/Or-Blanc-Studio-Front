import {useEffect, useState} from "react";
import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import {getAgendamentos} from "@/pages/api/agendamentoService";


interface IAgendamento {
    id_agendamento: number;
    id_cliente: string;
    nome_cliente: string;
    telefone_cliente: string;
    id_profissional: string;
    nome_profissional: string;
    especialidade: string;
    nome_servico: string;
    valor_servico: number;
    data_hora_inicio: string;
    data_hora_fim: string;
    duracao_minutos: number;
    status: string;
    observacao: string;
}

export default function Agendar() {
    const [agendamentos, setAgendamentos] = useState<IAgendamento[]>([]);

    useEffect(() => {
        carregarAgendamentos();
    }, []);

    async function carregarAgendamentos() {
        try {
            const response = await getAgendamentos();
            setAgendamentos(response);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <Header/>

            <main
                style={{backgroundColor: "var(--preto-fundo)", minHeight: "80vh"}}
                className="py-5"
            >
                <div className="col-6">
                    <div
                        className="ms-4"
                        style={{
                            border: "1px solid rgba(255,255,255,0.15)",
                            borderRadius: "20px",
                            backgroundColor: "#1A1A1A"
                        }}
                    >
                        <div className="table-responsive">
                            <table className="table table-dark align-middle mb-0">
                                <thead>
                                    <tr>
                                            <th>Cliente</th>
                                            <th>Serviço</th>
                                            <th>Data</th>
                                            <th>Hora</th>
                                        </tr>
                                </thead>

                                <tbody>
                                {agendamentos.length > 0 ? (
                                    agendamentos.map((agendamento) => (
                                        <tr key={agendamento.id_agendamento}>
                                            <td>{agendamento.nome_cliente}</td>

                                            <td>{agendamento.nome_servico}</td>

                                            <td>
                                                {new Date(
                                                    agendamento.data_hora_inicio
                                                ).toLocaleDateString("pt-BR")}
                                            </td>

                                            <td>{agendamento.status}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="text-center">
                                            Nenhum agendamento encontrado
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </main>

            <Footer/>
        </>
    );
}