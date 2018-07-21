import Todo from '../model/Todo';

const todosAPI = {
  todos: [
    {id:'1',content:'helloworld',isCompleted:false},
    {id:'233',content:'redux',isCompleted:true},
  ],
  allStatus:'all',

  add(item) {
    this.todos.push(item);
    return [...this.filerByStatus(this.allStatus)]
  },
  filerByStatus(status) {
    if(status === 'all'){
        return [...this.todos];
    }else if(status === 'active'){
        return [...this.todos.filter(item => !item.isCompleted)]
    }else{
        return [...this.todos.filter(item => item.isCompleted)]
    }  
  },
  toggleActive(viewId) {
    let todo = this.todos.find(item => item.viewId === viewId);
    if (todo !== undefined) {
      todo.toggleActive();
    }
  },
  updateItemContent(viewId, content) {
    let todo = this.todos.find(item => item.viewId === viewId);
    if (todo !== undefined) {
      todo.content = content;
    }
  }

};
export default todosAPI;
