import React from 'react';
import './index.css'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function DropDown() {
    return (
            <div className='DropDown'>
                <Select defaultValue={'AUSD'}>
                    <MenuItem value ={'AUSD'}>AUSD</MenuItem>
                    <MenuItem value ={'GBP'}>GBP</MenuItem>
                    <MenuItem value ={'JPY'}>JPY</MenuItem>
                </Select>
            </div>
    );
}