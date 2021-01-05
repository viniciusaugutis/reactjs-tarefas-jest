import React from 'react';
import ReactDOM from 'react-dom';
import AtualizarTarefas from './atualizar-tarefas';

describe('Teste do componente de atualização de tarefas', () => {
  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AtualizarTarefas id={1} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
