import React, {Component} from 'react';

class TodoList extends Component {
    render() {
        return  <ol>
                    {this.props.todos.map((todo, index) => <li key={index}>{todo}</li>)}   
                </ol>
    }
}
export default TodoList;