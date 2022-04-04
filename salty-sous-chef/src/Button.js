import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';


export default function ButtonAction() {
    const dispatch = useDispatch();
    const updateRate = (e) => dispatch({
        type: 'Rates'
    });

    return(
        <div className='ButtonAction'>
            <Button variant='contained' onClick={updateRate}>Convert</Button>
        </div>
    );
}