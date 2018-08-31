import React, { Component } from 'react';
import App from '../app/app';
import ICON from '../../icons';
import './app-phone.css';

class AppPhone extends Component {
    render() {
        return <App title="Phone"
                    history={this.props.history}
                    headless>
            <div className="app-phone">
                <a href="tel:+5537999470847"
                   className="app-phone__number">
                    +55 (37) 9 9947-0847
                </a>
                <div className="app-phone__numpad">
                    <div className="app-phone__numpad__placeholder">
                        <button className="app-phone-key"
                                tabIndex="-1"
                                aria-hidden="true">
                            <div className="app-phone-key__number">
                                1
                            </div>
                            <div className="app-phone-key__letters" />
                        </button>
                    </div>
                    <div className="app-phone__numpad__placeholder">
                        <button className="app-phone-key"
                                tabIndex="-1"
                                aria-hidden="true">
                            <div className="app-phone-key__number">
                                2
                            </div>
                            <div className="app-phone-key__letters">
                                A B C
                            </div>
                        </button>
                    </div>
                    <div className="app-phone__numpad__placeholder">
                        <button className="app-phone-key"
                                tabIndex="-1"
                                aria-hidden="true">
                            <div className="app-phone-key__number">
                                3
                            </div>
                            <div className="app-phone-key__letters">
                                C D E
                            </div>
                        </button>
                    </div>
                    <div className="app-phone__numpad__placeholder">
                        <button className="app-phone-key"
                                tabIndex="-1"
                                aria-hidden="true">
                            <div className="app-phone-key__number">
                                4
                            </div>
                            <div className="app-phone-key__letters">
                                G H I
                            </div>
                        </button>
                    </div>
                    <div className="app-phone__numpad__placeholder">
                        <button className="app-phone-key"
                                tabIndex="-1"
                                aria-hidden="true">
                            <div className="app-phone-key__number">
                                5
                            </div>
                            <div className="app-phone-key__letters">
                                J K L
                            </div>
                        </button>
                    </div>
                    <div className="app-phone__numpad__placeholder">
                        <button className="app-phone-key"
                                tabIndex="-1"
                                aria-hidden="true">
                            <div className="app-phone-key__number">
                                6
                            </div>
                            <div className="app-phone-key__letters">
                                M N O
                            </div>
                        </button>
                    </div>
                    <div className="app-phone__numpad__placeholder">
                        <button className="app-phone-key"
                                tabIndex="-1"
                                aria-hidden="true">
                            <div className="app-phone-key__number">
                                7
                            </div>
                            <div className="app-phone-key__letters">
                                P Q R S
                            </div>
                        </button>
                    </div>
                    <div className="app-phone__numpad__placeholder">
                        <button className="app-phone-key"
                                tabIndex="-1"
                                aria-hidden="true">
                            <div className="app-phone-key__number">
                                8
                            </div>
                            <div className="app-phone-key__letters">
                                T U V
                            </div>
                        </button>
                    </div>
                    <div className="app-phone__numpad__placeholder">
                        <button className="app-phone-key"
                                tabIndex="-1"
                                aria-hidden="true">
                            <div className="app-phone-key__number">
                                9
                            </div>
                            <div className="app-phone-key__letters">
                                W X Y Z
                            </div>
                        </button>
                    </div>
                    <div className="app-phone__numpad__placeholder">
                        <button className="app-phone-key"
                                tabIndex="-1"
                                aria-hidden="true">
                            <div className="app-phone-key__number">
                                *
                            </div>
                            <div className="app-phone-key__letters" />
                        </button>
                    </div>
                    <div className="app-phone__numpad__placeholder">
                        <button className="app-phone-key"
                                tabIndex="-1"
                                aria-hidden="true">
                            <div className="app-phone-key__number">
                                0
                            </div>
                            <div className="app-phone-key__letters">
                                +
                            </div>
                        </button>
                    </div>
                    <div className="app-phone__numpad__placeholder">
                        <button className="app-phone-key"
                                tabIndex="-1"
                                aria-hidden="true">
                            <div className="app-phone-key__number">
                                #
                            </div>
                            <div className="app-phone-key__letters" />
                        </button>
                    </div>
                    <div className="app-phone__numpad__placeholder" />
                    <div className="app-phone__numpad__placeholder">
                        <a href="tel:+5537999470847"
                                className="app-phone-key app-phone-key--cta"
                                aria-label="Call Me">
                            {ICON.PHONE}
                        </a>
                    </div>
                    <div className="app-phone__numpad__placeholder" />
                </div>
            </div>
        </App>
    }
}

export default AppPhone;