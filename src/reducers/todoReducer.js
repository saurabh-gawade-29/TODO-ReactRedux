//? Its initial State which we pass in reducer
const initialData = {
  list: [],
};

//? in reducer parameter we will pass the initial state
const todoReducers = (state = initialData, action) => {
  //TODO: Need to  implement switch case of js with parameter action.type
  // action.type => action folder type
  switch (action.type) {
    // This case will call from Action which is in action folder
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        // first create the copy of the state object with spread operator
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_TODO":
      const newList = state.list.filter((element) => element.id !== action.id);
      return {
        // first create the copy of the state object with spread operator
        ...state,
        list: newList,
      };

    case "REMOVE_TODO":
      
      return {
        // first create the copy of the state object with spread operator
        ...state,
        list: [],
      };
    // need to return this default case.
    default:
      return state;
  }
};

export default todoReducers;
