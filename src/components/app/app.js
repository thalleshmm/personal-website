import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './app.css';

class App extends Component {
    render() {
        return <div className="app">
            <header className="app__header">
                <Link to="/">
                    &lt; Return
                </Link>
                <h1 className="app__title">
                    {this.props.title}
                </h1>
                <div />
            </header>
            {this.props.children}
        </div>
    }
}

export default App;