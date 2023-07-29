

import { PrioridadesBlack } from '../PrioridadesBlack'
import './style.css'
import axios from 'axios';

export function Modal({ tarefa, isOpen, onClose }){


    if (!isOpen) return null;


    const API = 'http://localhost:3000/tarefa'


    function muitoUrgente() {
        const prioridade = '0';

        const dados = {
            tarefa: tarefa.tarefa,
            prioridade
        }

        // const dadosSting = JSON.stringify(dados);

        console.log(dados);
        axios.post(API, dados)
        .then((res) => {
            alert(JSON.stringify(res.data.message))
            onClose()
        }).catch((error) => alert(error.data));
     
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