export const actionsType = {
  getTweets: 'GET_TWEETS',
  getUsers: 'GET_USERS'
}

const initialState = {
  tweets: {
    data: [],
  },
  usersAll: {
    data: [],
  },
};

export function rootReducerTweets(state = initialState, action) {
  switch (action.type) {
    case actionsType.getTweets:
      return {
        ...state,
        tweets: action.payload,
      };
    case actionsType.getUsers:
      return {
        ...state,
        usersAll: action.payload,
      };
    default:
      return state;
  }
}