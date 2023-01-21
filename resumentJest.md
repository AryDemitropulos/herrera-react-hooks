# Jest

## Pruebas sobre componentes jsx

- Probar renderizado inicial (usar screen.debug para ayudarse)
- Probar renderizado con state cambiados (cuando recibe un user, cuando loading: false, etc)
- Probar llamadas de eventos, clicks y asegurarse de que se llamen a las funciones con los parametros esperados
- NO PROBAR SI LOS EVENTOS LLAMADOS FUNCIONAN o hicieron lo que se esperaba (Cuando son responsabilidad de un componente padre, o un Context)
  Si la funcionalidad del metodo es ajeno al componente que estoy probando, no es responsabilidad del componente asegurarse que funcione, eso debe hacerlo el componente que define al metodo a llamar

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
