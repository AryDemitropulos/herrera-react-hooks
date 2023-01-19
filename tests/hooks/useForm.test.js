import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en el useForm', () => {
  const initialForm = {
    name: 'Ary',
    email: 'test@mail.com',
  };
  test('debe de regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('debe de cambiar el nombre del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    const newName = 'Nuevo Nombre';
    const eventMock = {
      target: {
        name: 'name',
        value: newName,
      },
    };

    act(() => {
      onInputChange(eventMock);
    });

    expect(result.current.name).toBe(newName);
    expect(result.current.formState.name).toBe(newName);
  });

  test('debe de resetear el formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;
    const newName = 'Nuevo Nombre';
    const eventMock = {
      target: {
        name: 'name',
        value: newName,
      },
    };

    act(() => {
      onInputChange(eventMock);
      onResetForm();
    });

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });
});
