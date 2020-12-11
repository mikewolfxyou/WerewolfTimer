import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
    DEFAULT_TIMER_VALUE,
    DEFAULT_EXTEND_VALUE,
} from "../reducers/reducers";

class ConfigTimer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            direction: 'row',
            justify: 'center',
            alignItems: 'center',
            talkingTime: DEFAULT_TIMER_VALUE,
            extendTime: DEFAULT_EXTEND_VALUE
        };
    }

    handleChange = name => event => {

        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = () => {
        this.props.onConfigDoneClick(
            this.state.talkingTime > 0 ? parseInt(this.state.talkingTime, 10) : DEFAULT_TIMER_VALUE,
            this.state.extendTime > 0 ? parseInt(this.state.extendTime, 10) : DEFAULT_EXTEND_VALUE
        );
    };

    render() {
        const { alignItems, direction, justify } = this.state;
        if (this.props.isConfigOpen) {
            return (
                <form onSubmit={ e => {
                    e.preventDefault();
                    this.handleSubmit();
                }}>
                    <Grid container
                          alignItems={ alignItems }
                          direction={ direction }
                          justify={ justify }
                    >
                        <Grid item xs={6}>
                            <TextField
                                id="talkingTime"
                                label="Talking Time (Sec.)"
                                value={ this.state.talkingTime }
                                onChange={this.handleChange('talkingTime')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="extendTime"
                                label="Extend Time (Sec.)"
                                value={ this.state.extendTime }
                                onChange={this.handleChange('extendTime')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Button type="submit" variant="raised" size="large" color="primary"
                                    className={this.props.classes.button}
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            )
        } else {
            return (<div/>)
        }
    }
}

ConfigTimer = connect()(ConfigTimer);

export default ConfigTimer;