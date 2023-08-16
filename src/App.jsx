import './App.css'
import Boton from './Button'

function App() {
 
  const nombre3 = "Pablo"

  return (
    <div className='Nombre'>
      <p>Joaquin</p>
      <p>Aleja</p>
      <p>{nombre3}</p>
      <Boton />
    </div>
  )
}

export default App
