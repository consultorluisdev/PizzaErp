import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import AppLayout from "../layouts/AppLayout";


export default function Dashboard() {
    const [tab, setTab] = useState("overview");
    const [time, setTime] = useState("");
    const navigate = useNavigate();

    const [data, setData] = useState({
        pedidosHoje: 32,
        faturamento: 1280,
        clientes: 18
    });

    // LOGOUT
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
        <AppLayout>

            <main id="main">
                {/* TOP BAR */}
                <header id="topbar">
                    <h1 className="text-xl font-bold mb-6">{open ? "🍕 Pizza ERP" : "🍕"}</h1>

                    <div className="tb-srch">
                        <input placeholder="Buscar produto..." />
                    </div>

                    <div className="tb-right">
                        <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#aaa" }}>
                            <span className="dot-g"></span>Online
                        </span>
                        <span>{time}</span>
                    </div>

                </header>

                {/* CONTENT */}
                <div id="content">

                    {/* TABS */}
                    <div className="dash-tabbar">
                        <button className={`dash-tab ${tab === "overview" ? "active" : ""}`} onClick={() => setTab("overview")}>
                            Visão Geral
                        </button>
                        <button className={`dash-tab ${tab === "tracking" ? "active" : ""}`} onClick={() => setTab("tracking")}>
                            Rastreamento
                        </button>
                        <button className={`dash-tab ${tab === "orders" ? "active" : ""}`} onClick={() => setTab("orders")}>
                            Pedidos
                        </button>
                    </div>

                    {/* OVERVIEW */}
                    {tab === "overview" && (
                        <div style={{ padding: 20 }}>

                            <h1>Dashboard</h1>

                            {/* CARDS */}
                            <div className="sg">

                                <div className="sc">
                                    <div className="sl">Vendas Hoje</div>
                                    <div className="sv">R$ {data.faturamento}</div>
                                </div>
                                <div className="sc">
                                    <div className="sl">Pedidos</div>
                                    <div className="sv">{data.pedidosHoje}</div>
                                </div>
                                <div className="sc">
                                    <div className="sl">Clientes</div>
                                    <div className="sv">{data.clientes}</div>
                                </div>
                            </div>
                            {/*Pedidos*/}

                            <div className="card" style={{ marginTop: 20 }}>
                                <h2>Ultimos Pedidos</h2>

                                <div style={{ marginTop: 10 }}>
                                    <div>#001 - calabresa - R$: 25,00</div>
                                    <div>#002 - margherita - R$: 30,00</div>
                                    <div>#003 - pepperoni - R$: 35,00</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TRACKING */}
                    {tab === "tracking" && (
                        <div style={{ padding: 20 }}>
                            <h1>Rastreamento de Pedidos</h1>

                            <div className="card">
                                <p>🏍️ Lucas - Rua XV (~8 minutos)</p>
                                <p>🏍️ Rafael - Rua XV (~10 minutos)</p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </AppLayout>
    )
}
