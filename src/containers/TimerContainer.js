import { connect } from 'react-redux';
import Timer from "../components/Timer";

const mapStateToProps = state => {

    let timerValue = state.talkerTimerApp.timer.value;
    let timeValueInMin = Math.floor(timerValue / 60);
    let timeValueInSec = timerValue % 60;

    return {
        timeColorClass: getTimeColorClass(timerValue, state),
        timeValueInMin: timeValueInMin,
        timeValueInSec: timeValueInSec < 10 ? '0' + timeValueInSec : timeValueInSec,
        timerValue: timerValue,
        timerStatus: state.talkerTimerApp.timer.status,
        isConfigOpen: state.talkerTimerApp.isConfigOpen
    }
};

function getTimeColorClass(timerValue, state) {

    let timeColorClass = "TimerColorNormal";
    if (timerValue <= 30 && timerValue > 10) {
        timeColorClass = "TimerColorWarning";
    }

    if (timerValue <= 10) {
        timeColorClass = "TimerColorAlmostDone";
    }

    if (timerValue > 30 && timerValue < state.talkerTimerApp.timer.presetValue) {
        timeColorClass = "TimerColorHidden";
    }

    return timeColorClass;
}

const mapDispatchToProps = dispatch => {
    return {
    }
};

const TimerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer);

export default TimerContainer;