import { connect } from 'react-redux';
import ActionButtons from "../components/ActionButtons";
import {configTimer, extendTimer, resetTimer, startTimer} from '../actions/actions';

const mapStateToProps = state => {
    return {
        timerValue: state.talkerTimerApp.timer.value,
        extendValue: state.talkerTimerApp.timer.extendValue,
        isConfigOpen: state.talkerTimerApp.isConfigOpen
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onResetTimerClick: () => {
            dispatch(resetTimer());
        },
        onStartTimerClick: ()=> {
            dispatch(startTimer());
        },
        onExtendTimerClick: () => {
            dispatch(extendTimer())
        },
        onConfigClick: () => {
            dispatch(resetTimer());
            dispatch(configTimer(true))
        }
    }
};

const ActionButtonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionButtons);

export default ActionButtonsContainer;