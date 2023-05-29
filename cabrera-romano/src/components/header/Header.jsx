import { useState } from 'react'
import Boton from './button/Boton'
import header from './header.css'


export default function Header(){
    const [ btnTitulo, setbtnTitulo ] = useState("btnTitulo")
    return(
        <div className='header_contenedor'>
            <div className='titulo'>
                <h1 className='practico1'>Pratico N° 1</h1>
            </div>
            <div className='botones'>
                    <Boton btnTitulo={"Menú"}/>
                    <Boton btnTitulo={"Info"}/>
            </div>
        </div>
    )
}