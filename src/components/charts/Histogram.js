import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import Axios from 'axios';
import Chart from 'react-google-charts';

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
const Histogram = props => {
    const classes = useStyles();
    const [sell, setSell] = useState(false)

    const sellProducts = () => {
        Axios.post(config.URL_API + '/api/v1/sellProducts', { store_id: props.authentication.storeId, products: props.products }, { headers: { 'Authorization': 'Bearer ' + props.authentication.token } }).then((response) => {
            alert("Venta Exitosa!");
        });
    }
    return (
        <Chart
            width={300}
            height={300}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['City', '2010 Population', '2000 Population'],
                ['New York City, NY', 8175000, 8008000],
                ['Los Angeles, CA', 3792000, 3694000],
                ['Chicago, IL', 2695000, 2896000],
                ['Houston, TX', 2099000, 1953000],
                ['Philadelphia, PA', 1526000, 1517000],
            ]}
            options={{
                title: 'Population of Largest U.S. Cities',
                chartArea: { width: '30%' },
                hAxis: {
                    title: 'Total Population',
                    minValue: 0,
                },
                vAxis: {
                    title: 'City',
                },
            }}
            legendToggle
        />
    );
}

export default Histogram;