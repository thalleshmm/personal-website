import React, { Component } from 'react';
import AppIcon from '../appicon/appicon';
import ICON from '../../icons';
import './desktop.css';

class Desktop extends Component {
    render() {
        return <div className="desktop">
            <div className="desktop__icon-grid">
                <div className="desktop__icon-grid__item">
                    <AppIcon to="https://github.com/tmaiadev/"
                             label="Github"
                             visibleLabel
                             backgroundColor="#d56efd"
                             backgroundColorTo="#842abf"
                             icon={ICON.GITHUB} />
                </div>
                <div className="desktop__icon-grid__item">
                    <AppIcon to="https://linkedin.com/in/tmaiadev/"
                             label="LinkedIn"
                             visibleLabel
                             backgroundColor="#00d8eb"
                             backgroundColorTo="#008dcd"
                             icon={ICON.LINKEDIN} />
                </div>
                <div className="desktop__icon-grid__item">
                    <AppIcon to="https://twitter.com/tmaiadev/"
                             label="Twitter"
                             visibleLabel
                             backgroundColor="#19d7fb"
                             backgroundColorTo="#1e63ee"
                             icon={ICON.TWITTER} />
                </div>
                <div className="desktop__icon-grid__item">
                    <AppIcon to="https://instagram.com/tmaiadev/"
                             label="Instagram"
                             visibleLabel
                             backgroundColor="#ed4eb5"
                             backgroundColorTo="#c943fc"
                             icon={ICON.INSTAGRAM} />
                </div>
                <div className="desktop__icon-grid__item">
                    <AppIcon to="https://facebook.com/tmaiadev/"
                             label="Facebook"
                             visibleLabel
                             backgroundColor="#3A5CA9"
                             icon={ICON.FACEBOOK} />
                </div>
            </div>
        </div>
    }
}

export default Desktop;