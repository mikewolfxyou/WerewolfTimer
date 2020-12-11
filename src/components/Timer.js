import React, { Component } from 'react';
import '../styles/css/Timer.css';

class Timer extends Component {
    render() {
        if (!this.props.isConfigOpen) {
            if (this.props.timeColorClass === 'TimerColorHidden') {
                return (
                    <div className={`TimerContainer TimerColorNormal`}>
                        Talk
                        <div className={`TimerContainer DebugFont`}>
                            { this.props.timeValueInMin}:{this.props.timeValueInSec}
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className={`TimerContainer ${this.props.timeColorClass}`}>
                        { this.props.timeValueInMin}:{this.props.timeValueInSec}
                    </div>
                );
            }
        } else {
            return (<div/>);
        }
    }
}

export default Timer;