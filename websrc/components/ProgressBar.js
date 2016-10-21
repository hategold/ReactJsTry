import React from 'react';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class ProgressBar extends React.Component {
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }
    constructor(props) {
        super(props);
    }
    render() {
        this.getChildContext();
        const {stepIndex} = this.props;
        return (
            <div style={{
                width: '100%',
                maxWidth: 700,
                margin: 'auto'
            }}>
                <Stepper activeStep={stepIndex} >
                    <Step>
                        <StepLabel disabled={stepIndex<1}>Select Store</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel disabled={stepIndex<2}>Complete OrderForm</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel disabled={stepIndex<3}>Ordering</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel disabled={stepIndex<4}>Close Order</StepLabel>
                    </Step>
                </Stepper>
            </div>
        )
    }
}

export default ProgressBar;

ProgressBar.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};
