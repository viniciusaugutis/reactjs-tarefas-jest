import React from 'react';
import ReactDom from 'react-dom';
import CadastrarTarefas from './cadastrar-tarefas';
import { render, fireEvent } from '@testing-library/react';

describe('Teste do componente de cadastrar tarefas', () => {
  it('Deve renderizar sem erros', () => {
    const div = document.createElement('div');
    ReactDom.render(<CadastrarTarefas />, div);
    ReactDom.unmountComponentAtNode(div);
  });

  it('Deve cadastrar uma nova tarefa', () => {
    const { getByTestId } = render(<CadastrarTarefas />);
    fireEvent.change(getByTestId('txt-tarefa'), {
      target: { value: 'Testar componente' },
    });
    fireEvent.click(getByTestId('btn-cadastrar'));
    expect(getByTestId('modal')).toHaveTextContent('Sucesso');
    expect(getByTestId('modal')).toHaveTextContent(
      'Tarefa adicionada com sucesso!'
    );
  });
});
