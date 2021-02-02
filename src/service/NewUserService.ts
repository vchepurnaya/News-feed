import { NewUser } from '../entity/NewUser';

export const getUsers = (): Array<NewUser> => {
    let usersJson = localStorage.getItem('users');

    let users: Array<NewUser>;
    if (usersJson === null) {
        users = [];
    } else {
        users = JSON.parse(usersJson);
    }

    return users;
}

export const getNewUserById = (id: number) => {
    let users: Array<NewUser> = getUsers();
    return users.find(newUser => newUser.id === id);
}

export const setUsers = (users: Array<NewUser>) => {
    localStorage.setItem('users', JSON.stringify(users));
}

export const addNewUser = (newUser: NewUser) => {
    let users: Array<NewUser> = getUsers();
    users.push(newUser);
    setUsers(users);
}
