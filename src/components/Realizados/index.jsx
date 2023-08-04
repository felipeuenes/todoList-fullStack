import './style.css';

import trash from '../../assets/trash.png'


import { useState } from 'react';
import axios from 'axios';

 export function Realizados({ txt, priorit, item }){

    console.log(item);
    console.log(txt);

    const [mostrarBotoes, setMostrarBotoes] = useState(false);
      
    const toggleBotoes = () => {
        setMostrarBotoes(!mostrarBotoes);
    };

  
    const API =  "https://todolist-api-2811.onrender.com/"

    axios.get(API)
      .then(response => {
        
        // console.log(response.data);
      }).catch(error => {
          console.error('Erro ao fazer a requisição:', error);
        });
    
    

   

    const APIdelete = 'https://todolist-api-2811.onrender.com/concluidos/del/'

        

    function deleteTarefa(id){   
      axios.delete(APIdelete + id)
      .then(res => {
        // alert(`Post ${id} foi excluído com sucesso`);
        // console.log(res)
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
            <circle cx="10.5" cy="10.5" r="10.5" fill='#00CC08'/>
            </svg>
          </section>

          <h2 className='texto-com-risco'>{txt}</h2>
          {
            mostrarBotoes &&  (
            <div className="botoes">
              
              <button id='trash'>
                <img src={trash}
                  alt="delete"
                  onClick={() => deleteTarefa(item.idconcluidos)}/>
              </button>
            </div>)
            }
        </div>
    )
 }