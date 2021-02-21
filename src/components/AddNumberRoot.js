import React, { Component } from 'react';
import AddNumber from '../containers/AddNumber';

class AddNumberRoot extends Component {
    render() {
        return (
            <div>
                <h1>Add Number Root</h1>
                <AddNumber></AddNumber>
            </div>
        );
    }
}

export default AddNumberRoot;