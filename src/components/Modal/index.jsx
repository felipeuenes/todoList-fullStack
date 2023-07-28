
import { ButtonColors } from '../ButtonColors'
import { PrioridadesBlack } from '../PrioridadesBlack'
import './style.css'


export function Modal(){

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