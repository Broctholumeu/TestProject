import React from 'react';
import './App.css';
import { useGetRatesByCountryQuery } from './redux/API';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  }
}

const ConversionOutput = ({ currency }) => {
    const { data, error, isLoading } = useGetRatesByCountryQuery(``);

    return(
        <div className='ConversionOutput'>
        {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
         <h3>IT'S LOADED</h3> 
        </>
      ) : null}
        </div>
    );
}

export default connect(mapStateToProps)(ConversionOutput);