export class NewUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    isEntered: boolean

    constructor(id: number, name: string, surname: string, email: string, password: string, isEntered: boolean) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.isEntered = isEntered;
    }
}
