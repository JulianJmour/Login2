import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Conversor() {
  
  const[textoAVoz, setTextoAvoz]=useState('')
  const[vozATexto, setvozATexto]=useState('')
 
  


  
  function cambiartexto(evento){
    setTextoAvoz(evento.target.value)

  }

  function ConvertirtextoAVoz(){
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance (textoAVoz)
    synth.speak(utterThis)

  }
  function grabarVozTexto(){
    const reconigtion= new window.webkitSpeechReconigtion()
    reconigtion.lang =  'es-ES'
    reconigtion.start()
    reconigtion.onresult = function(event){
      setvozATexto(event.results[0][0].transcript)
    }
  
  }


    return(
      <>   
      <br />
      <h3>Converson de texto a voz</h3>
      <input type="text" id="textoAVoz" value={textoAVoz} onChange={cambiartexto} />
      <button onClick={ConvertirtextoAVoz}>Convertir</button>
  
      <h3>Conversor de voz a texto</h3> 
      <button onClick={grabarVozTexto}>Grabar</button>
      {vozATexto}
    </>
 
  )
  
  

  
}

export default Conversor
