import React from 'react';
import './App.css';
import Home from './containers/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import Auth from './containers/auth';
import NotFound from './containers/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/home" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
