import React, { Component } from 'react';
import App from '../app/app';
import './app-mail.css';

class AppMail extends Component {
    constructor(props) {
        super(props);

        this.onSend = this.onSend.bind(this);
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
        const name    = this.$name.value;
        const email   = this.$email.value;
        const phone   = this.$phone.value;
        const honeypot = this.$honeypot.value;

        if (honeypot.length !== 0) return;
        
        if (subject.length === 0) {
            const evt = new CustomEvent('dialog-open', {
                text: 'Field `Subject` is empty'
            });

            window.dispatchEvent(evt);
            return;
        }

        if (name.length === 0) {
            const detail = {
                text: 'Field `Your Name` is empty'
            };

            const evt = new CustomEvent('dialog-open', { detail });
            window.dispatchEvent(evt);
            return;
        }

        if (message.length === 0) {
            const detail = {
                text: 'Field `Message` is empty'
            };

            const evt = new CustomEvent('dialog-open', { detail });
            window.dispatchEvent(evt);
            return;
        }

        const body = new FormData();
        body.set('subject', subject);
        body.set('name', name);
        body.set('email', email);
        body.set('phone', phone);
        body.set('message', message);

        try {
            await fetch('https://formspree.io/thalleshmmaia@gmail.com', {
                method: 'POST',
                body
            });

            const detail = {
                text: 'Your message has been sent successfully. Thank you. I\'ll reply ASAP.'
            };

            const evt = new CustomEvent('dialog-open', { detail });
            window.dispatchEvent(evt);

            this.$subject.value = 'Website Contact';
            this.$name.value = '';
            this.$email.value = '';
            this.$phone.value = '';
            this.$message.value = '';

        } catch (e) {
            const detail = {
                text: 'I\'m sorry. E-mail could not be sent. Try again later'
            };

            const evt = new CustomEvent('dialog-open', { detail });
            window.dispatchEvent(evt);

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
                <div className="app-mail__form-group">
                    <label htmlFor="name"
                           className="app-mail__form-group__label">Your Name:</label>
                    <input type="text"
                           id="name"
                           name="name"
                           className="app-mail__form-group__form-control"
                           ref={$el => this.$name = $el} />
                </div>
                <div className="app-mail__form-group">
                    <label htmlFor="email"
                           className="app-mail__form-group__label">Your E-Mail:</label>
                    <input type="text"
                           id="email"
                           name="email"
                           className="app-mail__form-group__form-control"
                           ref={$el => this.$email = $el} />
                </div>
                <div className="app-mail__form-group">
                    <label htmlFor="phone"
                           className="app-mail__form-group__label">Your Phone:</label>
                    <input type="text"
                           id="phone"
                           name="phone"
                           className="app-mail__form-group__form-control"
                           ref={$el => this.$phone = $el} />
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