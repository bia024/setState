// import logo from './logo.svg';
// import './App.css';

import React, { Component } from "react";
import styled from "styled components";

class App extends Component {
  state = {
    numero: 0
  };

  adicionar = () => {
    this.setState({
      numero: this.state.numero + 1
    });
  };

  remover = () => {
    this.setState({
      numero: this.state.numero - 1
    });
  };

  render() {
    return (
      <>
        <div>
          <title> {this.state.numero} </title>
        </div>
        <section>
          <button onClick={this.adicionar}> + </button>
          <button onClick={this.remover}> - </button>
        </section>
      </>
    );
  }
}
export default App;
