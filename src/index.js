import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { combineReducers, applyMiddleware } from 'redux';
import {Provider } from 'react-redux';

// Reducers
const name = (state = '', action) => {
    if (action.type === 'SET_NAME') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}

const street = (state = '', action) => {
    if (action.type === 'SET_STREET') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}

const city = (state = '', action) => {
    if (action.type === 'SET_city') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}

const zip = (state = '', action) => {
    if (action.type === 'SET_zip') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}

// const pickupOrDelivery = (state = true, action) => {
//     // if (action.type === 'SET_PICKORDELIVERY') {
//     //     return action.payload;
//     // } else if (action.type === 'CLEAR_ALL') {
//     //     return '';
//     // }
//     return state;
// }



ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root')
);