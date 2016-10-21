import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class OrderItemForm extends React.Component {
    onChange() {
        console.log('hi');
    }
    render() {
        const {selectedProduct, submitItemForm} = this.props;
        console.log()
        return (
            <Paper>
                {selectedProduct.map((item) => (
                    <div key={item.productId + item.pSize}>
                        <h3>{item.productName + "-" + item.pSize + "-$" + item.salePrice}</h3>
                        <SelectField onChange={this.onChange}>
                            {item.productFormData.sizeList.map((sizeObj) => (<MenuItem key={item.productId + sizeObj.saleSize} value={sizeObj.saleSize} primaryText={sizeObj.saleSize}/>))}
                        </SelectField>
                        {item.productFormData.flavorTypeList.map((flavorType, index) => (
                            <SelectField key={index + item.productId}>
                                {flavorType.map((attr, idx) => (<MenuItem key={attr + item.productId} value={attr} primaryText={attr}/>))}
                            </SelectField>
                        ))}
                        <br/>
                    </div>
                ))}
                <RaisedButton label="submit" disabled={selectedProduct.length < 1} primary={true} onClick={submitItemForm}/>
            </Paper>
        )
    }
}

export default OrderItemForm;
