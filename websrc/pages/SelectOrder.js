import React from 'react';
import ReactDOM from 'react-dom';
import SelectOrderInfo from '../containers/SelectOrderInfo';


const SelectOrder = ({params}) => {
  console.log(params);
  return(
    <div>
        <SelectOrderInfo/>
    </div>
)};

export default SelectOrder;
