import { Component } from 'react';
import getRandomPokemon from '../logic/getRandomPokemon';
import { useEffect } from 'react';

const Randomizer = ({ propSetPokemon, propSetLoading }) => {

    const fetchRandomPokemon = () => {
        propSetLoading(true);
        getRandomPokemon()
            .then((pokeData) => {
                propSetPokemon(pokeData);
                propSetLoading(false);
            })
            .catch((error) => {
                alert(error.message);
                propSetLoading(false);
            });
    };


    useEffect(() => {
        console.log('Randomizer: component did mount');
    }, [])



    return (
        <button
            className='shadow-sm border border-s px-4 hover:shadow-md'
            onClick={fetchRandomPokemon}>
            Randomize Pokémon
        </button>
    );
}


export default Randomizer
