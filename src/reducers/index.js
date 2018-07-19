export default  (state ={ 
                            allStatus:'all',
                            todos:[
                                    {id:'1',content:'helloworld',isCompleted:false},
                                    {id:'233',content:'redux',isCompleted:true},
                                  ]
                        }, action) => { 
    switch (action.type) {
        case 'ADD_TODO':{       
            let newState = JSON.parse(JSON.stringify(state));
            newState.todos.push({id:action.id,content:action.content,isCompleted:false})       
            return newState
        }
        case 'TOGGLE_TODO':{       
            let newState = JSON.parse(JSON.stringify(state));
            newState.todos.find(item => item.id === action.viewId).isCompleted = !newState.todos.find(item => item.id === action.viewId).isCompleted        
            return newState
        }
        case 'CHANGE_TODO': {      
            let newState = JSON.parse(JSON.stringify(state));
            newState.todos.find(item => item.id === action.viewId).content =  action.content      
            return newState
        }
        case 'FILTER_TODO': {      
            let newState = JSON.parse(JSON.stringify(state));
            newState.allStatus = action.status;    
            return newState
        }
        default:
            return state
    }
}

