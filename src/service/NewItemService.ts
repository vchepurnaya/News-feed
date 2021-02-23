import { NewItem } from '../entity/NewItem';
import { defaultNews } from '../assets/variables';

export const getNews = (): Array<NewItem> => {
    let newsJson = localStorage.getItem('news');

    let news: Array<NewItem>;
    if (newsJson === null) {
        news = defaultNews;
    } else {
        news = JSON.parse(newsJson);
    }

    return news;
};

export const getNewItemById = (id: number) => {
    let news: Array<NewItem> = getNews();
    return news.find(newItem => newItem.id === id);
};

export const setNews = (news: Array<NewItem>) => {
    localStorage.setItem('news', JSON.stringify(news));
};

export const addNewItem = (newItem: NewItem) => {
    let news: Array<NewItem> = getNews();
    news.push(newItem);
    setNews(news);
};

export const updateNewItem = (newItem: NewItem) => {
    let news: Array<NewItem> = getNews();
    let updatingNewItem = news.find(ni => ni.id === newItem.id);

    if (updatingNewItem !== undefined && updatingNewItem !== null) {
        updatingNewItem.title = newItem.title;
        updatingNewItem.text = newItem.text;
        updatingNewItem.category = newItem.category;
        updatingNewItem.date = newItem.date;
        updatingNewItem.editedFlag = newItem.editedFlag;

        setNews(news);
    }
};

export const removeNewItem = (id: number) => {
    let news: Array<NewItem> = getNews();
    news = news.filter(newItem => newItem.id !== id);
    setNews(news);
};
