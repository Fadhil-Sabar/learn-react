import axios from "axios";
import React from "react";
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { useState, useEffect } from 'react';

const QuranFetchA = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetch() {
            const response = await axios.get('https://api.npoint.io/99c279bb173a6e28359c/data')
            const res = response.data
            setData(res)
        }
        fetch()
        document.body.style.background = 'darkolivegreen';
        

    }, [])

    const Surat = (value) => {
        return <div className="col-md-4">
        <Card sx={{ my: 2 }} >
        <CardContent className="text-center">
            <div className="row py-3 border-bottom">
                <div className="col-md-3">
                    <Typography variant="body2">{value.nomor}</Typography>
                </div>
                <div className="col">
                    <Typography variant="body2">{value.nama}</Typography>
                </div>
            </div>
            <Button >
                <Link style={{ textDecoration: 'none' }} to={`detail/${value.nomor}`}>Detail</Link>
            </Button>
        </CardContent>
    </Card> 
    </div>
    }

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <Item ><Typography variant="h6">List Surat</Typography></Item>
            <Grid container spacing={2}>
                <Grid item >
                    <div className="row">
                    {
                        data.map((value) => {
                            return  <div className="col-md-4">
                            <Card sx={{ my: 2 }} >
                            <CardContent className="text-center">
                                <div className="row py-3 border-bottom">
                                    <div className="col-md-3">
                                        <Typography variant="body2">{value.nomor}</Typography>
                                    </div>
                                    <div className="col">
                                        <Typography variant="body2">{value.nama}</Typography>
                                    </div>
                                </div>
                                <Button >
                                    <Link style={{ textDecoration: 'none' }} to={`detail/${value.nomor}`}>Detail</Link>
                                </Button>
                            </CardContent>
                        </Card> 
                        </div>
                        })
                    }
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default QuranFetchA
