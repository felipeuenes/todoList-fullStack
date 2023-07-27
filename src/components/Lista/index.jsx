import { Tarefa } from '../Tarefas';
import './style.css';

export function Lista() {

    return(
        <div className='lista'>
            <section><p>A realizar:</p></section>
                <Tarefa/>
                <Tarefa/>
                <Tarefa/>
                <Tarefa/>
                <Tarefa/>
        </div>
    )
}