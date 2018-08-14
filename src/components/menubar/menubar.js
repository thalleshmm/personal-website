import React, { Component } from 'react';
import Clock from '../clock/clock';
import ICON from '../../icons';
import './menubar.css';

const MENUBAR_THEME = {
    LIGHT: 'LIGHT',
    DARK: 'DARK'
}

class Menubar extends Component {
    constructor(props) {
        super(props);

        this.changeTheme = this.changeTheme.bind(this);
    }

    get THEMES() {
        return MENUBAR_THEME;
    }
    
    state = {
        theme: MENUBAR_THEME.LIGHT
    }

    componentDidMount() {
        window.addEventListener('menubar-change-theme', this.changeTheme);
    }

    componentWillUnmount() {
        window.removeEventListener('menubar-change-theme', this.changeTheme);
    }

    changeTheme(evt) {
        const { detail } = evt;
        
        const themes = Object.keys(MENUBAR_THEME)
        .map(key => MENUBAR_THEME[key]);

        if (themes.indexOf(detail) === -1) {
            throw new Error(`Unknown theme in details. Expects: ${themes.join(', ')}`);
        }

        this.setState({ theme: detail });
    }

    render() {
        return <div className={`menubar ${this.state.theme === MENUBAR_THEME.DARK ? 'menubar--dark' : ''}`}>
            <div className="menubar__ios">
                <div className="menubar__ios__icon-holder">
                    {ICON.SIGNAL_BAR}
                    {ICON.WIFI}
                </div>
                <div />
                <Clock />
                <div />
                <div className="menubar__ios__icon-holder">
                    {ICON.BLUETOOTH}
                    100% {ICON.BATTERY}
                </div>
            </div>
            <div className="menubar__macos">

            </div>
        </div>
    }
}

export default Menubar;