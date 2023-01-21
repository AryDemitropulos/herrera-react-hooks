import { fireEvent, render, screen } from '@testing-library/react';
import { json } from 'react-router-dom';
import { UserContext } from '../../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../../src/09-useContext/pages/LoginPage';

describe('Pruebas sobre <LoginPage/>', () => {
  test('debe de renderizar el componente sin usuario', () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: jest.fn() }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain('null');

    expect(screen.getByText('LoginPage'));
    expect(screen.getByRole('button').textContent).toBe('Set User');
  });

  test('debe de llamar a la funcion setUser al hacer click en boton', () => {
    const user = { name: 'Test name' };
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const setUserButton = screen.getByRole('button');
    fireEvent.click(setUserButton);

    expect(setUserMock).toHaveBeenCalledWith({
      id: 'Nueva ID',
      name: 'Paquita la del barrio',
      email: 'paquita123@gmail.com',
    });
  });
});
