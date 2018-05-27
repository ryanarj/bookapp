import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create a the store that will hold the data of the app.
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// Add provider that will take in the store
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}><App /></Provider>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();