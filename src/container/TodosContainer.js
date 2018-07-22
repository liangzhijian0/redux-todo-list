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
        toggleActiveHandler:(viewId,status) => {
            let newStatus = '';
            if(status === 'active'){
                newStatus = 'completed';
            }else{
                newStatus = 'active';
            }
            todosAPI.toggleActive(viewId,newStatus,dispatch,changeCheck);
            // dispatch(changeCheck(todos));
        },
        updateItemContent:(viewId,content) => {
            const todos = todosAPI.updateItemContent(viewId,content)
            dispatch(changeContent(todos));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos)