import React, { Component } from 'react';
import AppIcon from '../appicon/appicon';
import ICON from '../../icons';
import './dock.css';

class Dock extends Component {
    render() {
        return <nav className="dock" aria-label="Dock">
            <ul className="dock__list">
                <li className="dock__list-item">
                    <AppIcon to="/email"
                        label="E-mail"
                        icon={ICON.MAIL}
                        backgroundColor="#1e61ee"
                        backgroundColorTo="#1cd3ff" />
                </li>
                <li className="dock__list-item">
                    <AppIcon to="/phone"
                        label="Phone"
                        icon={ICON.PHONE}
                        backgroundColor="#66ff80"
                        backgroundColorTo="#02b21f" />
                </li>
                <li className="dock__list-item">
                    <AppIcon to="/projects"
                        label="Projects"
                        icon={ICON.APPSTORE}
                        backgroundColor="#1cd3ff"
                        backgroundColorTo="#1e61ee" />
                </li>
                <li className="dock__list-item">
                    <AppIcon to="/about-me"
                        label="About Me"
                        icon={ICON.ABOUT_ME}
                        backgroundColor="#fea700"
                        backgroundColorTo="#fa661e" />
                </li>
            </ul>
        </nav>
    }
}

export default Dock;