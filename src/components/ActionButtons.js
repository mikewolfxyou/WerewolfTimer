import React, { Component } from 'react';
import "../styles/css/ActionButtons.css";
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Hotkeys from 'react-hot-keys';

class ActionButtons extends Component {

    renderHelper = () => {
        return (
            <div>
                <Paper className="HelpText">
                    <Typography variant="caption" gutterBottom align="center">
                        v.0.8 Copyright©2018 Mike Zhiguo Zhang
                    </Typography>
                </Paper>
            </div>
        )
    };

    onKeyDown(keyName) {

        if (keyName === 'alt+s') {
            this.props.onStartTimerClick();
        }

        if (keyName === 'alt+c') {
            this.props.onResetTimerClick();
        }

        if (keyName === 'alt+e') {
            this.props.onExtendTimerClick()
        }
    }

    render() {

        const { classes } = this.props;
        if(!this.props.isConfigOpen) {
            return (
                <div>
                    <Grid container
                          spacing={24}
                          alignItems='center'
                          direction='row'
                          justify='center'
                    >
                        <Grid item xs={6} className="ActionButtons">
                            <Hotkeys
                                keyName="alt+s"
                                onKeyDown={this.onKeyDown.bind(this)}
                            >
                                <Button variant="raised" size="large" color="primary"
                                        className={classes.button}
                                        onClick={() => this.props.onStartTimerClick()}
                                >
                                    Start
                                </Button>
                            </Hotkeys>
                        </Grid>
                        <Grid item xs={6} className="ActionButtons">
                            <Hotkeys
                                keyName="alt+c"
                                onKeyDown={this.onKeyDown.bind(this)}
                            >
                                <Button variant="raised" size="large" color="secondary"
                                        className={classes.button}
                                        onClick={() => this.props.onResetTimerClick()}
                                >
                                    Cancel
                                </Button>
                            </Hotkeys>
                        </Grid>
                    </Grid>
                    <Grid container
                          spacing={24}
                          alignItems='center'
                          direction='row'
                          justify='center'
                    >
                        <Grid item xs={6} className="ActionButtons">
                            <Hotkeys
                                keyName="alt+e"
                                onKeyDown={this.onKeyDown.bind(this)}
                            >
                                <Button variant="raised" size="large" color="primary"
                                        className={classes.button}
                                        onClick={() => this.props.onExtendTimerClick()}
                                >
                                    Extend - { this.props.extendValue }
                                </Button>
                            </Hotkeys>
                        </Grid>
                        <Grid item xs={6} className="ActionButtons">
                            <Button variant="raised" size="large" color="default"
                                    className={classes.button}
                                    onClick={() => this.props.onConfigClick()}
                            >
                                Setup
                            </Button>
                        </Grid>
                    </Grid>
                    { this.renderHelper() }
                </div>
            );
        } else {
            return(
                <div>
                    { this.renderHelper() }
                </div>
            );
        }

    }
}

export default ActionButtons;