import React from 'react';
import StoreTable from '../components/StoreTable'
import HeaderBar from '../components/HeaderBar'
import ToolBar from '../components/ToolBar'
import ProgressBar from '../components/ProgressBar'

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
        <ProgressBar stepIndex={1}/>
        <StoreTable foodStores={this.props.foodStores} />
      </div>
    );
  }
});

export default SelectFoodStorePage;
