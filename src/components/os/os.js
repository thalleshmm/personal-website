import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Menubar from '../menubar/menubar';
import Dock from '../dock/dock';
import Desktop from '../desktop/desktop';
import AppMail from '../app-mail/app-mail';
import './os.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
    }

    state = {
        keyboardGuided: false
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('touchstart', this.onTouchStart);
    }

    componentWillMount() {
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('touchstart', this.onTouchStart);
    }

    onKeyDown(evt) {
        if (evt.key !== "Tab" || this.state.keyboardGuided === true)
            return;

        this.setState({ keyboardGuided: true });
    }

    onMouseMove() {
        if ( ! this.state.keyboardGuided) return;
        this.setState({ keyboardGuided: false });
    }

    onTouchStart() {
        if ( ! this.state.keyboardGuided) return;
        this.setState({ keyboardGuided: false });
    }

    render() {
        return <BrowserRouter>
            <div className={`os ${this.state.keyboardGuided ? 'os--keyboard-guided' : ''}`}>
                <Menubar />
                <div className="os__desktop">
                    <Desktop />
                </div>
                <div className="os__dock">
                    <Dock />
                </div>
                <Route path="/email"
                       component={AppMail} />
            </div>
        </BrowserRouter>
    }
}

export default App;