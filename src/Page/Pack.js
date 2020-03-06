import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import { Route, NavLink } from 'react-router-dom'
import axios from 'axios'




class Pack extends Component {
    constructor() {
        super()
        this.state = {
            // mes: this.props.mes,
            mes2: "mes2"
        }


    }
    componentDidMount() {
        this.getList()
    }
    getList = () => {
 

            //   const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`
            const apiUrl = `http://localhost:8090/api/pack/list`
            axios.post(apiUrl,{})
                .then((res) => {
                    // fn(res.data.title)
                    console.log(res.data)
                })
        
    }
    render() {

        return (
            <view>
                <h1>Hello Screen {this.props.m}</h1>
                <h1>{this.state.mes2}</h1>
                <Button variant="contained" color="primary" onClick={() => this.getList()}>
                    Hello World
            </Button>
            </view>
        )
    }
}
export default Pack