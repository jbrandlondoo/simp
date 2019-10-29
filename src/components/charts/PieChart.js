import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import Axios from 'axios';
import Chart from 'react-google-charts';
import { maxWidth } from '@material-ui/system';
import * as config from './../../config'

const styles = {
    main: {
        background: '#FFFFFF',
        height: '100%',
        width: 500,
        margin: 20,
    },
}

const useStyles = makeStyles(theme => ({

}));

/**
 * 
 * @param {*} props  
 */
const PieChart = props => {
    
    return (
        <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Producto', 'cantidad diaria vendida'],
    ['1', 11],
    ['2', 2],
    ['3', 2],
    ['4', 2],
    ['5', 7],
  ]}
  options={{
    title: 'Venta diaria de productos',
    
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>
    );
}

export default PieChart;