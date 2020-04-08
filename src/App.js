import React from 'react';
import GlobalStyle from './style/globalStyle'
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/home'
import AboutPage from './pages/about'
import ContatctPage from './pages/contact'
import PageNotFound from './pages/404'
import LoginPage from './pages/login'

import Header from './components/Header'


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={ContatctPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
