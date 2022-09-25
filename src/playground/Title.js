import React,{Component} from 'react';

class TodoTitle extends Component {
    render() {
        return <h1>{this.props.heading}</h1>
    }
}

export default TodoTitle;