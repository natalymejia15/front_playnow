import { useState } from "react";

function Mensaje(){
    const [mostrar, setMostart] = useState(true);

    return(
        <div>
            <button onClick={() => setMostart(!mostrar)}>
                {mostrar ? "Ocultar":"Mostrar"} mensaje
            </button>
            {mostrar && <p>Este es un mensaje secreto</p>}
        </div>
    )
}

export default Mensaje;