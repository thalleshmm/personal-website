import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        
        this._dragginWindow = false;
        this._x = 0;
        this._y = 0;
        this._initX = 0;
        this._initY = 0;

        this.close = this.close.bind(this);
        this.onChromeMouseDown = this.onChromeMouseDown.bind(this);
        this.onChromeMouseMove = this.onChromeMouseMove.bind(this);
        this.onChromeMouseUp   = this.onChromeMouseUp.bind(this);
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.onChromeMouseMove);
        window.addEventListener('mouseup', this.onChromeMouseUp);

        const evt = new CustomEvent('menubar-change-theme', { detail: 'DARK' });
        window.dispatchEvent(evt);

        // We have to run it asyncly
        // otherwise the css animation won't run
        setTimeout(() => {
            this.$wrapper.classList.add('app--active');
            setTimeout(() => {
                this.$wrapper.focus();
            }, 334);
        }, 32);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.onChromeMouseMove);
        window.removeEventListener('mouseup', this.onChromeMouseUp);

        this.$wrapper.classList.remove('app--active');

        const evt = new CustomEvent('menubar-change-theme', { detail: 'LIGHT' });
        window.dispatchEvent(evt);
    }

    close() {
        this.$wrapper.classList.remove('app--active');
        
        // Wait animation to end before
        // changing the URL
        setTimeout(() => {
            if (this.props.history)
                this.props.history.push('/');
            else
                window.history.back();
        }, 333)
    }

    onChromeMouseDown(evt) {
        this._dragginWindow = true;

        this._initX = evt.pageX;
        this._initY = evt.pageY;
    }

    onChromeMouseMove(evt) {
        if ( ! this._dragginWindow) return;

        const diffX = evt.pageX - this._initX;
        const diffY = evt.pageY - this._initY;

        this._initX = evt.pageX;
        this._initY = evt.pageY;

        this._x += diffX;
        this._y += diffY;

        this.$wrapper.style.transform = `translate(${this._x}px, ${this._y}px)`;
    }

    onChromeMouseUp() {
        if ( ! this._dragginWindow) return;
        this._dragginWindow = false;
    }

    render() {
        const Wrapper = props => {
            return this.props.type === 'form' ?
                <form {...props}
                      ref={$el => this.$wrapper = $el}
                      action={this.props.formAction}
                      method={this.props.formMethod}>{props.children}</form> :
                <div {...props} ref={$el => this.$wrapper = $el}>{props.children}</div>;
        }

        const defaultPrimaryColor = '#007aff';

        const headerClassList = ['app__header'];
        if (this.props.headless) headerClassList.push('app__header--headless');
        if (this.props.borderless) headerClassList.push('app__header--borderless');

        return <Wrapper className='app'
                        tabIndex="0"
                        onMouseDown={this.onChromeMouseDown}>
            <div className="app__chrome">
                <button className="app__chrome__close-btn"
                        aria-label="Close"
                        onClick={this.close}
                        type="button">&times;</button>
                {this.props.title}
            </div>
            <header className={headerClassList.join(' ')}>
                <div className="app__header__actions">
                    <button type="button"
                            onClick={this.close}
                            className="app__header__actions__action"
                            style={{ color: this.props.primaryColor || defaultPrimaryColor }}>
                        &lt; Return
                    </button>
                    {this.props.action ?
                    <button onClick={this.props.action.onClick}
                            disabled={this.props.action.disabled ? true : false}
                            className="app__header__actions__action"
                            type="submit"
                            style={{ color: this.props.primaryColor || defaultPrimaryColor }}>
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
            <div className="app__tabtrab"
                 tabIndex="0"
                 onFocus={() => this.$wrapper.focus()} />
        </Wrapper>
    }
}

App.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
    action: PropTypes.shape({
        onClick: PropTypes.func,
        text: PropTypes.string,
        disabled: PropTypes.bool
    }),
    type: PropTypes.oneOf(['default', 'form']),
    history: PropTypes.object,
    headless: PropTypes.bool,
    primaryColor: PropTypes.string,
    borderless: PropTypes.bool,
    formAction: PropTypes.string,
    formMethod: PropTypes.oneOf(['GET', 'POST'])
}

export default App;