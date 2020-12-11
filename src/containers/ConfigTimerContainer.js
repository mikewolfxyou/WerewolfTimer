import { connect } from 'react-redux';
import ConfigTimer from "../components/ConfigTimer";
import {configTimer, setTimer} from "../actions/actions";

const mapStateToProps = state => {
    return {
        isConfigOpen: state.talkerTimerApp.isConfigOpen,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onConfigDoneClick: (talkingTime, extendTime) => {
            dispatch(configTimer(false));
            dispatch(setTimer(talkingTime, extendTime));
        }
    }
};

const ConfigTimerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfigTimer);

export default ConfigTimerContainer;