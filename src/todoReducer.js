export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];

    case "[TODO] Remove Todo":
      return initialState.filter((todos) => todos.id !== action.payload);

    case "[TODO] Done Todo":
      return initialState.map((todos) => {
        if (todos.id === action.payload) {
          return {
            ...todos,
            done: !todos.done,
          };
        }
        return todos;
      });

    case "[EDIT] Edit Todo":
      return initialState.map((todos) => {
        if (todos.id === action.payload.id) {
          return {
            ...todos,
            description: action.payload.description,
            edited: !action.payload.edited,
          };
        }
        return todos;
      });

    case "[TODO] Toggle":
      return initialState.map((todos) => {
        if (todos.id === action.payload) {
          return {
            ...todos,
            edited: !todos.edited,
          };
        }
        return todos;
      });

    default:
      return initialState;
  }
};
