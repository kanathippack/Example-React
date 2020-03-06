import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import { Route, NavLink } from 'react-router-dom'

class Pack extends Component {
    constructor() {
        super()
        this.state = {
            // mes: this.props.mes,
            mes2: "mes2"
        }
    }

    render() {

        return (
            <view>
                <h1> Nice Page</h1>
            </view>
        )
    }
}


export default Pack