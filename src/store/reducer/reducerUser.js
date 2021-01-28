const initialState = {
  users: {
    data: [],
  }
};

export const actionsType = {
  getUsers: 'GET_USER',
};

export function rootReducerUser(state = initialState, action) {
  switch (action.type) {
    case actionsType.getUsers: {
      return {
        ...state, users: action.payload
      }
    };
    default: {
      return state;
    }
  }
}