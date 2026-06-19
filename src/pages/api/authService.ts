import secureLocalStorage from "react-secure-storage";
import {router} from "next/client";
import {api} from "@/pages/api/api";

export async function auth(email: string, senha: string) {
    try {
        const response = await api.post("/Autenticacao/login", {
            email,
            senha
        });

        const token = response.data.token;

        secureLocalStorage.setItem("token", token);
    } catch (e: any) {
        throw new Error(e.message);
    }
}

export async function sair() {
    secureLocalStorage.clear();
    router.push("/login");
}