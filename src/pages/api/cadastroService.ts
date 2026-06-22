import {api} from "@/pages/api/api";

export async function cadastro(nome: string, telefone: string,email: string, senha: string) {
    try {
        const response = await api.post("/Cliente", {
            nome,
            telefone,
            email,
            senha
        });
        return response.data
    } catch (e: any) {
        console.log(e.response?.data);
    }
}