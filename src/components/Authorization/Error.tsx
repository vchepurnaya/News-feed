import React, { FC } from 'react';

const Error: FC = () => {
    return(
        <div className="error">
            <div className="error__content">
                <h3 className="error__title">Ошибка 404!</h3>
                <p className="error__text">
                    Вы пытаетесь перейти на страницу, которой не существует.
                    <span className="divider"/>
                    Пожалуйста,
                    <a className="error__link" href="/">
                        вернитесь на главную страницу
                    </a>
                </p>

            </div>
        </div>
    );
}

export default Error;
