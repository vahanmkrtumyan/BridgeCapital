import React, { Component } from 'react';
import {database} from './firebase';

class Calculator extends Component {
    state = { data }

    componentDidMount() {
        database.ref().on('value', (snapshot)), ()=> {
            this.setState({data: snapshot.val()})
        }
    }

    render() { 
        return ( <div>Hello</div> );
    }
}
 
export default Calculator;