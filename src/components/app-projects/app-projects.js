import React, { Component } from 'react';
import App from '../app/app';
import './app-projects.css';

class AppProjects extends Component {
    state = {
        projects: [
            {
                title: 'Notes',
                description: 'Notes is a simple and easy way to take notes and make lists',
                link: 'https://notes-4e0e9.firebaseapp.com/',
                image: '/images/app-notes.png'
            },
            {
                title: 'Vini Maia - Poeira Estelar',
                description: 'Listen to the latest album of Vini Maia',
                link: 'https://vinimaia.com.br/',
                image: '/images/app-vini.png'
            }
        ]
    }

    render() {
        return <App title="Projects"
                    history={this.props.history}>
            <div className="app-projects">
                <div className="app-projects__content">
                    <ul class="app-projects-list">
                        {this.state.projects.map(p => {
                            return <li className="app-projects-list__item">
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