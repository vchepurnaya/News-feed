import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Redirect } from 'react-router';
import Parser from 'rss-parser';

import ToTop from '../Usability/ToTop';
import Preloader from '../Usability/Preloader';

import { getNewFeedById } from '../../service/NewFeedService';
import { FeedObj, TParams } from '../../assets/types';

import './Feed.css';

const Feed = ({ match }: RouteComponentProps<TParams>) => {
    const [newsFeed, setNewsFeed] = useState<Array<FeedObj>>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    let { id, title } = match.params;
    let parser: Parser<FeedObj> = new Parser();

    const getEndPoint = () => {
        const feed = getNewFeedById(+id);

        if (feed === undefined) {
            return '';
        } else {
            return feed.url
        }
    }

    /*some RSS feeds can't be loaded in the browser due to CORS security.To get around this i use this proxy*/

    useEffect(() => {
        const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

        setLoading(true);

        parser.parseURL(
            CORS_PROXY + getEndPoint(),
            (err: any, feed: any) => {
                if (err) {
                    setError(true);
                    throw err;
                }

                setNewsFeed(feed.items);
                setLoading(false);
            })
    }, [id])

    if (error) {
        return <Redirect to='/' />
    }

    return (
        <div className="wrapper">
            <Preloader isLoading={isLoading} />
            <ToTop />
            <h2 className="news__title" style={{textTransform: 'capitalize', textAlign: 'center'}}>{title}</h2>
            <ul className="news__list">
                {
                    newsFeed.map((item, index) => {
                        const { title, categories, contentSnippet, pubDate, link } = item;
                        return (
                            <li
                                className="news__item"
                                key={`${index}__li`}
                            >
                                <a
                                    className="news__item-link"
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <h3 className="news__item-title">{title}</h3>
                                </a>
                                <p className="news__item-text">{contentSnippet}</p>
                                {!categories ? 'Другое' : categories.map((category: any) => {
                                    return <p className="news__item-category">{category._ || category}</p>
                                })}
                                <div className="news__item-data">
                                    Дата:
                                    <span> {new Date(pubDate).toLocaleString()}</span>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default Feed;
