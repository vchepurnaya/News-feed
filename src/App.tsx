import React, { Fragment, useState } from 'react';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import NewsInput from './components/News/NewsInput';
import NewsList from './components/News/NewsList';

type Filter = {
  id: string,
  value: string,
  title: string
}


const  FILTERS: Array<Filter> = [
  { id: '1', value: 'sport', title: 'Спорт' },
  { id: '2', value: 'travelling', title: 'Путешествия' },
  { id: '3', value: 'realty', title: 'Недвижимость' },
  { id: '4', value: 'people', title: 'Люди' },
  { id: '5', value: 'other', title: 'Другое' }
]

const DEFAULT_CATEGORY: string = FILTERS[0].title;

const ORDER_BY_ASC = 'asc';
const ORDER_BY_DESC = 'desc';


const App: React.FC = () => {
  let news = JSON.parse(localStorage.getItem('news'));

  if (news === null) {
    news = [];
    localStorage.setItem('news', JSON.stringify([]));
  }

  const [newsList, setNewsList] = useState<string>(news);
  const [id, setId] = useState<number>(Math.floor(Math.random() * 1000000))
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [category, setCategory] = useState<string>(DEFAULT_CATEGORY);
  const [editNewsItem, setEditNewsItem] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [orderBy, setOrderBy] = useState<string>(ORDER_BY_ASC);

  return (
      <Fragment>
        <Header/>
        <div className="wrapper">
          <Filter
              setSearch={setSearch}
          />
          <NewsInput
              filters={FILTERS}
              title={title}
              text={text}
              category={category}
              editNewsItem={editNewsItem}
              setTitle={setTitle}
              setText={setText}
              setCategory={setCategory}
              setNewsList={setNewsList}
              setId={setId}
              setEditNewsItem={setEditNewsItem}
              newsList={newsList}
              id={id}
          />
          <NewsList
              newsList={newsList}
              search={search}
              orderBy={orderBy}
              setNewsList={setNewsList}
              setId={setId}
              setTitle={setTitle}
              setText={setText}
              setCategory={setCategory}
              setEditNewsItem={setEditNewsItem}
              setOrderBy={setOrderBy}
          />
        </div>
      </Fragment>
  );
}

export default App;
export { DEFAULT_CATEGORY, ORDER_BY_ASC, ORDER_BY_DESC };
