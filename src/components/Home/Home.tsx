import React, { Fragment, useState } from 'react';
import Filter from '../Filter/Filter';
import NewsInput from '../News/NewsInput';
import NewsList from '../News/NewsList';
import { NewItem } from '../../entity/NewItem';
import { getNews } from '../../service/NewItemService';
import {DEFAULT_CATEGORY, ORDER_BY_ASC} from '../../assets/variables';



const Home: React.FC = () => {
    const news: Array<NewItem> = getNews();

    const [newsList, setNewsList] = useState<Array<NewItem>>(news);
    const [id, setId] = useState<number>(Math.floor(Math.random() * 1000000))
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [category, setCategory] = useState<string>(DEFAULT_CATEGORY);
    const [editNewsItem, setEditNewsItem] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const [orderBy, setOrderBy] = useState<string>(ORDER_BY_ASC);
    return (
        <Fragment>
            <div className="wrapper">
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
                    id={id}
                />
                <NewsList
                    newsList={newsList}
                    search={search}
                    orderBy={orderBy}
                    setNewsList={setNewsList}
                    setId={setId}
                    setTitle={setTitle}
                    setText={setText}
                    setCategory={setCategory}
                    setEditNewsItem={setEditNewsItem}
                    setOrderBy={setOrderBy}
                />
            </div>
        </Fragment>
    );
}

export default Home;
