import './style.css';
import { useState } from 'react';


 export function Tarefa({texto, prioridade}){
    
    const [color, setColor] = useState('')

console.log(prioridade);

    if (prioridade == '0') {
        setColor('#FF0000')
    }
    if (prioridade == '1') {
        setColor('#FAFF00')
    }
    if (prioridade == '2') {
        setColor('#0038FF')
    }
    if (prioridade == '3') {
        setColor('#00CC08')
    }
    

    
    return(
        <div className='tarefa'>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <circle cx="10.5" cy="10.5" r="10.5" fill="#FF0000"/>
                  
                </svg>
                  <h2>{texto}</h2>
        </div>
    )
 }