import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Menubar from '../menubar/menubar';
import Dock from '../dock/dock';
import './os.css';

class App extends Component {
    render() {
        return <BrowserRouter>
            <div className="os">
                <Menubar />
                <div className="os__desktop"></div>
                <div className="os__dock">
                    <Dock />
                </div>
            </div>
        </BrowserRouter>
    }
}

export default App;