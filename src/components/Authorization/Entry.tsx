import React, { MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import { useInput } from '../../hooks/useInput';
import { STYLE } from '../../assets/variables';

import './Authorization.css';
import { RootState } from '../../redux/store';


const Entry: React.FC = () => {
    const email = useInput('', {isEmpty: true, isEmail: true});
    const password = useInput('', {isEmpty: true, minLength: 6, maxLength: 20});
    const [isPasswordCorrect, setPasswordCorrect] = useState<null | boolean>(null);
    const [isEmailExist, setEmailExist] = useState(false);
    const usersList = useSelector((state: RootState) => state.users);

    const handleSubmitEmail = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        let isUserExist = usersList.users.find((user) => user.email === email.value);

        if (isUserExist) {
            if (isUserExist.password === password.value)  {
                setPasswordCorrect(true);

            } else {
                setPasswordCorrect(false);
            }
        } else {
            setEmailExist(true);
        }
    }

    if (isPasswordCorrect) {
        return <Redirect to='/' />
    }

    const { span } = STYLE;

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
                {isPasswordCorrect === false && <span style={span}>Пароль введен не верно!</span>}
                {isEmailExist ? <span style={span}>Такой пользователь не зарегистрирован!</span> : ''}

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
