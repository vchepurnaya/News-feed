import { ADD_USER } from '../constants';

export  const addUserAction = (id, name, surname, email, password, isEntered) => ({
    type: 'ADD_USER',
    id,
    name,
    surname,
    email,
    password,
    isEntered
});
