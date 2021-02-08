import React, { Fragment, useState } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Entry from './components/Authorization/Entry';
import Registration from './components/Authorization/Registration';
import Error from './components/Authorization/Error';


const App: React.FC = () => {
    /*const [isEntered, setEntered] = useState(false);*/

   /*if (isEntered) {
      return (
          <Fragment>
              <BrowserRouter>
                  <Header/>
                  <nav className="header__nav">
                      <div className="header__link">
                          <Link
                              onClick={() => setEntered(false)}
                              className="header__link-item"
                              to="/"
                          > Выход
                          </Link>
                      </div>
                  </nav>
                  <Home />
              </BrowserRouter>
          </Fragment>
      )
   }*/
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={/*{(props: any) =>
                    <Home isEntered={isEntered} {...props}/>}*/Home}
                />
                <Route exact path='/entry' component={/*{(props: any) =>
                    <Entry setEntered={setEntered} {...props}/>}*/Entry}
                />
                <Route exact path='/registration' component={Registration} />
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
