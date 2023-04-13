import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Cadastro from "../pages/CadastroCliente";
import Lista from "../pages/ListarClientes";
import ItemCafe from "../pages/ListarItensDoCafe"
import CafeDaManha from "../pages/ListarCafeDaManha"
import AddItemCafe from "../pages/CadastroItemCafe"
import Cafe from "../pages/CadastroCafe";
import EditarCliente from "../pages/EditarCliente"


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CafeDaManha />}/>
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/cafe" element={<Cafe />} />
                <Route path="/lista" element={<Lista />} />
                <Route path="/:id/item-cafe" element={<ItemCafe />} />
                <Route path="/:id/add-item-cafe" element={<AddItemCafe />} />
                <Route path="/:id/edit" element={<EditarCliente />} />
            </Routes>
        </BrowserRouter>

    )
}