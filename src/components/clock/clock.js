import React, { Component } from 'react';
import './clock.css';

class Clock extends Component {
    state = {
        date: new Date()
    }
    
    componentDidMount() {
        this.interval = setInterval(this.updateClock.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateClock() {
        const date = new Date();
        this.setState({ date });
    }

    render() {
        let amPm = 'AM';
        let hours = this.state.date.getHours();

        if (hours >= 12) {
            amPm = 'PM';
            hours -= 12;
        }

        const minutes = ("0" + this.state.date.getMinutes()).substr(-2);

        return <div className="clock">
            {`${hours}:${minutes} ${amPm}`}
        </div>
    }
}

export default Clock;