import React from 'react';

var StoreRow = React.createClass({
    render: function() {
        console.log(this.props)
        var name = this.props.foodStore.stocked > 0
            ? this.props.foodStore.storeName
            : <span style={{
                color: 'red'
            }}>
                {this.props.foodStore.storeName}
            </span>;

        return (
            <tr>
                <td width="70%">{name}</td>
                <td>
                    <a className="btn btn-default">detail</a>
                </td>
                <td>
                    <a className="btn btn-default">choose</a>
                </td>
            </tr>
        )
    }
});

export default StoreRow;
