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
