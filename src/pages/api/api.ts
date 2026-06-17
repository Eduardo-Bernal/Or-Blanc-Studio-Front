<<<<<<< HEAD
const API_BASE_URL = "https://localhost:7175/api";

type RequestBody = Record<string, unknown>;

export async function apiPost<TResponse>(path: string, body: RequestBody): Promise<TResponse> {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const response = await fetch(`${API_BASE_URL}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw new Error("Erro na requisicao");
    }

    const text = await response.text();

    if (!text) {
        return undefined as TResponse;
    }

    return JSON.parse(text) as TResponse;
}
=======
import axios from "axios";
import secureLocalStorage from "react-secure-storage";

const apiLocal = "https://localhost:7175/api/"

export const api = axios.create({
    baseURL: apiLocal,
})

api.interceptors.request.use((config)=> {
    const token = secureLocalStorage.getItem("token")

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
})
>>>>>>> f56c9ce7f377ca34cdcd72a45d65ea15f8a95942
