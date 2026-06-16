import { useState } from "react";
import {erro, notificacao} from "@/utils/toast";
import {cadastro} from "@/services/cadastroService";


export default function Cadastro() {
    const [form, setForm] = useState({
        email: "",
        nome: "",
        telefone: "",
        senha: "",
    });
    const [loading, setLoading] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit() {


        if (!form.email || !form.nome || !form.telefone || !form.senha) {
            erro("Preenche todos os campos!");
            return;
        }

        setLoading(true);
        try {
            await cadastro(form.nome, form.telefone, form.email, form.senha);
            notificacao("Autenticado com sucesso!");
        } catch (e: any) {
            erro("Erro ao criar a conta");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main style={{ backgroundColor: "#353535" }} className="container-fluid vh-100">
            <div className="row h-100 p-3">
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="w-100" style={{ maxWidth: "420px" }}>
                        <div className="text-center mb-5">
                            <img src="/imgs/logoLogin.png" alt="Logo" style={{ width: "140px" }} />
                        </div>

                        <h1 className="text-white fw-light mb-1">Registre se agora</h1>

                        <p className="text-secondary mb-3">
                            Digite seu email e sua senha para criar sua conta.
                        </p>

                        <div className="mb-2">
                            <label className="form-label text-white">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="form-control bg-secondary-subtle border-0 py-3"
                                placeholder="Digite seu email..."
                            />
                        </div>

                        <div className="mb-2">
                            <label className="form-label text-white">Nome</label>
                            <input
                                type="text"
                                name="nome"
                                value={form.nome}
                                onChange={handleChange}
                                className="form-control bg-secondary-subtle border-0 py-3"
                                placeholder="Digite seu Nome"
                            />
                        </div>

                        <div className="mb-2">
                            <label className="form-label text-white">Telefone</label>
                            <input
                                type="tel"
                                name="telefone"
                                value={form.telefone}
                                onChange={handleChange}
                                className="form-control bg-secondary-subtle border-0 py-3"
                                placeholder="Digite seu telefone"
                            />
                        </div>

                        <div className="mb-2">
                            <label className="form-label text-white">Senha</label>
                            <input
                                type="password"
                                name="senha"
                                value={form.senha}
                                onChange={handleChange}
                                className="form-control bg-secondary-subtle border-0 py-3"
                                placeholder="Digite sua senha..."
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="btn w-100 py-3 fw-medium mt-4"
                            style={{
                                background: "linear-gradient(-90deg, #fcff9e 0%, #c67700 100%)",
                                color: "#000",
                                border: "none",
                                minWidth: "120px",
                                opacity: loading ? 0.7 : 1,
                            }}
                        >
                            {loading ? "Criando conta..." : "Criar conta"}
                        </button>

                        <div className="text-center mt-5">
                            <a href="#" className="text-light">
                                Já tem uma conta? Entre agora!
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
                    <div className="overflow-hidden rounded-4 d-flex align-items-center justify-content-center">
                        <img
                            src="/imgs/loginbg.png"
                            alt="Login"
                            style={{ width: "90%" }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}