import React, { Component } from 'react';

class Welcome extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Hola {this.props.name}</h1>
      </div>
    );
  }
}

export default Welcome;