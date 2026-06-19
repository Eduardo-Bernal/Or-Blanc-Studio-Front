import {api} from "@/pages/api/api";


export async function getAgendamentos(){
    try{
        const response = await api.get("Agendamento");
        return response.data;
    }catch(err:any){
        throw new Error(err.message);
    }
}