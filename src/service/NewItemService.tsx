import {NewItem} from "../entity/NewItem";

export const getNews = (): Array<NewItem> => {
    let newsJson = localStorage.getItem('news');

    let news: Array<NewItem>;
    if (newsJson === null) {
        news = [];
    } else {
        news = JSON.parse(newsJson);
    }

    return news;
}

export const getNewItemById = (id: number): NewItem => {
    let news: Array<NewItem> = getNews();
    let newItem: NewItem = news.find(newItem => newItem.id === id);

    return newItem;
}

export const setNews = (news: Array<NewItem>) => {
    localStorage.setItem('news', JSON.stringify(news));
}

export const addNewItem = (newItem: NewItem) => {
    let news: Array<NewItem> = getNews();
    news.push(newItem);
    setNews(news);
}

export const updateNewItem = (updatedNewItem: NewItem) => {
    let news: Array<NewItem> = getNews();
    let updatingNewItem: NewItem = news.find(newItem => newItem.id === updatedNewItem.id);

    if (updatingNewItem !== undefined && updatingNewItem !== null) {
        updatingNewItem.title = updatedNewItem.title;
        updatingNewItem.text = updatedNewItem.text;
        updatingNewItem.category = updatedNewItem.category;
        updatingNewItem.date = updatedNewItem.date;
        updatingNewItem.editedFlag = updatedNewItem.editedFlag;

        setNews(news);
    }
}

export const removeNewItem = (id: number) => {
    let news: Array<NewItem> = getNews();
    news = news.filter(newItem => newItem.id !== id);
    setNews(news);
}