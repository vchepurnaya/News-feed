import React, { useState, useEffect, Fragment } from 'react';
import './Feed.css';
import {addNewItem, setNews} from "../../service/NewItemService";
import {NewItem} from "../../entity/NewItem";


const Feed = () => {
    const [newsFeed, setNewsFeed] = useState([]);
    const [newsList, setNewsList] = useState([]);
    const endPoints = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.tut.by%2Frss%2Frealty.rss';

    let fetchData = () => {
            fetch(endPoints)
                .then(res => res.json())
                .then(result => setNewsFeed(result.items))
                .catch(error => console.log(error))
    }

    useEffect(() => {
            fetchData()
    }, []);

    useEffect(() => {
        createNews();
    }, [newsFeed])


   const createNews = () => {
       newsFeed.map(item => {
           let newItem = new NewItem(
               Math.floor(Math.random() * 1000000),
               item.title,
               item.content,
               item.categories[0],
               item.pubDate,
               item.author,
               false,
               1
           );
           setNewsList(prevState => [...prevState, newItem])
       })
   }

   console.log(newsList)


    return (
        <Fragment>
        {
            newsList.map(item => {
                const { id, title, text, category, author, date} = item;
                return (
                    <li className="news__item">
                        <h3 className="news__item-title">{title}</h3>
                        <p className="news__item-text" dangerouslySetInnerHTML={{ __html: text }} />
                        <p className="news__item-category">{category}</p>
                        {/*<div
                            className="news__item-btn"
                            style={
                                !isLog || (currentUser.id !== 1 && userId !== currentUser.id) ? {visibility: 'hidden'} : {}}
                        >
                            <button
                                className="news__item-btn-edit"
                                onClick={handleEdit}
                            >
                                <svg height="20pt" viewBox="0 0 512 512" width="20pt" xmlns="http://www.w3.org/2000/svg" fill="green">
                                    <path d="m1.03125 492.398438c-1.5 5.203124 0 10.902343 3.796875 14.703124 2.800781 2.796876 6.703125 4.398438 10.601563 4.398438 1.398437 0 2.800781-.199219 4.101562-.601562l139.796875-39.898438-118.398437-118.398438zm0 0"/><path d="m15.429688 512c-4.101563 0-8-1.601562-10.898438-4.5-4-4-5.5-9.800781-3.902344-15.199219l40.199219-140.601562 119.601563 119.601562-140.800782 40.097657c-1.398437.402343-2.800781.601562-4.199218.601562zm25.800781-158.5-39.699219 139c-1.402344 5.101562 0 10.5 3.699219 14.199219 2.699219 2.699219 6.398437 4.199219 10.199219 4.199219 1.300781 0 2.699218-.199219 4-.597657l139-39.699219zm0 0"/><path d="m498.328125 77.199219-63.5-63.5c-8.597656-8.5-19.796875-13.199219-31.898437-13.199219-12 0-23.300782 4.699219-31.800782 13.101562l-31.800781 31.796876 127.101563 127.101562 31.800781-31.800781c8.5-8.5 13.097656-19.800781 13.097656-31.800781.101563-12-4.597656-23.199219-13-31.699219zm0 0"/><path d="m466.53125 173.199219-127.800781-127.800781 32.097656-32.097657c8.601563-8.601562 20-13.300781 32.101563-13.300781 12.199218 0 23.601562 4.699219 32.101562 13.300781l63.5 63.5c8.597656 8.597657 13.296875 20 13.296875 32.097657 0 12.203124-4.699219 23.601562-13.296875 32.101562zm-126.402344-127.800781 126.402344 126.402343 31.398438-31.402343c8.398437-8.398438 13-19.5 13-31.398438s-4.601563-23-13-31.398438l-63.5-63.601562c-8.398438-8.398438-19.601563-13-31.5-13-11.898438 0-23 4.601562-31.398438 13zm0 0"/><path d="m57.804688 327.015625 260.421874-260.425781 127.136719 127.136718-260.421875 260.425782zm0 0"/><path d="m184.929688 454.898438-127.898438-127.898438 261.199219-261.101562 127.800781 127.800781zm-126.398438-127.898438 126.398438 126.398438 259.699218-259.699219-126.398437-126.398438zm0 0"/>
                                </svg>
                            </button>
                            <button
                                className="news__item-btn-del"
                                onClick={handleDelete}
                            >
                                <svg height="20pt" viewBox="0 0 512 512" width="20pt" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/>
                                </svg>
                            </button>
                        </div>*/}
                        <div className="news__item-data">
                            <div>Автор: {author}</div>
                            Дата:
                            <span> {new Date(date).toLocaleString()}</span>
                        </div>
                    </li>
                );
            })
        }
        </Fragment>
    );
};

export default Feed;
