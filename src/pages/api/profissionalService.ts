import {api} from "@/pages/api/api";

export async function listarProfissionais(){
    try{
        const response = await api.get("Profissional");

        return response.data;
    }catch(err: any){
        throw new Error(err.message);
    }
}

export async function listarProfissionalPorId(id: string) {
    const response = await api.get(`/Profissional/${id}`);
    return response.data;
}

