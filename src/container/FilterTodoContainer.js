import {connect} from 'react-redux'
import FilterTodo from "../component/FilterTodo";
import {filterTodo} from "../action";

const mapStateToProps = (state, ownProps) =>{
    return {
        allStatus: state.allStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        changeStatusHandler:(status) => dispatch(filterTodo(status)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo)