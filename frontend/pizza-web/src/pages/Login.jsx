import { useState } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async () => {
        try {
            const res = await api.post("/auth/login", {
                email,
                password,
            });
            // salvar token
            localStorage.setItem("token", res.data.token);

            setMessage("Login bem-sucedido!");

            // redirecionar para a página principal
            navigate("/dashboard");

        } catch (err) {
            alert("Erro no login");
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-red-950">
            <div className="bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md border border-zinc-800">
                <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
                    🍕 PizzaERP
                </h2>
                <div className="space-y-4">
                    <input
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded-lg bg-zinc-800 text-white border boder-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        placeholder="Senha"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 rounded-lg bg-zinc-800 text-white border boder-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <button
                        onClick={handleLogin}
                        className="w-full bg-red-600 hover:bg-red-700 transition p-3 rounded-lg text-white font-semibold"
                    >
                        Entrar
                    </button>

                </div>
                <p className="text-center text-zinc-400 mt-4">
                    Não tem uma conta?{" "} <Link to="/register" className="text-red-500 hover:underline">
                        Criar conta
                    </Link>
                </p>
            </div>
        </div>
    )
}