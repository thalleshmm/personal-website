import React, { Component } from 'react';
import './dialog.css';

class Dialog extends Component {
    constructor(props) {
        super(props);

        this.open = this.open.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.$buttons = [];
    }

    state = {
        active: false,
        text: 'Text',
        buttons: [],
        onClose: null
    }

    componentDidMount() {
        window.addEventListener('dialog-open', this.open);
    }

    componentWillUnmount() {
        window.removeEventListener('dialog-open', this.open);
    }

    open(evt) {
        const { detail } = evt;
        const { text } = detail;
        const buttons = detail.buttons || ['OK'];
        const onClose = detail.onClose || null;

        this.setState({ text, buttons, onClose, active: true }, () => {
            this.$dialog.focus();
        });
    }

    close(buttonIndex = null) {
        this.setState({ active: false }, () => {
            if (this.state.onClose)
                this.state.onClose(buttonIndex);
        });
    }

    onFocusTrap() {
        this.$dialog.focus();
    }

    onKeyDown(evt) {
        if ( ! evt.target.classList.contains('dialog'))
            return;

        switch (evt.key) {
            case 'Escape':
                this.close();
                break;
            
            case 'Enter':
            case ' ':
                this.$buttons[this.$buttons.length - 1].click();
                break;
            
            default:
                break;
        }
    }

    render() {
        return <div className={this.state.active ? 'dialog dialog--active' : 'dialog'}
                    tabIndex={this.state.active ? '0' : '-1'}
                    role="dialog"
                    ref={$el => this.$dialog = $el}
                    onKeyDown={this.onKeyDown}>
            <div className="dialog__wrapper" role="document">
                <div className="dialog__text">
                    {this.state.text}
                </div>
                <div className="dialog__footer">
                    {this.state.buttons.map((b, i) => {
                        return <button key={i}
                                       className="dialog__cta"
                                       onClick={this.close.bind(this, i)}
                                       ref={$el => this.$buttons[i] = $el}>
                            {b}
                        </button>
                    })}
                    <span tabIndex="0"
                          onFocus={this.onFocusTrap.bind(this)} />
                </div>
            </div>
        </div>
    }
}

export default Dialog;