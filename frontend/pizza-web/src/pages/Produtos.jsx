import AppLayout from "../layouts/AppLayout";

export default function Produtos() {
    return (
        <AppLayout>
            <div style={{ padding: 20 }}>
                <h1>Produtos</h1>

                <div className="card">
                    <p>🍕 Calabresa - R$ 25</p>
                    <p>🍕 Frango - R$ 30</p>
                    <p>🍕 Portuguesa - R$ 35</p>
                </div>

            </div>
        </AppLayout>
    )
}