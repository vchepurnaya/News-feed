import React from 'react';
import NewsItem from './NewsItem';
import './News.css';
import { ORDER_BY_ASC, ORDER_BY_DESC } from '../../App';

type FilteredNews = {
    category: string
    date: any
    editedFlag: boolean
    id: number,
    text: string
    title: string
}

type NewsListProps = {
    newsList: any,
    search: any,
    orderBy: any,
    setNewsList :any,
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
        newsList = newsList.filter(
            item => item.id !== id
        );

        setNewsList(newsList);
        localStorage.setItem('news', JSON.stringify(newsList));
    }

    const handleSortNews = () => {
        const news: Array<FilteredNews> = JSON.parse(localStorage.getItem('news'));
        const isAsc: boolean = orderBy === ORDER_BY_ASC;

        const sortedNews: Array<FilteredNews> = news.sort((item1: FilteredNews, item2: FilteredNews) => {
            let date1: any = new Date(item1.date);
            let date2: any = new Date(item2.date);

            if (isAsc) {
                return date1 - date2;
            } else {
                return date2 - date1;
            }
        })

        setNewsList(sortedNews);
        setOrderBy(isAsc ? ORDER_BY_DESC : ORDER_BY_ASC);
    }

    const handleEdit = (id: number) => {
        const selectedItem = newsList.find(item => item.id === id);
        setId(selectedItem.id);
        setTitle(selectedItem.title);
        setText(selectedItem.text);
        setCategory(selectedItem.category);

        setNewsList([]);
        setEditNewsItem(true);
    }

    const filteredNews: Array<FilteredNews> = newsList.filter(item => (
            item.text.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )
    );

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
