import React from 'react';
import ReactDOM from 'react-dom';
import RationContainer from './containers/RationContainer';
import './index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Router, Route, browserHistory } from 'react-router';
import createLogger from 'redux-logger';

const logger = createLogger();
const middleware = [thunk, logger];
const store = createStore(reducers, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={RationContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

window.state = store.getState.bind(store);
