import { Loading } from '../Loading';
import { Tarefa } from '../Tarefas';
import './style.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export function Lista(props) {
  console.log(props.tarefa);

  const API = 'http://localhost:3000/'
 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para realizar a solicitação GET usando o Axios
    const fetchData = async () => {
      try {
        const response = await axios.get(API);
      
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
    </div>
  )
}