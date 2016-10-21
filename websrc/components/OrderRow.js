import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Link} from 'react-router';

class OrderRow extends React.Component {
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }
    render() {
        const {order, selectOrder} = this.props;
        return (
            <Card>
                <CardHeader title={order.storeId} actAsExpander={true} showExpandableButton={true} subtitle={order.dueTime}/>
                <CardActions >
                    <Link to={'/selectOrder/' + order.orderId}><FlatButton label="Check" id={order.orderId} onClick={selectOrder.bind(null, order)}/></Link>
                </CardActions>
                <CardText expandable={true}>{order.comment}</CardText>
            </Card>
        )
    }
}

OrderRow.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};
export default OrderRow;
