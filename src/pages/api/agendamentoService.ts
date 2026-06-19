import {api} from "@/pages/api/api";


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
        console.log(response.data);
    }
    catch(err:any){
        throw new Error(err.message);
    }
}