import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import CurrencySwapForm from './components/CurrencySwapForm';
function Test(props) {
    return (
        <div>
            <h1>Test</h1>
            <Header />
            <Switch>
                <Route path="/" exact component={CurrencySwapForm} />
            </Switch>

        </div>
    );
}

export {Test};