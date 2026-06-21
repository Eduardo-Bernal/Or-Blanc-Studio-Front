'use client';

import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import {ReactNode, useEffect, useState} from "react";
import styles from "../../components/Table/table.module.css";
import Tabela from "@/pages/components/Table";
import {getAgendamentoCliente, getAgendamentos} from "@/pages/api/agendamentoService";
import {useParams} from "next/navigation";

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


export default function AgendaUsuario(): ReactNode {
    const [agendamentos, setAgendamentos] = useState<IAgendamento[]>([]);

    const params = useParams();
    const id = params?.id;



    async function carregarAgendamentos() {
        try {
            const response = await getAgendamentoCliente(String(id));
            setAgendamentos(response);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        carregarAgendamentos();
    }, [id]);

    const dadosTabela = agendamentos.map((agendamento) => ({
        profissional: agendamento.nome_profissional,
        servico: agendamento.nome_servico,
        data: new Date(agendamento.data_hora_inicio).toLocaleDateString("pt-BR"),
        hora: new Date(agendamento.data_hora_inicio).toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
        }),
    }));

    const dadosAgendado = agendamentos
        .filter(agendamento => agendamento.status === "Agendado").sort((a, b) => new Date(a.data_hora_inicio).getTime() - new Date(b.data_hora_inicio).getTime())
        .map(agendamento => ({
            profissional: agendamento.nome_profissional,
            servico: agendamento.nome_servico,
            data: new Date(agendamento.data_hora_inicio).toLocaleDateString("pt-BR"),
            hora: new Date(agendamento.data_hora_inicio).toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
            }),
        }));

    console.log(dadosAgendado);

    return (
        <>
            <Header />
            <main style={{minHeight:'78.7vh', backgroundColor:'var(--preto-fundo)'}}>
                    <Tabela
                        titulo="Serviços Agendados"
                        dados={dadosAgendado}
                        ehAgendado={true}
                        hasFilter={false}
                    />
                    <Tabela
                        titulo="Histórico de Serviços"
                        dados={dadosTabela}
                        ehAgendado={false}
                        hasFilter={true}
                    />
            </main>
            <Footer />
        </>
    );
}