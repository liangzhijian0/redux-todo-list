import {connect} from 'react-redux'
import Todos from "../component/Todos";
import {changeCheck, changeContent} from "../action";
import todosAPI from "../api/TodoResourseAPI"

const mapStateToProps = (state, ownProps) =>{
    return {
        todos: state.todos,
        status: state.allStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        toggleActiveHandler:(viewId) => {
            const todos = todosAPI.toggleActive(viewId)
            dispatch(changeCheck(todos));
        },
        updateItemContent:(viewId,content) => {
            const todos = todosAPI.updateItemContent(viewId,content)
            dispatch(changeContent(todos));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos)