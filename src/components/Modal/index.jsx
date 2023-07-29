

import { PrioridadesBlack } from '../PrioridadesBlack'
import './style.css'
import axios from 'axios';

export function Modal({ tarefa, isOpen, onClose }){


    if (!isOpen) return null;


    const API = 'http://localhost:3000/tarefa'


    function muitoUrgente() {
        const prioridade = '#FF0000';

        const dados = {
            tarefa: tarefa.tarefa,
            prioridade
        }
        console.log(dados);
        axios.post(API, dados)
        .then((res) => {
            alert(JSON.stringify(res.data.message))
            onClose()
            window.location.reload()
        }).catch((error) => alert(error.data));
     
    }
    function urgente() {
        const prioridade = '#FAFF00';

        const dados = {
            tarefa: tarefa.tarefa,
            prioridade
        }
        console.log(dados);
        axios.post(API, dados)
        .then((res) => {
            alert(JSON.stringify(res.data.message))
            onClose()
            window.location.reload()
        }).catch((error) => alert(error.data));
     
    }
    function poucoUrgente() {
        const prioridade = '#0038FF';

        const dados = {
            tarefa: tarefa.tarefa,
            prioridade
        }
        console.log(dados);
        axios.post(API, dados)
        .then((res) => {
            alert(JSON.stringify(res.data.message))
            onClose()
            window.location.reload()
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
                        <button id='b' onClick={urgente}></button>
                        <button id='c' onClick={poucoUrgente}></button>
                    </div>
                    {/* <button onClick={buttonSelect}>selecionar</button> */}
            </div>
        </div>
    )
}