import { useState } from 'react';
import { UserContext } from './UserContext';
let initialUser = {
  id: 'id1',
  name: 'Ary Demitropulos',
  email: 'test@gmail.com',
};

export const UserProvider = ({ children }) => {
  const [user, setUserState] = useState({ initialUser });

  const setUser = (newUser) => {
    setUserState(newUser);
  };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
