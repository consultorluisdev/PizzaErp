import { useNavigate } from 'react-router-dom';

export default function AppLayout({ children }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div style={{ display: "flex", height: "100vh" }}>

            {/* SIDEBAR */}
            <aside style={{
                width: 220,
                background: "#18181b",
                padding: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <div>
                    <h2>🍕 PizzaERP</h2>

                    <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
                        <button onClick={() => navigate("/pdv")}>PDV</button>
                        <button onClick={() => navigate("/pedidos")}>Pedidos</button>
                        <button onClick={() => navigate("/produtos")}>Produtos</button>
                    </div>
                </div>

                <button onClick={handleLogout} style={{ background: "red", color: "white "}}>
                    Sair
                </button>
            </aside>

            {/* CONTEUDO */}
            <main style={{ flex: 1 }}>
                {children}
            </main>
        </div>
    )
}