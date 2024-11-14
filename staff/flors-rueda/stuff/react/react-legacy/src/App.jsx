import { Component } from 'react';
import Welcome from './components/Welcome';
import Loader from './components/Loader';
import Pokemon from './components/Pokemon'
import Randomizer from './components/Randomizer';
import Footer from './components/Footer';

class App extends Component { //const App = ({infoUser}) =>
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null, // const [pokemon, setPokemon] = useState(null)
      loading: false, // const [loading, setLoading] = useState(false)
    };
  };

  /*
  useEffect(( ) => {
    console.log('APP: component got updated');
  }, [pokemon, loading])
  
  */

  componentDidMount() {
    console.log('APP: component did mount');
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
          !loading && <Randomizer setRandomPokemon={(newState) => this.setState(newState)} pokemon={pokemon} loading={loading} />
        }
        <Footer />
      </div>
    );
  }
}

export default App
