import React, { Component, useEffect, useState , Fragment, useCallback} from 'react';
import axios from 'axios';
import { store } from './store';
import { useParams } from 'react-router-dom';
import { Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RepeatIcon from '@mui/icons-material/Repeat';

const DetailSurah = () => {
    const [data, setData] = useState({});
    const [name, setName] = useState('');
    const [ayahs, setAyahs] = useState([]);
    const [user, setUser] = useState('');
    const [fs, setFs] = useState(30);
    const [lang, setLang] = useState('id');



    const { nomor } = useParams();
    useEffect(() => {
        async function fetch() {
            const response = await axios.get(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${nomor}.json`)
            const res = response.data
            const ayat = res.verses
            const newData = {...res}
            setData(newData)
            setName(res.name)
            setAyahs(ayat)
        }
        fetch()
        document.body.style.background = 'darkolivegreen';
    }, [nomor])

    const btnColor = {color: 'black'}
    const textSize = {fontSize: fs, textAlign: 'right'}

    const btnClick = useCallback((e) => {
        switch(e.currentTarget.id) {
            case 'plus': setFs(fs + 1); break;
            case 'minus': if(fs>18) setFs(fs - 1); break;
            case 'lang': setLang(lang === 'id' ? 'en' : 'id'); break;
            default: break;
        }
    }, [fs, lang])

    const handleClick = () => {
        store.dispatch({
            type: 'ADD'
        })
        console.log(store.getState().user);
        const p = document.getElementById('p')
        p.innerHTML = store.getState().user 
    }

        return (
            <div>
                <Container >
                    <Grid container spacing={2}>
                        <Grid item sx={{ width: '100%' }} >
                        <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography variant='h5'>{name}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Tempat turun : {data.place}
                                </Typography>
                                <Typography>
                                    Jumlah ayat : {data.number_of_ayah}
                                </Typography>
                                <Typography>
                                    Nomor surat : {data.number_of_surah}
                                </Typography>
                                </AccordionDetails>

                            </Accordion>
                            
                        {
                            ayahs.map((value) => {
                            return <Fragment>
                            <Card  sx={{marginBottom: '20px'}}>
                            <CardContent>
                                <div className='row'>
                                    <div className='col d-flex align-items-center pt-3 '>
                                        <Typography variant='subtitle1'>{value.number}</Typography>
                                    </div>
                                    <div className='col-md-11'>
                                    <Typography variant="h4" sx={textSize}>{value.text}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {lang === 'id' ? value.translation_id : value.translation_en}
                                    </Typography>
                                    </div>
                                </div>

                            </CardContent>
                        </Card> 
                        </Fragment> 
                            })
                        }
                        <Accordion >
                            <AccordionSummary expandIcon={<DisplaySettingsIcon/>}>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Button sx={btnColor} id="plus" onClick={btnClick}>
                                    <AddIcon />
                                </Button>
                                <Button sx={btnColor} id="minus" onClick={btnClick}>
                                    <RemoveIcon/>
                                </Button>
                                <Button sx={btnColor} id="lang" onClick={btnClick}>
                                    <RepeatIcon/>
                                </Button>
                            </AccordionDetails>
                        </Accordion>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }

export default DetailSurah