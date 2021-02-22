import React, { Fragment, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import InputPage from './InputPage';

const Widget: React.FC = () => {

    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <Fragment>
            <InputPage
                toggle={toggle}
                setToggle={setToggle}
            />
            <div className="widget">
                <h2 className="widget__title">Читать также:</h2>
                <button
                    className="widget__add-btn"
                    onClick={() => setToggle(true)}
                >
                    + Добавить новую ленту
                </button>
                <ul className="widget__list">
                    <li className="widget__list">
                        <Link to={`/feed/${0}`}>
                            Новости недвижимости
                        </Link>
                        <Link to={`/feed/${1}`}>
                            Новости smth
                        </Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

export default Widget;
