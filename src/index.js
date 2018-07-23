import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import rootReducer from './reducers/index'
import {Provider} from "react-redux"
import todosAPI from './api/TodoResourseAPI'
import { addTodo } from './action/index';
import { LocaleProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';


const store = createStore(rootReducer)
const rootEl = document.getElementById('root')
todosAPI.initServerData(store.dispatch,addTodo);

ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>,
    rootEl
)