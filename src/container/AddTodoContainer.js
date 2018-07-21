import {connect} from 'react-redux'
import AddTodo from "../component/AddTodo";
import {addTodo} from "../action";
import todosAPI from "../api/TodoResourseAPI"
import Todo from '../model/Todo';

const mapStateToProps = (state, ownProps) =>{
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        addHandler:(content) => {
            const todo = new Todo(content);
            const todos = todosAPI.add(todo);
            dispatch(addTodo(todos));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)