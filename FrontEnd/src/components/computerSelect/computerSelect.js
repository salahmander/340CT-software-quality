import React, { Component } from 'react';
import './computerSelect.css';


class ComputerSelect extends Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event) {
        event.preventDefault();
        this.props.onClick(this.props.title,this.props.device);
    }


    render() {

        return (
            <div className="computerSelect">
                <img src={this.props.image} alt={this.props.imgAlt} />
                <div className="container">
                    <button onClick={this.onClickHandler} className="linkButton"><h4><b>{this.props.title}</b></h4></button>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}
export default ComputerSelect;