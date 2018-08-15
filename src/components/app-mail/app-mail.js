import React, { Component } from 'react';
import App from '../app/app';
import './app-mail.css';

class AppMail extends Component {
    constructor(props) {
        super(props);

        this.onSend = this.onSend.bind(this);
    }

    componentDidMount() {
        const evt = new CustomEvent('menubar-change-theme', { detail: 'DARK' });
        window.dispatchEvent(evt);
    }

    componentWillUnmount() {
        const evt = new CustomEvent('menubar-change-theme', { detail: 'LIGHT' });
        window.dispatchEvent(evt);
    }

    onSend(evt) {
        
    }

    render() {
        return <App title="Mail"
                    action={{ text: 'Send', onClick: this.onSend }}>
            <form className="app-mail__form">
                <div className="app-mail__form-group">
                    <label htmlFor="for" className="app-mail__form-group__label">For:</label>
                    <input type="email"
                           id="for"
                           className="app-mail__form-group__form-control"
                           defaultValue="thalleshmmaia@gmail.com"
                           readOnly />
                </div>
                <div className="app-mail__form-group">
                    <label htmlFor="subject"
                           className="app-mail__form-group__label">Subject:</label>
                    <input type="text"
                           id="subject"
                           className="app-mail__form-group__form-control"
                           defaultValue="Website Contact" />
                </div>
                <textarea className="app-mail__textarea"
                          aria-label="Message"
                          placeholder="Type your message here..." />
            </form>
        </App>
    }
}

export default AppMail;