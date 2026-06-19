import { api } from "./api";

export async function listarServicos() {
    const response = await api.get("Servico");
    return response.data;
}