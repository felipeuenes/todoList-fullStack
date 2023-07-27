import './style.css';


 export function Tarefa({texto}){
    


    console.log(texto);
    return(
        <div className='tarefa'>
                  <h2>{texto}</h2>
        </div>
    )
 }