import React, { Component } from 'react';

import ItemList from '../itemList/ItemList'
import { Grid, Row, Col } from 'react-bootstrap'

class ItemGrids extends Component {

    GridRow(cards, id) {

        if (cards == null) {
            return null;
        }

        return (
            <div key={id}>
                {cards.map((item) =>
                    <div key={item.computerID}>
                        <Grid>
                            <Row>
                                <Col>
                                    <ItemList image={item.image}
                                        title={item.title}
                                        description={item.description}
                                        CPU={item.CPU}
                                        GPU={item.GPU}
                                        RAM={item.RAM}
                                        Storage={item.Storage}
                                        Size={item.Size}
                                        price={item.price}
                                        onClick={this.props.onClick}
                                        id={item.computerID}
                                    />
                                </Col>
                            </Row>
                        </Grid>

                    </div>
                )}
            </div>

        );

    }

    render() {

        if (this.props.items == null) {
            return null;
        }
        var allRows = [];

        var len = this.props.items.length;

        var totalRows = len / 2;

        var countRows = 0;

        while (countRows < totalRows) {

            let newRow = [];


            for (var i = 0; i < 2; i++) {
                if((i + (countRows *2)) < len)
                    newRow.push(this.props.items[i + (countRows *2)]);

            }

            countRows++;

            allRows.push(this.GridRow(newRow, countRows));
        }

        return (
            <div>
                {allRows}
            </div>
        );
    }
}
export default ItemGrids;