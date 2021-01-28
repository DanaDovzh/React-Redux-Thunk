export const actionsType = {
  getTweets: 'GET_TWEETS',
}

const initialState = {
  tweets: {
    data: [],
  }
};

export function rootReducerTweets(state = initialState, action) {
  switch (action.type) {
    case actionsType.getTweets:
      return {
        ...state,
        tweets: action.payload,
      };
    default:
      return state;
  }
}