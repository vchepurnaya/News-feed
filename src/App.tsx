import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Entry from './components/Authorization/Entry';
import Registration from './components/Authorization/Registration';
import Error from './components/Authorization/Error';
import Widget from './components/RSS_Feed/Widget';
import Feed from './components/RSS_Feed/Feed';



const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Widget />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/feed/:id' component={Feed} />
                <Route path='/entry' component={Entry} />
                <Route path='/registration' component={Registration} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
