import './style.css';



 export function Tarefa({texto, prioridade}){
    

    return(
        <div className='tarefa'>
            <section>

            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 21 21" fill="none">
                    <circle cx="10.5" cy="10.5" r="10.5" fill={prioridade}/>
                </svg>
            </section>
                  <h2>{texto}</h2>
        </div>
    )
 }