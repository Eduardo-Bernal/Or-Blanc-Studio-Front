import { api } from "./api";

interface IAgendamento {
    id_cliente: string,
    id_profissional: string,
    id_servico: number,
    data_hora_inicio: string,
    data_hora_fim: string,
    status: string,
    observacao: string,
    id_agendamento: string,
}

interface IAgendamentoCadastro {
    id_cliente: string,
    id_profissional: string,
    id_servico: number,
    data_hora_inicio: string,
    data_hora_fim: string,
    status: string,
    observacao: string
}

export async function getAgendamentos(){
    try{
        const response = await api.get("Agendamento");
        return response.data;
    }catch(err:any){
        throw new Error(err.message);
    }
}

export async function getAgendamentoCliente(id: string){
    try {
        const response = await api.get(`Agendamento/cliente/${id}`);
        return response.data;
    }
    catch(err:any){
        throw new Error(err.message);
    }
}

export async function getAgendamentoProfissional(id: string){
    try {
        const response = await api.get(`Agendamento/profissional/${id}`);
        return response.data;
    }
    catch(err:any){
        throw new Error(err.message);
    }
}

export async function agendarServico(agendamento:IAgendamentoCadastro){
    try{
        await api.post("Agendamento", {
            "id_cliente": agendamento.id_cliente,
            "id_servico": agendamento.id_servico,
            "id_profissional": agendamento.id_profissional,
            "data_hora_inicio": agendamento.data_hora_inicio,
            "data_hora_fim": agendamento.data_hora_fim,
            status: agendamento.status,
            observacao: agendamento.observacao,
        });

    }catch (e:any){
        console.log(e.response.data)
        throw new Error(e.response.data);
    }
}

export async function cancelarAgendamento(id: number){
    try{
        await api.delete(`Agendamento/${id}/cancelar`);
    }catch(err:any){
        throw new Error(err.message);
    }
}