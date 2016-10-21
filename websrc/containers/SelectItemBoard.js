import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import HeaderBar from '../components/HeaderBar'
import OrderItemForm from '../components/OrderItemForm'
import StoreMenu from '../components/StoreMenu'
import ToolBar from '../components/ToolBar'
import {pickProduct, submitItemForm} from '../actions/OrderItemAction';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

// import OrderItemsBoard from '../components/OrderItemsBoard'
// import {deleteOrderItem} from '../actions/OrderItemAction';

const mapStateToProps = (state) => {

    return ({
        productList: state.getIn(['ProductFormReducer', 'productList']).toJS(),
        selectedProduct: state.getIn(['ProductFormReducer', 'selectedProduct']).toJS()
    })
}; //state

const mapDispatchToProps = (dispatch) => ({

    submitItemForm: ({payload}) => (dispatch(submitItemForm({payload}))),
    onSelectProduct: ({payload}) => (dispatch(pickProduct({payload})))
});

class SelectItemBoard extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props)//handldeSubmit
    }
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }
    render() {
        return (

            <div>
                <HeaderBar/>
                <ToolBar/>
                <OrderItemForm {...this.props}/>
                <StoreMenu {...this.props}/>
            </div>

        )
    }
}
SelectItemBoard.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectItemBoard);
