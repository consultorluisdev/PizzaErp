import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";


export default function Dashboard() {
    const [tab, setTab] = useState("overview");
    const [time, setTime] = useState("");
    const navigate = useNavigate();

    const [data, setData] = useState({
        pedidosHoje: 32,
        faturamento: 1280,
        clientes: 18 
    });


    const handleTabChange = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    // relogio em tempo real
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString());
        }, 1000);
        
        return () => clearInterval(interval);

    }, []);

    return (
        <div className="flex min-h-screen bg-zinc-950 text-white">

            {/* SIDEBAR */}
            <aside className={`${open ? "w-64" : "w-16"} bg-zinc-800 p-4 flex flex-col justify-between transition-all duration-300`}>
                <div>
                    <h1 className="text-xl font-bold mb-6">{open ? "🍕 Pizza ERP" : "🍕"}</h1>

                    <nav className="flex flex-col gap-2">
                        <button onClick={() => setTab("overview")} className={`text-left px-3 py-2 rounded ${tab === "overview" ? "bg-zinc-700" : "hover:bg-zinc-700"}`}>
                            <Home size={18} />
                            {open && "Dashboard"}
                        </button>

                        <button onClick={() => setTab("orders")} className={`text-left px-3 py-2 rounded ${tab === "orders" ? "bg-zinc-700" : "hover:bg-zinc-700"}`}>
                            <MapPin size={18} />
                            {open && "Rastreamento"}
                        </button>
                    </nav>
                </div>
            </aside>

            <main className="flex-1 flex flex-col">
                {/* Header */}

                <header className=" flex justify-between items-center p-4 border-b border-zinc-800 bg-zinc-900">
                    <h1 className="text-xl font-bold">Pizza ERP</h1>

                    <div className="flex items-center gap-4">
                        <span className="text-green-400 text-sm">● Online</span>

                    </div>
                    <button onClick={handleTabChange} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        <LogOut size={18} />
                        Sair
                    </button>
                </header>

                {/* TABS */}
                <div className="flex gap-6 p-4 border-b border-zinc-800">
                    <button onClick={() => setTab("overview")} className={`px-3 py-2 rounded ${tab === "overview" ? "bg-zinc-700" : "bg-zinc-800 hover:bg-zinc-700"}`}>
                        Visão Geral
                    </button>
                    <button onClick={() => setTab("orders")} className={`px-3 py-2 rounded ${tab === "orders" ? "bg-zinc-700" : "bg-zinc-800 hover:bg-zinc-700"}`}>
                        Pedidos
                    </button>
                    <button onClick={() => setTab("products")} className={`px-3 py-2 rounded ${tab === "products" ? "bg-zinc-700" : "bg-zinc-800 hover:bg-zinc-700"}`}>
                        Produtos
                    </button>
                    <button onClick={() => setTab("customers")} className={`px-3 py-2 rounded ${tab === "customers" ? "bg-zinc-700" : "bg-zinc-800 hover:bg-zinc-700"}`}>
                        Clientes
                    </button>
                    <button onClick={() => setTab("reports")} className={`px-3 py-2 rounded ${tab === "reports" ? "bg-zinc-700" : "bg-zinc-800 hover:bg-zinc-700"}`}>
                        Relatórios
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/*OVERVIEW*/}
                    {tab === "overview" && (
                        <>
                            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="bg-zinc-800 p-4 rounded">
                                    <h3 className="text-red-400 text-2xl">Vendas Hoje</h3>
                                    <p className="mt-3">120</p>
                                </div>
                                <div className="bg-zinc-800 p-4 rounded">
                                    <h3 className="text-green-400 text-2xl">Pedidos</h3>
                                    <p className="mt-3">R$ 15.000</p>
                                </div>
                                <div className="bg-zinc-800 p-4 rounded">
                                    <h3 className="text-blue-400 text-2xl">Clientes</h3>
                                    <p className="mt-3">80</p>
                                </div>
                                <div className="bg-zinc-800 p-4 rounded">
                                    <h3 className="text-purple-400 text-2xl">Fiado</h3>
                                    <p className="mt-3">300</p>
                                </div>1
                            </div>
                        </>
                    )}

                    {/* TRACKING ORDERS */}
                    {tab === "tracking" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Rastreamento</h2>
                            <p className="text-zinc-400 mt-2">Em breve 🚀</p>
                            {/* Content for tracking orders */}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}