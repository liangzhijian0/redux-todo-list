import {connect} from 'react-redux'
import FilterTodo from "../component/FilterTodo";
import {filterTodo} from "../action";
import todosAPI from "../api/TodoResourseAPI"

const mapStateToProps = (state, ownProps) =>{
    return {
        filter: todosAPI.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        changeStatusHandler:(status) => {
            todosAPI.filter = status
            todosAPI.getServerData(dispatch,filterTodo);       
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo)