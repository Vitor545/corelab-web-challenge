import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testa se Login é renderizado corretamente', () => {
  test('Verifica se Login tem um titulo', () => {
    render(<App />);
    const tituloElement = screen.getByTestId('login_title');
    expect(tituloElement).toBeInTheDocument();
    expect(tituloElement).toHaveTextContent('Login');
  });
  test('Verifica se Login tem um input de email', () => {
    render(<App />);
    const tituloElement = screen.getByTestId('input_login_email');
    expect(tituloElement).toBeInTheDocument();
  });
  test('Verifica se Login tem um input de senha', () => {
    render(<App />);
    const tituloElement = screen.getByTestId('input_login_senha');
    expect(tituloElement).toBeInTheDocument();
  });
  test('Verifica se Login tem um botão de continuar', () => {
    render(<App />);
    const tituloElement = screen.getByTestId('login_button');
    expect(tituloElement).toBeInTheDocument();
    expect(tituloElement).toHaveTextContent('Continuar');
  });
});
