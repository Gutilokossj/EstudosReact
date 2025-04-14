import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Controle de Tarefas</h1>
      <div className='InsercaoTarefas'>
        <input placeholder='Escreva suas tarefas aqui'></input>
        <button>Inserir tarefa</button>
      </div>

      <div className='TipoTarefas'>
      <div className='TarefasPendentes'>
        <p>Tarefas pendentes!</p>
      </div>
      </div>
      
    </div>
  )
}

export default App;
