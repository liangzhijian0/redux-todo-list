import {connect} from 'react-redux'
import AddTodo from "../component/AddTodo";
import {addTodo} from "../action";

const mapStateToProps = (state, ownProps) =>{
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        addHandler:(id,content) => dispatch(addTodo(id,content)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)