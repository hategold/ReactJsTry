import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import HeaderBar from '../components/HeaderBar'
import ToolBar from '../components/ToolBar'
import ProgressBar from '../components/ProgressBar'
import OrderItemsBoard from '../components/OrderItemsBoard'
import {deleteOrderItem, loadStoreMenu} from '../actions/OrderItemAction';

const mapStateToProps = (state) => {

    // console.log(state)
    let flavorSpan = 0;
    state.getIn(['OrderItemReducer', 'itemList']).toJS().forEach((item) => {
        if (item.flavorList.length > flavorSpan)
            flavorSpan = item.flavorList.length;
        }
    )
    return ({
        'item': state.getIn(['OrderItemReducer', 'item']).toJS(),
        'tableData': state.getIn(['OrderItemReducer', 'itemList']).toJS(),
        'flavorSpan': flavorSpan,
        //'user' = state.user
    });
}; //state

const mapDispatchToProps = (dispatch) => ({
    deleteOrderItem: (itemData, index) => (dispatch(deleteOrderItem({itemData, index}))),
    loadStoreMenu: ({payload}) => (dispatch(loadStoreMenu(payload)))
});

class SelectOrderInfo extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props)//handldeSubmit
    }
    render() {
        console.log(this);
        return (
            <div>
                <HeaderBar/>
                <ToolBar/>
                <ProgressBar stepIndex={3}/>
                <OrderItemsBoard {...this.props}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectOrderInfo);
