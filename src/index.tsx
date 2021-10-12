import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,} from 'react-router-dom'
import {Header} from './Components/Header/Header';
import {Provider} from 'react-redux'
import {store} from './Redux/ReduxStore'
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Header/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'))
reportWebVitals();