import { useState } from "react";

function ListaTareas() {
    const [tareas, setTareas] = useState<string[]>([
        "Estudiar React",
        "Practicar ejercicios",
        "Descansar",
    ])

    const [nuevaTarea, setNuevaTarea] = useState("");

    const agregarTarea = () => {
        if (nuevaTarea.trim() === "") return;
        setTareas([...tareas, nuevaTarea]);
        setNuevaTarea("");
    }
    const eliminarTarea = (index: number) => {
        setTareas(tareas.filter((_, i) => i !== index));
    }
    return (
        <div>
            <h2>Lista de tareas</h2>
            <input
                type="text"
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                placeholder="Escribe una nueva tarea"
            />
            <button onClick={agregarTarea}>Agregar</button>
            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index} >
                        {tarea}
                        <button onClick={() => eliminarTarea(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaTareas;