import { Component } from 'react';
import getRandomPokemon from '../logic/getRandomPokemon';

class Randomizer extends Component {
    fetchRandomPokemon = () => {
        this.props.setRandomPokemon({ loading: true });
        getRandomPokemon()
            .then((pokeData) => {
                this.props.setRandomPokemon({
                    pokemon: pokeData,
                    loading: false,
                });
            })
            .catch((error) => {
                alert(error.message);
                this.props.setRandomPokemon({ loading: false });
            });
    };

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
        return (
            <button
                className='shadow-sm border border-s px-4 hover:shadow-md'
                onClick={this.fetchRandomPokemon}>
                Randomize Pokémon
            </button>
        );
    }
}

export default Randomizer
