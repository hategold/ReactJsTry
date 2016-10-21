import React from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

export default class OrderItemsTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: false,
            fixedFooter: false,
            stripedRows: false,
            showRowHover: true,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: false,
            showCheckboxes: false,
            height: '450px'
        };
    }
    render() {
        const {tableData, flavorSpan, deleteOrderItem} = this.props;
        return (
            <Table>
                <TableHeader enableSelectAll={this.state.enableSelectAll} fixedHeader={this.state.fixedHeader} displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes}>
                    <TableRow>
                        <TableHeaderColumn colSpan={flavorSpan + 6} tooltip="Super Header" style={{
                            textAlign: 'center'
                        }}>
                            Order Detail
                        </TableHeaderColumn>
                    </TableRow>

                </TableHeader>
                <TableBody showRowHover={this.state.showRowHover} displayRowCheckbox={this.state.showCheckboxes}>
                    <TableRow >
                        <TableHeaderColumn>Act.</TableHeaderColumn>
                        <TableHeaderColumn>Product</TableHeaderColumn>
                        <TableHeaderColumn>People</TableHeaderColumn>
                        <TableHeaderColumn>Quantity</TableHeaderColumn>
                        <TableHeaderColumn>SalePrice</TableHeaderColumn>
                        <TableHeaderColumn colSpan={flavorSpan} style={{
                            textAlign: 'center'
                        }}>Flavor</TableHeaderColumn>
                        <TableHeaderColumn style={{
                            width: '25%'
                        }}>Comment</TableHeaderColumn>
                    </TableRow>
                    {tableData.map((row, index) => (
                        <TableRow key={index}>
                            <TableRowColumn >
                                <IconButton onClick={deleteOrderItem.bind(null,row,index)}><Delete/></IconButton>
                            </TableRowColumn>
                            <TableRowColumn>{row.productName + "-" + row.pSize}</TableRowColumn>
                            <TableRowColumn>{row.peopleName}</TableRowColumn>
                            <TableRowColumn>{row.quantity}</TableRowColumn>
                            <TableRowColumn>{row.salePrice}</TableRowColumn>
                            {row.flavorList.map((col) => (
                                <TableRowColumn key={col}>{col}</TableRowColumn>
                            ))}
                            {(() => {
                                if (flavorSpan - row.flavorList.length > 0) {
                                    return (
                                        <TableRowColumn colSpan={flavorSpan - row.flavorList.length}></TableRowColumn>
                                    )
                                }
                            })()}

                            <TableRowColumn>{row.comment}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }
}
