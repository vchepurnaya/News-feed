import React, { useState } from 'react';

import NewsItem from './NewsItem';
import ToTop from '../Usability/ToTop';

import { ORDER_BY_ASC, ORDER_BY_DESC } from '../../assets/variables';
import { getNewItemById, getNews, removeNewItem } from '../../service/NewItemService';
import { NewItem } from '../../entity/NewItem';
import { NewsListProps } from '../../assets/types';

import './News.css';

const NewsList: React.FC<NewsListProps> = ({
   newsList,
   search,
   setNewsList,
   setId,
   setTitle,
   setText,
   setCategory,
   setEditNewsItem,
}) => {
    const [orderByDate, setOrderByDate] = useState<string>(ORDER_BY_ASC);

    const handleDelete = (id: number) => {
        removeNewItem(id);
        setNewsList(getNews());
    }

    const handleSortNews = () => {
        let news: Array<NewItem> = getNews();
        let isAsc: boolean = orderByDate === ORDER_BY_ASC;

        news = news.sort((newItem1, newItem2) => {
            let date1: number = new Date(newItem1.date).getTime();
            let date2: number = new Date(newItem2.date).getTime();

            return isAsc ? date1 - date2 : date2 - date1;
        });

        setNewsList(news);
        setOrderByDate(isAsc ? ORDER_BY_DESC : ORDER_BY_ASC);
    }

    const handleEdit = (id: number) => {
        let selectedNewItem = getNewItemById(id);

        if (selectedNewItem !== undefined && selectedNewItem !== null) {
            setId(selectedNewItem.id);
            setTitle(selectedNewItem.title);
            setText(selectedNewItem.text);
            setCategory(selectedNewItem.category);

            setNewsList([]);
            setEditNewsItem(true);
        }
    }

    const filteredNews: Array<NewItem> = newsList.filter(newItem => {
        return (
            newItem.text.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            newItem.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
            newItem.author.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
    });

    return (
        <div className="news__content">
            <ToTop />
            <div className="container">
                <h3 className="news__content-title">
                    Новостная лента
                </h3>
                <div className="news__sorting">
                    <button
                        className="news__sorting-item"
                        onClick={handleSortNews}
                    >
                        Сортировать по дате
                        &nbsp;
                        <span style={orderByDate === ORDER_BY_ASC ? {} : {display: 'none'}}>&#8593;</span>
                        <span style={orderByDate === ORDER_BY_DESC ? {} : {display: 'none'}}>&#8595;</span>
                    </button>
                </div>
                <ul className="news__list">
                    {filteredNews.map((item, index) => (
                        <NewsItem
                            key={`${item}-${index}`}
                            title={item.title}
                            text={item.text}
                            category={item.category}
                            date={item.date}
                            editedFlag={item.editedFlag}
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)}
                            author={item.author}
                            userId={item.userId}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NewsList;
