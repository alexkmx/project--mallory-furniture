import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import noMatch from './resources/NoMatch';
import HomeView from './resources/HomeView';
import Terms from './resources/Terms';

import AllProducts from './resources/AllProducts';
import Product from './resources/Product';
import DynamicView from './resources/DynamicView';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/all-products" component={AllProducts} />
            <Route exact path="/product" component={Product} />
            <Route path="/category/:id" component={DynamicView} />
            <Route component={noMatch} />
          </Switch>
          <footer />
        </div>
    );
  }
}

export default App;
