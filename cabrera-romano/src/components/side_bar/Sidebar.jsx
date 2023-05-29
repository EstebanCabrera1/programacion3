import sidebar from "./sidebar.css"

function Sidebar(){
    return(<div className="lista">
        <h1 className="nombreLista">Alumnos Comisión 5</h1>
        <ul>
            <Alumnos grupo={true} nombre="Cabrera Esteban"/>
            <Alumnos grupo={false} nombre="Colella Giuliano"/>
            <Alumnos grupo={true} nombre="Romano Mauricio"/>
            <Alumnos grupo={false} nombre="Cabrera Esteban"/>
            <Alumnos grupo={false} nombre="Cristori Juan Marco"/>
            <Alumnos grupo={false} nombre="Albornoz Kamila"/>
            <Alumnos grupo={false} nombre="Cordoba Geronimo"/>
            <Alumnos grupo={false} nombre="Angie Made"/>
            <Alumnos grupo={false} nombre="Alvarez Solana"/>
        </ul>
    </div>)
}

function Alumnos({nombre, grupo}){
    if(grupo) {return <li className="alumnos">{nombre}:&#x1f5f8;</li>}
    else {return <li className="alumnos">{nombre}:&#x1f5f4;  </li>}
}

export default Sidebar;