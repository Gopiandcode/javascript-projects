import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './modules';


const initialState = {};
const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history)
];

if(process.env.NODE_ENV !== 'production')  {
    const devToolsExtension = window.devToolsExtension
}