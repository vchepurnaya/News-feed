import React from 'react';
import NewsItem from './NewsItem';
import './News.css';
import { ORDER_BY_ASC, ORDER_BY_DESC} from '../../assets/variables';
import { getNewItemById, getNews, removeNewItem } from '../../service/NewItemService';
import { NewItem } from '../../entity/NewItem';

type NewsListProps = {
    newsList: Array<NewItem>,
    search: string,
    orderBy: string,
    setNewsList: any,
    setId: any,
    setTitle: any,
    setText: any,
    setCategory: any,
    setEditNewsItem: any,
    setOrderBy: any
}

const NewsList: React.FC<NewsListProps> = ({
  newsList,
  search,
  orderBy,
  setNewsList,
  setId,
  setTitle,
  setText,
  setCategory,
  setEditNewsItem,
  setOrderBy
}) =>  {

    const handleDelete = (id: number) => {
        removeNewItem(id);
        setNewsList(getNews());
    }

    const handleSortNews = () => {
        let news: Array<NewItem> = getNews();
        let isAsc: boolean = orderBy === ORDER_BY_ASC;

        news = news.sort((newItem1, newItem2) => {
            let date1: number = new Date(newItem1.date).getTime();
            let date2: number = new Date(newItem2.date).getTime();

            return isAsc ? date1 - date2 : date2 - date1;
        });

        setNewsList(news);
        setOrderBy(isAsc ? ORDER_BY_DESC : ORDER_BY_ASC);
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

    const filteredNews: Array<NewItem> = newsList.filter(newItem =>
        newItem.text.toLowerCase().indexOf(search.toLowerCase()) !== -1);

    return (
        <div className="container">
            <div className="news__content">
                <h3 className="news__content-title">Новостная лента</h3>
                <div className="news__content-sorting">
                    <button
                        className="news__content-sorting_date"
                        onClick={handleSortNews}
                    >
                        Сортировать по дате
                        &nbsp;
                        <span style={orderBy === ORDER_BY_ASC ? {} : {display: 'none'}}>&#8593;</span>
                        <span style={orderBy === ORDER_BY_DESC ? {} : {display: 'none'}}>&#8595;</span>
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
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NewsList;
