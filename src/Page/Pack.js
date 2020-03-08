import React, { Component } from 'react';
import { Button, } from '@material-ui/core';
import { Route, NavLink } from 'react-router-dom'
import axios from 'axios'
import MaterialTable from 'material-table';
// import SimpleTable from '../Component/Table'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Delete, Edit } from '@material-ui/icons';

const apiUrl = 'http://localhost:8090/api/'
const Get_List = 'pack/list'



class Pack extends Component {


    constructor() {
        super()
        this.state = {
            // mes: this.props.mes,
            mes2: "mes2",
            data: []
        }


    }
    componentDidMount() {
        this.getList()
    }
    getList = () => {


        //   const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`

        axios.post(apiUrl + Get_List, {})
            .then((res) => {
                // fn(res.data.title)

                this.setState({
                    data: res.data.data
                })
                console.log(typeof (this.state.data))
                console.log("get list data :", this.state.data)
            })

    }
    render() {

        return (
            <div style={{ marginTop: 20 }}>

                {/* <Button variant="contained" color="primary" onClick={() => this.getList()}>
                    Hello World
            </Button> */}
                {/* <SimpleTable data={this.state.data}/> */}

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell style={{ fontWeight: 'bold' }}>Brand</TableCell>
                                <TableCell style={{ fontWeight: 'bold' }} >Body</TableCell>
                                <TableCell style={{ fontWeight: 'bold' }} >Processor</TableCell>
                                <TableCell style={{ fontWeight: 'bold' }} >Operating system </TableCell>
                                <TableCell style={{ fontWeight: 'bold' }} >Warranty</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {this.state.data.map((row, key) => (
                                <TableRow hover key={key}>
                                    <TableCell>{key + 1}</TableCell>
                                    <TableCell component="th" scope="row">{row.brand}</TableCell>
                                    <TableCell >{row.body}</TableCell>
                                    <TableCell >{row.processor}</TableCell>
                                    <TableCell >{row.operatingSystem}</TableCell>
                                    <TableCell >{row.warranty}</TableCell>

                                    <TableCell align="right" style={{ maxWidth: 80 }}>
                                        <Button onClick={() => this.getList()} style={{ borderRadius: 50 }} variant="outlined" color="secondary">
                                            <Delete />
                                        </Button>
                                        &nbsp;
                                        <Button onClick={() => this.getList()} style={{ borderRadius: 50 }} variant="contained" color="primary" >
                                            <Edit />
                                        </Button>

                                    </TableCell>


                                </TableRow>
                            )
                            )}

                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        )
    }
}



export default Pack