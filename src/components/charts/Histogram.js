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


const getData = async values => {


    Axios.get(`${config.URL_API}/api/v1/getBills/${
        this.props.authentication.storeId}`, { headers: { 'Authorization': 'Bearer ' + this.props.authentication.token } }).then(async (response) => {
            // this.setState({
            //     rows: response.data
            // });
        });

    Axios.get(`${config.URL_API}/api/v1/storeProducts/${
        this.props.authentication.storeId}`, { headers: { 'Authorization': 'Bearer ' + this.props.authentication.token } }).then(async (response) => {
            // this.setState({
            //     rows: response.data
            // });
        });
}

/**
 * 
 * @param {*} props  
 */
const Histogram = props => {

    return (
        <Chart
            width={maxWidth}
            height={600}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Producto', 'En inventario', 'Vendidos la semana pasada'],
                ['1', 100, 8],
                ['2', 379, 369],
                ['3', 10, 2],
                ['4', 209, 400],
                ['5', 152, 151],
                ['6', 209, 195],

            ]}
            options={{
                title: 'Productos en Inventario y vendidos',
                chartArea: { width: '30%' },
                hAxis: {
                    title: 'Cantidad de productos',
                    minValue: 0,
                },
                vAxis: {
                    title: 'Nombre Producto',
                },
            }}
            legendToggle
        />
    );
}

export default Histogram;