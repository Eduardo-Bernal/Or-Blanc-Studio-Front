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
