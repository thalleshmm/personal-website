import React, { Component } from 'react';
import App from '../app/app';
import ICON from '../../icons';
import './app-about-me.css';
import PROFILE_PIC from './images/thalles-maia.png';

class AppAboutMe extends Component {
    render() {
        return <App title="About Me"
                    history={this.props.history}
                    primaryColor="#fea700"
                    borderless
                    pathname="/about-me">
            <div className="app-about-me">
                <div>
                    <img src={PROFILE_PIC}
                         className="app-about-me__profile-pic"
                         alt="Thalles Maia handsome face =P" />
                    <h2 className="app-about-me__full-name">
                        Thalles Maia
                    </h2>
                    <div className="app-about-me__job">
                        Full Stack Developer
                    </div>
                    <div className="app-about-me__links">
                        <a href="mailto:tmaiadev@gmail.com"
                           className="app-about-me__link"
                           aria-label="E-mail">
                            {ICON.MAIL}
                        </a>
                        <a href="tel:+5537999470847"
                           className="app-about-me__link"
                           aria-label="Phone">
                            {ICON.PHONE}
                        </a>
                    </div>
                    <div className="app-about-me__spacer" />
                    <div className="app-about-me__container">
                        <label className="app-about-me__label">Bio</label>
                    </div>
                    <div className="app-about-me__1-col-row">
                        <p className="app-about-me__card">
                            I have been working with web development for the past 12 years,
                            and I became really good at it. Today I work mostly with Vanilla
                            and ReactJS on the front-end, and Express.js on the back-end,
                            though I am also experienced with PHP and CodeIgniter. As for
                            mobile, I developed a great number of apps with Cordova and I
                            learned very well the quirks each platform requires, resulting
                            in very lightweight native-like applications. I am convinced
                            though that the future of mobile applications relies on Progressive
                            Web Apps, and PWAs is where my focus is at.
                        </p>
                    </div>
                    <div className="app-about-me__spacer" />
                    <div className="app-about-me__container">
                        <label className="app-about-me__label">Experiences</label>
                    </div>
                    <div className="app-about-me__2-col-row">
                        <div className="app-about-me__card">
                            <b>Web Developer</b><br />
                            Mega Byte Informática<br />
                            <small>Jul 2008 - Nov 2012</small>
                        </div>
                        <div className="app-about-me__card">
                            <b>Full-Stack Web Developer</b><br />
                            JMV Technology
                            <a href="https://jmvtechnology.com/"
                               rel="noopener noreferrer"
                               target="_blank"
                               className="app-about-me__link-icon"
                               aria-label="JMV Technology">
                               {ICON.LINK}
                            </a><br />
                            <small>Nov 2012 - Present</small>
                        </div>
                    </div>
                    <div className="app-about-me__2-col-row">
                        <div className="app-about-me__card">
                            <b>Front-End Web Developer</b><br />
                            Minutrade
                            <a href="http://recompensas.minutrade.com/en/"
                               rel="noopener noreferrer"
                               target="_blank"
                               className="app-about-me__link-icon"
                               aria-label="JMV Technology">
                               {ICON.LINK}
                            </a><br />
                            <br />
                            <small>Nov 2018 - May 2019</small>
                        </div>
                        <div />
                    </div>
                    <div className="app-about-me__spacer" />
                    <div className="app-about-me__container">
                        <label className="app-about-me__label">Talks</label>
                    </div>
                    <div className="app-about-me__2-col-row">
                        <p className="app-about-me__card">
                            <b>PWA</b>
                            <a href="https://www.meetup.com/pt-BR/GDG-Divinopolis/events/246607264/"
                               rel="noopener noreferrer"
                               target="_blank"
                               className="app-about-me__link-icon"
                               aria-label="PWA with Thalles Maia">{ICON.LINK}</a><br />
                            Google Developer Group Divinópolis<br />
                            16/01/2018
                        </p>
                        <p className="app-about-me__card">
                            <b>Javascript Frameworks</b>
                            <a href="http://www.uemg.br/"
                               rel="noopener noreferrer"
                               target="_blank"
                               className="app-about-me__link-icon"
                               aria-label="Javascript Frameworks">{ICON.LINK}</a><br />
                            UEMG, Divinópolis<br />
                            19/09/2018
                        </p>
                    </div>
                    <div className="app-about-me__spacer" />
                    <div className="app-about-me__container">
                        <label className="app-about-me__label">Skillset</label>
                    </div>
                    <div className="app-about-me__2-col-row app-about-me__2-col-row--margin-bottom">
                        <div className="app-about-me__card">
                            <b>Technologies</b>
                            <div className="app-about-me__3-col-row-inner">
                                <div>
                                    HTML<br />
                                    CSS<br />
                                    JavaScript&nbsp;(ES6)
                                </div>
                                <div>
                                    Node.js<br />
                                    PHP<br />
                                    MySQL
                                </div>
                                <div>
                                    MariaDB<br />
                                    MongoDB<br />
                                    Firebase
                                </div>
                            </div>
                        </div>
                        <div className="app-about-me__card">
                            <b>Frameworks</b>
                            <div className="app-about-me__3-col-row-inner">
                                <div>
                                    React.js<br />
                                    Express.js<br />
                                    Cordova
                                </div>
                                <div>
                                    CodeIgniter
                                </div>
                                <div>
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="app-about-me__1-col-row">
                        <div className="app-about-me__card">
                            <b>Libraries & Tools</b>
                            <div className="app-about-me__6-col-row-inner">
                                <span>Gulp</span>
                                <span>Webpack</span>
                                <span>mocha</span>
                                <span>SASS</span>
                                <span>Redux</span>
                                <span>SSR</span>
                                <span>JQuery</span>
                                <span>PWA</span>
                                <span>ServiceWorker</span>
                                <span>RestfulAPI</span>
                                <span>BEM&nbsp;Pattern</span>
                                <span>Hooks</span>
                                <span>Jest</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-about-me__spacer" />
            </div>
        </App>
    }
}

export default AppAboutMe;