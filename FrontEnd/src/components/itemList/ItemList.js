import React, { Component } from 'react';
import './ItemList.css';


class ItemList extends Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event) {
        event.preventDefault();
        this.props.onClick(this.props.id);
        console.log(this.props.id)
    }


    render() {

        return (
            <div className="ItemList">
                <img src={this.props.image} alt={this.props.imgAlt} />
                <div className="container">
                    <button onClick={this.onClickHandler} className="linkButton"><h4><b>{this.props.title}</b></h4></button>
                    <p>{this.props.description}</p>
                    
                    <ul>
                        <li>CPU: {this.props.CPU} </li>
                        <li>RAM: {this.props.RAM} </li>
                        <li>Graphics card: {this.props.GPU}</li>
                        <li>Storage: {this.props.Storage}</li>
                        <li>Storage size: {this.props.Size}</li>
                    </ul>

                    <span className ="itemPrice">Price: £{this.props.price}</span>
                </div>
            </div>
        );
    }
}
export default ItemList;