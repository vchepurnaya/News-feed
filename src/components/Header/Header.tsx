import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { addSession } from '../../redux/actions/sessionAction';

import './Header.css';


const Header: React.FC = () => {
    const session = useSelector((state: RootState) => state.session);
    const dispatch = useDispatch();
    const [isMenuActive, setMenuActive] = useState<boolean>(false);

    const updateSessionState = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const session = {
            isLog: false,
            currentUser: {
                id: 0,
                name: '',
                surname: ''
            }
        }

        dispatch(addSession(session));
        sessionStorage.setItem('session', JSON.stringify(session))
    }

    if (session.session.isLog) {
        return (
            <div className="header">
                <Link to="/">
                    <h1 className="header__title">Новости</h1>
                </Link>
                <nav className="header__nav">
                    <div className="header__user">
                        <span>Приветствую, {session.session.currentUser.name}!</span>
                    </div>
                    <Link
                        onClick={updateSessionState}
                        className="header__link-item"
                        to="/"
                    >
                        <div className="header__link">
                            Выход
                        </div>
                    </Link>
                </nav>
            </div>
        );
    }

    return (
        <div className="header">
            <Link to="/">
                <h1 className="header__title">Новости</h1>
            </Link>
            <div
                className={isMenuActive ? "header__burger _active" : "header__burger"}
                onClick={() => setMenuActive(!isMenuActive)}
            >
                <span/>
            </div>
            <nav className={isMenuActive ? "header__nav _active" : "header__nav"}>
                <Link
                    className="header__link-item"
                    to="/"
                >
                    <div className="header__link">

                        Главная
                    </div>
                </Link>
                <Link
                    to="/entry"
                    className="header__link-item"
                >
                    <div className="header__link">

                        Войти
                    </div>
                </Link>
                <Link
                    className="header__link-item"
                    to="/registration"
                >
                    <div className="header__link">

                        Регистрация
                    </div>
                </Link>
            </nav>
        </div>
    );
}

export default Header;
