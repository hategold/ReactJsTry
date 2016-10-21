import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import HeaderBar from '../components/HeaderBar'
import ToolBar from '../components/ToolBar'
import ProgressBar from '../components/ProgressBar'
import OrderList from '../components/OrderList';
import {selectOrder} from '../actions/OrderAction';

const mapStateToProps = (state) => {

    var activeOrders = [],
        closedOrders = [];
    let oriList = state.getIn(['OrderListReducer','orderList']).toJS()
    oriList.map((obj) => {
        if (obj.status) {
            activeOrders.push(obj)
        } else {
            closedOrders.push(obj)
        }
    })
    return {
        activeOrders: activeOrders,
        closedOrders: closedOrders,
        order: state.getIn(['OrderListReducer','order']).toJS()
    }
}; //state

const mapDispatchToProps = (dispatch) => ({
    selectOrder: (order) => (dispatch(selectOrder({order: order})))
});

class ActiveOrders extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div>
                <HeaderBar/>
                <ToolBar/>
                <OrderList {...this.props} />
            </div>
        )//<ProgressBar/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveOrders);
