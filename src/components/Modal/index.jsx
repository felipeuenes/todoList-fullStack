
import { ButtonColors } from '../ButtonColors'
import { PrioridadesBlack } from '../PrioridadesBlack'
import './style.css'
import axios from 'axios';

export function Modal(props){

    console.log(props.tarefa);


    const API = 'http://localhost:3000/tarefa'

    

    return(
        <div className='modal'>
            <div className='prioridadesSelect'>
                <h1>Qual a prioridade que você
                    da para essa tarefa?</h1>
                    <PrioridadesBlack />
                    <ButtonColors/>
            </div>
        </div>
    )
}