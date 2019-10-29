import React, { useState, useEffect } from 'react'
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

    histogram: {
        marginTop: 20,
    },
}

const useStyles = makeStyles(theme => ({

}));


const getData = async values => {




}

/**
 * 
 * @param {*} props  
 */
const Histogram = props => {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.post(`${config.URL_API}/api/v1/storeSales`,
            { store_id: props.authentication.storeId },
            { headers: { 'Authorization': 'Bearer ' + props.authentication.token } }).then(async (response) => {
                let header = ['Producto', 'En inventario', 'Vendidos la semana pasada'];
                let productsData = [header, ...response.data.map(({ name, selled_quantity, quantity }) => (
                    [name,  quantity, selled_quantity]
                ))];


                setProducts(productsData);


            });
    }, products);


    // console.log("asdasdasd", props.authentication.storeId);

    // authentication

    return (
        <div style={styles.histogram}>
            <Chart
                width={maxWidth}
                height={600}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data = {products}
                options={{
                    title: 'Productos en Inventario y vendidos',
                    chartArea: { width: '30%' },
                    hAxis: {
                        title: 'Nombre Producto',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'Cantidad de productos',
                    },
                }}
                legendToggle
            />

        </div>
    );
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Histogram);