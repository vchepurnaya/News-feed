import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
    <div className="header">
        <h1 className="header__title">Новости</h1>
        <nav className="header__nav">
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
)

export default Header;
