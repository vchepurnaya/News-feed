import { ADD_USER } from '../../constants';
import { User } from '../reducers/usersReducer';

export const addUser = (user: User): UsersActionTypes => ({
    type: ADD_USER,
    payload: user
});

export interface AddUserAction {
    type: typeof ADD_USER;
    payload: User
}

export type UsersActionTypes = AddUserAction
