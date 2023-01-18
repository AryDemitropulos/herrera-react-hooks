const { renderHook } = require('@testing-library/react');
const { act } = require('react-dom/test-utils');
const { useCounter } = require('../../src/hooks/useCounter');

describe('Pruebas en el useCounter', () => {
  test('debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, reset, decrement } = result.current;

    expect(counter).toBe(0);
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
  });

  test('debe de generar el counter con el valor de 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('debe de incrementar el counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
      increment(4);
    });
    expect(result.current.counter).toBe(105);
  });

  test('debe de decrementar el counter', () => {
    const { result } = renderHook(() => useCounter(100));

    const { decrement } = result.current;
    act(() => {
      decrement();
      decrement(4);
    });

    expect(result.current.counter).toBe(95);
  });

  test('debe resetear el counter al valor inicial', () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));
    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset();
    });

    expect(result.current.counter).toBe(initialValue);
  });
});
