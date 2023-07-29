import './style.css';

import trash from '../../assets/trash.png'
import ok from '../../assets/ok.png'

import { useState } from 'react';
import axios from 'axios';

 export function Tarefa({texto, prioridade}){
    
        const [mostrarBotoes, setMostrarBotoes] = useState(false);
      
        const toggleBotoes = () => {
          setMostrarBotoes(!mostrarBotoes);
        };

        const [botaoAtivo, setBotaoAtivo] = useState(null);

        const handleClickBotao = (botao) => {
            setBotaoAtivo(botao);
        };

        const API =  "http://localhost:3000/"

        axios.get(API)
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error('Erro ao fazer a requisição:', error);
          });
    
          const APIdelete = 'http://localhost:3000/tarefa/'

        function deleteTarefa(id){
            
            axios.delete(APIdelete + `${id}`)
            .then(response => {
                alert('Post excluído:', response.data);
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
                          <button id='ok'><img src={ok} alt="ok" /></button>
                          <button id='trash'><img src={trash} alt="delete" onClick={deleteTarefa(() => deleteTarefa(item.id))}/></button>
                        </div>)
                  }
        </div>
    )
 }