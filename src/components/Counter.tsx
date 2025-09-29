import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function Counter(){
    const counter = useContext(CounterContext);
    if(!counter){
        throw new Error("Counter debe estar dentro de CounterProvider");
    }

    return(
        <div>
            <h2>Contador Global: {counter.count}</h2>
            <button onClick={counter.incrementar}>➕ Incrementar</button>
            <button onClick={counter.decrementar}>➖ Decrementar</button>
        </div>
    );
}

export default Counter;