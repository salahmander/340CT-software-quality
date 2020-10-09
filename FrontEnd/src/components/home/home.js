import React, { Component } from "react";
import "./home.css";
import img1 from './image/firstImage.png'
import img2 from './image/secondImage.png'

class Home extends Component {
  render() {

    return (
      <div className="cf">

        <img className="top" src={img1} alt="laptop"/>
        <img className="bottom" src={img2} alt="laptop" />

      </div>
    );
  }
}
export default Home;