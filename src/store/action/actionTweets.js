import { actionsType } from '../reducer/reducerTweets';

export function getTweets() {
    return async (dispatch) => {
        const response = await fetch('http://domer.tech:9999/tweets/');
        const json = await response.json();
        dispatch({
            type: actionsType.getTweets,
            payload: json,
        });
    };
}
