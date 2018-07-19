import {connect} from 'react-redux'
import Todos from "../component/Todos";
import {changeCheck, changeContent} from "../action";

const mapStateToProps = (state, ownProps) =>{
    return {
        todos: state.todos,
        status: state.allStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        toggleActiveHandler:(viewId) => dispatch(changeCheck(viewId)),
        updateItemContent:(viewId,content) => dispatch(changeContent(viewId,content)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos)