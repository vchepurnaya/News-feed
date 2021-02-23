import { NewItem } from '../entity/NewItem';

export type FeedObj = {
    categories: Array<object>,
    content: string,
    contentSnippet: string,
    enclosure: object,
    guid: string,
    isoDate: Date,
    link: string,
    pubDate: Date,
    title: string
};

export type TParams = {
    id: string,
    title: string
};

export type Currency = {
    Cur_ID: number,
    Date: Date,
    Cur_Scale: number,
    Cur_Abbreviation: string,
    Cur_Name: string,
    Cur_OfficialRate: number
};

export type FilterProps = {
    setSearch: any
};

export type newsInputProps = {
    title: string,
    text: string,
    category: string,
    newsId: number,
    editNewsItem: boolean,
    setTitle: any,
    setText: any,
    setCategory: any,
    setNewsList: any,
    setId: any,
    setEditNewsItem: any,
    newsList: Array<NewItem>,
};

export type NewsItemProps = {
    title: string,
    text: string,
    category: string,
    date: Date,
    editedFlag: boolean,
    handleDelete: any,
    handleEdit: any,
    author: string,
    userId: number
};

export type NewsListProps = {
    newsList: Array<NewItem>,
    search: string,
    setNewsList: any,
    setId: any,
    setTitle: any,
    setText: any,
    setCategory: any,
    setEditNewsItem: any,
};

export type InputPageProps = {
    toggle: boolean,
    setToggle: any,
    setFeeds: any
};

export type PreloaderProps = {
    isLoading: boolean
};

export type Filters = {
    id: string,
    value: string,
    title: string
};
