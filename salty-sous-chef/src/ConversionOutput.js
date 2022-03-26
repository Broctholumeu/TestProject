import React from 'react';
import './App.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'


export default function ConversionOutput() {
    return(
        <div className='ConversionOutput'>
        <List>
            <ListItem>
                <ListItemText primary="Current Conversion Rate" />
            </ListItem>
        </List>
        </div>
    );
}