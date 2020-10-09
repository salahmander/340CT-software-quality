import React, { Component } from 'react';

import ComputerSelect from './computerSelect'
import { Grid, Row, Col } from 'react-bootstrap'

class ComputerGrids extends Component {

    GridRow(cards, id) {


        return (
            <div key={id}>
                {cards.map((item) =>
                    <div key={item.id}>
                        <Grid>
                            <Row>
                                <Col>
                                    <ComputerSelect image={item.image}
                                        title={item.title}
                                        description={item.description}
                                        device={item.device}
                                        onClick={this.props.onClick}
                                        id={item.id}
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

        var allRows = [];

        var len = this.props.items.length;

        var totalRows = len / 2;

        var countRows = 0;

        while (countRows < totalRows) {

            let newRow = [];


            for (var i = 0; i < 2; i++) {
                if ((i + (countRows * 2)) < len)
                    newRow.push(this.props.items[i + (countRows * 2)]);

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
export default ComputerGrids;