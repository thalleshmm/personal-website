import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        
        this._dragginWindow = false;
        this._x = window.isMobile ? 0 : (200 * Math.random()) - 100;
        this._y = window.isMobile ? 0 : (200 * Math.random()) - 100;
        this._initX = 0;
        this._initY = 0;
        this._zIndex = this.getZIndex();

        this.close = this.close.bind(this);
        this.onChromeMouseDown = this.onChromeMouseDown.bind(this);
        this.onChromeMouseMove = this.onChromeMouseMove.bind(this);
        this.onChromeMouseUp   = this.onChromeMouseUp.bind(this);

        this.state = {
            open: false,
        };
    }

    componentDidUpdate() {
       if (window.location.pathname === this.props.pathname) {
            if (this.state.open === false) {
                this.setState({ open: true }, () => {
                    console.log('OPENED')
                    const evt = new CustomEvent('menubar-change-theme', { detail: 'DARK' });
                    window.dispatchEvent(evt);
                });
            }

            if (this.$wrapper) {
                this._zIndex = this.getZIndex();
                this.$wrapper.style.zIndex = this._zIndex;
            }
       } else {
           if (window.isMobile) {
                if (this.state.open === true) {
                    this.setState({ open: false }, () => {
                        const evt = new CustomEvent('menubar-change-theme', { detail: 'LIGHT' });
                        window.dispatchEvent(evt);
                    });
                }
           }
       }
    }

    componentDidMount() {
        if (this.$wrapper)
            this.$wrapper.style.transform = `translate(${this._x}px, ${this._y}px)`;

        window.addEventListener('mousemove', this.onChromeMouseMove);
        window.addEventListener('mouseup', this.onChromeMouseUp);

        this.componentDidUpdate();
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.onChromeMouseMove);
        window.removeEventListener('mouseup', this.onChromeMouseUp);
    }

    close() {
        this.props.history.push('/');
        if (!window.isMobile) this.setState({ open: false });
    }

    onChromeMouseDown(evt) {
        this._dragginWindow = true;

        this._initX = evt.pageX;
        this._initY = evt.pageY;

        this._zIndex = this.getZIndex();
        this.$wrapper.style.zIndex = this._zIndex;
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

    getZIndex() {
        const date = new Date();
        let mili = date.getMilliseconds();
        mili += date.getSeconds() * 1000;
        mili += date.getMinutes() * 60 * 1000;
        mili += date.getHours() * 60 * 60 * 1000;
        return Math.floor(mili / 500);
    }

    render() {
        if (this.state.open === false) return null;

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

        return <Wrapper className='app app--active'
                        tabIndex="0"
                        onMouseDown={this.onChromeMouseDown}
                        style={{ transform: `translate(${this._x}px, ${this._y}px)` }}>
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
    history: PropTypes.object.isRequired,
    headless: PropTypes.bool,
    primaryColor: PropTypes.string,
    borderless: PropTypes.bool,
    formAction: PropTypes.string,
    formMethod: PropTypes.oneOf(['GET', 'POST']),
    pathname: PropTypes.string.isRequired,
}

export default App;