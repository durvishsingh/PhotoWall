import React, {Component} from 'react';
import TodoList from './List';
import TodoTitle from './Title';

class Main extends Component {
    render() {
        return  <div>
                    <TodoTitle heading = {'TASK #1'}/>
                    <TodoList todos = {['Learn ReactJS', 'Learn Spring Boot', 'Learn Coding']}/>
                    <TodoTitle heading = {'TASK #2'}/>
                    <TodoList todos = {['Learn DSA', 'Learn C++', 'Learn Java']}/>
                </div>
    }
}
export default Main;