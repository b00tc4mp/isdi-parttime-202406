import { useEffect } from 'react';
import { Component } from 'react';

const Pokemon = ({ pokemon }) => {
    useEffect(() => {
        console.log('POKEMON: component did mount');
    }, [])

    useEffect(() => {
        console.log('POKEMON: component got updated');
    }, [pokemon])


    if (!pokemon) return null;

    return (pokemon &&
        <>
            <h2 className='font-bold text-xl'>
                {pokemon.name.toUpperCase()}
            </h2>
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className='w-56 h-56'
            />
        </>
    )
}

export default Pokemon
