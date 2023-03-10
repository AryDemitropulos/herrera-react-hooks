import React, { useEffect, useState } from 'react';
import { useFetch, useCounter } from '../hooks';
import { Loading, PokemonInfo } from "./../03-examples/components";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  const [pokemon, setPokemon] = useState({ name: '', img: '' });

  useEffect(() => {
    parsePokemon(data);
  }, [data]);

  return (
    <>
      <h1>Pokemons</h1>
      <hr />
      {isLoading ? <Loading /> : <PokemonInfo {...pokemon} />}
      <div
        className='btn btn-primary mt-4'
        onClick={() => increment(1)}
        disabled={isLoading}
      >
        Proximo Pokemon
      </div>
    </>
  );

  function parsePokemon(data) {
    if (!data) return;
    const name = data.name.toUpperCase();
    const img = data.sprites.other['official-artwork'].front_default;
    setPokemon({ name, img });
  }
};
