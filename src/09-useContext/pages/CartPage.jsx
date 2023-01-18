import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const CartPage = () => {
  const { items, agregarItem, obtenerTotal } = useContext(CartContext);

  const handleAgregarItem = () => {
    agregarItem({
      id: new Date().getTime() + ' ',
      name: 'Nuevo Item',
      price: 500,
    });
  };
  const onDeleteItem = () => {};

  return (
    <>
      <h1>CartPage: TOTAL:{obtenerTotal()} </h1>
      <hr />
      <ul className='list-group'>
        {items.map(({ id, name, price }) => (
          <li
            key={id}
            className='list-group-item d-flex justify-content-between'
          >
            <span className={`align-self-center `}>{name}</span>
            <span className={`align-self-center ml-4 `}>{price}</span>
            <button className='btn btn-danger' onClick={() => onDeleteItem(id)}>
              Borrar
            </button>
          </li>
        ))}
      </ul>

      <button className='btn btn-primary mt-4' onClick={handleAgregarItem}>
        Agregar nuevo Item
      </button>
    </>
  );
};
