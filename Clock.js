import React, { Component } from 'react';
import TimeDisplay from './TimeDisplay';

class Clock extends Component {
    state = {
        showClock: false,
    }
    toggleClock = () => {
        this.setState((prevState) => {
            // console.log(prevState);
            // console.log(typeof prevState);
            // console.log(prevState.showClock);
            const { showClock } = prevState;
            return {
                showClock: !showClock,
            }
        })
    }
    render() {
        const { showClock } = this.state;
        return (
            <>
                <button onClick={this.toggleClock} type='button'> {showClock ? "Hide The Clock " : "Show The Clock "} </button>
                {showClock && <TimeDisplay date="02-04-1996" />}
            </>
        )
    }
}

export default Clock;

