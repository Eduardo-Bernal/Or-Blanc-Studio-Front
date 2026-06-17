<<<<<<< HEAD
import { apiPost } from "@/pages/api/api";

type AuthResponse = {
    token: string;
};

export async function auth(email: string, senha: string) {
    const response = await apiPost<AuthResponse>("/Autenticacao/login", {
        email,
        senha,
    });

    localStorage.setItem("token", response.token);
}

export function sair() {
    localStorage.clear();
    window.location.href = "/login";
}
=======
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
>>>>>>> f56c9ce7f377ca34cdcd72a45d65ea15f8a95942
