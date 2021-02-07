import { actionsType } from '../reducer/reducerUser';

export function getUsers() {
	return async (dispatch) => {
		const response = await fetch('http://domer.tech:9999/users/');
		const json = await response.json();
		dispatch({
			type: actionsType.getUsers,
			payload: json,
		});
	};
}
