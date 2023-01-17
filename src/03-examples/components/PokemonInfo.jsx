import React from 'react';
import Proptypes from 'prop-types';
import { capitalize } from '../utils/Strings';

export const PokemonInfo = ({ img, name }) => {
  name = capitalize(name);
  return (
    <div className='card' style={{ width: '250px' }}>
      <img src={img} width='250' alt={name} />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
      </div>
    </div>
  );
};

PokemonInfo.proptypes = {
  img: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
};
