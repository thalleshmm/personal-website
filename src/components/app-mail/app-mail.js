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

    isFormValid() {
        const subject = this.$subject.value;
        const message = this.$message.value;
        const honeypot = this.$honeypot.value;

        return subject.length > 0 &&
            message.length > 0 &&
            honeypot.length === 0;
    }

    async onSend(evt) {
        evt.preventDefault();

        const subject = this.$subject.value;
        const message = this.$message.value;
        const honeypot = this.$honeypot.value;

        if (honeypot.length !== 0) return;
        
        if (subject.length === 0) {
            alert('Subject is empty!');
            return;
        }

        if (message.length === 0) {
            alert('Message is empty!');
            return;
        }

        const body = new FormData();
        body.set('subject', subject);
        body.set('message', message);

        try {
            await fetch('https://formspree.io/thalleshmmaia@gmail.com', {
                method: 'POST',
                body
            });

            alert('Thank you. I\'ll respond ASAP =)');

            this.$subject.value = 'Website Contact';
            this.$message.value = '';

        } catch (e) {
            alert('I\'m sorry. E-mail could not be sent. Try again later');
            return;
        }
    }

    render() {
        const actionButton = {
            text: 'Send',
            onClick: this.onSend
        };

        return <App title="Mail"
                    action={actionButton}
                    type="form"
                    history={this.props.history}>
            <div className="app-mail__form">
                <input type="text"
                       className="app-mail__form__honeypot"
                       ref={$el => this.$honeypot = $el}
                       name="fullname"
                       tabIndex="-1"
                       aria-hidden="true" />
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
                           name="subject"
                           className="app-mail__form-group__form-control"
                           defaultValue="Website Contact"
                           ref={$el => this.$subject = $el} />
                </div>
                <textarea name="message"
                          className="app-mail__textarea"
                          aria-label="Message"
                          placeholder="Type your message here..."
                          ref={$el => this.$message = $el} />
            </div>
        </App>
    }
}

export default AppMail;