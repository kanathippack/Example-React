import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import { Route, NavLink } from 'react-router-dom'

class Pack extends Component {
    constructor(){
        super()
        this.state={
            // mes: this.props.mes,
            mes2:"mes2"
        }
    }
    
    render() {

        return (
            <view>
                <h1>Hello Screen {this.props.m}</h1>
                <h1>{this.state.mes2}</h1>
                <Button variant="contained" color="primary" onClick={() => this.clickme()}>
                    Hello World
            </Button>
            </view>
        )
    }
}
export default Pack