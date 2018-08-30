import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.close = this.close.bind(this);
    }

    componentDidMount() {
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

    render() {
        const Wrapper = props => {
            return this.props.type === 'form' ?
                <form {...props} ref={$el => this.$wrapper = $el}>{props.children}</form> :
                <div {...props} ref={$el => this.$wrapper = $el}>{props.children}</div>;
        }

        const defaultPrimaryColor = '#007aff';

        const headerClassList = ['app__header'];
        if (this.props.headless) headerClassList.push('app__header--headless');
        if (this.props.borderless) headerClassList.push('app__header--borderless');

        return <Wrapper className='app' tabIndex="0">
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
    borderless: PropTypes.bool
}

export default App;