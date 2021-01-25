import React from 'react';
import './News.css';
import {DEFAULT_CATEGORY} from '../../App';

type Filter = {
    id: string,
    value: string,
    title: string
}

type newsInputProps = {
    filters: Array<Filter>,
    title: string,
    text: string,
    category: string,
    id: number,
    editNewsItem: boolean,
    setTitle: any,
    setText: any,
    setCategory: any,
    setNewsList: any,
    setId: any,
    setEditNewsItem: any,
}

type NewItem = {
    id: number,
    title: string,
    text: string,
    category: string,
    date: object,
    editedFlag: boolean
}


const NewsInput: React.FC<newsInputProps> = ({
                       filters,
                       title,
                       text,
                       category,
                       setTitle,
                       setText,
                       setCategory,
                       setNewsList,
                       setId,
                       setEditNewsItem,
                       editNewsItem,
                       id
                   }) => {

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newItem: NewItem = {
            id: id,
            title: title,
            text: text,
            category: category,
            date: new Date(),
            editedFlag: false
        };

        saveNewsList(newItem);
        const updatedItems = JSON.parse(localStorage.getItem('news'));

        setNewsList(updatedItems);
        setId(Math.floor(Math.random() * 1000000));
        setTitle('');
        setText('');
        setCategory(DEFAULT_CATEGORY);
    }

    const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const news = JSON.parse(localStorage.getItem('news'));

        const updatingItem = news.find(item => item.id === id);
        updatingItem.title = title;
        updatingItem.text = text;
        updatingItem.category = category;
        updatingItem.date = new Date();
        updatingItem.editedFlag = true;

        setNewsList(news);
        localStorage.setItem('news', JSON.stringify(news));

        setId(Math.floor(Math.random() * 1000000));
        setTitle('');
        setText('');
        setCategory(DEFAULT_CATEGORY);
        setEditNewsItem(false);
    }

    const saveNewsList = (newItem: NewItem) => {
        let news = JSON.parse(localStorage.getItem('news'));
        localStorage.setItem('news', JSON.stringify([...news, newItem]));
    }

    return (
        <div className="container">
            <form className="news">
                <div className="news__container">
                    <div className="news__title">
                        <input
                            className="news__title-input"
                            type="text"
                            value={title}
                            name="title"
                            onChange={handleChangeTitle}
                            required
                        />
                        <span className="news__title-bar"/>
                        <label className="news__title-name">Заголовок:</label>
                    </div>

                    <div className="news__textarea">
                        <label className="news__textarea-name" htmlFor="text"> Введите новость: </label>
                        <textarea
                            className="news__textarea-text"
                            id="text"
                            value={text}
                            onChange={handleChangeText}
                        />
                    </div>

                    <div className="news__category">
                        <label className="news__category-name">
                            Выберите категорию:
                            <select
                                className="news__category-select"
                                name="select"
                                value={category}
                                onChange={handleChangeCategory}>
                                {filters.map(({ id, title }) => (
                                    <option
                                        className="news__category-option"
                                        key={id}
                                        value={title}
                                    >
                                        {title}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>

                <button
                    className={editNewsItem ? 'news__button editClass' : 'news__button addClass'}
                    type="submit"
                    onClick={editNewsItem ? handleUpdate : handleSubmit}
                    disabled={!title || !text}
                >
                    {editNewsItem ? 'Редактировать' : 'Опубликовать'}
                </button>
            </form>
        </div>
    );
}

export default NewsInput;
