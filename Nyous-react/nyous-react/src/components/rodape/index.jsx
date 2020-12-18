import React from 'react';

// criamos o component rodapé
const Rodape = () => {
    return(
        // adicionamos um footer a nossa pure fuction
        //esse footer possui uma className = text-center pois é uma classe do bootstrap
        <footer className="text-center" style={{ marginTop : '70px'}}>
            <h1>Senai Informática 132</h1>
            <small>Desenvolvido por <a href="https://github.com/almeida0801">Eduardo</a></small>
        </footer>
    )
}

export default Rodape;