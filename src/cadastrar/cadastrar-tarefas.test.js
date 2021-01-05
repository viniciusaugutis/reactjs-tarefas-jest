import React from 'react';
import ReactDom from 'react-dom';
import CadastrarTarefas from './cadastrar-tarefas';

describe('Teste do componente de cadastrar tarefas', () => {
  it('Deve renderizar sem erros', () => {
    const div = document.createElement('div');
    ReactDom.render(<CadastrarTarefas />, div);
    ReactDom.unmountComponentAtNode(div);
  });
});
