import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      loading: true,
    };
  }

  componentDidMount() {
    console.log('component did mount')
    this.fetchRandomPokemon();
  }

  componentWillUnmount() {
    console.log('component will unmount')
  }

  componentDidUpdate() {
    console.log('component got updated')
  }

  fetchRandomPokemon = () => {
    const randomId = Math.floor(Math.random() * 151) + 1;
    this.setState({ loading: true });
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('oh no, network is down!');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          pokemon: data,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error throwing pokeballs:", error);
        this.setState({ loading: false });
      });
  };

  render() {
    const { pokemon, loading } = this.state;

    return (
      <div className='flex w-full h-full justify-center items-center flex-col pt-16'>
        <h1 className='font-extrabold text-2xl'>Random Pokémon</h1>
        <div className='flex w-full flex-col justify-center items-center'>
          {
            loading ? (
              <>
                <p className='font-bold text-xl'>Loading...</p>
                <img src='loading.png' alt='loading' className='w-56 h-56' />
              </>)
              :
              (
                <>
                  <h2 className='font-bold text-xl'>{pokemon.name.toUpperCase()}</h2>
                  <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className='w-56 h-56'
                  />
                </>
              )
          }
        </div>
        <button className='shadow-sm border border-s px-4 hover:shadow-md' onClick={this.fetchRandomPokemon}>Get Another Pokémon</button>
      </div>
    );
  }
}

export default App
