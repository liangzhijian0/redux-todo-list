export default  (state ={ 
                            filter:'all',
                            todos:[
                                    {id:'1',content:'helloworld',status:'completed'},
                                    {id:'233',content:'redux',status:'active'},
                                  ]
                        }, action) => { 
    switch (action.type) {
        case 'ADD_TODO':{       
            let newState = JSON.parse(JSON.stringify(state));
            newState.todos = action.todos
            return newState
        }
        case 'TOGGLE_TODO':{     
            let newState = JSON.parse(JSON.stringify(state));
            newState.todos = action.todos;   
            return newState
        }
        case 'CHANGE_TODO': {      
            let newState = JSON.parse(JSON.stringify(state));
            newState.todos = action.todos;   
            return newState
        }
        case 'FILTER_TODO': {      
            let newState = JSON.parse(JSON.stringify(state));
            newState.allStatus = action.status;  
            newState.todos = action.todos;  
            return newState
        }
        default:
            return state
    }
}

