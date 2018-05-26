import React from 'react';
import {Route,IndexRoutem,Link} from 'react-router';
import App from './App';
import Home from './components/Home/Home';


const routes = (
    <Route path="/" component={App}>
      <Route exact path="/" component={Home} />
    </Route>
);

export default routes;
