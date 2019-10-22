import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
import {composeWithDevTools} from 'redux-devtools-extension';

//Here we create the initial store. We also add the middleware to be able 
//to use the redux dev tools
const middleWareEnhancer = applyMiddleware();
const store = createStore(rootReducer, composeWithDevTools({ trace: true })(middleWareEnhancer));

//The Provider component injects the store into our application
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
