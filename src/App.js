import React from 'react';
import './App.css';
import Cards from './components/cards/cards';
import Navbar from './components/navbar/navbar'
import Busqueda from './components/busqueda/Busqueda'

function App() {
    return ( <div>
        <Navbar />
        <Busqueda />
        <div className="container left-align">
             <div className="row">
               <div className="col mt-2">
                   <Cards />

                </div>

             </div>

        </div>

<footer>
        Todos los derechos Reservados &copy; Grupo 6
</footer>

        </div>
        
    );

}

export default App;