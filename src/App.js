import './App.css';
import { useRoutes } from 'hookrouter';
import ListarTarefas from './listar/listar-tarefas';
import CadastrarTarefas from './cadastrar/cadastrar-tarefas';
import AtualizarTarefas from './atualizar/atualizar-tarefas';

const routes = {
  '/': () => <ListarTarefas />,
  '/cadastrar': () => <CadastrarTarefas />,
  '/atualizar/:id': ({ id }) => <AtualizarTarefas id={id} />,
};

function App() {
  return useRoutes(routes);
}

export default App;
