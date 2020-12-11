import React, { Component } from 'react';
import ActionButtonsContainer from '../containers/ActionButtonsContainer';
import '../styles/css/App.css';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import TimerContainer from "../containers/TimerContainer";
import ConfigTimerContainer from "../containers/ConfigTimerContainer";

const styles = theme => ({});

class App extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className="AppContainer" style={{}}>
                <Grid container>
                    <Grid item xs={12}>
                        <ConfigTimerContainer classes={ classes }/>
                    </Grid>
                    <Grid item xs={12}>
                        <TimerContainer classes={ classes } value={ this.props.timer}/>
                    </Grid>
                    <Grid item xs={12}>
                        <ActionButtonsContainer classes={ classes }/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(App);
