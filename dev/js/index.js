import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
		<BrowserRouter>
		<Switch>
		<Route exact path='/' component={App}/>
		<Route path='/about' component={About}/>
		</Switch>
		</BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
