import React, { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';

import { useInput } from '../../hooks/useInput';
import { addSession } from '../../redux/actions/sessionAction';
import { getUsers } from '../../service/NewUserService';

import { STYLE } from '../../assets/variables';
import './Authorization.css';

const Entry: React.FC = () => {
    const email = useInput('', {isEmpty: true, isEmail: true});
    const password = useInput('', {isEmpty: true, minLength: 6, maxLength: 20});
    const [isPasswordCorrect, setPasswordCorrect] = useState<null | boolean>(null);
    const [isEmailExist, setEmailExist] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { span } = STYLE;

    const handleSubmitEmail = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        let users = getUsers();
        let isUserExist = users.find((user) => user.email === email.value);

        if (isUserExist) {
            if (isUserExist.password === password.value) {
                const session = {
                    isLog: true,
                    currentUser: {
                        id: isUserExist.id,
                        name: isUserExist.name,
                        surname: isUserExist.surname
                    }
                };

                dispatch(addSession(session));
                sessionStorage.setItem('session', JSON.stringify(session));
                setPasswordCorrect(true);
            } else {
                setPasswordCorrect(false);
                password.setValue('');
            }
        } else {
            setEmailExist(true);
            email.setValue('');
            password.setValue('');
        }
    }

    if (isPasswordCorrect) {
        return <Redirect to='/'/>
    }

    return (
        <div className="form">
            <form className="form__content">

                <div className="form__field">
                    <input
                        className="form__field-input"
                        name="email"
                        type="email"
                        onChange={e => email.onChange(e)}
                        onBlur={e => email.onBlur(e)}
                        value={email.value}
                        required
                    />
                    <label className="form__field-name">Email</label>

                    {(email.isDirty && email.isEmpty) && <span style={span}>Поле не должно быть пустым!</span>}
                    {(email.isDirty && email.emailError) && <span style={span}>Неправильный формат email!</span>}

                </div>

                <div className="form__field">
                    <input
                        className="form__field-input"
                        name="password"
                        type="password"
                        onChange={e => password.onChange(e)}
                        onBlur={e => password.onBlur(e)}
                        value={password.value}
                        required
                    />
                    <label className="form__field-name">Пароль</label>

                    {(password.isDirty && password.isEmpty) &&
                    <span style={span}>Поле не должно быть пустым!</span>}
                    {(password.isDirty && password.minLengthError) &&
                    <span style={span}>Пароль должен содержать не менее 6 символов!</span>}
                    {(password.isDirty && password.maxLengthError) &&
                    <span style={span}>Пароль не должен содержать более 20 символов!</span>}

                </div>

                {isPasswordCorrect === false && !password.value ?
                    <span style={span}>Пароль введен не верно!</span> : ''}
                {isEmailExist && !(email.value || password.value) ?
                    <span style={span}>Такой пользователь не зарегистрирован!</span> : ''}

                <button
                    className="form__button"
                    type="submit"
                    disabled={!email.isInputValid || !password.isInputValid}
                    onClick={handleSubmitEmail}
                >
                    Войти
                </button>

            </form>
        </div>
    );
}

export default Entry;

