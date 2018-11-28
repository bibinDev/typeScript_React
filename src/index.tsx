
import thunk from 'redux-thunk';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
 import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import  { persistStore } from 'redux-persist';
import { rootReducer } from './store/rootReducer'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import { PersistGate } from 'redux-persist/integration/react'

export const store = compose(applyMiddleware(thunk))(createStore)(rootReducer)
// const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
