import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import Home from './Home';
import React from 'react';
import GrowingInfo from './Growinginfo';
import Shop from './Shop';
import Navigation from './Navigation';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/growinginfo" component={GrowingInfo} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
