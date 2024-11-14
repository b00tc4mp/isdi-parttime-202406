import { Component } from 'react';

class Welcome extends Component {


    componentDidMount() {
        console.log('WELCOME: component did mount');
    }

    componentWillUnmount() {
        console.log('WELCOME: component will unmount');
    }

    componentDidUpdate() {
        console.log('WELCOME: component got updated');
    }

    render() {
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

}

export default Welcome
