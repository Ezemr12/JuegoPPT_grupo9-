import { useState } from "react";

function Juego(){


    var resultado;

    const [numero, setnumero] = useState(Math.floor(Math.random() * 3));

    const [numero2, setnumero2] = useState(Math.floor(Math.random() * 3));

    if(numero > numero2)
    {
        resultado = "jugador 1 gana";
    }
    else
    {
        if(numero < numero2)
        {
            resultado = "jugador 2 gana";
        }
        else
        {
            resultado = "empate";
        }
    }

    //var contador = 0;
    

    return(

        <div>

        <div>
            jugador 1 : {numero}
        </div>
        <div>
            jugador 2: {numero2}
        </div>

        <div>
            resultado: {resultado}
        </div>

        </div>
        
    );
}

export default Juego;