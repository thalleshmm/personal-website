import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Menubar from '../menubar/menubar';
import Dock from '../dock/dock';
import Desktop from '../desktop/desktop';
import AppMail from '../app-mail/app-mail';
import AppPhone from '../app-phone/app-phone';
import Dialog from '../dialog/dialog';
import './os.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
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
        if (evt.key !== "Tab")
            return;

        this.$os.classList.add('os--keyboard-guided');
    }

    onMouseMove() {
        this.$os.classList.remove('os--keyboard-guided');
    }

    onTouchStart() {
        this.$os.classList.remove('os--keyboard-guided');
    }

    render() {
        return <BrowserRouter>
            <div className='os'
                 ref={$el => this.$os = $el}>
                <Menubar />
                <div className="os__desktop">
                    <Desktop />
                </div>
                <div className="os__dock">
                    <Dock />
                </div>
                <Route path="/email"
                       component={AppMail} />
                <Route path="/phone"
                       component={AppPhone} />
                <Dialog />
            </div>
        </BrowserRouter>
    }
}

export default App;