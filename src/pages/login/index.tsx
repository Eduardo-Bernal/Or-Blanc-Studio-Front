export default function Login() {
    return (
        <main style={{backgroundColor: '#353535'}} className="container-fluid vh-100">
            <div className="row h-100 p-3">
                <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
                    <div className="overflow-hidden rounded-4 d-flex align-items-center justify-content-center">
                        <img
                            src="/imgs/loginbg.png"
                            alt="Login"
                            className=""
                            style={{width:'90%'}}
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

                        <div className="mb-4">
                            <label className="form-label text-white">
                                Email
                            </label>

                            <input
                                type="email"
                                className="form-control bg-secondary-subtle border-0 py-3"
                                placeholder="Digite seu email..."
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
                            className="btn w-100 py-3 fw-medium"
                            style={{
                                backgroundColor: "#D9C27A",
                                color: "#1B1B1B"
                            }}
                        >
                            Entrar
                        </button>

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