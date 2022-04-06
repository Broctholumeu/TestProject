import React from 'react';
import './App.css';
import { useGetRatesByCountryQuery } from './API';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText'


export default function ConversionOutput() {
    const { data, error, isLoading } = useGetRatesByCountryQuery(``);

    return(
        <div className='ConversionOutput'>
        {/* <List>
            <ListItem>
                <ListItemText primary="Current Conversion Rate" />
            </ListItem>
        </List> */}

        {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.rates}</h3>
        </>
      ) : null}
        </div>
    );
}