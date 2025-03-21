import { useState } from "react"

function App(){

  const [nome, setNome] = useState ('Cava Uma Falta, Que É Gol É Gol ')

  return(
    <div>
      <h3>Pizzaria 2D</h3>
    
    <input
      className=""
      onChange={(e)=>{setNome(e.target.value)}}
      type="text"/>

      <button
      className=""
      onClick={()=>{alert(nome)}}
      >
        Click Aqui
       </button>


    </div>
  )
}

export default App