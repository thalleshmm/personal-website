import React, { Component } from 'react';
import Clock from '../clock/clock';
import './menubar.css';

const ICON_SIGNAL_BAR = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 448h48c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v368c0 4.4 3.6 8 8 8zM88 448h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zM280.1 448h47.8c4.5 0 8.1-3.6 8.1-8.1V232.1c0-4.5-3.6-8.1-8.1-8.1h-47.8c-4.5 0-8.1 3.6-8.1 8.1v207.8c0 4.5 3.6 8.1 8.1 8.1zM368 136.1v303.8c0 4.5 3.6 8.1 8.1 8.1h47.8c4.5 0 8.1-3.6 8.1-8.1V136.1c0-4.5-3.6-8.1-8.1-8.1h-47.8c-4.5 0-8.1 3.6-8.1 8.1z"/></svg>;

const ICON_WIFI = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 96c-81.5 0-163 33.6-221.5 88.3-3.3 3-3.4 8.1-.3 11.4l26.7 27.9c3.1 3.3 8.3 3.4 11.6.3 23.3-21.6 49.9-38.8 79.3-51 33-13.8 68.1-20.7 104.3-20.7s71.3 7 104.3 20.7c29.4 12.3 56 29.4 79.3 51 3.3 3.1 8.5 3 11.6-.3l26.7-27.9c3.1-3.2 3-8.3-.3-11.4C419 129.6 337.5 96 256 96z"/><path d="M113.2 277.5l28.6 28.3c3.1 3 8 3.2 11.2.3 28.3-25.1 64.6-38.9 102.9-38.9s74.6 13.7 102.9 38.9c3.2 2.9 8.1 2.7 11.2-.3l28.6-28.3c3.3-3.3 3.2-8.6-.3-11.7-37.5-33.9-87.6-54.6-142.5-54.6s-105 20.7-142.5 54.6c-3.3 3.1-3.4 8.4-.1 11.7zM256 324.2c-23.4 0-44.6 9.8-59.4 25.5-3 3.2-2.9 8.1.2 11.2l53.4 52.7c3.2 3.2 8.4 3.2 11.6 0l53.4-52.7c3.1-3.1 3.2-8 .2-11.2-14.8-15.6-36-25.5-59.4-25.5z"/></svg>;

const ICON_BLUETOOTH = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M378.5 333l-88.3-77 88.2-76.1c6.9-6 7.4-16.3 1.1-22.9L262.7 35.6c-2.2-2.3-5.4-3.6-8.6-3.6-6.1 0-11.1 4.9-11.1 10.8V212l-86.3-73.3c-7.1-6-17.8-5.3-24.1 1.5-6.5 7-5.8 17.9 1.6 24.1L243 256l-108.1 90.9c-7.3 6.1-8.1 16.8-1.7 23.9l.3.3c6.3 7 17.3 7.7 24.5 1.5l85-73.6v169.8c0 6.2 5.1 11.2 11.5 11.2 3.2 0 6.2-1.3 8.4-3.5L379.6 356c6.3-6.6 5.8-16.9-1.1-23zm-99.1-232.1l62.7 65.9c.8.8.7 2.1-.2 2.9l-62.7 53c-1.3 1.1-3.4.2-3.4-1.5V102.3c.1-1.9 2.4-2.7 3.6-1.4zm-3.5 309V291.6c0-1.7 2.1-2.6 3.4-1.5l62.7 53c.9.7.9 2 .2 2.9l-62.7 65.3c-1.3 1.3-3.6.4-3.6-1.4z"/></svg>;

const ICON_BATTERY = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M396 144H64c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h332c26.4 0 48-21.6 48-48V192c0-26.4-21.6-48-48-48zm20 176c0 11-9 20-20 20H64c-11 0-20-9-20-20V192c0-11 9-20 20-20h332c11 0 20 9 20 20v128zM464 204.6v102.8c16 0 32-27.7 32-51.4s-16-51.4-32-51.4z"/><path d="M384 192H76c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h308c6.6 0 12-5.4 12-12V204c0-6.6-5.4-12-12-12z"/></svg>;

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
                    {ICON_SIGNAL_BAR}
                    {ICON_WIFI}
                </div>
                <div />
                <Clock />
                <div />
                <div className="menubar__ios__icon-holder">
                    {ICON_BLUETOOTH}
                    100% {ICON_BATTERY}
                </div>
            </div>
            <div className="menubar__macos">

            </div>
        </div>
    }
}

export default Menubar;