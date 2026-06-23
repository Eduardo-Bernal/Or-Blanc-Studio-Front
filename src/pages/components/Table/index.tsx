import {useState, useRef, useEffect} from "react";
import styles from "@/pages/components/Table/table.module.css";
import secureLocalStorage from "react-secure-storage";
import {erro, notificacao} from "@/utils/toast";
import {cancelarAgendamento, remarcarAgendamento} from "@/pages/api/agendamentoService";
import ButtonGold from "@/pages/components/ButtonGold";
import {router} from "next/client";

interface Servico {
    id_agendamento: number;
    profissional: string;
    cliente: string;
    servico: string;
    data: string;
    hora: string;
}

interface TabelaProps {
    titulo: string;
    dados: Servico[];
    ehAgendado?: boolean;
    hasFilter?: boolean;
    hasDeleted?: boolean;
    hasChanged?: boolean;
    onClick?: () => void;
    hasButton?: boolean;
}

export default function Tabela({titulo, dados, hasFilter, hasDeleted, onClick, hasButton}: TabelaProps) {
    const [filtroAberto, setFiltroAberto] = useState(false);
    const [filtroPessoa, setFiltroPessoa] = useState("");
    const [filtroServico, setFiltroServico] = useState("");
    const [filtroData, setFiltroData] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [dataHoraInicio, setDataHoraInicio] = useState<string>("");
    const [dataHoraFim, setDataHoraFim] = useState<string>("");
    const [agendamentoSelecionado, setAgendamentoSelecionado] = useState<number>(0);

    const role = secureLocalStorage.getItem("role") as string;

    const nomeColuna = role === "Profissional"
        ? "Cliente"
        : "Profissional";

    async function deletarAgendamento(id: number) {
        try {
            await cancelarAgendamento(id);

            notificacao("Deletado com sucesso!");

            onClick?.();
        } catch (e: any) {
            erro(e.message)
        }
    }

    async function alterarServico(id: number) {
        try{
            await remarcarAgendamento(id, dataHoraInicio, dataHoraFim);

            notificacao("Serviço remarcado com sucesso!");

            onClick?.();
        }catch (e: any) {
            erro(e.message)
        }
    }

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setFiltroAberto(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const pessoasUnicas = [
        ...new Set(
            dados.map((d) =>
                role === "Profissional"
                    ? d.cliente
                    : d.profissional
            )
        )
    ];

    const servicosUnicos = [...new Set(dados.map((d) => d.servico))];
    const datasUnicas = [...new Set(dados.map((d) => d.data))];

    const dadosFiltrados = dados.filter((item) => {
        const pessoa = role === "Profissional"
            ? item.cliente
            : item.profissional;

        const matchPessoa = filtroPessoa
            ? pessoa === filtroPessoa
            : true;

        const matchServico = filtroServico
            ? item.servico === filtroServico
            : true;

        const matchData = filtroData
            ? item.data === filtroData
            : true;

        return matchPessoa && matchServico && matchData;
    });

    function limparFiltros() {
        setFiltroPessoa("");
        setFiltroServico("");
        setFiltroData("");
        setFiltroAberto(false);
    }

    const temFiltroAtivo =
        filtroPessoa || filtroServico || filtroData;

    return (
        <main className={styles.agendaMain}>
            <div className="modal fade" data-bs-theme="dark" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Reagendar serviço</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex flex-column w-50">
                                <label>Selecione a data inicio</label>
                                <input className="input" type="datetime-local" value={dataHoraInicio}
                                       onChange={event => setDataHoraInicio(event.target.value)}
                                       placeholder="Selecione o dia de atendimento"/>
                            </div>
                            <div className={"d-flex flex-column w-50"}>
                                <label>Estimativa para a hora fim</label>
                                <input className="input" type="datetime-local" value={dataHoraFim}
                                       onChange={event => setDataHoraFim(event.target.value)}
                                       placeholder="Selecione a hora que deseja iniciar"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <div className="w-25">
                                <ButtonGold value="Remarcar" onClick={() => alterarServico(agendamentoSelecionado)}></ButtonGold>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" data-bs-theme="dark" id="modalDelete" tabIndex={-1} aria-labelledby="modalDeleteLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalDeleteLabel">Remover Serviço</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Você tem certeza que deseja cancelar o serviço?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={event => deletarAgendamento(agendamentoSelecionado)} data-bs-dismiss="modal">Deletar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.agendaContent}>
                <div className={styles.tabelaContainer}>
                    <div className={styles.tabelaHeader}>
                        <h3
                            style={{color: "white"}}
                            className={styles.tabelaTitulo}
                        >
                            {titulo}
                        </h3>

                        {hasButton && (
                            <div style={{width: '120px'}}>
                                <ButtonGold onClick={() => router.push('/agendar-servico')}
                                            value={"Agendar"}></ButtonGold>
                            </div>
                        )}

                        {hasFilter && (
                            <div
                                style={{position: "relative"}}
                                ref={dropdownRef}
                            >
                                <button
                                    className={styles.btnFiltro}
                                    onClick={() => setFiltroAberto((prev) => !prev)}
                                    style={
                                        temFiltroAtivo
                                            ? {
                                                borderColor: "#a78bfa",
                                                color: "#a78bfa"
                                            }
                                            : {}
                                    }
                                >
                                    <span className={styles.icon}>
                                        <i className="bi bi-filter"></i>
                                    </span>

                                    Filtrar{" "}
                                    {temFiltroAtivo &&
                                        `(${[
                                            filtroPessoa,
                                            filtroServico,
                                            filtroData
                                        ].filter(Boolean).length})`}
                                </button>

                                {filtroAberto && (
                                    <div
                                        style={{
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
                                        }}
                                    >
                                        <p
                                            style={{
                                                color: "rgba(255,255,255,0.5)",
                                                fontSize: "12px",
                                                margin: 0,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.05em"
                                            }}
                                        >
                                            Filtrar por
                                        </p>

                                        {/* Cliente ou Profissional */}
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "4px"
                                            }}
                                        >
                                            <label
                                                style={{
                                                    color: "rgba(255,255,255,0.7)",
                                                    fontSize: "13px"
                                                }}
                                            >
                                                {nomeColuna}
                                            </label>

                                            <select
                                                value={filtroPessoa}
                                                onChange={(e) =>
                                                    setFiltroPessoa(e.target.value)
                                                }
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
                                                <option value="">
                                                    Todos
                                                </option>

                                                {pessoasUnicas.map((pessoa) => (
                                                    <option
                                                        key={pessoa}
                                                        value={pessoa}
                                                    >
                                                        {pessoa}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Serviço */}
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "4px"
                                            }}
                                        >
                                            <label
                                                style={{
                                                    color: "rgba(255,255,255,0.7)",
                                                    fontSize: "13px"
                                                }}
                                            >
                                                Serviço
                                            </label>

                                            <select
                                                value={filtroServico}
                                                onChange={(e) =>
                                                    setFiltroServico(e.target.value)
                                                }
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
                                                <option value="">
                                                    Todos
                                                </option>

                                                {servicosUnicos.map((s) => (
                                                    <option key={s} value={s}>
                                                        {s}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Data */}
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "4px"
                                            }}
                                        >
                                            <label
                                                style={{
                                                    color: "rgba(255,255,255,0.7)",
                                                    fontSize: "13px"
                                                }}
                                            >
                                                Data
                                            </label>

                                            <select
                                                value={filtroData}
                                                onChange={(e) =>
                                                    setFiltroData(e.target.value)
                                                }
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
                                                <option value="">
                                                    Todas
                                                </option>

                                                {datasUnicas.map((d) => (
                                                    <option key={d} value={d}>
                                                        {d}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

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
                                                    cursor: "pointer"
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
                            <th>Nome {nomeColuna}</th>
                            <th>Serviço</th>
                            <th>Data</th>
                            <th>Hora</th>
                            {hasDeleted ? <th className="">Ações</th> : null}
                        </tr>
                        </thead>

                        <tbody>
                        {dadosFiltrados.length > 0 ? (
                            dadosFiltrados.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        {role === "Profissional"
                                            ? item.cliente
                                            : item.profissional}
                                    </td>

                                    <td>{item.servico}</td>
                                    <td>{item.data}</td>
                                    <td>{item.hora}</td>
                                    {hasDeleted == true ?
                                        <td className=""><i onClick={event => setAgendamentoSelecionado(item.id_agendamento)}
                                                            className="ms-1 btn btn-sm btn-outline-danger bi bi-trash-fill" data-bs-toggle="modal" data-bs-target="#modalDelete"></i>
                                            <i onClick={event => setAgendamentoSelecionado(item.id_agendamento)}
                                               className="ms-1 btn btn-sm btn-outline-secondary bi bi-pen-fill" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
{/*                                            <button type="button" >*/}
{/*aslkdjfalsçjfdlaksjfd*/}
{/*                                            </button>*/}
                                        </td> : null}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={5}
                                    style={{
                                        textAlign: "center",
                                        color: "rgba(255,255,255,0.4)",
                                        padding: "32px"
                                    }}
                                >
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