import { actionsType } from '../reducer/reducerUser';

export const addUser = (user) => ({
    type: actionsType.addUser,
    newUser: user
}
);

