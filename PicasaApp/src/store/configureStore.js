import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers  } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';


export default function configureStore(initialState: {}) {
    return createStore(rootReducer, initialState);
}