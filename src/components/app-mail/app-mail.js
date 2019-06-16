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

        this.$form.$wrapper.submit();
    }

    render() {
        const actionButton = {
            text: 'Send',
            onClick: this.onSend
        };

        return <App title="Mail"
                    action={actionButton}
                    formAction="https://formspree.io/tmaiadev@gmail.com"
                    formMethod="POST"
                    type="form"
                    history={this.props.history}
                    location={this.props.location}
                    ref={$el => this.$form = $el}
                    pathname="/email">
            <div className="app-mail__form">
                <div className="app-mail__form-group">
                    <label htmlFor="for" className="app-mail__form-group__label">For:</label>
                    <input type="email"
                           id="for"
                           className="app-mail__form-group__form-control"
                           defaultValue="tmaiadev@gmail.com"
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
                    <input type="email"
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