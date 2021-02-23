import React, { useEffect } from 'react';

import { NewFeed } from '../../entity/NewFeed';
import { getFeeds, addNewFeed } from '../../service/NewFeedService';
import { useInput } from '../../hooks/useInput';
import { InputPageProps } from '../../assets/types';

import './Feed.css';
import { STYLE } from '../../assets/variables';

const InputNewFeed: React.FC<InputPageProps> = ({
     toggle,
     setToggle,
     setFeeds
}) => {
    const title = useInput('', {isEmpty: true, maxLength: 50, minLength: 1});
    const url = useInput('', {isEmpty: true, isUrl: true});
    let { span } = STYLE;

    useEffect(() => {
        if (!toggle) {
            title.setValue('');
            url.setValue('');
        }
    }, [toggle])

    const handleSubmitData = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        let newFeed: NewFeed = new NewFeed(
            Math.floor(Math.random() * 10000),
            title.value,
            url.value.trim()
        );

        addNewFeed(newFeed);

        setFeeds(getFeeds());
        setToggle(false);
        title.setValue('');
        url.setValue('');
        title.setIsDirty(false);
        url.setIsDirty(false);
    }

    return (
        <div
            className="modal"
            onClick={() => setToggle(false)}
            style={toggle ? {display: 'block'} : {display: 'none'}}
        >
            <div
                className="modal__content"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
                <span
                    className="modal__close"
                    onClick={() => setToggle(false)}
                >
                    &times;
                </span>
                <p className="modal__content-text">
                    Для добавления новой RSS-ленты необходимо ввести адрес в поле:
                </p>
                <div className="modal__input">
                    <input
                        className="modal__input-field"
                        type="text"
                        placeholder="Заголовок ленты"
                        value={title.value}
                        required
                        onChange={e => title.onChange(e)}
                        onBlur={e => title.onBlur(e)}
                    />

                    {(title.isDirty && title.isEmpty) &&
                    <span style={span}>Поле не должно быть пустым!</span>}
                    {(title.isDirty && title.minLengthError) &&
                    <span style={span}>Поле должно содержать не менее 1 символа</span>}
                    {(title.isDirty && title.maxLengthError) &&
                    <span style={span}>Поле должно содержать не более 50 символов</span>}

                    <input
                        className="modal__input-field"
                        type="url"
                        placeholder="URL-адрес"
                        value={url.value}
                        required
                        onChange={e => url.onChange(e)}
                        onBlur={e => url.onBlur(e)}
                    />

                    {(url.isDirty && url.isEmpty) &&
                    <span style={span}>Поле не должно быть пустым!</span>}
                    {(url.isDirty && url.urlError) &&
                    <span style={span}>Неправильный формат url!</span>}

                </div>

                <button
                    className="modal__button"
                    onClick={handleSubmitData}
                    disabled={!title.isInputValid || !url.isInputValid}
                >
                    Создать
                </button>

            </div>
        </div>
    );
};

export default InputNewFeed;
