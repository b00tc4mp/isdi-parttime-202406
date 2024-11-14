import { useEffect } from 'react';
import { Component } from 'react';

const Welcome = () => {


    useEffect(() => {
        console.log('WELCOME: component did mount');
    }, [])


    return (
        <>
            <h2 className='font-bold text-xl'>
                No Pokémon Randomized Yet
            </h2>
            <img
                src="error.png"
                alt="nothing yet"
                className='w-56 h-56'
            />
        </>
    )
}

export default Welcome
