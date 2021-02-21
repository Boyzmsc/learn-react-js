import React, { Component } from 'react';
import DisplayNumber from '../containers/DisplayNumber';

class DisplayNumberRoot extends Component {
    render() {
        return (
            <div>
                <h1>Display Number Root</h1>
                <DisplayNumber></DisplayNumber>
            </div>
        );
    }
}

export default DisplayNumberRoot;