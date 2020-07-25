import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import CadastroCliente from './pages/CadastroClientes';
import ListarCliente from './pages/ListarCliente'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/clientes' component={CadastroCliente}/>
                <Route path='/clientes_list' component={ListarCliente}/>
            </Switch>
        </BrowserRouter>
    );
}