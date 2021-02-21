import './App.css';
import React, { Component } from 'react';

import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

class App extends Component {
    state = {
        number: 5
    }
    render() {
        return (
            <div classNmae="App" >
                <h1>Hello World</h1>
                <AddNumberRoot onClick={function (size) {
                    this.setState({ number: this.state.number + size });
                }.bind(this)}>
                </AddNumberRoot>
                <DisplayNumberRoot number={this.state.number}>
                </DisplayNumberRoot>
            </div>
        );
    }
}

export default App;
