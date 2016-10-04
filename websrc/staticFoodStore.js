import React from 'react';
import ReactDOM from 'react-dom';


var HeaderBar = React.createClass({
  render:function(){
    return(
      <div className ="headerbar"><h1>Tea Time</h1></div>
    )
  }
})

var ToolBar = React.createClass({
  render:function(){
    return (
      <div className ="btn-group">
        <a href="/" className ="btn btn-default"><span>Home</span></a>
        <a href="/create/" className ="btn btn-default"><span>Create</span></a>
        <a href="/history" className ="btn btn-default"><span>History</span></a>
        <a href="/sign" className ="btn btn-default"><span>Sign in</span></a>
      </div>
    )
  }
})

var ProgressBar = React.createClass({
  render:function(){
    return(<div>progressBar</div>)
  }
})

var StoreRow = React.createClass({
  render:function(){
    console.log(this.props)
    var name = this.props.foodStore.stocked > 0 ?
      this.props.foodStore.storeName :
      <span style={{color:'red'}}>
        {this.props.foodStore.storeName}
      </span>;

      return (
        <tr>
          <td width="70%">{name}</td>
          <td><a className ="btn btn-default">detail</a></td>
          <td><a className ="btn btn-default">choose</a></td>
        </tr>
      )
  }
});

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
})

var SelectFoodStorePage = React.createClass({
  getInitialState: function() {
    return {
      selectedStore: {}
    };
  },
  render: function() {
    return (
      <div>
        <HeaderBar />
        <ToolBar />
        <ProgressBar/>
        <StoreTable foodStores={this.props.foodStores} />
      </div>
    );
  }
});

var FOODSTORES = [{
    storeId: 55,
    storeName: "2pac",
    address: "12233456",
    phoneNumber :"33662255"
}, {
    storeId: 66,
    storeName: "56pac",
    address: "999",
    phoneNumber: "6666"
},{
    storeId: 1,
    storeName: "teatt",
    address: "566",
    phoneNumber :"77777"
}];

export var PrototypeFS = ()=> (<SelectFoodStorePage foodStores={FOODSTORES} />)
