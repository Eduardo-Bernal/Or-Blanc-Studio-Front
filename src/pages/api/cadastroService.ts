<<<<<<< HEAD
import { apiPost } from "@/pages/api/api";

export async function cadastro(nome: string, telefone: string, email: string, senha: string) {
    await apiPost("/Cliente", {
        nome,
        telefone,
        email,
        senha,
    });
}
=======
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
>>>>>>> f56c9ce7f377ca34cdcd72a45d65ea15f8a95942
