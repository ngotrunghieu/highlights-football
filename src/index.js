import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
//redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

import MainComponent from '../src/components/MainComponent';
import AllReducers from '../src/reducers/index';

// dev tools middleware
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();
let store = createStore(
    AllReducers
    , compose(applyMiddleware(sagaMiddleware), reduxDevTools)
    );


export const App = () => {
    return(
        <div style={{backgroundColor: '#e9ebee', height: '100%'}}>
            <MainComponent/>
        </div>
    )
}

sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
