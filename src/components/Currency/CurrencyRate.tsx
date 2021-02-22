import React, {useEffect, useState} from 'react';
import './Currency.css';

type Currency = {
    Cur_ID: number,
    Date: Date,
    Cur_Scale: number,
    Cur_Abbreviation: string,
    Cur_Name: string,
    Cur_OfficialRate: number
}

const CurrencyRate: React.FC = () => {

    const [currency, setCurrency] = useState([]);
    const CUR_ID = [145, 298, 292, 355, 293];
    const endPoint = `https://www.nbrb.by/api/exrates/rates?periodicity=0`;

    let fetchData = () => {
        fetch(endPoint)
            .then(res => res.json())
            .then(result => setCurrency(result.filter((item: Currency) => CUR_ID.includes(item.Cur_ID))))
            .catch(error => console.log(error))
    }


    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="currency">
            <h2 className="currency__title">Курсы валют на сегодня: </h2>
            <table className="currency__table">
                <tbody>
                {
                    currency.map((item, index) => {
                        const {Cur_Id, Cur_Name, Cur_OfficialRate, Cur_Abbreviation } = item;
                        return (
                            <tr className="currency__column" key={`${Cur_Id}_${index}`}>
                                <td className="currency__row" key={`${Cur_Id}__${index}`}>{Cur_Name}</td>
                                <td className="currency__row" key={`${Cur_Id}-${index}`}>{Cur_OfficialRate}</td>
                                <td className="currency__row" key={`${Cur_Id}+${index}`}> {Cur_Abbreviation}</td>
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
