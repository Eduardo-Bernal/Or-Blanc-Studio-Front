import { useState, useRef, useEffect } from "react";
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
    hasFilter?: boolean;
}

export default function Tabela({ titulo, dados, hasFilter }: TabelaProps) {
    const [filtroAberto, setFiltroAberto] = useState(false);
    const [filtroProfissional, setFiltroProfissional] = useState("");
    const [filtroServico, setFiltroServico] = useState("");
    const [filtroData, setFiltroData] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setFiltroAberto(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const profissionaisUnicos = [...new Set(dados.map((d) => d.profissional))];
    const servicosUnicos = [...new Set(dados.map((d) => d.servico))];
    const datasUnicas = [...new Set(dados.map((d) => d.data))];

    const dadosFiltrados = dados.filter((item) => {
        const matchProfissional = filtroProfissional ? item.profissional === filtroProfissional : true;
        const matchServico = filtroServico ? item.servico === filtroServico : true;
        const matchData = filtroData ? item.data === filtroData : true;
        return matchProfissional && matchServico && matchData;
    });

    function limparFiltros() {
        setFiltroProfissional("");
        setFiltroServico("");
        setFiltroData("");
        setFiltroAberto(false);
    }

    const temFiltroAtivo = filtroProfissional || filtroServico || filtroData;

    return (
        <main className={styles.agendaMain}>
            <div className={styles.agendaContent}>
                <div className={styles.tabelaContainer}>
                    <div className={styles.tabelaHeader}>
                        <h3 style={{ color: "white" }} className={styles.tabelaTitulo}>
                            {titulo}
                        </h3>

                        {hasFilter && (
                            <div style={{ position: "relative" }} ref={dropdownRef}>
                                <button
                                    className={styles.btnFiltro}
                                    onClick={() => setFiltroAberto((prev) => !prev)}
                                    style={temFiltroAtivo ? { borderColor: "#a78bfa", color: "#a78bfa" } : {}}
                                >
                                    <span className={styles.icon}>
                                        <i className="bi bi-filter"></i>
                                    </span>
                                    Filtrar {temFiltroAtivo && `(${[filtroProfissional, filtroServico, filtroData].filter(Boolean).length})`}
                                </button>

                                {filtroAberto && (
                                    <div style={{
                                        position: "absolute",
                                        top: "calc(100% + 8px)",
                                        right: 0,
                                        backgroundColor: "#1e1e1e",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        borderRadius: "12px",
                                        padding: "16px",
                                        minWidth: "260px",
                                        zIndex: 100,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "12px",
                                        boxShadow: "0 8px 24px rgba(0,0,0,0.4)"
                                    }}>
                                        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                            Filtrar por
                                        </p>

                                        {/* Profissional */}
                                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <label style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>Profissional</label>
                                            <select
                                                value={filtroProfissional}
                                                onChange={(e) => setFiltroProfissional(e.target.value)}
                                                style={{
                                                    backgroundColor: "#2a2a2a",
                                                    border: "1px solid rgba(255,255,255,0.15)",
                                                    borderRadius: "8px",
                                                    color: "white",
                                                    padding: "8px 10px",
                                                    fontSize: "14px",
                                                    outline: "none",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                <option value="">Todos</option>
                                                {profissionaisUnicos.map((p) => (
                                                    <option key={p} value={p}>{p}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Serviço */}
                                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <label style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>Serviço</label>
                                            <select
                                                value={filtroServico}
                                                onChange={(e) => setFiltroServico(e.target.value)}
                                                style={{
                                                    backgroundColor: "#2a2a2a",
                                                    border: "1px solid rgba(255,255,255,0.15)",
                                                    borderRadius: "8px",
                                                    color: "white",
                                                    padding: "8px 10px",
                                                    fontSize: "14px",
                                                    outline: "none",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                <option value="">Todos</option>
                                                {servicosUnicos.map((s) => (
                                                    <option key={s} value={s}>{s}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Data */}
                                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <label style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>Data</label>
                                            <select
                                                value={filtroData}
                                                onChange={(e) => setFiltroData(e.target.value)}
                                                style={{
                                                    backgroundColor: "#2a2a2a",
                                                    border: "1px solid rgba(255,255,255,0.15)",
                                                    borderRadius: "8px",
                                                    color: "white",
                                                    padding: "8px 10px",
                                                    fontSize: "14px",
                                                    outline: "none",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                <option value="">Todas</option>
                                                {datasUnicas.map((d) => (
                                                    <option key={d} value={d}>{d}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Limpar */}
                                        {temFiltroAtivo && (
                                            <button
                                                onClick={limparFiltros}
                                                style={{
                                                    marginTop: "4px",
                                                    backgroundColor: "transparent",
                                                    border: "1px solid rgba(255,255,255,0.2)",
                                                    borderRadius: "8px",
                                                    color: "rgba(255,255,255,0.6)",
                                                    padding: "8px",
                                                    fontSize: "13px",
                                                    cursor: "pointer",
                                                    transition: "all 0.2s"
                                                }}
                                            >
                                                Limpar filtros
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
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
                        {dadosFiltrados.length > 0 ? (
                            dadosFiltrados.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.profissional}</td>
                                    <td>{item.servico}</td>
                                    <td>{item.data}</td>
                                    <td>{item.hora}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", padding: "32px" }}>
                                    Nenhum agendamento encontrado
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}