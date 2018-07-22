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
        },
        updateItemContent:(viewId,content) => {
            todosAPI.updateItemContent(viewId,content,dispatch,changeContent);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos)