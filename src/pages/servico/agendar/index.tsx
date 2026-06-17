import { useEffect, useState } from "react";
import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import { getAgendamentos } from "@/pages/api/agendamentoService";
import Tabela from "@/pages/components/Table";

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

    const dadosTabela = agendamentos.map((agendamento) => ({
        profissional: agendamento.nome_profissional,
        servico: agendamento.nome_servico,
        data: new Date(agendamento.data_hora_inicio).toLocaleDateString("pt-BR"),
        hora: new Date(agendamento.data_hora_inicio).toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
        }),
    }));

    return (
        <>
            <Header />

            <main
                style={{ backgroundColor: "var(--preto-fundo)", minHeight: "80vh" }}
                className="py-5"
            >
                <Tabela
                    titulo="Agendamentos"
                    dados={dadosTabela}
                />
            </main>

            <Footer />
        </>
    );
}