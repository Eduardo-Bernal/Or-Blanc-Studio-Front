import secureLocalStorage from "react-secure-storage";
import { router } from "next/client";
import { api } from "@/pages/api/api";

export async function auth(email: string, senha: string) {
    try {
        const response = await api.post("/Autenticacao/login", {
            email,
            senha
        });

        const token = response.data.token;
        const nome = response.data.nome;
        const role = response.data.role;

        secureLocalStorage.setItem("token", token);
        secureLocalStorage.setItem("nome", nome);
        secureLocalStorage.setItem("role", role);

        if (response.data.idCliente) {
            secureLocalStorage.setItem("id_cliente", response.data.idCliente);
        }

        if (response.data.idProfissional) {
            secureLocalStorage.setItem("id_profissional", response.data.idProfissional);
        }
    } catch (e: any) {
        throw new Error(e.message);
    }
}

export async function sair() {
    secureLocalStorage.clear();
    router.push("/login");
}

export async function estaLogado() {
    const token = secureLocalStorage.getItem("token");
    return !!token;
}