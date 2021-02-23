import React, { useEffect, useState } from 'react';

import { Currency } from '../../assets/types';

import './Currency.css';

const CurrencyRate: React.FC = () => {
    const [currency, setCurrency] = useState<Array<Currency>>([]);
    const [isCurrencyActive, setCurrencyActive] = useState<boolean>(false);
    const CUR_ID = [145, 298, 292, 355, 293];
    const endPoint = 'https://www.nbrb.by/api/exrates/rates?periodicity=0';

    useEffect(() => {
        fetchData();
    }, []);

    let fetchData = () => {
        fetch(endPoint)
            .then(res => res.json())
            .then((result: Array<Currency>) =>
                setCurrency(result.filter((item: Currency) => CUR_ID.includes(item.Cur_ID))))
            .catch(error => console.log(error))
    }

    return (
        <div className="currency">
            <h2 className="currency__title">Курсы валют на сегодня: </h2>
            <table className="currency__table">
                <tbody>
                {
                    currency.map((item: Currency, index: number) => {
                        const { Cur_ID, Cur_Name, Cur_OfficialRate, Cur_Abbreviation } = item;
                        return (
                            <tr className="currency__column" key={`${Cur_ID}_${index}`}>
                                <td className="currency__row" key={`${Cur_ID}_name_${index}`}>{Cur_Name}</td>
                                <td className="currency__row" key={`${Cur_ID}_rate_${index}`}>{Cur_OfficialRate}</td>
                                <td className="currency__row" key={`${Cur_ID}_abr_${index}`}> {Cur_Abbreviation}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default CurrencyRate;
