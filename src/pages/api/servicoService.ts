import axios from "axios";
import {api} from "@/pages/api/api";

interface ServicoLista {
    id_servico: number;
    nome: string;
    descricao: string;
    imagemUrl?: string;
    valor: number;
    ativo: boolean;
}

type ServicoForm = {
    nome: string;
    descricao: string;
    imagemUrl?: string;
    valor: number;
}

export async function listarServicos() {
    try {
        const response= await api.get("Servico")

        const servicosAtivos = response.data.filter((servico: ServicoLista) => servico.ativo == true);

        const servicos = servicosAtivos.map((servico: ServicoLista) => ({
            ...servico,
            imagemUrl: `${api.defaults.baseURL}${servico.imagemUrl}`
        }))
        return servicos;
    }
    catch (error: any) {
        throw new Error(error);
    }
}

export async function listarServicoPorID(id: number) {
    try {
        const response= await api.get("Servico/" + id)
        const servico = {
            ...response.data,
            imagemUrl: `${api.defaults.baseURL}${response.data.imagemUrl}`
        }

        return servico;
    }
    catch (error: any) {
        throw new Error(error);
    }
}

