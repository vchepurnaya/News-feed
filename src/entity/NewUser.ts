export class NewUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;

    constructor(id: number, name: string, surname: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }
}
