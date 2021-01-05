import React from 'react';
import ReactDom from 'react-dom';
import ListarTarefas from './listar-tarefas';

describe('Teste do componente de listar tarefas', () => {
  it('Deve renderizar sem erros', () => {
    const div = document.createElement('div');
    ReactDom.render(<ListarTarefas />, div);
    ReactDom.unmountComponentAtNode(div);
  });
});
