import add from './assets/add.png' 
import list from './assets/list.png'
import './App.css'
import { Prioridades } from './components/Prioridades'
import { Lista } from './components/Lista'

function App() {


  return (
    <>
    <div className='geral'>

      <div className='container'>
          <section id='titulo'>
            <img src={list} alt="icon" />
            <h1>TodoList</h1>
          </section>
    <div className='designInput'>

          <section id='input'>
            <label htmlFor="tarefa">Tarefa:</label>
            <input type="text" id='tarefa' placeholder='Digite aqui sua tarefa a ser feita...'/>
          </section>
          <button>
              <img src={add} alt="add" />
          </button>
    </div>
    <Prioridades/>
    <Lista/>
      </div>
    </div>
    </>
  )
}

export default App
