import React, { useEffect, useState } from 'react';
import './Feed.css';

type InputPageProps = {
    toggle: boolean,
    setToggle: any
}

const InputPage: React.FC<InputPageProps> = ({
     toggle,
     setToggle
}) => {
    const [value, setValue] = useState<string>('');
    const [url, setUrl] = useState<string>('');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
       setValue(e.target.value);
    }

    const submitUrl = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setToggle(false);
        setUrl(value);
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
                >&times;</span>
                <p className="modal__content-text">Для добавления новой RSS-ленты необходимо ввести адрес в поле:</p>
                <div className="modal__input">
                    <input
                        className="modal__input-field"
                        type="text"
                        placeholder="URL-адрес"
                        value={value}
                        required
                        onChange={handleInput}
                    />
                </div>
                <button
                    className="modal__button"
                    onClick={submitUrl}
                >Создать</button>
            </div>
        </div>
    );
};

export default InputPage;
