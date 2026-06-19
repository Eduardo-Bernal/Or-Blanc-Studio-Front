import {api} from "@/pages/api/api";

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
    try{
        const formData = new FormData();

        formData.append("nome", dados.nome);
        formData.append("telefone", dados.telefone);
        formData.append("email", dados.email);
        formData.append("especialidade", dados.especialidade);
        formData.append("senha", dados.senha);
        formData.append("ativo", true.toString());
        formData.append("imagem", dados.imagem!);

        await api.post("/Profissional", formData);
    }catch(err:any){
        throw new Error(err.message);
    }
}