import styles from "@/pages/agendar-servico/agendar-servico.module.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonGold from "../components/ButtonGold";
import { useEffect, useState } from "react";
import { listarServicos } from "@/pages/api/servicoService";
import { listarProfissionais } from "@/pages/api/profissionalService";
import { agendarServico } from "@/pages/api/agendamentoService";
import {useAuth} from "@/pages/api/AuthContext";

type Servico = {
    descricao: string;
    id_servico: number;
    imagemUrl: string;
    nome: string;
    valor: number;
}

type Profissional = {
    email: string;
    especialidade: string;
    id_profissional: string;
    imagemUrl: string;
    nome: string;
    telefone: string;
}

const AgendarServico = () => {
    const { usuario } = useAuth();

    const [profissionais, setProfissionais] = useState<Profissional[]>();
    const [servicos, setServicos] = useState<Servico[]>();
    const [idProfissional, setIdProfissional] = useState<string>("");
    const [idServico, setIdServico] = useState<number>(0);
    const [dataHoraInicio, setDataHoraInicio] = useState<string>("");
    const [dataHoraFim, setDataHoraFim] = useState<string>("");
    const [observacao, setObservacao] = useState<string>("");

    async function getProfissinais() {
        try {
            const dados = await listarProfissionais();
            setProfissionais(dados);
        } catch (e: any) {
            console.log(e);
        }
    }

    async function getServicos() {
        try {
            const dados = await listarServicos();
            setServicos(dados);
        } catch (e: any) {
            console.log(e);
        }
    }

    async function cadastrarAgendamento(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const dados = await agendarServico({
                id_cliente: usuario?.id_cliente ?? "",
                id_profissional: idProfissional,
                id_servico: idServico,
                data_hora_inicio: dataHoraInicio,
                data_hora_fim: dataHoraFim,
                observacao,
                status: "ativo",
            });
            console.log(dados);
        } catch (e: any) {
            console.log(e);
        }
    }

    useEffect(() => {
        getServicos();
        getProfissinais();
    }, []);

    return (
        <>
            <Header/>
            <section id={styles.agendar_servico}>
                <div className={`${styles.container_agendar} layout_guide`}>
                    <h1 className={"titulo"}>AGENDAR SERVIÇO</h1>
                    <form onSubmit={cadastrarAgendamento} className={styles.formulario_servico}>
                        <div className={`${styles.div_profissionais_servico}`}>
                            <div className="d-flex flex-column w-50">
                                <label>Selecione os serviços</label>
                                <select className="input" value={idServico} onChange={(e) => setIdServico(Number(e.target.value))}>
                                    <option>Selecione os serviços</option>
                                    {servicos?.map((servico) => (
                                        <option value={servico.id_servico} key={servico.id_servico}>{servico.nome}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="d-flex flex-column w-50">
                                <label>Selecione os profissionais</label>
                                <select className="input" value={idProfissional} onChange={(e) => setIdProfissional(e.target.value)}>
                                    <option value="">Selecione os Profissionais de preferencia...</option>
                                    {profissionais?.map((profissional) => (
                                        <option value={profissional.id_profissional} key={profissional.id_profissional}>{profissional.nome}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={`${styles.div_profissionais_servico}`}>
                            <div className="d-flex flex-column w-50">
                                <label>Selecione a data inicio</label>
                                <input className="input" type="datetime-local" value={dataHoraInicio} onChange={event => setDataHoraInicio(event.target.value)} placeholder="Selecione o dia de atendimento"/>
                            </div>
                            <div className={"d-flex flex-column w-50"}>
                                <label>Estimativa para a hora fim</label>
                                <input className="input" type="datetime-local" value={dataHoraFim} onChange={event => setDataHoraFim(event.target.value)} placeholder="Selecione a hora que deseja iniciar"/>
                            </div>
                        </div>
                        <div className={styles.div_observacoes}>
                            <label>Observações</label>
                            <input type="text" value={observacao} onChange={event => setObservacao(event.target.value)} placeholder="Escreva as observações a seguir..."/>
                        </div>
                        <div className={styles.div_botao}>
                            <ButtonGold value="Agendar" type="submit"/>
                        </div>
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default AgendarServico;