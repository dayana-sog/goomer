import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Restaurants from './pages/Restaurants';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/" component={Restaurants} />
      </Switch>
    </BrowserRouter>
  );
}
