type Servico = {
    nome: string;
    descricao: string;
    valor: number;
    ativo: boolean;
    imagem: File | null;
}

export async function cadastroServico(dados: Servico) {
    try {
        const formData = new FormData();

        formData.append('nome', dados.nome);
        formData.append('descricao', dados.descricao);
        formData.append('valor', dados.valor.toString());
        formData.append('ativo', dados.ativo.toString());

        if (dados.imagem) {
            formData.append('imagem', dados.imagem)
        }

    } catch (err: any) {
        throw new Error(err.message);
    }
}