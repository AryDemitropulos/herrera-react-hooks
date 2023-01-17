import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button onClick={handleSetUser} className='btn btn-primary'>
        Set User
      </button>
    </>
  );

  function handleSetUser() {
    setUser({
      id: 'Nueva ID',
      name: 'Paquita la del barrio',
      email: 'paquita123@gmail.com',
    });
  }
};
