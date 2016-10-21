import React from 'react';
import OrderRow from './OrderRow';

class OrderList extends React.Component {
    render() {
        const {activeOrders, selectOrder} = this.props;
        var rows = [];
        this.props.activeOrders.forEach(function(order) {
            rows.push(<OrderRow order={order} selectOrder={selectOrder} key={order.orderId}/>);
        });
        return (
            <div>
                {rows}
            </div>
        )
    }
}

export default OrderList;
