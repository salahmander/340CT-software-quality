import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Login from './components/login/login';
import Register from './components/register/register';
import Custom from './components/customisation/custom';
import Header from './components/header/header';
import ComputerGrids from './components/computerSelect/computerGrids';
import ItemGrids from './components/itemListGrid/itemGrids';
import Home from './components/home/home';
import PurchaseConfirmation from './components/confirmation/purchaseConfirmation'


import LaptopType from './components/computerSelect/laptopType';
import DesktopType from './components/computerSelect/desktopType';


class App extends Component {

  modelInfo = []; //model of device
  computerInfo = [] //type of laptop or desktop

  constructor(props) {
    super(props);

    this.state = {
      currentView: "home",
      computerData: [],
      checkUser: [],
      userIdentification: null,
      loginError: false,
      signedIn: false
    };

    this.handleThumbnailClicked = this.handleThumbnailClicked.bind(this);
    this.handleComputerType = this.handleComputerType.bind(this);
    this.handleLoginClicked = this.handleLoginClicked.bind(this);
    this.handleGoToReg = this.handleGoToReg.bind(this);
    this.handleDesktopClick = this.handleDesktopClick.bind(this);
    this.handleLaptopClick = this.handleLaptopClick.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.handleRegestration = this.handleRegestration.bind(this);
    this.handleLoginAuth = this.handleLoginAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleThumbnailClicked(key) {
    if (this.state.signedIn) {

      console.log("item with id:" + key + " was clicked");

      if (this.state.currentView !== "itemList")
        return;

      this.setState({ currentView: "itemView" });
      let len = this.state.computerData.length;
      this.modelInfo = []
      this.computerInfo = []

      for (let i = 0; i < len; i++) {

        if (this.state.computerData[i].computerID === key) {
          this.modelInfo.push(this.state.computerData[i]);
        }
      }
    }else{
      this.setState({ currentView: "login" });
    }

  }

  handleComputerType(computerType, computerDevice) {

    console.log("item with id:" + computerType + " was clicked");
    console.log("app " + computerDevice)

    if (this.state.currentView !== "laptop" && this.state.currentView !== "desktop")
      return;

    this.setState({ currentView: "itemList" });
    let len = this.state.computerData.length;
    this.computerInfo = []
    this.modelInfo = []

    for (let i = 0; i < len; i++) {

      if (this.state.computerData[i].type === computerType && this.state.computerData[i].device === computerDevice) {
        this.computerInfo.push(this.state.computerData[i]);
      }
    }

  }

  handleLoginClicked() {
    if (this.state.signedIn) {
      this.setState({ currentView: "home" });
    } else {
      this.setState({ currentView: "login" });
    }
  }

  handleLogout(){
    this.setState({ signedIn: false })
    this.setState({ currentView: "home" });
  }

  handleGoToReg() {
    this.setState({ loginError: false })
    if (this.state.signedIn) {
      this.setState({ currentView: "home" });
    } else {
      this.setState({ currentView: "register" });
    }
  }

  handleDesktopClick() {
    this.setState({ currentView: "desktop" });
  }

  handleLaptopClick() {
    this.setState({ currentView: "laptop" });
  }

  handleHomeClick() {
    this.setState({ currentView: "home" });
  }


  handlePurchase(itemDetail) {
    this.modelInfo = []
    this.computerInfo = []

    this.setState({ currentView: "confirmation" });
    console.log(itemDetail)

    fetch('http://localhost:5000/api/v1.0/purchase', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userID: this.state.userIdentification.userID,
        title: itemDetail[0].title,
        device: itemDetail[0].device,
        type: itemDetail[0].type,
        CPU: itemDetail[0].CPU,
        RAM: itemDetail[0].RAM,
        GPU: itemDetail[0].GPU,
        storage: itemDetail[0].storage,
        size: itemDetail[0].size,
        price: itemDetail[0].price
      })
    })
  }

  handleRegestration(regDetials) {
    this.modelInfo = []
    this.computerInfo = []

    this.setState({ currentView: "login" });
    console.log(regDetials)

    fetch('http://localhost:5000/api/v1.0/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: regDetials[0].firstName,
        surname: regDetials[0].surname,
        email: regDetials[0].email,
        username: regDetials[0].username,
        password: regDetials[0].password
      })
    })

  }

  handleLoginAuth(loginData) {
    axios.post('http://localhost:5000/api/v1.0/login', {
    }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + window.btoa(loginData.username + ':' + loginData.password)
        }
      }).then(res => {
        if (res.status === 200) {
          //data = res.data
          this.setState({ userIdentification: res.data })
          this.setState({ signedIn: true })
          this.setState({ currentView: "home" });
          console.log(this.state.userIdentification.userID)
        }

      }).catch((error) => {
        console.log(error)
        this.setState({ loginError: true })
      });

  }


  componentDidMount() {

    fetch('/api/v1.0/computers')
      .then(res => res.json())
      .then(computerData => this.setState({ computerData }, () => console.log(`Item fetched... `,
        computerData)))

    fetch('/api/v1.0/users')
      .then(res => res.json())
      .then(checkUser => this.setState({ checkUser }, () => console.log(`Item fetched... `,
        checkUser)))

  }

  render() {

    let whatToRender;

    if (this.state.currentView === "itemList") {
      whatToRender = <ItemGrids items={this.computerInfo} onClick={this.handleThumbnailClicked} />
    }
    else if (this.state.currentView === "laptop") {
      whatToRender = <ComputerGrids items={LaptopType.items} onClick={this.handleComputerType} />
    }
    else if (this.state.currentView === "desktop") {
      whatToRender = <ComputerGrids items={DesktopType.items} onClick={this.handleComputerType} />
    }
    else if (this.state.currentView === "itemView") {
      whatToRender = <Custom theDevice={this.modelInfo} onClick={this.handlePurchase} />
    }
    else if (this.state.currentView === "login") {
      whatToRender = <Login onClick={this.handleGoToReg} onSumbit={this.handleLoginAuth} loginError={this.state.loginError} />
    }
    else if (this.state.currentView === "register") {
      whatToRender = <Register check={this.state.checkUser} onClick={this.handleLoginClicked} onRegister={this.handleRegestration} />
    }
    else if (this.state.currentView === "home") {
      whatToRender = <Home />
    }
    else if (this.state.currentView === "confirmation") {
      whatToRender = <PurchaseConfirmation onClick={this.handleHomeClick} />
    }


    return (
      <div>
        <Header onClick={this.handleLoginClicked} onDesktopClick={this.handleDesktopClick} onLaptopClick={this.handleLaptopClick} onHomeClick={this.handleHomeClick} signedIn={this.state.signedIn} onLogoutClick={this.handleLogout}/>
        {whatToRender}
      </div>
    );
  }

}


export default App;
