import { Tarefa } from '../Tarefas';
import './style.css';

export function Lista( {tarefa} ) {

    console.log(tarefa);
    return(
        <div className='lista'>
            <section><p>A realizar:</p></section>
                <Tarefa texto={tarefa}/>
                <Tarefa/>

                
        </div>
    )
}