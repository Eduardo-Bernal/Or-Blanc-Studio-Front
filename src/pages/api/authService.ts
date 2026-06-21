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
        const id_cliente = response.data.id_cliente;

        secureLocalStorage.setItem("token", token);
        secureLocalStorage.setItem("nome", nome);
        secureLocalStorage.setItem("id_cliente", id_cliente);
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