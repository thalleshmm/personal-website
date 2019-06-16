import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Menubar from '../menubar/menubar';
import Dock from '../dock/dock';
import Desktop from '../desktop/desktop';
import AppMail from '../app-mail/app-mail';
import AppPhone from '../app-phone/app-phone';
import AppProjects from '../app-projects/app-projects';
import AppAboutMe from '../app-about-me/app-about-me';
import Dialog from '../dialog/dialog';
import WALLPAPER from './images/wallpaper.jpg';
import './os.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.state = {
            activeApps: [],
        };
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

    openApp(app) {
        const activeApps = [...this.state.activeApps];
        console.log(app);
        if (!activeApps.find(activeApp => activeApp.key === app.key)) {
            activeApps.push(app);
            this.setState({ activeApps });
        }
    }

    render() {
        return <BrowserRouter>
            <div className={`os ${window.isMobile ? '' : 'macos'}`}
                 ref={$el => this.$os = $el}
                 style={{ backgroundImage: `url(${WALLPAPER})` }}>
                <Menubar />
                <div className="os__desktop">
                    <Desktop />
                </div>
                <div className="os__dock">
                    <Dock />
                </div>
                {(
                    <Route
                        path="/"
                        render={({history}) => (
                            <Fragment>
                                <AppMail history={history} />
                                <AppPhone history={history} />
                                <AppProjects history={history} />
                                <AppAboutMe history={history} />
                            </Fragment>
                        )} />
                )}
                <Dialog />
            </div>
        </BrowserRouter>
    }
}

export default App;