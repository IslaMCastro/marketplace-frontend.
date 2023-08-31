import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from './components/home/Home';
import Tipo from "./components/Tipo/Tipo";

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/tipos" exact element={<Tipo/>}/>
        </Routes>
    )
}

export default Rotas;