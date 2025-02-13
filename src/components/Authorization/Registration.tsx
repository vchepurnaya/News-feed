import React, {  MouseEvent, useState } from 'react';
import { Redirect } from 'react-router';

import { useInput } from '../../hooks/useInput';
import { NewUser } from '../../entity/NewUser';
import { addNewUser, getUsers } from '../../service/NewUserService';

import './Authorization.css';
import { STYLE } from '../../assets/variables';

const Registration: React.FC = () => {
    const name = useInput('', {isEmpty: true, maxLength: 16, minLength: 2});
    const surname = useInput('', {isEmpty: true, maxLength: 16, minLength: 2});
    const email = useInput('', {isEmpty: true, isEmail: true});
    const password = useInput('', {isEmpty: true, minLength: 6, maxLength: 20});
    const [userId, setUserId] = useState<number>(Math.floor(Math.random() * 1000000));
    const [isRegistration, setRegistration] = useState<boolean>(false);
    const [isEmailAlreadyExist, setEmailAlreadyExist] = useState<boolean>(false);
    let { span } = STYLE;

    const handleSubmitUser = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let users: Array<NewUser> = getUsers();
        let isUser = users.find((user: NewUser) => user.email === email.value);

        if (isUser) {
            setRegistration(false);
            email.setValue('');
            setEmailAlreadyExist(true);
        } else {
            createUser();
            setRegistration(true);
        }

        return;
    }

    const createUser = () => {
        let newUser: NewUser = new NewUser(userId, name.value, surname.value, email.value, password.value);
        addNewUser(newUser);
        setUserId(Math.floor(Math.random() * 1000000));

        return newUser;
    }

    if (isRegistration) {
        return <Redirect to='/entry' from='/registration'/>
    }
    return (
        <div className="form">
            <form className="form__content">

                <div className="form__field">
                    <input
                        className="form__field-input"
                        name="name"
                        type="text"
                        value={name.value}
                        required
                        onChange={e => name.onChange(e)}
                        onBlur={e => name.onBlur(e)}
                    />
                    <label className="form__field-name">Имя</label>
                    {(name.isDirty && name.isEmpty) && <span style={span}>Поле не должно быть пустым</span>}
                    {(name.isDirty && name.minLengthError) &&
                    <span style={span}>Поле должно содержать не менее 2 символов</span>}
                    {(name.isDirty && name.maxLengthError) &&
                    <span style={span}>Поле должно содержать не более 16 символов</span>}
                </div>

                <div className="form__field">
                    <input
                        className="form__field-input"
                        name="surname"
                        type="text"
                        value={surname.value}
                        required
                        onChange={e => surname.onChange(e)}
                        onBlur={e => surname.onBlur(e)}
                    />
                    <label className="form__field-name">Фамилия</label>
                    {(surname.isDirty && surname.isEmpty) && <span style={span}>Поле не должно быть пустым</span>}
                    {(surname.isDirty && surname.minLengthError) &&
                    <span style={span}>Поле должно содержать не менее 2 символов</span>}
                    {(surname.isDirty && surname.maxLengthError) &&
                    <span style={span}>Поле должно содержать не более 16 символов</span>}
                </div>

                <div className="form__field">
                    <input
                        className="form__field-input"
                        name="email"
                        type="email"
                        value={email.value}
                        required
                        onChange={e => email.onChange(e)}
                        onBlur={e => email.onBlur(e)}
                    />
                    <label className="form__field-name">Email</label>
                    {(email.isDirty && email.isEmpty) && <span style={span}>Поле не должно быть пустым</span>}
                    {(email.isDirty && email.emailError) && <span style={span}>Неправильный формат email</span>}
                </div>

                <div className="form__field">
                    <input
                        className="form__field-input"
                        name="password"
                        type="password"
                        value={password.value}
                        required
                        onChange={e => password.onChange(e)}
                        onBlur={e => password.onBlur(e)}
                    />
                    <label className="form__field-name">Пароль</label>
                    {(password.isDirty && password.isEmpty) &&
                    <span style={span}>Поле не должно быть пустым</span>}
                    {(password.isDirty && password.minLengthError) &&
                    <span style={span}>Пароль должен содержать не менее 6 символов</span>}
                    {(password.isDirty && password.maxLengthError) &&
                    <span style={span}>Пароль не должен содержать более 20 символов</span>}
                </div>
                {isEmailAlreadyExist && !email.value ? <span style={span}>Пользователь с таким email уже зарегистрирован!</span> : ''}

                <button
                    className="form__button"
                    type="submit"
                    onClick={handleSubmitUser}
                    disabled={!name.isInputValid || !surname.isInputValid || !email.isInputValid || !password.isInputValid}
                >
                    Зарегистрироваться
                </button>

            </form>
        </div>
    );
}

export default Registration;
