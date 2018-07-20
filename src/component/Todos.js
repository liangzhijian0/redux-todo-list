import React, { Component } from 'react';

export default class ListContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status: 'read'
        };
    } 

    changeToEditable() {
        this.setState({ status: 'write' });
    }
    
    updateItem(e, id, name) {
        if (e.keyCode === 13) {
            this.props.updateItemContent(id, name);
            this.setState({ status: 'read' });
        }
    }
    
        
    toggleActive = (id) => {
        this.setState({ status: 'read' });
        this.props.toggleActiveHandler(id);
    }

    filterTodos = () => {
        let todos = this.props.todos;
        let status = this.props.status;
        if(status === 'all'){
            return todos;
        }else if(status === 'active'){
            return todos.filter(item => !item.isCompleted)
        }else{
            return todos.filter(item => item.isCompleted)
        }      
    }


    render() {
       
        return (
            <div >
                <ol>
                    {this.filterTodos().map(item => 
                        <li className = {item.isCompleted ? 'checked':''}>          
                             <input
                                type="checkbox"
                                className="done-todo"
                                // defaultChecked={item.isCompleted}
                                checked={item.isCompleted?'checked':''}
                                onChange={e => this.toggleActive(item.id)}
                            />
                        
                            <span onDoubleClick={e => this.changeToEditable(e)}>
                                {this.state.status === 'read' ? (
                                    item.content
                                ) : (
                                    <input
                                    autoFocus
                                    className="edit-input"
                                    defaultValue={item.content}
                                    onKeyUp={e =>
                                        this.updateItem(e, item.id, e.currentTarget.value)
                                    }
                                    />
                                )}
                            </span>
                        </li>                     
                    )}
                   
                </ol>
            </div>             
        );
    }
}
