import React from 'react';
import OrderItemsTable from './OrderItemsTable';
import Paper from 'material-ui/Paper';
import Add from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {Link} from 'react-router';

const style = {
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
};

export default class OrderItemsBoard extends React.Component {
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }
    render() {
      const {loadStoreMenu} = this.props;
        return (
            <Paper style={style} zDepth={2}>
                <Link to={'/itemForm'}><RaisedButton icon={< Add />} fullWidth={true} onClick={loadStoreMenu}/></Link>
                <OrderItemsTable {...this.props}/>
            </Paper>
        )
    }
}
OrderItemsBoard.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};
