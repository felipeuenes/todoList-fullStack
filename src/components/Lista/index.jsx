import { Tarefa } from '../Tarefas';
import './style.css';

export function Lista(props) {

    console.log(props.tarefa);
    return(
        
        <div className='lista'>
            <section><p>A realizar:</p></section>
                <Tarefa texto={props.tarefa.tarefa}/>
                <Tarefa/>

                
        </div>
    )
}