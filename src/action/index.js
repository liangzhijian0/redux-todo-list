export const changeCheck = (viewId) => ({ type: 'TOGGLE_TODO', viewId})
export const changeContent = (viewId,content) => ({ type: 'CHANGE_TODO', viewId, content })
export const addTodo = (todos) => ({ type: 'ADD_TODO',  todos})
export const filterTodo = (todos,status) => ({ type: 'FILTER_TODO', todos, status})
