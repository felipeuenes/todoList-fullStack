
import { ButtonColors } from '../ButtonColors'
import { PrioridadesBlack } from '../PrioridadesBlack'
import './style.css'
import axios from 'axios';

export function Modal({ isOpen, onClose, children }){


    if (!isOpen) return null;

    


    const API = 'http://localhost:3000/tarefa'

    

    return(
        <div className='modal'>
            <div className='prioridadesSelect'>
            <button id='x' onClick={onClose}>X</button>
                <h1>Qual a prioridade que você
                    da para essa tarefa?</h1>
                    <PrioridadesBlack />
                    <ButtonColors/>
            </div>
        </div>
    )
}