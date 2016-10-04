import React from 'react';
import StoreRow from './StoreRow'

var StoreTable = React.createClass({
  render:function(){
    var rows = [];
    console.log(this.props.foodStores)
    this.props.foodStores.forEach(function(foodStore){
      rows.push(<StoreRow foodStore={foodStore} key={foodStore.storeName}/>);
    });
    return(
      <table>
        <thead>
          <tr>
            <th>Store</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
});

export default StoreTable;
