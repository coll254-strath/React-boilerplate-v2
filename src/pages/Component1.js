import React, { Component } from 'react';


class Car extends Component {
    constructor(props) {
      super(props);
      this.state = {
        color: "red",
        model:"Mustang",
        year:"2009",

    };
    }
   changeColor = () =>this.setState({color:"blue"});
;
    render() {
      return(<div><h2>I am a Car!</h2>
                <p>
It is a {this.state.color } {this.state.model} from {this.state.year}
                </p>
                <button 
                type="button" onClick={this.changeColor}>Change color </button>
                </div>);
    }
   }
   
export default Car;