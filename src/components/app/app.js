import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './app.css';

class App extends Component {
    render() {
        return <div className="app">
            <header className="app__header">
                <div className="app__header__actions">
                    <Link to="/" className="app__header__actions__action">
                        &lt; Return
                    </Link>
                    {this.props.action ?
                    <button onClick={this.props.action.onClick}
                            className="app__header__actions__action">
                        {this.props.action.text}
                    </button> : <span />}
                </div>
                <h1 className="app__header__title">
                    {this.props.title}
                </h1>
            </header>
            <main className="app__content">
                {this.props.children}
            </main>
        </div>
    }
}

App.propType = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
    action: PropTypes.shape({
        onClick: PropTypes.func,
        text: PropTypes.string
    })
}

export default App;