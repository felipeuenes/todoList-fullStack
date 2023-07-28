import './style.css';



    export function PrioridadesBlack(){
        return(
            <div className='prioridades'>
              <section>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <circle cx="10.5" cy="10.5" r="10.5" fill="#FF0000"/>
                  
                </svg>
                <h3>Muito urgente</h3>
              </section>
              <section>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FAFF00"/>
                </svg>
                <h3>Urgente</h3>
              </section>
              <section>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#0038FF"/>
                </svg>
                <h3>Pouco urgente</h3>
              </section>
              <section>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
            <circle cx="10.5" cy="10.5" r="10.5" fill="#00CC08"/>
            </svg>
            <h3>Realizado</h3>
              </section>
            </div>
        )
    }