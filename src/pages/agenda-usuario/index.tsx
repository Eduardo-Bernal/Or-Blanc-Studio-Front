'use client';

import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import { ReactNode } from "react";
import styles from "../components/Table/table.module.css";
import Tabela from "@/pages/components/Table";



export default function AgendaUsuario(): ReactNode {
    const servicosAgendados = [
        {
            profissional: "Jacinto Aquino",
            servico: "Cabelo",
            data: "11/07/2026",
            hora: "10h"
        }
    ];

    const historicoServicos = [
        {
            profissional: "Jacinto Aquino",
            servico: "Cabelo",
            data: "11/07/2026",
            hora: "10h"
        },
        {
            profissional: "Jacinto Aquino",
            servico: "Cabelo",
            data: "11/07/2026",
            hora: "10h"
        },
        {
            profissional: "Jacinto Aquino",
            servico: "Cabelo",
            data: "11/07/2026",
            hora: "10h"
        },
        {
            profissional: "Jacinto Aquino",
            servico: "Cabelo",
            data: "11/07/2026",
            hora: "10h"
        }
    ];

    return (
        <>
            <Header />
                    <Tabela
                        titulo="Serviços Agendados"
                        dados={servicosAgendados}
                        ehAgendado={true}
                        hasFilter={false}
                    />
                    <Tabela
                        titulo="Histórico de Serviços"
                        dados={historicoServicos}
                        ehAgendado={false}
                        hasFilter={true}
                    />
            <Footer />
        </>
    );
}