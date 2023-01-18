import { createContext, useState } from 'react';

export const CartContext = createContext();
const Provider = CartContext.Provider;

const initialValue = [
  { id: '1', name: 'Bolso marron', price: 300 },
  { id: '2', name: 'Zapatos rojos', price: 350 },
  { id: '3', name: 'Mochila verde', price: 150 },
  { id: '4', name: 'Remera negra', price: 500 },
];

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(initialValue);

  const agregarItem = (item) => {
    setItems([...items, item]);
  };

  const obtenerTotal = () => {
    return items.reduce((a, { price }) => a + price, 0);
  };

  return (
    <Provider value={{ items, agregarItem, obtenerTotal }}>{children}</Provider>
  );
};
