import { Component } from 'react';

class Loader extends Component {
    componentDidMount() {
        console.log('Loader: component did mount')
    }

    componentWillUnmount() {
        console.log('Loader: component will unmount')
    }

    componentDidUpdate() {
        console.log('Loader: component got updated')
    }

    render() {
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
}

export default Loader
