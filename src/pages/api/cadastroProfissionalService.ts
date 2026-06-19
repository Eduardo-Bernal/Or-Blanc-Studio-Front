import { api } from "@/pages/api/api";

type Profissional = {
    nome: string;
    telefone: string;
    email: string;
    especialidade: string;
    senha: string;
    ativo: boolean;
    imagem: File | null;
}

export async function cadastrarProfissional(dados: Profissional) {

    const formData = new FormData();

    formData.append("nome", dados.nome);
    formData.append("telefone", dados.telefone);
    formData.append("email", dados.email);
    formData.append("especialidade", dados.especialidade);
    formData.append("senha", dados.senha);
    formData.append("ativo", dados.ativo.toString());

    // evita crash se não tiver imagem
    if (dados.imagem) {
        formData.append("imagem", dados.imagem);
    }

    await api.post("Profissional", formData);
}