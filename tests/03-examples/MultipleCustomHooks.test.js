import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { capitalize } from '../../src/03-examples/utils/Strings';
import { useCounter, useFetch } from '../../src/hooks';
import pokemon from './../mocks/pokemon.json';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas sobre MultipleCustomHooks', () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Pokemons'));
    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Próximo Pokemon'));

    const nextButton = screen.getByRole('button', { name: 'Próximo Pokemon' });
    expect(nextButton.disabled).toBeTruthy();
  });

  test('debe de mostrar un Pokemon', () => {
    useFetch.mockReturnValue({
      data: pokemon,
      isLoading: false,
    });

    const name = capitalize(pokemon.name);
    const imageURL = pokemon.sprites.other['official-artwork'].front_default;

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Pokemons'));
    expect(screen.getByRole('img').src).toBe(imageURL);
    expect(screen.getByText(name));

    const nextButton = screen.getByRole('button', { name: 'Próximo Pokemon' });
    expect(nextButton.disabled).toBeFalsy();
  });

  test('debe de llamar la funcion de incrementar', () => {
    useFetch.mockReturnValue({
      data: pokemon,
      isLoading: false,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Próximo Pokemon' });

    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
