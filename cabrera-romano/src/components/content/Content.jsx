import React, { useState } from "react";
import Card from "./card/Card"
import content from "./content.css"

export default function Content() {
    const [name, setName] = useState('name');
    const [job, setJob] = useState('job');
    const [about, setAbout] = useState('about');
    const [img, setImg] = useState('img');
    

    return (<div className='cont_main'>
        <div>
            <Card name={'Cabrera Esteban'} job={'Estudiante'} about={'No tengo enemigos. Me gusta Messi'} img={'eu.jpg'}  />
        </div>
        <div>
            <Card name={'Romano Mauricio'} job={'Estudiante'} about={'Corto pelo, armo tragos y hablo inglés'} img={'panchito.jpg'} />
        </div>
    </div>)
}