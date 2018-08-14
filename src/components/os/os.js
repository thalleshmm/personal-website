import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Menubar from '../menubar/menubar';
import Dock from '../dock/dock';
import Desktop from '../desktop/desktop';
import AppMail from '../app-mail/app-mail';
import './os.css';

class App extends Component {
    render() {
        return <BrowserRouter>
            <div className="os">
                <Menubar />
                <div className="os__desktop">
                    <Desktop />
                </div>
                <div className="os__dock">
                    <Dock />
                </div>
                <Route path="/email"
                       component={AppMail} />
            </div>
        </BrowserRouter>
    }
}

export default App;