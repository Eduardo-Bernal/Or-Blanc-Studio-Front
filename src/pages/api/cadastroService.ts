import {api} from "@/pages/api/api";

export async function cadastro(nome: string, telefone: string,email: string, senha: string) {
    try {
        const response = await api.post("/Cliente", {
            nome,
            telefone,
            email,
            senha
        });
    } catch (e: any) {
        throw new Error(e.message);
    }
}