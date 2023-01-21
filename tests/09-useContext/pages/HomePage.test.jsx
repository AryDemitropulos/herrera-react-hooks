import { render, screen } from '@testing-library/react';
import { UserContext } from '../../../src/09-useContext/context/UserContext';
import { HomePage } from '../../../src/09-useContext/pages';

describe('Pruebas en <HomePage/>', () => {
  test('debe de mostrar el componente sin el usuario', () => {
    //TODO: JEST: Context: Para probar sobre componentes que usan useContext tengo que poner el Context.Provider (con su value) como argumento del metodo render
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    expect(screen.getByText('HomePage: anonymous'));
  });

  test('debe de mostrar el componente con el usuario', () => {
    const user = { name: 'TEST NAME' };
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    //TODO: JEST: getElement: usar textContent  (o innerHTML) para evaluar el innerText
    expect(screen.getByRole('heading').textContent).toContain(user.name);
  });
});
