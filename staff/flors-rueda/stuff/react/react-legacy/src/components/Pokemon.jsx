import { Component } from 'react';

class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: this.props.pokemon
        }
    }

    componentDidMount() {
        console.log('POKEMON: component did mount');
    }

    componentWillUnmount() {
        console.log('POKEMON: component will unmount');
    }

    componentDidUpdate() {
        console.log('POKEMON: component got updated');
    }

    render() {
        const { pokemon } = this.state
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

}

export default Pokemon
