import React, { Component } from 'react';
import './custom.css';

class Custom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CPU: this.props.theDevice[0].CPU,   //set the value as they were so that user doesnt need to customise to checkout
            RAM: this.props.theDevice[0].RAM,
            storage: this.props.theDevice[0].storage,
            size: this.props.theDevice[0].size,
            GPU: this.props.theDevice[0].GPU,
            thePrice: {
                TotalPrice: null,   // stores the price of the customised part 
                CPUPrice: null,
                RAMPrice: null,
                storage: null,
                sizePrice: null,
                GPUPrice: null,
            }
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        let price = parseInt(this.props.theDevice[0].price) // turns device price into a int 
        let TotalPrice = price + this.state.thePrice.CPUPrice + this.state.thePrice.RAMPrice + this.state.thePrice.sizePrice + this.state.thePrice.GPUPrice

        let purchase = this.props.theDevice  //stores the array that was passed to render the page

        delete purchase[0].description   //remove uncessory stuff from the array 
        delete purchase[0].computerID
        delete purchase[0].image

        purchase[0].CPU = this.state.CPU       //update the array with the customised parts
        purchase[0].RAM = this.state.RAM
        purchase[0].storage = this.state.storage
        purchase[0].size = this.state.size
        purchase[0].GPU = this.state.GPU
        purchase[0].price = TotalPrice

        console.log(purchase)

        this.props.onClick(purchase)
        


    };

    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;

        let thePrice = this.state.thePrice

        let checkRam = this.props.theDevice[0].RAM  // to check if the part selected matches any part in the drop down to prevent conflicts
        let checkCPU = this.props.theDevice[0].CPU
        let checkSize = this.props.theDevice[0].size
        let checkGPU = this.props.theDevice[0].GPU

        if (name === "CPU") {
            if (value === checkCPU) { // prevents conflicts so that if part that is select matches any part in the drop down it will still = 0
                thePrice.CPUPrice = 0
            }
            else if (value === "intel pentium g4560") {
                thePrice.CPUPrice = 125
            }
            else if (value === "intel i3 7100") {
                thePrice.CPUPrice = 250
            }
            else if (value === "intel i5 7500") {
                thePrice.CPUPrice = 350
            }
            else if (value === "intel i7 7700") {
                thePrice.CPUPrice = 499
            }
            else {
                thePrice.CPUPrice = 0
            }
        }

        else if (name === "RAM") {
            if (value === checkRam) {
                thePrice.RAMPrice = 0
            }
            else if (value === "4 GB") {
                thePrice.RAMPrice = 50
            }
            else if (value === "8 GB") {
                thePrice.RAMPrice = 100
            }
            else if (value === "16 GB") {
                thePrice.RAMPrice = 299
            }
            else {
                thePrice.RAMPrice = 0
            }
        }

        else if (name === "storageSize") {
            if (value === checkSize) {
                thePrice.sizePrice = 0
            }
            else if (value === "256 GB") {
                thePrice.sizePrice = 150
            }
            else if (value === "500 GB") {
                thePrice.sizePrice = 250
            }
            else if (value === "1 TB") {
                thePrice.sizePrice = 100
            }
            else if (value === "2 TB") {
                thePrice.sizePrice = 150
            }
            else {
                thePrice.sizePrice = 0
            }
        }

        else if (name === "GPU") {
            if (value === checkGPU) {
                thePrice.GPUPrice = 0
            }
            else if (value === "GTX 1050") {
                thePrice.sizePrice = 159
            }
            else if (value === "GTX 1060") {
                thePrice.GPUPrice = 299
            }
            else if (value === "GTX 1070") {
                thePrice.GPUPrice = 450
            }
            else if (value === "GTX 1080") {
                thePrice.GPUPrice = 599
            }
            else if (value === "GTX 1080 TI") {
                thePrice.GPUPrice = 699
            }
            else {
                thePrice.GPUPrice = 0
            }
        }
        else if (name === "storage"){
            if(value === "SSD"){
                thePrice.storage = "SSD"
            }
            else if(value === "HDD"){
                thePrice.storage = "HDD"
            }
            else{
                thePrice.GPUPrice = null
            }


            
            
        }

        this.setState({ thePrice, [name]: value });
    }

    render() {

        let price = parseInt(this.props.theDevice[0].price) // turns device price into a int 
        let TotalPrice = price + this.state.thePrice.CPUPrice + this.state.thePrice.RAMPrice + this.state.thePrice.sizePrice + this.state.thePrice.GPUPrice // adds up all the prices for the part to creata total price that can be rendered

        let storageOption1
        let storageOption2

        if (this.state.thePrice.storage === "SSD") {    //check if SSD is selected so it can render SSD storage size available
            storageOption1 = "256 GB"
            storageOption2 = "500 GB"
        } else if(this.state.thePrice.storage === "HDD") { //check if HHD is selected so it can render SSD storage size available
            storageOption1 = "1 TB"
            storageOption2 = "2 TB"
        }

        console.log(this.props.theDevice)

        return (
            <div className="customisation">
                <form onSubmit={this.handleSubmit} noValidate>

                    <span className="deviceName">{this.props.theDevice[0].title}</span>

                    <img src={this.props.theDevice[0].image} alt="laptop" />

                    <select name="CPU" onChange={this.handleChange} className="CPU">
                        <option name="default" >{this.props.theDevice[0].CPU}</option>
                        <option name="pentium" >intel pentium g4560</option>
                        <option name="i3" >intel i3 7100</option>
                        <option name="i5" >intel i5 7500</option>
                        <option name="i7" >intel i7 7700</option>

                    </select>

                    <select name="RAM" onChange={this.handleChange} className="RAM">
                        <option name="default" >{this.props.theDevice[0].RAM}</option>
                        <option name="4GB">4 GB</option>
                        <option name="8GB">8 GB</option>
                        <option name="16GB">16 GB</option>
                    </select>

                    <select name="storage" onChange={this.handleChange} className="storage">
                        <option name="default" >{this.props.theDevice[0].storage}</option>
                        <option name="SSD">SSD</option>
                        <option name="HDD">HDD</option>
                    </select>

                    <select name="storageSize" onChange={this.handleChange} className="storageSize">
                        <option name="default" >{this.props.theDevice[0].size}</option>
                        <option name="new">{storageOption1}</option>
                        <option name="new">{storageOption2}</option>
                    </select>

                    <select name="GPU" onChange={this.handleChange} className="GPU">
                        <option name="default" >{this.props.theDevice[0].GPU}</option>
                        <option name="GTX1070">GTX 1050</option>
                        <option name="GTX1070">GTX 1060</option>
                        <option name="GTX1070">GTX 1070</option>
                        <option name="GTX1080">GTX 1080</option>
                        <option name="GTX1080TI">GTX 1080 TI</option>



                    </select>

                    <span className="price">Price: £{this.props.theDevice[0].price}</span>
                    <span className="totalPrice">Total Price: £{TotalPrice} </span>


                    <button className="checkOut">Check out</button>
                </form>
            </div>
        );
    }
}

export default Custom;


