import { api } from "./api";

export async function listarClientePorId(id: string) {
    try {
        const response = await api.get(`/Cliente/${id}`);
        return response.data;
    } catch (error: any) {
        throw new Error(error?.response?.data || "Erro ao buscar cliente");
    }
}

export async function editarCliente(id: string, dados: {
        nome: string;
        email: string;
        telefone: string;
        senha: string;
}) {
    try {
        const response = await api.put(`/Cliente/${id}`, dados);
        return response.data;
    } catch (error: any) {
        throw new Error(
            error?.response?.data || "Erro ao atualizar cliente"
        );
    }
}