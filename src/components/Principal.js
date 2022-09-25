import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Juego from './Juego';
import Inicio from './Inicio';
import Creadores from './Creadores';
import Reglas from './Reglas';
function Principal(){
    return(
        <>  
        <BrowserRouter>
        <nav className='barraNav'>
            <ul>
                <li> <Link to ='/Inicio'> Inicio</Link> 
                 <Link to ='/Juego'> Juego</Link> 
                 <Link to ='/Desarroladores'> Creadores </Link> 
                 <Link to ='/Como Jugar'> Instrucciones</Link> </li> 
            </ul>
        </nav>
            <Routes>
                <Route path='Inicio' element= {< Inicio/>} />
                <Route path='Juego' element= {< Juego/>} />
                <Route path='Desarrolladores' element= {< Creadores/>} />
                <Route path='Como Jugar' element= {< Reglas/>} />

            </Routes>
        </BrowserRouter>
        </>
    );
}

export default Principal;