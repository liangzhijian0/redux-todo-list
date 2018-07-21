import {connect} from 'react-redux'
import FilterTodo from "../component/FilterTodo";
import {filterTodo} from "../action";
import todosAPI from "../api/TodoResourseAPI"

const mapStateToProps = (state, ownProps) =>{
    return {
        allStatus: state.allStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        changeStatusHandler:(status) => {
            const todos = todosAPI.filerByStatus(status);
            todosAPI.allStatus = status
            dispatch(filterTodo(todos,status));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo)