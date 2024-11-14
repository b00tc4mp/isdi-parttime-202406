import { Component } from 'react';

class Footer extends Component {

    componentDidMount() {
        console.log('Footer: component did mount');
    }

    componentWillUnmount() {
        console.log('Footer: component will unmount');
    }

    componentDidUpdate() {
        console.log('Footer: component got updated');
    }

    render() {
        return (
            <div className='font-bold text-x bg-red-600 w-full h-16 mt-10'>
            </ div>
        )
    }

}

export default Footer
