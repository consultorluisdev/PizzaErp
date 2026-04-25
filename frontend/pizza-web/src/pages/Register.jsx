import { useState } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const res = await api.post("/auth/register", {
                name,
                email,
                password,
            });
            alert(res.data.message);
            // Redirecionar para a página de login após o registro bem-sucedido
            navigate("/login");
        } catch (err) {
            alert(err.response?.data?.error || "Erro ao registrar");
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-red-950">
            <div className="bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md border border-zinc-800">
                <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
                    🍕 Criar Conta
                </h2>
                <div className="space-y-4">

                    <input
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500"

                    />
                    <input
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <input
                        placeholder="password"
                        type="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button
                        onClick={handleRegister}
                        className="w-full bg-red-600 hover:bg-red-700 transition p-3 rounded-lg font-semibold"
                    >
                        Registrar
                    </button>
                    {/* Link para o login */}
                    <p className="text-center text-zinc-400 mt-4">
                        Já tem uma conta?{" "} <Link to="/login" className="text-red-500 hover:underline">
                            Entrar
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    )

}