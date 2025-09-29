interface SaludoProps {
    nombre: string;
}

function Saludo({ nombre }: SaludoProps) {
    return (
        <div>
            <h2>Hola, {nombre}</h2>
        </div>
    )
}
export default Saludo;