//! We need to declare 3 actions here
// TODO: add todo , delete todo , remove all todo

//? Actions Write within function, and actions are object with type property
export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id
  };
};

export const removeTodo = () => {
  return {
    type: "REMOVE_TODO",
  };
};
