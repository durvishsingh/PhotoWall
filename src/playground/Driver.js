import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/*
----------------------------
Using React.createElement
----------------------------
const todoTitle = React.createElement('h1', null, 'TO DO LIST');
const todoItem1 = React.createElement('li', null, 'Learn ReactJS');
const todoItem2 = React.createElement('li', null, 'Learn Spring Boot');
const todoItem3 = React.createElement('li', null, 'Learn Coding');
const todoList = React.createElement('ol', null, todoItem1, todoItem2, todoItem3);
const wrapper = React.createElement('div', null, todoTitle, todoList);

ReactDOM.render(wrapper, document.getElementById('root'));
*/
/*
----------------------------
Using list map function
----------------------------
const todos = ['Learn ReactJS', 'Learn Spring Boot', 'Learn Coding'];
const todoList = React.createElement('ol', null, todos.map((todo, index) => React.createElement('li', index, todo)));
ReactDOM.render(todoList, document.getElementById('root'));
*/
/*
--------------------------------------------------------
Using components by extending Components class of react library
--------------------------------------------------------

const todos = ['Learn ReactJS', 'Learn Spring Boot', 'Learn Coding'];
const todoList = 
                <div>
                    <h1>
                        TO DO LIST
                    </h1>
                    <ol>
                        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
                    </ol>
                </div>
ReactDOM.render(todoList, document.getElementById('root'));
*/

/*
--------------------------------------------------------
Using components by extending Components class of react library
--------------------------------------------------------
*/

import Main from './Main';
ReactDOM.render(<Main/>, document.getElementById('root'));
