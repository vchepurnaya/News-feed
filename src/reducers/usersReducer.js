import { ADD_USER } from '../constants';

const initialState = [{
    id: 1,
    name: 'admin',
    surname: 'admin',
    email: 'admin@a.by',
    password: 'qqqqqq',
    isEntered: false
}]

export const usersReducer = (state = initialState, { id, name, surname, email, password, isEntered, type }) => {
    switch (type) {
        case ADD_USER:
            return [
                ...state, {
                    id: id,
                    name: name,
                    surname: surname,
                    email: email,
                    password: password,
                    isEntered: isEntered
                }
            ];
        default:
            return state;
    }
}
