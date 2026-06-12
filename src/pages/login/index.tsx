import { useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@/pages/api/authService";
import { erro, notificacao } from "@/utils/toast";

export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await auth(email, senha);

            notificacao("Autenticado com sucesso!");

            setTimeout(() => {
                router.push("/servico/agendar");
            }, 2000);
        } catch {
            erro("Email ou Senha incorretos.");
        }
    }

    return (
        <main style={{ backgroundColor: "#353535" }} className="container-fluid vh-100">
            <div className="row h-100 p-3">
                <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
                    <div className="overflow-hidden rounded-4 d-flex align-items-center justify-content-center">
                        <img
                            src="/imgs/loginbg.png"
                            alt="Login"
                            style={{ width: "90%" }}
                        />
                    </div>
                </div>

                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <div
                        className="w-100"
                        style={{ maxWidth: "420px" }}
                    >
                        <div className="text-center mb-5">
                            <img
                                src="/imgs/logoLogin.png"
                                alt="Logo"
                                style={{ width: "140px" }}
                            />
                        </div>

                        <h1 className="text-white fw-light mb-1">
                            Bem vindo de volta!
                        </h1>

                        <p className="text-secondary mb-5">
                            Digite seu email e sua senha para acessar sua conta.
                        </p>

                        <form onSubmit={login}>
                            <div className="mb-4">
                                <label className="form-label text-white">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control bg-secondary-subtle border-0 py-3"
                                    placeholder="Digite seu email..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-2">
                                <label className="form-label text-white">
                                    Senha
                                </label>

                                <input
                                    type="password"
                                    className="form-control bg-secondary-subtle border-0 py-3"
                                    placeholder="Digite sua senha..."
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="text-end mb-5">
                                <a
                                    href="#"
                                    className="text-light small"
                                >
                                    Esqueceu sua senha?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="btn w-100 py-3 fw-medium"
                                style={{
                                    background: "linear-gradient(-90deg, #fcff9e 0%, #c67700 100%)",
                                    color: "#000",
                                    border: "none",
                                    minWidth: "120px",
                                }}
                            >
                                Entrar
                            </button>
                        </form>

                        <div className="text-center mt-5">
                            <a
                                href="#"
                                className="text-light"
                            >
                                Ainda não tem uma conta? Crie agora
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}