import { Component } from 'react';
import { useEffect } from 'react';

const Loader = () => {

    useEffect(() => {
        console.log('Loader: component did mount');
    }, [])



    return (
        <>
            <p className='font-bold text-xl pb-5'>
                Loading...
            </p>
            <img
                src='loading.png'
                alt='loading'
                className='w-56 h-56'
            />
        </>)
}


export default Loader
