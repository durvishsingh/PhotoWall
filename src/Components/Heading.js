import React from 'react';

//If you are using your Class only for render() method, 
// you can safely convert your class to Stateless Functional Component

// props are usually designed to read immutable data, not meant to be changed over time.

function Heading(props) { 
    return <h1>{props.title}</h1>
}

// class Heading extends Component {
//     render() {
//         return <h1>{this.props.title}</h1>;
//     }
// }

export default Heading;