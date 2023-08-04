import { Loading } from '../Loading';
import { Realizados } from '../Realizados';
import { Tarefa } from '../Tarefas';
import './style.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export function Lista(props) {
  console.log(props.tarefa);
  
  const API = 'https://todolist-api-2811.onrender.com/'
  const APIrealizados = 'https://todolist-api-2811.onrender.com/concluidos/'
 
  const [data, setData] = useState([]);
  const [dataRealizado, setDataRealizado] = useState([])
  const [loading, setLoading] = useState(true);

  


  useEffect(() => {

  const fetchRealizados = async () => {
    try {
     
      const resRealizado = await axios.get(APIrealizados);
      
      setDataRealizado(resRealizado.data)
      console.log(resRealizado.data);
  
      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar os dados:', error);
      setLoading(false);
    }
  };

  // Chama a função de solicitação quando o componente é montado
  fetchRealizados();
}, []);



  useEffect(() => {
    // Função para realizar a solicitação GET usando o Axios
    const fetchData = async () => {
      try {
        const response = await axios.get(API);
        
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
        setLoading(false);
      }
    };

    // Chama a função de solicitação quando o componente é montado
    fetchData();
  }, []);

  if (loading) {
    return <Loading/>;
  }


  console.log(dataRealizado);
  console.log(data);
  return(
    <div className='lista'>
      <section><p>A realizar:</p></section>      
        {data.map((item) => (
          <Tarefa 
          
            key={item.id}
            item={item} 
            texto={item.tarefa} 
            prioridade={item.prioridade}
          >
            {item.tarefa}
          </Tarefa>
        ))}
        <section><p>Realizados:</p></section>
        {dataRealizado.map((item) => {
          return <Realizados
          item={item}
          key={item.idrealizados}
          txt={item.tarefa}
          priorit={item.prioridade}
          >
            {item.tarefa}
          </Realizados>
        })}

        
    </div>
  )
}