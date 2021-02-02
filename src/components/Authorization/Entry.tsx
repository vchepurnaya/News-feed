import React, { MouseEvent, useState } from 'react';
import './Authorization.css';
import { getUsers } from '../../service/NewUserService';
import { Redirect } from 'react-router';
import { useInput } from '../../hooks/useInput';
import { STYLE } from '../../assets/variables';


const Entry: React.FC = () => {
    const email = useInput('', {isEmpty: true, isEmail: true});
    const password = useInput('', {isEmpty: true, minLength: 6, maxLength: 20});
    const [isEntry, setEntry] = useState(false);//


    const handleSubmitEmail = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        let users = getUsers();
        let isUserExist = users.find((user) => user.email === email.value);

        if (isUserExist) {
          if (isUserExist.password === password.value)  {
              setEntry(true);
          } else {
              console.log('wrong password')
          }
        } else {
            console.log('such user doesnt exist')
        }
    }

    if (isEntry) {
        return <Redirect to='/' from='/entry'/>
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
                    {(email.isDirty && email.isEmpty) && <span style={STYLE.span}>Поле не должно быть пустым</span>}
                    {(email.isDirty && email.emailError) && <span style={STYLE.span}>Неправильный формат email</span>}
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
                    {(password.isDirty && password.isEmpty) && <span style={STYLE.span}>Поле не должно быть пустым</span>}
                    {(password.isDirty && password.minLengthError) && <span style={STYLE.span}>Пароль должен содержать не менее 6 символов</span>}
                    {(password.isDirty && password.maxLengthError) && <span style={STYLE.span}>Пароль не должен содержать более 20 символов</span>}
                </div>

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
