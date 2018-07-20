export const changeCheck = (viewId) => ({ type: 'TOGGLE_TODO', viewId})
export const changeContent = (viewId,content) => ({ type: 'CHANGE_TODO', viewId, content })
export const addTodo = (todo) => ({ type: 'ADD_TODO',  todo})
export const filterTodo = (status) => ({ type: 'FILTER_TODO', status})
