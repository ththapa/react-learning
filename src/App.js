import React, { Component } from "react";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Register from "./components/register/register";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
        <Menu/>
        <Login/>
        <Register/>
      </div>
    );
  }
}
