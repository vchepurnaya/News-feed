import React, { useState, useEffect } from 'react';
import './Feed.css';
import Parser from 'rss-parser';

type FeedObj = {
    author: string,
    categories: Array<string>,
    content: string,
    description: string,
    enclosure: object,
    guid: string,
    link: string,
    pubDate: Date,
    thumbnail: string,
    title: string
}

const Feed: React.FC = () => {
    const [newsFeed, setNewsFeed] = useState<Array<FeedObj>>([]);
    const endPoints = [
        `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.tut.by%2Frss%2Frealty.rss`,
        `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.tut.by%2Frss%2Frealty%2Fbuilding.rss`
    ]

    useEffect(() => {
        fetchData()
    }, []);

    let fetchData = () => {
        fetch(endPoints[0])
            .then(res => res.json())
            .then(result => setNewsFeed(result.items))
            .catch(error => console.log(error))
    }

    return (
        <div className="wrapper">
            <ul className="news__list">
                {
                    newsFeed.map((item, index) => {
                        const {title, categories, content, pubDate, link, author} = item;
                        return (
                            <li
                                className="news__item"
                                key={`${index}__li`}
                            >
                                <a
                                    className="news__item-link"
                                    href={link}
                                    target={"_blank"}
                                >
                                    <h3 className="news__item-title">{title}</h3>
                                </a>
                                <p className="news__item-text" dangerouslySetInnerHTML={{__html: content}}/>
                                <p className="news__item-category">{categories}</p>
                                <div className="news__item-data">
                                    <div>Автор: {author}</div>
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
