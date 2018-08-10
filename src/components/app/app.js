import React, { Component } from 'react';
import Menubar from '../menubar/menubar';
import './app.css';

class App extends Component {
    render() {
        return <div className="app">
            <Menubar />
        </div>
    }
}

export default App;