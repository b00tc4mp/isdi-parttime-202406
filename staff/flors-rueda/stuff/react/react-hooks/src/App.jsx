import { Component } from 'react';
import Welcome from './components/Welcome';
import Loader from './components/Loader';
import Pokemon from './components/Pokemon'
import Randomizer from './components/Randomizer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      loading: true,
    };
  };

  componentDidMount() {
    console.log('APP: component did mount');
    this.setState({ loading: false })
  };

  componentWillUnmount() {
    console.log('APP: component will unmount');
  };

  componentDidUpdate() {
    console.log('APP: component got updated');
  };



  render() {
    const { pokemon, loading } = this.state;

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
          !loading && <Randomizer setRandomPokemon={(newState) => this.setState(newState)} />
        }
      </div>
    );
  }
}

export default App
