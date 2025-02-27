import './style.css'
import { useState } from 'react'

function Home() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [imc, setImc] = useState(null)

  const calcularIMC = () => {
    if (peso && altura) {
      const imc = peso / (altura * altura)
      setImc(imc.toFixed(2))
    }
  }
  
  return (
    <div>
      <div className='titulo-container'>
      <h1 className='titulo'>Calculadora de IMC</h1>
      </div>
      <div className='container'>
        <h2 className='info-text'>Peso (Kg)</h2>
        
        <input
        className='input'
        type="numeric"
        placeholder='Ex. 76'
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        />
        
        <h2 className='info-text'>Altura (metros)</h2>
        
        <input
        className='input' 
        type="numeric" 
        placeholder='Ex. 1.75'
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        />
        
        <button 
        className='btn-calcular'
        onClick={calcularIMC}
        >Calcular</button>
        
        {imc && (
        <div>
          <h1 className='imc-text'>Seu IMC é: {imc}</h1>
        </div>
      )}
      </div>
    </div>
  )
}

export default Home
