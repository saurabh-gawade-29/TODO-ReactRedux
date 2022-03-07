// ?We need to declare 3 actions here
// TODO: add todo , delete todo , remove all todo


export const addTodo = ()=>{
    return {
        type: "ADD_TODO"
    }
}

export const deleteTodo =() =>{
    return{
        type:"DELETE_TODO"
    }
}

export const removeTodo = ()=>{
    return{
        type:"REMOVE_ALL"
    }
}