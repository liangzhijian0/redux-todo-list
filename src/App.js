import React, {Component} from 'react';
import './todo.css';
import Header from './component/Header'
import AddTodo from './container/AddTodoContainer'
import Todos from './container/TodosContainer'
import FilterTodo from './container/FilterTodoContainer'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {

    render() {
        return (
            <div className="container">
                <Header />
                <AddTodo />
                <Router>
                    <div>
                        <Route exact path="/" component={Todos}></Route>
                        <Route exact path="/:status" component={Todos}></Route>
                    </div>
                    
                </Router>
                <FilterTodo />
                
            </div>);
    }
}

export default App;
