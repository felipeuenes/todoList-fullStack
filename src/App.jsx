import add from './assets/add.png' 
import list from './assets/list.png'
import './App.css'
import { Prioridades } from './components/Prioridades'
import { Lista } from './components/Lista'
import { useState } from 'react'

import { useForm } from "react-hook-form"
import axios from 'axios'
import { Modal } from './components/Modal'

function App() {

  const { register, handleSubmit } = useForm()
  const [ tarefaDados, setTarefadados] = useState('')


  function onSubmit(data) {
        
    // axios.post(API, data)
    // .then((res) =>{
    //   alert(res.data)
    // }).catch((error) => alert(error.response.data))
    
    setTarefadados(data);
  }


  const [modalOpen, setModalOpen] = useState(false);


  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  
  return (
    <>
    <div className='geral'>

      <div className='container'>
          <section id='titulo'>
            <img src={list} alt="icon" />
            <h1>TodoList</h1>
          </section>
      <form onSubmit={handleSubmit(onSubmit)}>
    <div className='designInput'>

          <section id='input'>
            <label htmlFor="tarefa">Tarefa:</label>
            <input type="text" id='tarefa' placeholder='Digite aqui sua tarefa a ser feita...' {...register('tarefa', {required: true})}/>
          </section>
          <button onClick={handleModalOpen}>
              <img src={add} alt="add" />
          </button>
    </div>

    <Modal tarefa={tarefaDados} isOpen={modalOpen} onClose={handleModalClose}/>

     </form>
    <Prioridades/>
    <Lista tarefa={tarefaDados}/>
      </div>
    </div>
    </>
  )
}

export default App
