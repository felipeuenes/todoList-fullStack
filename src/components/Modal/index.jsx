

import { PrioridadesBlack } from '../PrioridadesBlack'
import './style.css'
import axios from 'axios';

export function Modal({ tarefa, isOpen, onClose }){


    if (!isOpen) return null;


    const API = 'http://localhost:3000/tarefa'


    function muitoUrgente() {
        const prioridade = '0';

        const dados = {
            tarefa,
            prioridade
        }
        console.log(dados);
        axios.post(API, dados)
        .then((res) => {
            alert(res.data)
        }).catch((error) => alert(error.response.data));
     
    }



    return(
        <div className='modal'>
            <div className='prioridadesSelect'>
            <button id='x' onClick={onClose}>X</button>
                <h1>Qual a prioridade que você
                    da para essa tarefa?</h1>

                    <PrioridadesBlack />

                    <div className='btnColors'>
                        <button id='a' onClick={muitoUrgente}></button>
                        <button id='b'></button>
                        <button id='c'></button>
                    </div>
                    {/* <button onClick={buttonSelect}>selecionar</button> */}
            </div>
        </div>
    )
}