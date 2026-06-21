import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import secureLocalStorage from "react-secure-storage";

type Usuario = {
    id_cliente: string;
    nome: string;
};

type AuthContextType = {
    usuario: Usuario | null;
};

const AuthContext = createContext<AuthContextType>({ usuario: null });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    useEffect(() => {
        const nome = secureLocalStorage.getItem("nome") as string;
        const id_cliente = secureLocalStorage.getItem("id_cliente") as string;

        if (nome && id_cliente) {
            setUsuario({ nome, id_cliente });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ usuario }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);