import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';


export default function ButtonAction() {
    const dispatch = useDispatch();
    const updateRate = useSelector((state) => state.rates);

    return(
        <div className='ButtonAction'>
            <Button variant='contained' onClick={() => dispatch(updateRate('AUD'))}>Convert</Button>
        </div>
    );
}