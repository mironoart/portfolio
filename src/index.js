import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './media/css/main.css';
import Main from './components/Main.jsx';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer.js';
import {Provider} from 'react-redux';

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);

const MainContainer = () => (
    <Provider store = {store}>
        <Main />
    </Provider>
)

ReactDOM.render(
        <BrowserRouter > 
            <MainContainer /> 
        </BrowserRouter>,
    document.getElementById('root')
);
