import React from 'react';
import ReactDOM from 'react-dom';
import {OrderState} from '../constants/models/Order';

class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        //const {handleSubmit, pristine, reset, submitting} = props;

        this.initialState = OrderState.toJS().order;
        this.state = OrderState.toJS().order;
        this.handleChange = this.handleChange.bind(this);
        this.reset = this.reset.bind(this);
    };
    handleChange(event) {

        var stateObj = this.state;
        stateObj[event.target.name] = event.target.value;

        this.setState(stateObj)
    };

    reset(event) {
        this.setState(this.initialState);
    };

    render() { //storeId, promoterId
        return (
            <form className="orderForm" onSubmit={this.props.handleFormSubmit.bind(this)}>
                <div>
                    <label>Due Time</label>
                    <div>
                        <input name="dueTime" type="text" placeholder="Due Time" onChange={this.handleChange} value={this.state.dueTime}/>
                    </div>
                </div>
                <div>
                    <label>Comment</label>
                    <div>
                        <textarea name="comment" onChange={this.handleChange} value={this.state.comment}/>
                    </div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={this.reset}>Clear Values</button>
                    <a href="#/table"><button type="button">Cancel</button></a>
                </div>

            </form>
        )
    }
}

export default OrderForm;
