import { useState } from "react"

function App(){

  const [nome, setNome] = useState ('Glória a Jesus Aleluia ')

  const Formulario = () => {

    return (
      <>
        <h3>Formulário</h3>

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
      </>
    )
  }

  return(
    <div>
      <h3>Pizzaria 2D</h3>

      <Formulario/>
      <Formulario/>
      <Formulario/>
            
    
    


    </div>
  )
}

export default App