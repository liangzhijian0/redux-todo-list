import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import rootReducer from './reducers/index'
import {Provider} from "react-redux"
import todosAPI from './api/TodoResourseAPI'
import { addTodo } from './action/index';
import 'antd/dist/antd.css';
import './todo.css';



const store = createStore(rootReducer)
const rootEl = document.getElementById('root')
todosAPI.initServerData(store.dispatch,addTodo);

ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>,
    rootEl
)