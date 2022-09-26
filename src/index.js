import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const customerName = ( state = '', action ) => {
    if (action.type === 'SET_CUSTOMER') {
        return action.payload;
    }

    return state;
}
const street = ( state = '', action ) => {
    if (action.type === 'SET_STREET') {
        return action.payload;
    }

    return state;
}

const city = ( state = '', action ) => {
    if(action.type === 'SET_STREET') {
        return action.payload;
    }

    return state;
}
// Redux store
const storeInstance = createStore(
    combineReducers(
        {
            customerName,
            street,
            city,
        }
    ),
    applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
document.getElementById('root'));
