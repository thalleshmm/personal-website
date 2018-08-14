import React, { Component } from 'react';
import App from '../app/app';

class AppMail extends Component {
    componentDidMount() {
        const evt = new CustomEvent('menubar-change-theme', { detail: 'DARK' });
        window.dispatchEvent(evt);
    }

    componentWillUnmount() {
        const evt = new CustomEvent('menubar-change-theme', { detail: 'LIGHT' });
        window.dispatchEvent(evt);
    }

    render() {
        return <App title="Mail">
            
        </App>
    }
}

export default AppMail;