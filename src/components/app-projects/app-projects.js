import React, { Component } from 'react';
import App from '../app/app';
import './app-projects.css';
import IMAGE_PWASHOP from './images/app-pwashop.png';
import IMAGE_NOTES from './images/app-notes.png';
import IMAGE_VINI from './images/app-vini.png';

class AppProjects extends Component {
    state = {
        projects: [
            {
                title: 'PWA Shop',
                description: 'Open source e-commerce created with react and firebase',
                image: IMAGE_PWASHOP,
                link: 'http://pwa-shop-7c365.firebaseapp.com'
            },
            {
                title: 'Notes',
                description: 'Notes is a simple and easy way to take notes and make lists',
                link: 'https://notes-4e0e9.firebaseapp.com/',
                image: IMAGE_NOTES
            },
            {
                title: 'Vini Maia - Poeira Estelar',
                description: 'Listen to the latest album of Vini Maia',
                link: 'https://vinimaia.com.br/',
                image: IMAGE_VINI
            }
        ]
    }

    render() {
        return <App title="Projects"
                    history={this.props.history}>
            <div className="app-projects">
                <div className="app-projects__content">
                    <ul className="app-projects-list">
                        {this.state.projects.map((p, i) => {
                            return <li key={i}
                                       className="app-projects-list__item">
                                <div className="app-projects-list__item__icon"
                                     style={{ backgroundImage: `url(${p.image})` }} />
                                <div className="app-projects-list__item__title">
                                    <div>{p.title}</div>
                                    <div className="app-projects-list__item__title__description">
                                        {p.description}
                                    </div>
                                </div>
                                <div className="app-projects-list__item__cta">
                                    <a href={p.link}
                                    className="app-projects-list__item__cta__btn"
                                    target="_blank">
                                        GET
                                    </a>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </App>
    }
}

export default AppProjects;