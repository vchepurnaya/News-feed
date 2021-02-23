import { NewItem } from '../entity/NewItem';
import { NewUser } from '../entity/NewUser';
import { NewFeed } from '../entity/NewFeed';
import { Session } from '../redux/reducers/sessionReducer';
import { Filters } from './types';

export const  FILTERS: Array<Filters> = [
    { id: '1', value: 'sport', title: 'Спорт' },
    { id: '2', value: 'travelling', title: 'Путешествия' },
    { id: '3', value: 'realty', title: 'Недвижимость' },
    { id: '4', value: 'people', title: 'Люди' },
    { id: '5', value: 'animals', title: 'Животные'},
    { id: '6', value: 'weather', title: 'Погода'},
    { id: '7', value: 'finance', title: 'Финансы'},
    { id: '8', value: 'health', title: 'Здоровье'},
    { id: '9', value: 'politics', title: 'Политика'},
    { id: '10', value: 'other', title: 'Другое' }
];

export const DEFAULT_CATEGORY: string = FILTERS[0].title;

export const ORDER_BY_ASC: string = 'asc';
export const ORDER_BY_DESC: string = 'desc';

export const STYLE = {
    span: {
        color: 'red',
        display: 'block',
        fontSize: '14px'
    }
};

export const defaultNews = [
    new NewItem(
        1,
        'У фермера под Минском живут пони, волки и верблюды. А «кормит» всех сахарная свекла',
        'В деревне Подгай можно встретить Ангелу Меркель, Шакиру и других известных личностей. Правда, это не те знаменитости, о которых рассказывают мировые СМИ, а их тезки — жители зоопарка. И «кормит» их всех сахарная свекла. Вот она уже настоящая. Вместе с группой компаний «Белагро» побывали в расположенном недалеко от столицы фермерском хозяйстве «Вольготное» и узнали, как фермер вышел за рамки привычной работы в сельском хозяйстве',
        'Животные',
        new Date('December 01, 1999 03:24:00'),
        'admin admin',
        true,
        1
    ),
    new NewItem(
        2,
        'Погода',
        'Над Алжиром сформировался пылевой шлейф и направился на север в Средиземноморье, в настоящее время он движется в сторону Западной Европы. В ближайшие дни по Европе распространится значительное количество пыли и установится теплая весенняя погода, которая продержится до конца февраля, сообщает Severe Weather.',
        'Погода',
        new Date('December 01, 1999 03:24:00'),
        'admin admin',
        false,
        1
    ),
    new NewItem(
        3,
        'Завершился ЧМ по биатлону. Вот пять главных сенсаций, которые точно не стоит пропускать',
        'Завершился ЧМ по биатлону. Вот пять главных сенсаций, которые точно не стоит пропускать',
        'Спорт',
        new Date('December 01, 1999 03:24:00'),
        'admin admin',
        false,
        1
    )
];

export const usersList = [
    new NewUser(1, 'admin', 'admin', 'admin@admin.admin', '123456')
];

export const defaultFeeds = [
   new NewFeed(
       1,
       'Новости тенниса',
       'https://news.tut.by/rss/sport/tennis.rss'
   ),
    new NewFeed(
        2,
        'Яндекс.Авто',
        'http://news.yandex.ua/auto.rss'
    ),
    new NewFeed(
        3,
        'Новости Хабр',
        'https://habr.com/ru/rss/hubs/all/'
    ),
];

export const getSession = (): Session => {
    let session: Session;
    let sessionJson = sessionStorage.getItem('session');

    if (sessionJson === undefined || sessionJson === null) {
        session = {
            isLog: false,
            currentUser: {
                id: 0,
                name: '',
                surname: ''
            }
        }

        sessionStorage.setItem('session', JSON.stringify(session));
    } else {
        session = JSON.parse(sessionJson);
    }

    return session;
};

