import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import PostPage from './components/post2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Switch>
      <Route exact path = '/'>
        <App />
      </Route>
      <Route exact path = '/posts/:id'>
        <PostPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

reportWebVitals();
