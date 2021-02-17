import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Entry from './components/Authorization/Entry';
import Registration from './components/Authorization/Registration';
import Error from './components/Authorization/Error';



const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/entry' component={Entry}/>
                <Route exact path='/registration' component={Registration} />
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
