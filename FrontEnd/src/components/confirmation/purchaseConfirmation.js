import React, { Component } from 'react';
import './purchaseConfirmation.css';


class PurchaseConfirmation extends Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler = event => {
        event.preventDefault();
        this.props.onClick();
    }


    render() {

        return (
            <div className="confirmation">
                <div className="container">
                    <button onClick={this.onClickHandler} className="linkButton"><h4><b>Thank You</b></h4></button>
                    <p>Thanks for shopping at Acer! your order is being processed.</p>
                </div>
            </div>
        );
    }
}
export default PurchaseConfirmation;