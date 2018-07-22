import Todo from '../model/Todo';
const axios = require('axios');


const todosAPI = { 
  filter:"all",
  
  getServerData(dispatch,action){
    let getDataUrl = 'http://localhost:8080/api/todos/search/statusOfTodos?status=';
    if(this.filter == "all"){
      getDataUrl += 'completed,active'
    }else{
      getDataUrl += this.filter;
    }
    axios.get(getDataUrl)
      .then((response)=> {  
        const data = response.data._embedded.todos.map(serverData=>{
          const {id,content,status} = serverData;
          return {id,content,status};
        });
        dispatch(action(data))
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },

  add(item,dispatch,action) {
    let self = this;
    axios.post('http://localhost:8080/api/todos', {
      content: item.content,
      status: item.status
    })
    .then(function (response) {
      self.getServerData(dispatch,action);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  toggleActive(viewId,status,dispatch,action) {
    let self = this;
    axios.patch('http://localhost:8080/api/todos/'+viewId, {
      status: status
    })
    .then(function (response) {
      self.getServerData(dispatch,action);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  updateItemContent(viewId,content,dispatch,action) {
    let self = this;
    axios.patch('http://localhost:8080/api/todos/'+viewId, {
      content: content
    })
    .then(function (response) {
      self.getServerData(dispatch,action);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

};
export default todosAPI;
