# Jest

## Pruebas sobre componentes jsx

- Probar renderizado inicial (usar screen.debug para ayudarse)
- Probar renderizado con state cambiados (cuando recibe un user, cuando loading: false, etc)
- Probar llamadas de eventos, clicks y asegurarse de que se llamen a las funciones con los parametros esperados
- NO PROBAR SI LOS EVENTOS LLAMADOS FUNCIONAN o hicieron lo que se esperaba (Cuando son responsabilidad de un componente padre, o un Context)
  Si la funcionalidad del metodo es ajeno al componente que estoy probando, no es responsabilidad del componente asegurarse que funcione, eso debe hacerlo el componente que define al metodo a llamar

## Metodos de obtencion de elementos https://testing-library.com/docs/queries/bytext

- getByText('text') devuelve el elemento que tenga como innerhtml el text

## Disparar eventos

- Para mockear una funcion, usar jest.fn()

        const onDeleteTodoMock = jest.fn();
        const onToggleTodoMock = jest.fn();

- Si sabes que vas a llamar a funciones mock => tengo que limpiar todos los mocks

        beforeEach(() => jest.clearAllMocks());

- Puedo disparar eventos usando el metodo fireEvent.EVENTO(ELEMENTO)

        fireEvent.click(spanElement);

- Probar llamada de funcion con argumentos usando toHaveBeenCalledWith

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)

### Input

- Setear un valor en un input, usando fireEvent.change y pasandole como 2do parametro un objeto con la forma de un 'event'

            const input = screen.getByRole('textbox');
            fireEvent.change(input, { target: { value: 'testSearch' } });

### Submit

- Usar fireEvent.submit

        const form = screen.getByLabelText('form');
        fireEvent.submit(form);

... Completar

## Pruebas sobre Routers

- Envolver el componente que configura las rutas en un componente MemoryRouter para hacer las pruebas

      render(
        <MemoryRouter>
          <MainApp />
        </MemoryRouter>
      );

- Probar que los componentes se muestren cuando deben mostrarse (No hace falta probar funcionamiento, de eso se encargan los test del componente en si)

- Para poner una ruta inicial, usar el atributo initialEntries del MemoryRouter (recibe un **array**)

      test('debe de mostrar el LoginPage', () => {
        render(
          <MemoryRouter initialEntries={['/login']}>
            <MainApp />
          </MemoryRouter>
        );

        expect(screen.getByText('LoginPage'));
      });

## Context

- Para probar sobre componentes que usan useContext tengo que poner el Context.Provider (con su value) como argumento del metodo render

        test('debe de mostrar el componente con el usuario', () => {
          const contextValue = { name: 'TEST NAME' };
          render(
            <UserContext.Provider value={{ contextValue }}>
                <HomePage />
            </UserContext.Provider>
          );

          expect(screen.getByRole('heading').textContent).toContain(contextValue.name);
        });

## Prubas sobre componentes que usan Hooks

### Hacer funcionar un hook real en test

- Si necesitamos que un hook nos devuelva un resultado real, tenemos que usar renderHook para simular el uso de un hook.

        test('debe de regresar el estado inicial', () => {
          const { result } = renderHook(() => useFetchGifs('One Punch'));
          const { gifs, isLoading } = result.current;

          expect(gifs.length).toBe(0);
          expect(isLoading).toBeTruthy();
        });

- Si el hook tiene que hacer alguna tarea asyncronica, usar un waitFor

        test('debe de regresar un arreglo de imagenes y isLoading false', async () => {
          const { result } = renderHook(() => useFetchGifs('One Punch'));
          await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));
          const { gifs, isLoading } = result.current;

          expect(gifs.length).toBeGreaterThan(0);
          expect(isLoading).toBeFalsy();
        });

### Mockear resultado de un Hook

- Utilizar jest.mock con la ruta del archivo del hook explicita (sin tomarla del archivo de barril)

        jest.mock('../../src/hooks/useCounter');

- Luego del jest.mock, podemos especificar que respuesta nos va a dar el mock, usando mockReturnValue

        const mockIncrement = jest.fn();
        useCounter.mockReturnValue({
          counter: 1,
          increment: mockIncrement,
        });

## requireActual

- En el caso de querer mockear un hook de una libreria, pero tener el comportamiento real de otros hooks de la misma libraria, usar jest.mock con el segundo parametro, que es un callback con las respuestas de la libreria.

  Al usar una desestructuracion del requireActual dentro del callback, estoy especificando que necesito los hooks reales de la libreria, salvo por los que agregue despues de la desestructuracion. En este caso, el useNavigate, que va a devolver una funcion que devuelve el mockedNavigate

          import { MemoryRouter, useNavigate } from 'react-router'; //Solo necesito mockear el useNavigate

          const mockedNavigate = jest.fn();

          jest.mock('react-router', () => ({
            ...jest.requireActual('react-router'), //Respeta el resto de los hooks que necesito comportamiento real
            useNavigate: () => mockedNavigate,
          }));

**Nota: La funcion mockeada debe iniciar su nombre con la palabra 'mock', sino disparará un error cuando se trate de acceder desde jest.mock**

        The module factory of `jest.mock()` is not allowed to reference any out-of-scope variables

## Obtener Elementos

Completar...

## Comprobar

### Estilos (Style)

- Se puede comparar estilos con solo acceder a la property styles de un objeto obtenido. En este caso se quiere comprobar el display de un estilo

        const alert = screen.getByLabelText('alert-danger');
        expect( alert.style.display ).toBe('');

### No existencia o nulidad de un elemento

- Si queremos comprobar la no existencia de un objeto, debemos utilizar los metodos de obtencion "query", ya que si intentamos obtener un elemento que no existe usando un get, disparará un error

#### usando queryByLabelText

        const dangerAlert = screen.queryByLabelText('alert-danger');
        expect(dangerAlert).toBeNull();

#### usando getByLabelText

        const dangerAlert = screen.getByLabelText('alert-danger');
        //output: TestingLibraryElementError: Unable to find a label with the text of: alert-danger
