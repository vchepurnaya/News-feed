import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { DEFAULT_CATEGORY, FILTERS } from '../../assets/variables';
import { NewItem } from '../../entity/NewItem';
import { addNewItem, getNews, updateNewItem } from '../../service/NewItemService';
import { RootState } from '../../redux/store';
import { newsInputProps } from '../../assets/types';

import './News.css';

const NewsInput: React.FC<newsInputProps> = ({
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
   newsId,
}) => {
    const [author, setAuthor] = useState<string>('');
    const session = useSelector((state: RootState) => state.session);
    const { name, surname, id } = session.session.currentUser;
    const { isLog } = session.session;

    useEffect(() => {
        if (isLog) {
            setAuthor(`${name} ${surname}`)
        } else {
            setAuthor('Неизвестно')
        }
    }, [title]);

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

        let newItem: NewItem = new NewItem(
            newsId,
            title,
            text,
            category,
            new Date(),
            author,
            false,
            id
        );

        addNewItem(newItem);

        setNewsList(getNews());
        setId(Math.floor(Math.random() * 1000000));
        setTitle('');
        setText('');
        setCategory(DEFAULT_CATEGORY);
    }

    const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        let newItem: NewItem = new NewItem(
            newsId,
            title,
            text,
            category,
            new Date(),
            author,
            true,
            id
        );

        updateNewItem(newItem)

        setNewsList(getNews());
        setId(Math.floor(Math.random() * 1000000));
        setTitle('');
        setText('');
        setCategory(DEFAULT_CATEGORY);
        setEditNewsItem(false);
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
                                {FILTERS.map(({ id, title }) => (
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
