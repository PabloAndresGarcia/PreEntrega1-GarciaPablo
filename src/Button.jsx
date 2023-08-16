export default function Boton(){

    const nombreCompleto = "Maia Gutter"
    function evento ( ){
        alert (nombreCompleto)
    }

    return (
        <button onClick={evento }>Alerta!</button>

    )

}