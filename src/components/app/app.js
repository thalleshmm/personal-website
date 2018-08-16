import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.close = this.close.bind(this);
    }

    componentDidMount() {
        // We have to run it asyncly
        // otherwise the css animation won't run
        setTimeout(() => {
            this.$wrapper.classList.add('app--active');
        }, 32);
    }

    componentWillUnmount() {
        this.$wrapper.classList.remove('app--active');
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

        return <Wrapper className='app'>
            <header className="app__header">
                <div className="app__header__actions">
                    <button type="button"
                            onClick={this.close}
                            className="app__header__actions__action">
                        &lt; Return
                    </button>
                    {this.props.action ?
                    <button onClick={this.props.action.onClick}
                            disabled={this.props.action.disabled ? true : false}
                            className="app__header__actions__action"
                            type="submit">
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
    history: PropTypes.object
}

export default App;