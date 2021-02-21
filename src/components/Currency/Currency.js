import React, {useEffect, useState} from 'react';
import './Currency.css';

const Currency = () => {

    const [currency, setCurrency] = useState([]);
    const CUR_ID = [145, 298, 292, 355, 293];
    const endPoint = `https://www.nbrb.by/api/exrates/rates?periodicity=0`;

    let fetchData = () => {
        fetch(endPoint)
            .then(res => res.json())
            .then(result => setCurrency(result.filter(item => CUR_ID.includes(item.Cur_ID))))
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
                        return (
                            <tr className="currency__column" key={`${item.Cur_Id}_${index}`}>
                                <td className="currency__row" key={`${item.Cur_Id}__${index}`}>{item.Cur_Name}</td>
                                <td className="currency__row" key={`${item.Cur_Id}-${index}`}>{item.Cur_OfficialRate}</td>
                                <td className="currency__row" key={`${item.Cur_Id}+${index}`}> {item.Cur_Abbreviation}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default Currency;
