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
                <h1 className="header__title">Новости</h1>
                <nav className="header__nav">
                    <div className="header__user">
                        <span>Приветствую, {session.session.currentUser.name}!</span>
                    </div>
                    <div className="header__link">
                        <Link
                            onClick={updateSessionState}
                            className="header__link-item"
                            to="/"
                        > Выход
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }

    return (
        <div className="header">
            <h1 className="header__title">Новости</h1>
            <div
                className={isMenuActive ? "header__burger _active" : "header__burger"}
                onClick={() => setMenuActive(!isMenuActive)}
            >
                <span />
            </div>
            <nav className={isMenuActive ? "header__nav _active" : "header__nav"}>
                <div className="header__link">
                    <Link
                        className="header__link-item"
                        to="/"
                    >
                        Главная
                    </Link>
                </div>
                <div className="header__link">
                    <Link
                        to="/entry"
                        className="header__link-item"
                    >
                        Войти
                    </Link>
                </div>
                <div className="header__link">
                    <Link
                        className="header__link-item"
                        to="/registration"
                    >
                        Регистрация
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;
