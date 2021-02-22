import React, { Fragment, useState } from 'react';

import Filter from '../Filter/Filter';
import NewsInput from '../News/NewsInput';
import NewsList from '../News/NewsList';
import CurrencyRate from '../Currency/CurrencyRate';

import { NewItem } from '../../entity/NewItem';
import { getNews } from '../../service/NewItemService';
import { DEFAULT_CATEGORY } from '../../assets/variables';



const Home: React.FC = () => {
    const news: Array<NewItem> = getNews();

    const [newsList, setNewsList] = useState<Array<NewItem>>(news);
    const [newsId, setId] = useState<number>(Math.floor(Math.random() * 1000000));
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [category, setCategory] = useState<string>(DEFAULT_CATEGORY);
    const [editNewsItem, setEditNewsItem] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');

    return (
        <Fragment>
            <div className="wrapper">
                <CurrencyRate />
                <Filter
                    setSearch={setSearch}
                />
                <NewsInput
                    title={title}
                    text={text}
                    category={category}
                    editNewsItem={editNewsItem}
                    setTitle={setTitle}
                    setText={setText}
                    setCategory={setCategory}
                    setNewsList={setNewsList}
                    setId={setId}
                    setEditNewsItem={setEditNewsItem}
                    newsList={newsList}
                    newsId={newsId}
                />
                <NewsList
                    newsList={newsList}
                    search={search}
                    setNewsList={setNewsList}
                    setId={setId}
                    setTitle={setTitle}
                    setText={setText}
                    setCategory={setCategory}
                    setEditNewsItem={setEditNewsItem}
                />
            </div>
        </Fragment>
    );
}

export default Home;
