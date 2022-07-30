import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './Redux/ReduxStore'
import {HeaderContainer} from './Components/Header/HeaderContainer';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <HeaderContainer/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'))
reportWebVitals();