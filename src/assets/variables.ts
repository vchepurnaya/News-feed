import { Filters } from '../interfaces';

export const  FILTERS: Array<Filters> = [
    { id: '1', value: 'sport', title: 'Спорт' },
    { id: '2', value: 'travelling', title: 'Путешествия' },
    { id: '3', value: 'realty', title: 'Недвижимость' },
    { id: '4', value: 'people', title: 'Люди' },
    { id: '5', value: 'other', title: 'Другое' }
]

export const DEFAULT_CATEGORY: string = FILTERS[0].title;

export const ORDER_BY_ASC: string = 'asc';
export const ORDER_BY_DESC: string = 'desc';

export const STYLE = {
    span: {
        color: 'red',
        display: 'block',
        fontSize: '14px'
    }
}
