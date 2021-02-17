import { Filters } from '../interfaces';
import { NewItem } from '../entity/NewItem';
import { NewUser } from '../entity/NewUser';

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

export const defaultNews = [
    new NewItem(
        1,
        'default',
        'default',
        'Спорт',
        new Date('December 01, 1999 03:24:00'),
        'admin',
        true,
        1
    ),
    new NewItem(
        2,
        'default',
        'default',
        'Спорт',
        new Date('December 01, 1999 03:24:00'),
        'admin',
        false,
        1
    ),
    new NewItem(
        3,
        'default',
        'default',
        'Спорт',
        new Date('December 01, 1999 03:24:00'),
        'admin',
        false,
        1
    )
];

export const admin = new NewUser(1, 'admin', 'admin', 'admin@admin.admin', '123456');

