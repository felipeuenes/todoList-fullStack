import './style.css';

import trash from '../../assets/trash.png'
import ok from '../../assets/ok.png'

import { useState } from 'react';
import axios from 'axios';

 export function Tarefa({ texto, prioridade, item, dado }){

    console.log(item);

    const [mostrarBotoes, setMostrarBotoes] = useState(false);
      
    const toggleBotoes = () => {
        setMostrarBotoes(!mostrarBotoes);
    };

  
    const API =  "http://localhost:3000/"

    axios.get(API)
      .then(response => {
        console.log(response.data);
      }).catch(error => {
          console.error('Erro ao fazer a requisição:', error);
        });
    
    const APIrealizado = 'http://localhost:3000/concluir/:id' 

    function realizado(id){
      axios.post(APIrealizado + `${id}`)
      .then(res => {
        alert(`${id} foi com sucesso`)
        console.log(res);
        window.location.reload(true)
      }).catch(error => {
        console.error('erro ao fazer get', error);
      })
    }

    const APIdelete = 'http://localhost:3000/tarefa/'

        

    function deleteTarefa(id){   
      axios.delete(APIdelete + `${id}`)
      .then(res => {
        alert(`Post ${id} foi excluído com sucesso`);
        console.log(res)
        window.location.reload(true);
      })
      .catch(error => {
        console.error('Erro ao fazer a requisição:', error);
      });
    }


   



    return(
        <div className='tarefa' onClick={toggleBotoes}>
          <section>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 21 21" fill="none">
            <circle cx="10.5" cy="10.5" r="10.5" fill={prioridade}/>
            </svg>
          </section>

          <h2>{texto}</h2>
          {
            mostrarBotoes &&  (
            <div className="botoes">
              <button
              id='ok'
              onClick={() => realizado(dado.id)}
              >
                <img src={ok} alt="ok" /></button>
              <button id='trash'>
                <img src={trash}
                  alt="delete"
                  onClick={() => deleteTarefa(item.idtarefas)}/>
              </button>
            </div>)
            }
        </div>
    )
 }