import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import InputNewFeed from './InputNewFeed';

import { getFeeds, removeNewFeed } from '../../service/NewFeedService';
import { RootState } from '../../redux/store';
import { NewFeed } from '../../entity/NewFeed';

import './Feed.css';

const Widget: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [feeds, setFeeds] = useState<Array<NewFeed>>(getFeeds());
    const session = useSelector((state: RootState) => state.session);
    const {currentUser} = session.session;

    const handleDeleteFeed = (id: number) => {
        removeNewFeed(id);
        setFeeds(getFeeds());
    }

    return (
        <Fragment>
            <InputNewFeed
                toggle={toggle}
                setToggle={setToggle}
                setFeeds={setFeeds}
            />
            <div className="widget">
                <h2 className="widget__title">
                    Читать также:
                </h2>
                <button
                    className="widget__add-btn"
                    onClick={() => setToggle(true)}
                    style={(currentUser.id !== 1) ? {display: 'none'} : {}}
                >
                    + Добавить новую ленту
                </button>
                <ul className="widget__list">
                    {feeds.map((feed: NewFeed, index: number) => {
                        const {id, title} = feed;
                        return (
                            <li
                                className="widget__item"
                                key={`${index}_${id}`}
                            >
                                <div className="widget__link">
                                    <Link className="widget__link-item" to={`/feed/${id}/${title}`}>
                                        {title}
                                    </Link>
                                    <span
                                        className="widget__link-close"
                                        onClick={() => handleDeleteFeed(id)}
                                        style={(currentUser.id !== 1) ? {display: 'none'} : {}}
                                    >
                                        &times;
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Fragment>
    );
};

export default Widget;
