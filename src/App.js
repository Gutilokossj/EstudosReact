import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  return (
    <div className="App">
      <h1>Lista de tarefas diárias</h1>
      <div className='InsercaoTarefas'>
        <input placeholder='Escreva suas tarefas aqui'></input>
        <button>Inserir tarefa</button>
      </div>

      <div className='TarefasPendentes'>
        <p>Tarefas pendentes!</p>
      </div>
      
    </div>
  )
}

export default App;
