import { apiPost } from "@/services/api";

export async function cadastro(nome: string, telefone: string, email: string, senha: string) {
    await apiPost("/Cliente", {
        nome,
        telefone,
        email,
        senha,
    });
}
