import './style.css';
import { useState } from 'react';


 export function Tarefa({texto, prioridade}){
    
    const [color, setColor] = useState('')

    switch (prioridade) {
        case "0":
            setColor('#FF0000')
            break;
        case "1":
            setColor('#FAFF00')
            break;
        case "2":
            setColor('#0038FF')
            break;
        case "3":
            setColor('#00CC08')
            break;
    
        default: 
            break;
    }

   

    return(
        <div className='tarefa'>
            <section>

            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <circle cx="10.5" cy="10.5" r="10.5" fill={color}/>
                </svg>
            </section>
                  <h2>{texto}</h2>
        </div>
    )
 }