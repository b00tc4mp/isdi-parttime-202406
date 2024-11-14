import Welcome from './components/Welcome';
import Loader from './components/Loader';
import Pokemon from './components/Pokemon'
import Randomizer from './components/Randomizer';
import { useState, useEffect } from 'react';

const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  /*
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      loading: false,
    };
  };*/

  useEffect(() => {
    console.log('APP: component did mount');
  }, [])

  useEffect(() => {
    console.log('APP: component got updated');
  }, [pokemon, loading])

  /*
  componentDidMount() {
    console.log('APP: component did mount');
  };

  componentWillUnmount() {
    console.log('APP: component will unmount');
  };

  componentDidUpdate() {
    console.log('APP: component got updated');
  };*/


  /*
    render() {
      const { pokemon, loading } = this.state;*/

  return (
    <div className='flex w-full h-full justify-center items-center flex-col pt-16'>
      <h1 className='font-extrabold text-2xl'>Random Pokémon</h1>
      <div className='flex w-full flex-col justify-center items-center pb-4'>
        {
          loading ?
            (
              <Loader />
            )
            :
            pokemon ?
              (
                <Pokemon pokemon={pokemon} />
              )
              :
              <Welcome />
        }
      </div>
      {
        !loading && <Randomizer propSetPokemon={setPokemon} propSetLoading={setLoading} />
      }
    </div>
  );
}

export default App
