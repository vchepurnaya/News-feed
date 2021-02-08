import { ADD_USER } from '../../constants';
import { UsersActionTypes } from '../actions/usersAction';

export interface User {
    id: number,
    name: string,
    surname: string,
    email: string,
    password: string,
    isEntered: boolean
}

export interface UsersState {
    users: User[]
}

const initialState: UsersState = {
    users: []
};

export const UsersReducer = (state = initialState, action: UsersActionTypes): UsersState => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload]
            }
        default:
            return state;
    }
}
