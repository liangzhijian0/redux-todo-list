export const changeCheck = (viewId) => ({ type: 'TOGGLE_TODO', viewId})
export const changeContent = (viewId,content) => ({ type: 'CHANGE_TODO', viewId, content })
export const addTodo = (id,content) => ({ type: 'ADD_TODO', id, content})
export const filterTodo = (status) => ({ type: 'FILTER_TODO', status})
