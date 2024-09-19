/* eslint-disable no-undef */

import { fireEvent, render, screen } from "@testing-library/react"

import { CounterApp } from '../src/CounterApp'

describe('Pruebas en <CounterApp>', () => {


  test('  Debe hacer match con el snapshot ', () => {
    const { container } = render(<CounterApp value={100} />)
    expect(container).toMatchSnapshot();
  })

  test('Debe de mostrar el valor por defecto de 100', () => {
    render(<CounterApp value={100} />)
    expect(screen.getByText(100)).toBeTruthy();

  });


  test('Debe de incrementar con el boton +1', () => {
    render(<CounterApp value={10} />)
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText(11)).toBeTruthy();

  });


test('Debe de decrementar con el boton -1', () => {
    render(<CounterApp value={10} />)
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText(9)).toBeTruthy();

  });

  test('Debe de colocar el valor por defecto con el btn reset', () => {
    render(<CounterApp value={105} />)
    fireEvent.click(screen.getByText('+1'));
    // fireEvent.click(screen.getByText('Reset'));
fireEvent.click( screen.getByRole('button', { name: /reset/i }));
screen.debug();
    expect(screen.getByText(105)).toBeTruthy();

  });













}); 