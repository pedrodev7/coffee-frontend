import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Cadastro from "../pages/CadastroCliente";
import Lista from "../pages/ListarClientes";
import ItemCafe from "../pages/ListarItensDoCafe"
import CafeDaManha from "../pages/CafeDaManha"



export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CafeDaManha />}/>
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/lista" element={<Lista />} />
                <Route path="/item-cafe" element={<ItemCafe />} />
            </Routes>
        </BrowserRouter>

    )
}