import './style.css';

import trash from '../../assets/trash.png'
import ok from '../../assets/ok.png'

import { useState } from 'react';
import axios from 'axios';

 export function Tarefa({ texto, prioridade, item, dado }){

    // console.log(item);
    // console.log(texto);

    const [mostrarBotoes, setMostrarBotoes] = useState(false);
      
    const toggleBotoes = () => {
        setMostrarBotoes(!mostrarBotoes);
    };

  
    const API =  "https://todolist-api-2811.onrender.com/"

    axios.get(API)
      .then(response => {
        console.log(response.data);
      }).catch(error => {
          console.error('Erro ao fazer a requisição:', error);
        });
    
        
        const APIrealizados = 'https://todolist-api-2811.onrender.com/concluir/'

        
        function realizado(id){
          console.log(id);
          return(
            axios.post(APIrealizados + id)
            .then(res => {
              console.log(JSON.stringify(res.data.message))
              
              deleteTarefa(id)
              window.location.reload()
              // alert('tarefa realizada com sucesso!')
            }).catch(error => {
              console.error('deu errado', error);
            })
          )
        }


    const APIdelete = 'https://todolist-api-2811.onrender.com/tarefa/'


    function deleteTarefa(id){   
      axios.delete(APIdelete + `${id}`)
      .then(res => {
        // alert(`Post ${id} foi excluído com sucesso`);
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
              onClick={() => realizado(item.idtarefas)}
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