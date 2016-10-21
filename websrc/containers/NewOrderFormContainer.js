import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import HeaderBar from '../components/HeaderBar'
import ToolBar from '../components/ToolBar'
import ProgressBar from '../components/ProgressBar'
import OrderForm from '../components/OrderForm';

const mapStateToProps = (state) => ({initialValues: state.orderForm, foodStore: state.foodStore, promoter: state.user});

const mapDispatchToProps = (dispatch) => ({
    //handldeSubmit: (event, {data}) => {console.log(data);  window.alert('Data submitted! ' + JSON.stringify(data));}
    // 當使用者在 input 輸入資料值即會觸發這個函數，發出 changeText action 並附上使用者輸入內容 event.target.value
    //onFocusStore: (event) => (dispatch(focusStore({value: event})))

});

class NewOrderForm extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props)//handldeSubmit
    }

    handleFormSubmit(e) {
        e.preventDefault();
        console.log(this)
        window.alert('Data submitted! ' + JSON.stringify(this.state));
    }

    render() {
        return (
            <div>
                <HeaderBar/>
                <ToolBar/>
                <ProgressBar stepIndex={2}/>
                <OrderForm initialValues={this.props.initialValues
                    ? this.props.initialValues.data
                    : {}} handleFormSubmit={this.handleFormSubmit}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderForm);
