
import { colorContext } from './colorContext.jsx'
import { useContext } from 'react'
import './ComponenteA.css'

const ComponenteA = ()=> {
  const {color, setColor} = useContext(colorContext)
  return(
    <>
        <div className='divA'>
            <h1 onClick={()=> setColor("violet")} style={{color}}>Hola Soy el componente A</h1>
            <button onClick={() => setColor("blue")}>Cambiar el color a azul</button>
        </div>
    </>
  )
};

export default ComponenteA