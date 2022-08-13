import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetchClubs } from '../../../hooks/fetch-clubs'
import { Button } from '../../Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import './HostMainPage.css';
import { getCategories } from '../../../services/quiz-services';


function QuestionTypePage() {


    const [club, setClub] = useState(null);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [heading, setHeading] = useState('');
    const [desc, setDesc] = useState('');

    

    
    const [loading, setLoading] = useState('');
    const [cat_s, setCats] = useState(null);


    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            await getCategories().then(data => {
                setCats(data);
                setLoading(false);
            })
        }
        getData();
    }, [])



    const getInitialStateSt = () => {
        const value_st = "MCQ";
        return value_st;
    };
    const [value_st, setValuest] = useState(getInitialStateSt);



    const handleChangeBtnst = (e) => {
        setValuest(e.target.value_st);
    };

    const handlerSubmit = () => {

    }

    return (
        <>
            <div>
                <div>-</div>
                <h1>Host Event</h1>


            </div>

            <div className="login">
                <form onSubmit={handlerSubmit}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>

                        <p>Heading</p>
                        <TextField className='txt' id="input-with-sx" label="" variant="filled"
                            onChange={e => setHeading(e.target.value)}
                        />
                    </Box>


                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <p>Short Description</p>
                        <TextField className='txt' id="input-with-sx" label="" variant="filled"
                            onChange={e => setDesc(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                     <p>Event tag</p>   
                    <div>
                        <select value={value_st} onChange={handleChangeBtnst}>
                            {cat_s && cat_s.map(c_s => {
                                return <option value={`${c_s.name}`}>{c_s.name}</option>
                            })
                            }
                        </select>

                    </div>
                    </Box>
                    

                    <div className="logging">
                        <Button path_name='next-page' type='submit' onClick={handlerSubmit}>
                            Add New
                        </Button>
                        

                    </div>

                    
                </form>
            </div>
        </>
    );
}

export default QuestionTypePage;
