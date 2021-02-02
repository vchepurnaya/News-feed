import React, { Fragment } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Entry from './components/Authorization/Entry';
import Registration from './components/Authorization/Registration';
import Error from './components/Authorization/Error';



const App: React.FC = () => {
  return (
      <Fragment>
        <Header/>
          <Router>
              <nav className="header__nav">
                  <div className="header__link">
                      <Link
                          className="header__link-item"
                          to="/"
                      >
                          Главная
                      </Link>
                  </div>
                  <div className="header__link">
                      <Link
                          to="/entry"
                          className="header__link-item"
                      >
                          Войти
                      </Link>
                  </div>
                  <div className="header__link">
                      <Link
                          className="header__link-item"
                          to="/registration"
                      >
                          Регистрация
                      </Link>
                  </div>
              </nav>
                  <Switch>
                      <Route exact path='/' component={Home} />
                      <Route exact path='/entry' component={Entry} />
                      <Route exact path='/registration' component={Registration}/>
                      <Route component={Error} />
                  </Switch>
          </Router>
      </Fragment>
  );
}

export default App;
