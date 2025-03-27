import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <SayMyName nome="Gustavo"/>
      <SayMyName nome="Peter"/>
      <SayMyName nome={nome}/>
      <Pessoa 
      nome="Gustavo" 
      idade="24" 
      profissao="programador" 
      foto="https://via.placeholder.com/150"
      />
    </div>
  )
}

export default App;
