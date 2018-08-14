import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './appicon.css';

const Wrapper = props => {
    if (/^http/.test(props.to)) {
        return <a href={props.to}
                  target="_blank"
                  rel="noreferrer noopener"
                  {...props} />
    } else {
        return <Link {...props} />
    }
}

class AppIcon extends Component {
    state = {
        backgroundColor: '#FFFfFF',
        backgroundColorTo: null,
        visibleLabel: false
    }

    componentDidMount() {
        const backgroundColor = this.props.backgroundColor || '#FFFFFF',
              backgroundColorTo = this.props.backgroundColorTo || null;

        const visibleLabel = this.props.visibleLabel || false;

        this.setState({ backgroundColor, backgroundColorTo, visibleLabel });
    }

    render() {
        return <Wrapper to={this.props.to}
                     className="appicon"
                     aria-label={this.props.label}>
            <div className="appicon__icon"
                 aria-hidden="true"
                 style={{
                     background: this.state.backgroundColorTo ?
                        `linear-gradient(${this.state.backgroundColor}, ${this.state.backgroundColorTo})` :
                        this.state.backgroundColor
                    }}>
                {this.props.icon}
            </div>
            {this.state.visibleLabel ?
                <div class="appicon__label">
                    {this.props.label}
                </div> : false}
        </Wrapper>
    }
}

AppIcon.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    visibleLabel: PropTypes.bool,
    backgroundColor: PropTypes.string,
    backgroundColorTo: PropTypes.string
}

export default AppIcon;