import { NewUser } from '../entity/NewUser';
import { usersList } from '../assets/variables';

export const getUsers = (): Array<NewUser> => {
    let usersJson = localStorage.getItem('users');

    let users: Array<NewUser>;
    if (usersJson === null) {
        users = usersList;
    } else {
        users = JSON.parse(usersJson);
    }

    return users;
};

export const setUsers = (users: Array<NewUser>) => {
    localStorage.setItem('users', JSON.stringify(users));
};

export const addNewUser = (newUser: NewUser) => {
    let users: Array<NewUser> = getUsers();
    users.push(newUser);
    setUsers(users);
};
