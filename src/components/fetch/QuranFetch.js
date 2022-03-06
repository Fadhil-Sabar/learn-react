import axios from "axios";
import React from "react";
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DetailSurah from "./DetailSurah";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "@mui/material";

class QuranFetch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        const response = await axios.get('https://api.npoint.io/99c279bb173a6e28359c/data')
        const res = response.data
        this.setState({ data: res })
    }

    render(){
        const Item = styled(Paper)(({ theme }) => ({
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }));
        const { data } = this.state
        return(
            <div>
                <Item >List Surat</Item>
                <Grid container spacing={2}>
                    <Grid item md={4}>
                        <Table>
                            <TableBody>
                                {
                                    data.map((value) => {
                                        return value.nomor <= 38 ? <Card sx={{ my: 2, width: 200 }} >
                                            <CardContent onClick={this.clickHandler}>
                                                <TableRow key={value.nomor}>
                                                    <TableCell align="center">{value.nomor}</TableCell>
                                                    <TableCell align="center">{value.nama}</TableCell>
                                                </TableRow>
                                            <Button >
                                                <Link style={{textDecoration: 'none'}} to={`detail?nomor=${value.nomor}`}>Detail</Link>
                                            </Button>
                                            </CardContent>
                                        </Card> : ''
                                    })
                                }
                            </TableBody>
                        </Table>
                    </Grid>
                    <Grid item md={4} justifyContent="center">
                        <Table>
                            <TableBody>
                                {
                                    data.map((value) => {
                                        return value.nomor > 38 && value.nomor <= 76 ? <Card sx={{ my: 2, width: 200 }}>
                                            <CardContent>
                                                <TableRow key={value.nomor}>
                                                    <TableCell align="center">{value.nomor}</TableCell>
                                                    <TableCell align="center">{value.nama}</TableCell>
                                                </TableRow>
                                            </CardContent>
                                        </Card> : ''
                                    })
                                }
                            </TableBody>
                        </Table>
                    </Grid>
                    <Grid item md={4}>
                        <Table>
                            <TableBody>
                                {
                                    data.map((value) => {
                                        return value.nomor > 76 ? <Card sx={{ my: 2, width: 200 }}>
                                            <CardContent >
                                                <TableRow key={value.nomor}>
                                                    <TableCell align="center">{value.nomor}</TableCell>
                                                    <TableCell align="center">{value.nama}</TableCell>
                                                </TableRow>
                                            </CardContent>
                                        </Card> : ''
                                    })
                                }
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
                </div>
        );
    }

}


export default QuranFetch
