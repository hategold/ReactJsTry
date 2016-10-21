import React from 'react';
import ReactDOM from 'react-dom';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

class StoreMenu extends React.Component {
    render() {
        const {productList, onSelectProduct} = this.props;
        return (
            <Paper>
                <List>
                    {productList.map((product) => (<ListItem key={product.productName + product.pSize} primaryText={product.productName + " Size:" + product.pSize} secondaryText={"$" + product.salePrice} secondaryTextLines={2} onClick={onSelectProduct.bind(null,product)}/>))}
                </List>
            </Paper>
        )
    }
}

export default StoreMenu;
