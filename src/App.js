import React, {Component} from 'react';
import './todo.css';
import Header from './component/Header'
import AddTodo from './container/AddTodoContainer'
import Todos from './container/TodosContainer'
import FilterTodo from './container/FilterTodoContainer'

class App extends Component {

    render() {
        return (
            <div className="container">
                <Header />
                <AddTodo />
                <Todos />
                <FilterTodo /> 
            </div>);
    }
}

export default App;
