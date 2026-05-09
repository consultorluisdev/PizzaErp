import AppLayout from "../layouts/AppLayout";

export default function Pedidos(){
    return(
        <AppLayout>
            <div style={{ padding: 20 }}>
                <h1>Pedidos</h1>
                
                <div className="card">
                    <p>#001 - Em preparo</p>
                    <p>#002 - Saiu para entrega</p>
                    <p>#003 - Entregue</p>
                </div>
                
            </div>
        </AppLayout>
    )
}